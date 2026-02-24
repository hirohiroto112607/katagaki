import type { Member } from '../../types';

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  if (member.vacant) {
    return (
      <div className="flex flex-col gap-1 rounded-xl border border-dashed border-gray-200 bg-gray-50 px-5 py-4">
        <span className="text-sm font-medium text-gray-400">{member.title}</span>
        <span className="text-base text-gray-400 italic">{member.name}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <span className="text-sm font-medium text-violet-600">{member.title}</span>
      <span className="text-base font-semibold text-gray-900">{member.name}</span>
    </div>
  );
}
