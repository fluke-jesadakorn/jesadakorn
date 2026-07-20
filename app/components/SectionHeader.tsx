import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
  titleId?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
  titleId,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      <p
        className={cn(
          "font-mono-ui text-xs uppercase tracking-[0.3em]",
          tone === "inverse"
            ? "text-[color:var(--feature-muted)]"
            : "text-[color:var(--accent-strong)]",
        )}
      >
        {eyebrow}
      </p>
      <div className="space-y-3">
        <h2
          id={titleId}
          className={cn(
            "font-display text-3xl leading-tight md:text-5xl",
            tone === "inverse"
              ? "text-[color:var(--feature-foreground)]"
              : "text-[color:var(--foreground)]",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-2xl text-base leading-8 md:text-lg",
              tone === "inverse"
                ? "text-[color:var(--feature-muted)]"
                : "text-[color:var(--muted)]",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
