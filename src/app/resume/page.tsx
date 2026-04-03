import { ResumeEmbed } from "@/components/resume-embed";
import { siteConfig } from "@/lib/site";

export default function ResumePage() {
  return <ResumeEmbed pdfPath={siteConfig.resumePath} />;
}
