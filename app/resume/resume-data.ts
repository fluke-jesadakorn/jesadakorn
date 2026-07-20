import rawResumeData from "@/content/resume.public.json";

export interface PublicResumeLink {
  label: string;
  display: string;
  url: string;
}

export interface PublicResumeExperience {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export interface PublicResumeData {
  identity: {
    name: string;
    headline: string;
    location: string;
    portrait: string;
  };
  summary: string;
  links: PublicResumeLink[];
  languages: string[];
  expertise: string[];
  leadership: string[];
  technologies: string[];
  experience: PublicResumeExperience[];
  selectedSystems: string[];
  education: {
    degree: string;
    institution: string;
    period: string;
  };
}

export const publicResume: PublicResumeData = rawResumeData;
