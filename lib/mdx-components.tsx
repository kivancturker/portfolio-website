import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { Callout } from "@/components/mdx/Callout";
import { Quote } from "@/components/mdx/Quote";
import { ShareButton } from "@/components/mdx/ShareButton";
import { DateText } from "@/components/mdx/DateText";

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components for MDX
    CodeBlock,
    Callout,
    Quote,
    ShareButton,
    DateText,

    // Override default HTML elements
    code: ({
      children,
      className,
      ...props
    }: {
      children?: React.ReactNode;
      className?: string;
    } & React.HTMLAttributes<HTMLElement>) => {
      // Code blocks with language specification (```lang)
      if (className && className.startsWith("language-")) {
        const lang = className.replace("language-", "");
        const codeContent =
          typeof children === "string" ? children : String(children);
        return <CodeBlock lang={lang}>{codeContent}</CodeBlock>;
      }
      // Inline code (`code`)
      return (
        <code
          className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm"
          {...props}
        >
          {children}
        </code>
      );
    },

    // Allow other components to be passed through
    ...components,
  };
}
