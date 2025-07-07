import React from "react";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { title } = await searchParams;
  return {
    title: `${title} | Kivanc Turker`,
  };
}

function Page() {
  return <div>Page</div>;
}

export default Page;
