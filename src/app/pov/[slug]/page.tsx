import { notFound } from "next/navigation";
import { getPOVBySlug, povPosts } from "@/lib/pov";
import { POVPage } from "@/components/sections/POVPage";
import { InvisibleUXPage } from "@/components/sections/InvisibleUXPage";
import { SustainableDesignPage } from "@/components/sections/SustainableDesignPage";

export function generateStaticParams() {
  return povPosts.map((p) => ({ slug: p.slug }));
}

export default async function POVSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPOVBySlug(slug);
  if (!post) notFound();
  if (slug === "invisible-ux") return <InvisibleUXPage />;
  if (slug === "sustainable-design") return <SustainableDesignPage />;
  return <POVPage post={post} />;
}
