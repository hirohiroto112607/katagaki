import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import MemberCard from '../ui/MemberCard';
import { members } from '../../data/members';
import { DEPARTMENTS } from '../../types';
import type { Department } from '../../types';

export default function MembersSection() {
  const [active, setActive] = useState<Department>('三役');

  const filtered = members.filter((m) => m.department === active);

  return (
    <section id="members" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="メンバー・役職"
          subtitle="肩書き研究会を支える役職者たちです。部門を選んで確認してください。"
        />

        {/* タブ */}
        <div className="mt-10 flex flex-wrap gap-2">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept}
              onClick={() => setActive(dept)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                active === dept
                  ? 'border-violet-300 bg-violet-100 text-violet-700'
                  : 'border-gray-200 bg-white text-gray-500 hover:border-violet-200 hover:text-violet-600'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* メンバーグリッド */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((member, i) => (
            <MemberCard key={`${member.department}-${i}`} member={member} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-gray-400">このカテゴリにはメンバーがいません。</p>
        )}
      </div>
    </section>
  );
}
