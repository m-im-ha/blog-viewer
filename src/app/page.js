import Link from "next/link";

async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = res.json();

  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog posts</h1>
      <ul className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <li key={post.id} className="border border-gray-200 p-2">
            <Link href={`blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

