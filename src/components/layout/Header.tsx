export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="text-lg font-bold text-gray-900 transition-colors hover:text-violet-600"
        >
          肩書き研究会
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#about" className="transition-colors hover:text-violet-600">
            活動紹介
          </a>
          <a href="#members" className="transition-colors hover:text-violet-600">
            メンバー
          </a>
          <a href="#contribute" className="transition-colors hover:text-violet-600">
            コントリビュート
          </a>
          <a
            href="https://x.com/ojousannn/status/2025994059123392982"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-indigo-600 px-4 py-1.5 text-white transition-colors hover:bg-indigo-700"
          >
            参加する
          </a>
        </nav>
      </div>
    </header>
  );
}
