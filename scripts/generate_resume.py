#!/usr/bin/env python3
"""Generate the public one-page resume from content/resume.public.json."""

from __future__ import annotations

import json
from pathlib import Path
from xml.sax.saxutils import escape

from PIL import Image
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "content" / "resume.public.json"
SOURCE_PORTRAIT_PATH = ROOT / "public" / "Portrait.jpg"
PUBLIC_PORTRAIT_PATH = ROOT / "public" / "resume-portrait.jpg"
OUTPUT_PATH = ROOT / "public" / "Jesadakorn-Kirtnu-Resume.pdf"

NAVY = HexColor("#273B51")
NAVY_DEEP = HexColor("#17283A")
INK = HexColor("#18212B")
MUTED = HexColor("#596572")
PAPER = HexColor("#FFFFFF")
SIDEBAR = HexColor("#EFF3F6")
ACCENT = HexColor("#B86F43")
LINE = HexColor("#D5DCE2")


def load_data() -> dict:
    with DATA_PATH.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def prepare_public_portrait() -> None:
    """Re-encode the portrait without EXIF or other source metadata."""
    with Image.open(SOURCE_PORTRAIT_PATH) as source:
        source.convert("RGB").save(
            PUBLIC_PORTRAIT_PATH,
            "JPEG",
            quality=91,
            optimize=True,
        )


def paragraph_style(
    name: str,
    *,
    font_name: str = "Helvetica",
    font_size: float = 8,
    leading: float = 10,
    color=INK,
    space_after: float = 0,
) -> ParagraphStyle:
    return ParagraphStyle(
        name,
        fontName=font_name,
        fontSize=font_size,
        leading=leading,
        textColor=color,
        alignment=TA_LEFT,
        spaceAfter=space_after,
        allowWidows=0,
        allowOrphans=0,
    )


def draw_paragraph(
    pdf: canvas.Canvas,
    text: str,
    *,
    x: float,
    top: float,
    width: float,
    style: ParagraphStyle,
) -> float:
    paragraph = Paragraph(escape(text), style)
    _, height = paragraph.wrap(width, A4[1])
    paragraph.drawOn(pdf, x, top - height)
    return top - height


def draw_section_bar(
    pdf: canvas.Canvas,
    title: str,
    *,
    x: float,
    top: float,
    width: float,
) -> float:
    height = 22
    pdf.setFillColor(NAVY)
    pdf.roundRect(x, top - height, width, height, 2.5, stroke=0, fill=1)
    pdf.setFillColor(PAPER)
    pdf.setFont("Helvetica-Bold", 8.5)
    pdf.drawString(x + 8, top - 14.5, title.upper())
    return top - height - 12


def draw_bullet(
    pdf: canvas.Canvas,
    text: str,
    *,
    x: float,
    top: float,
    width: float,
    style: ParagraphStyle,
    color=ACCENT,
) -> float:
    pdf.setFillColor(color)
    pdf.circle(x + 2.1, top - 4.8, 1.5, stroke=0, fill=1)
    bottom = draw_paragraph(pdf, text, x=x + 9, top=top, width=width - 9, style=style)
    return bottom - 4.2


def draw_portrait(pdf: canvas.Canvas, center_x: float, center_y: float, radius: float) -> None:
    image = ImageReader(str(PUBLIC_PORTRAIT_PATH))
    image_width, image_height = image.getSize()
    diameter = radius * 2
    scale = max(diameter / image_width, diameter / image_height)
    draw_width = image_width * scale
    draw_height = image_height * scale

    pdf.saveState()
    path = pdf.beginPath()
    path.circle(center_x, center_y, radius)
    pdf.clipPath(path, stroke=0, fill=0)
    pdf.drawImage(
        image,
        center_x - draw_width / 2,
        center_y - draw_height / 2,
        width=draw_width,
        height=draw_height,
        mask="auto",
    )
    pdf.restoreState()

    pdf.setStrokeColor(PAPER)
    pdf.setLineWidth(4)
    pdf.circle(center_x, center_y, radius + 1, stroke=1, fill=0)
    pdf.setStrokeColor(NAVY)
    pdf.setLineWidth(1.5)
    pdf.circle(center_x, center_y, radius + 4, stroke=1, fill=0)


