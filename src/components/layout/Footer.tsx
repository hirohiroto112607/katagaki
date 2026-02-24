export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} 肩書き研究会 — Discord上で活動するコミュニティ
        </p>
      </div>
    </footer>
  );
}
