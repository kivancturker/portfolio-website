import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeBlock({
  children,
  lang,
}: {
  children: string;
  lang: string;
}) {
  return (
    <SyntaxHighlighter
      language={lang}
      style={oneDark}
      PreTag="div"
      className="rounded-md !bg-gray-900 dark:!bg-gray-800"
    >
      {children.trim()}
    </SyntaxHighlighter>
  );
}
