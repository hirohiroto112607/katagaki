import SectionTitle from '../ui/SectionTitle';
import { features } from '../../data/members';

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="肩書き研究会とは"
          subtitle="Discord上で活動する、ちょっとユニークなコミュニティです。参加するだけで、あなたもメンバーの一員になれます。"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <span className="text-4xl">{feature.icon}</span>
              <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
              <p className="text-base leading-relaxed text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* 補足説明 */}
        <div className="mt-12 rounded-2xl border border-violet-100 bg-violet-50 px-8 py-6 text-center">
          <p className="text-base text-violet-800">
            現在、全員に
            <strong className="mx-1 font-bold">「八百万の神の一柱」</strong>
            というロールが振られています。
            <br className="hidden sm:block" />
            独自の肩書きが必要な方は、サーバー内で申請することも可能です。
          </p>
        </div>
      </div>
    </section>
  );
}
