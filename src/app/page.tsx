import { Metadata } from 'next';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap", // 避免闪屏
});

export const metadata: Metadata = {
  title: 'xulai · 开发者',
  description: 'xulai 的个人网站，记录博客与项目。',
  openGraph: {
    title: 'xulai · 开发者',
    description: 'xulai 的个人网站，记录博客与项目。',
    images: ['/logo.svg'],
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white text-black">
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className={`${greatVibes.className} text-5xl font-bold mb-6`}>Hi, I am xulai &nbsp; 👋</h1>
        <p className={`${greatVibes.className} text-lg leading-relaxed text-gray-700`}>
          Welcome to my personal website, where I document my blogs, projects, and tech sharing
        </p>
      </main>

      <footer className="text-center text-sm text-gray-500 py-2">
        <a
          href="https://beian.miit.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          京ICP备2020046609号
        </a>
      </footer>
    </div>
  );
}