def draw_link(
    pdf: canvas.Canvas,
    label: str,
    display: str,
    url: str,
    *,
    x: float,
    top: float,
    width: float,
) -> float:
    label_style = paragraph_style(
        f"link-label-{label}", font_name="Helvetica-Bold", font_size=7.4, leading=9, color=NAVY
    )
    value_style = paragraph_style(
        f"link-value-{label}", font_size=7.2, leading=9.3, color=INK
    )
    label_bottom = draw_paragraph(pdf, label.upper(), x=x, top=top, width=width, style=label_style)
    value_top = label_bottom - 1
    value_bottom = draw_paragraph(pdf, display, x=x, top=value_top, width=width, style=value_style)
    pdf.linkURL(url, (x, value_bottom, x + width, value_top), relative=0, thickness=0)
    return value_bottom - 7


def draw_resume(data: dict) -> None:
    page_width, page_height = A4
    pdf = canvas.Canvas(str(OUTPUT_PATH), pagesize=A4, pageCompression=1)
    pdf.setTitle(f"{data['identity']['name']} - Public Resume")
    pdf.setAuthor(data["identity"]["name"])
    pdf.setSubject("Hybrid IT Manager and AI Systems Architect professional resume")
    pdf.setCreator("Jesadakorn portfolio resume generator")

    sidebar_width = 184
    main_x = 208
    main_width = page_width - main_x - 30
    side_x = 24
    side_width = sidebar_width - 48

    pdf.setFillColor(PAPER)
    pdf.rect(0, 0, page_width, page_height, stroke=0, fill=1)
    pdf.setFillColor(SIDEBAR)
    pdf.rect(0, 0, sidebar_width, page_height, stroke=0, fill=1)
    pdf.setFillColor(NAVY)
    pdf.rect(0, page_height - 170, sidebar_width, 170, stroke=0, fill=1)
    pdf.setFillColor(NAVY_DEEP)
    pdf.rect(0, 0, 7, page_height, stroke=0, fill=1)

    draw_portrait(pdf, center_x=92, center_y=page_height - 92, radius=54)

    pdf.setFillColor(NAVY)
    pdf.setFont("Helvetica-Bold", 24)
    pdf.drawString(main_x, page_height - 58, data["identity"]["name"].upper())
    pdf.setFillColor(ACCENT)
    pdf.setFont("Helvetica-Bold", 10.2)
    pdf.drawString(main_x, page_height - 82, data["identity"]["headline"].upper())
    pdf.setStrokeColor(LINE)
    pdf.setLineWidth(1)
    pdf.line(main_x, page_height - 95, page_width - 30, page_height - 95)

    summary_style = paragraph_style(
        "summary", font_size=9.2, leading=13, color=MUTED
    )
    main_top = draw_paragraph(
        pdf,
        data["summary"],
        x=main_x,
        top=page_height - 108,
        width=main_width,
        style=summary_style,
    ) - 10

    side_top = page_height - 183
    side_top = draw_section_bar(pdf, "Public Profile", x=side_x, top=side_top, width=side_width)
    side_label_style = paragraph_style(
        "side-label", font_name="Helvetica-Bold", font_size=7.5, leading=9, color=NAVY
    )
    side_value_style = paragraph_style(
        "side-value", font_size=8.2, leading=11, color=INK
    )
    side_top = draw_paragraph(
        pdf,
        "LOCATION",
        x=side_x,
        top=side_top,
        width=side_width,
        style=side_label_style,
    ) - 1
    side_top = draw_paragraph(
        pdf,
        data["identity"]["location"],
        x=side_x,
        top=side_top,
        width=side_width,
        style=side_value_style,
    ) - 8

    side_top = draw_section_bar(pdf, "Professional Links", x=side_x, top=side_top, width=side_width)
    for link in data["links"]:
        side_top = draw_link(
            pdf,
            link["label"],
            link["display"],
            link["url"],
            x=side_x,
            top=side_top,
            width=side_width,
        )

    side_top = draw_section_bar(pdf, "Languages", x=side_x, top=side_top + 1, width=side_width)
    language_text = " / ".join(data["languages"])
    side_top = draw_paragraph(
        pdf,
        language_text,
        x=side_x,
        top=side_top,
        width=side_width,
        style=side_value_style,
    ) - 9

    side_top = draw_section_bar(pdf, "Core Expertise", x=side_x, top=side_top, width=side_width)
    side_bullet_style = paragraph_style(
        "side-bullet", font_size=8, leading=11.2, color=INK
    )
    for item in data["expertise"]:
        side_top = draw_bullet(
            pdf,
            item,
            x=side_x,
            top=side_top,
            width=side_width,
            style=side_bullet_style,
            color=NAVY,
        )

    side_top = draw_section_bar(
        pdf, "Leadership & Compliance", x=side_x, top=side_top + 1, width=side_width
    )
    for item in data["leadership"]:
        side_top = draw_bullet(
            pdf,
            item,
            x=side_x,
            top=side_top,
            width=side_width,
            style=side_bullet_style,
            color=NAVY,
        )

    side_top = draw_section_bar(pdf, "Education", x=side_x, top=side_top + 1, width=side_width)
    education = data["education"]
    education_title_style = paragraph_style(
        "education-title", font_name="Helvetica-Bold", font_size=8.2, leading=10.8, color=INK
    )
    side_top = draw_paragraph(
        pdf,
        education["degree"],
        x=side_x,
        top=side_top,
        width=side_width,
        style=education_title_style,
    ) - 2
    side_top = draw_paragraph(
        pdf,
        education["institution"],
        x=side_x,
        top=side_top,
        width=side_width,
        style=side_value_style,
    ) - 2
    draw_paragraph(
        pdf,
        education["period"],
        x=side_x,
        top=side_top,
        width=side_width,
        style=side_value_style,
    )

    main_top = draw_section_bar(pdf, "Experience", x=main_x, top=main_top, width=main_width)
    experience_role_style = paragraph_style(
        "experience-role", font_name="Helvetica-Bold", font_size=10, leading=12.4, color=INK
    )
    experience_meta_style = paragraph_style(
        "experience-meta", font_name="Helvetica-Bold", font_size=7.8, leading=9.8, color=ACCENT
    )
    experience_bullet_style = paragraph_style(
        "experience-bullet", font_size=8.25, leading=12.3, color=MUTED
    )

    for index, experience in enumerate(data["experience"]):
        if index:
            pdf.setStrokeColor(LINE)
            pdf.setLineWidth(0.55)
            pdf.line(main_x, main_top + 4.5, main_x + main_width, main_top + 4.5)
        main_top = draw_paragraph(
            pdf,
            experience["role"],
            x=main_x,
            top=main_top,
            width=main_width,
            style=experience_role_style,
        ) - 1
        meta = f"{experience['organization']} | {experience['period']}"
        main_top = draw_paragraph(
            pdf,
            meta,
            x=main_x,
            top=main_top,
            width=main_width,
            style=experience_meta_style,
        ) - 3
        for bullet in experience["bullets"]:
            main_top = draw_bullet(
                pdf,
                bullet,
                x=main_x,
                top=main_top,
                width=main_width,
                style=experience_bullet_style,
            )
        main_top -= 8

    main_top = draw_section_bar(
        pdf, "Selected Systems", x=main_x, top=main_top + 2, width=main_width
    )
    system_style = paragraph_style(
        "selected-system", font_size=8.2, leading=12, color=INK
    )
    for system in data["selectedSystems"]:
        main_top = draw_bullet(
            pdf,
            system,
            x=main_x,
            top=main_top,
            width=main_width,
            style=system_style,
            color=NAVY,
        )

    main_top = draw_section_bar(pdf, "Technology", x=main_x, top=main_top + 2, width=main_width)
    technology_style = paragraph_style(
        "technology", font_size=7.9, leading=11.6, color=MUTED
    )
    draw_paragraph(
        pdf,
        " | ".join(data["technologies"]),
        x=main_x,
        top=main_top,
        width=main_width,
        style=technology_style,
    )

    pdf.setFillColor(NAVY)
    pdf.rect(main_x, 18, main_width, 2.4, stroke=0, fill=1)
    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica", 5.8)
    footer = "Public professional resume | Personal contact details intentionally omitted"
    footer_width = stringWidth(footer, "Helvetica", 5.8)
    pdf.drawString(main_x + main_width - footer_width, 8, footer)

    pdf.showPage()
    pdf.save()


def main() -> None:
    data = load_data()
    prepare_public_portrait()
    draw_resume(data)
    print(f"Generated {OUTPUT_PATH.relative_to(ROOT)}")
    print(f"Generated {PUBLIC_PORTRAIT_PATH.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
