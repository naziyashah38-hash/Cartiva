import { Link } from "react-router-dom";

// PAGES is defined in src/data/infoPages.js (File 2)
import { PAGES } from "../data/infoPages";

export default function InfoPage({ pageId }) {
  const page = PAGES[pageId];

  if (!page) {
    return (
      <main className="max-w-3xl mx-auto px-5 py-12 text-center">
        <h1 className="font-serif text-3xl text-[#722F37] mb-4">Coming Soon</h1>
        <Link to="/" className="text-[#a71e2e] underline no-underline">Back to home</Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-5 py-12">
      {/* breadcrumb */}
      <div className="text-xs text-amber-700 mb-2">
        <Link to="/" className="no-underline text-amber-700 hover:underline">Home</Link>
        {" / "}<span>{page.title}</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl text-[#722F37] mb-2">
        {page.title.toUpperCase()}
      </h1>
      <p className="text-amber-900/60 mb-8">{page.subtitle}</p>

      {/* content blocks from the data file */}
      <div className="space-y-5">
        {page.sections.map((s, i) => (
          <div key={i} className="bg-amber-50/60 rounded-2xl p-6">
            <h3 className="font-semibold text-lg text-[#722F37] mb-2">{s.heading}</h3>
            {s.body.map((para, j) => (
              <p key={j} className="text-sm text-amber-900/80 leading-relaxed mb-2">
                {para}
              </p>
            ))}
            {s.list && (
              <ul className="text-sm text-amber-900/80 leading-relaxed list-disc list-inside space-y-1">
                {s.list.map((li, k) => <li key={k}>{li}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/"
          className="inline-block bg-[#722F37] text-white px-8 py-3 rounded-full
                     font-semibold no-underline hover:bg-[#a71e2e] transition-colors">
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}