import Link from "next/link";

type ResumeEmbedProps = {
  pdfPath: string;
};

export function ResumeEmbed({ pdfPath }: ResumeEmbedProps) {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-serif text-4xl tracking-tight text-white">Resume</h1>
        <Link
          href={pdfPath}
          download
          className="rounded-full bg-violet-300 px-4 py-2 text-sm font-medium text-black transition hover:bg-violet-200"
        >
          Download PDF
        </Link>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#120c23]">
        <iframe title="Saarth Vardhan Resume" src={pdfPath} className="h-[920px] w-full" />
      </div>
    </section>
  );
}
