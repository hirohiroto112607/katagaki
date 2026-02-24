import SectionTitle from '../ui/SectionTitle';

const REPO_URL = 'https://github.com/hirohiroto112607/katagaki';
const CONTRIBUTING_URL = 'https://github.com/hirohiroto112607/katagaki/blob/main/CONTRIBUTING.md';
const ISSUES_URL = 'https://github.com/hirohiroto112607/katagaki/issues';

export default function ContributeSection() {
  return (
    <section id="contribute" className="bg-gray-50 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="コントリビュート"
          subtitle="このサイトはオープンソースです。メンバー情報の更新や改善提案など、Pull Request を歓迎します。"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {/* リポジトリ */}
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-md"
          >
            <span className="text-3xl">📦</span>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
              リポジトリを見る
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              GitHubでソースコードを確認・フォークできます。
            </p>
            <span className="mt-auto text-xs font-medium text-violet-600">
              github.com/hirohiroto112607/katagaki →
            </span>
          </a>

          {/* コントリビュートガイド */}
          <a
            href={CONTRIBUTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-md"
          >
            <span className="text-3xl">📋</span>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
              コントリビュートガイド
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Pull Request の送り方やコミットメッセージの規約を確認できます。
            </p>
            <span className="mt-auto text-xs font-medium text-violet-600">
              CONTRIBUTING.md を読む →
            </span>
          </a>

          {/* Issues */}
          <a
            href={ISSUES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-md"
          >
            <span className="text-3xl">💬</span>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
              Issues で提案する
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              バグ報告や機能提案は GitHub Issues からどうぞ。
            </p>
            <span className="mt-auto text-xs font-medium text-violet-600">
              Issues を開く →
            </span>
          </a>
        </div>

        {/* メンバー更新の説明 */}
        <div className="mt-10 rounded-2xl border border-indigo-100 bg-indigo-50 px-8 py-6">
          <p className="text-sm font-semibold text-indigo-800 mb-2">メンバー情報を更新したい方へ</p>
          <p className="text-sm text-indigo-700 leading-relaxed">
            <code className="rounded bg-indigo-100 px-1.5 py-0.5 font-mono text-xs">
              src/data/members.ts
            </code>
            を編集して Pull Request を送るだけです。コードの知識がなくてもGitHubのWeb UIから直接編集できます。
            <br/>
            または、AI生成でもOKです
          </p>
        </div>
      </div>
    </section>
  );
}
