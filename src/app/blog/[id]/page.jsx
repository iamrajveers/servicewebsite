import blogPosts from "@/app/data/blogPosts";
import BlogDetail from "@/app/PagesCompoents/BlogDetail";


export default function BlogPage({ params }) {
  const post = blogPosts.find((p) => String(p.id) === params.id);

  if (!post) return <div>404 Blog Not Found</div>;

  return <BlogDetail post={post} />;
}
