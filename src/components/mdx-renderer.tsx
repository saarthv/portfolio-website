import { compileMDX } from "next-mdx-remote/rsc";

import { useMDXComponents } from "@/mdx-components";

type MDXRendererProps = {
  source: string;
};

export async function MDXRenderer({ source }: MDXRendererProps) {
  const { content } = await compileMDX({
    source,
    components: useMDXComponents(),
    options: {
      parseFrontmatter: false,
    },
  });

  return <div>{content}</div>;
}
