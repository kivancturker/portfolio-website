import { notFound } from "next/navigation";
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
// TODO: If mdx content is not found, show a 404 page
async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) {
  const { slug } = await params;
  const { title } = await searchParams;
  if (!slug || !title) {
    notFound();
  }
  return <div>Page</div>;
}

export default Page;
