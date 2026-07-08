import axios from "axios";
export default async function Blogs({ params }: any) {
  const postId = (await params).blogId;

  return <div>Blog Page {JSON.stringify(postId)};</div>;
}
