export function Quote({ children }: React.PropsWithChildren) {
  return (
    <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-2 my-4 italic text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 rounded-r-md">
      {children}
    </blockquote>
  );
}
