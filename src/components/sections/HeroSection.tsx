import Button from '../ui/Button';

const JOIN_URL = 'https://x.com/ojousannn/status/2025994059123392982';

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
    >
      {/* 背景装飾 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100 opacity-60 blur-3xl" />
        <div className="absolute right-1/4 top-2/3 h-64 w-64 rounded-full bg-indigo-100 opacity-50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        {/* バッジ */}
        <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
          ⛩️ Discord コミュニティ
        </span>

        {/* タイトル */}
        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            肩書き研究会
          </span>
        </h1>

        {/* キャッチコピー */}
        <p className="mb-4 text-2xl font-semibold text-gray-800 sm:text-3xl">
          あなたにも、肩書きを。
        </p>

        {/* サブテキスト */}
        <p className="mb-10 text-lg leading-relaxed text-gray-600">
          参加するだけで、あなたは「八百万の神の一柱」になれます。
          <br className="hidden sm:block" />
          誰でも気軽に参加できる Discord コミュニティです。
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href={JOIN_URL} size="lg">
            Discord で参加する →
          </Button>
          <a
            href="#about"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-violet-600"
          >
            詳しく見る ↓
          </a>
        </div>
      </div>
    </section>
  );
}
