import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export const metadata = {
  title: 'xulai 的博客',
  description: '记录开发与技术分享。',
};

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
    };
  });

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">xulai 的博客</h1>
      <ul>
        {posts.map(({ slug, title, date, excerpt }) => (
          <li key={slug} className="mb-6">
            <Link href={`/blog/${slug}`}>
              <a className="text-xl font-semibold text-blue-600 hover:underline">{title}</a>
            </Link>
            <p className="text-sm text-gray-500">{date}</p>
            <p>{excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
