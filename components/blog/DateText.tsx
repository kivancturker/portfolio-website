export function DateText({ date }: { date: string }) {
  return (
    <time
      dateTime={date}
      className="text-sm text-gray-500 dark:text-gray-400 block mb-4"
    >
      {new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
  );
}
