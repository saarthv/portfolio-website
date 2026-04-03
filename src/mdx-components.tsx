import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => <h1 className="mt-8 font-serif text-4xl tracking-tight text-white" {...props} />,
  h2: (props) => <h2 className="mt-8 font-serif text-3xl tracking-tight text-white" {...props} />,
  h3: (props) => <h3 className="mt-6 font-serif text-2xl tracking-tight text-white" {...props} />,
  p: (props) => <p className="mt-4 leading-8 text-zinc-300" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-300" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-zinc-300" {...props} />,
  li: (props) => <li className="leading-7" {...props} />,
  a: (props) => (
    <a
      className="font-medium text-violet-100 underline decoration-violet-400/60 underline-offset-4 hover:decoration-violet-200"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-4 border-violet-400/60 pl-4 italic text-zinc-300"
      {...props}
    />
  ),
  code: (props) => (
    <code className="rounded bg-violet-500/15 px-1.5 py-0.5 text-sm text-violet-100" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
