export type Department =
  | '三役'
  | '企画部'
  | '渉外'
  | '書記'
  | '会計'
  | '広報'
  | '外務'
  | '財務'
  | 'マネジメント委員会'
  | '総務';

export const DEPARTMENTS: Department[] = [
  '三役',
  '企画部',
  '渉外',
  '書記',
  '会計',
  '広報',
  '外務',
  '財務',
  'マネジメント委員会',
  '総務',
];

export interface Member {
  name: string;
  title: string;
  department: Department;
  vacant?: boolean;
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}
