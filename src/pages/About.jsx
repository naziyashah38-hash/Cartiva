import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-12">
      {/* breadcrumb */}
      <div className="text-xs text-amber-700 mb-2">
        <Link to="/" className="no-underline text-amber-700 hover:underline">Home</Link>
        {" / "}<span>About us</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl text-[#722F37] mb-2">
        ABOUT CARTIVA
      </h1>
      <p className="text-amber-900/60 mb-10">
        Modern radiance. Hand-finished jewellery for every moment.
      </p>

      {/* our story */}
      <div className="bg-amber-50/60 rounded-2xl p-6 md:p-8 mb-6">
        <h3 className="font-semibold text-lg text-[#722F37] mb-3">Our Story 💎</h3>
        <p className="text-sm text-amber-900/80 leading-relaxed mb-3">
          Cartiva was born from a simple belief — that beautiful, well-made jewellery
          shouldn't be reserved for special occasions alone. What started as a small
          collection of hand-picked pieces has grown into a curated home for modern
          fine jewellery.
        </p>
        <p className="text-sm text-amber-900/80 leading-relaxed">
          Every piece in our collections — from everyday studs to bridal sets — is
          chosen for its craftsmanship, comfort, and timeless appeal. We design for
          the woman who wants her jewellery to live with her, not sit in a locker.
        </p>
      </div>

      {/* what we stand for */}
      <div className="grid md:grid-cols-3 gap-5 mb-6">
        <div className="bg-amber-50/60 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-3">✨</div>
          <h4 className="font-semibold text-[#722F37] mb-2">Quality First</h4>
          <p className="text-sm text-amber-900/70 leading-relaxed">
            18k gold plating over sterling silver, nickel-free and hypoallergenic.
            Every piece passes a quality check before it ships.
          </p>
        </div>

        <div className="bg-amber-50/60 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-3">🤝</div>
          <h4 className="font-semibold text-[#722F37] mb-2">Honest Pricing</h4>
          <p className="text-sm text-amber-900/70 leading-relaxed">
            No inflated markups. We work directly with artisans, so you get
            premium jewellery at a fair price.
          </p>
        </div>

        <div className="bg-amber-50/60 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-3">💌</div>
          <h4 className="font-semibold text-[#722F37] mb-2">Made for Gifting</h4>
          <p className="text-sm text-amber-900/70 leading-relaxed">
            Every order arrives in a signature Cartiva box — beautiful enough
            to gift exactly as it is.
          </p>
        </div>
      </div>

      {/* by the numbers */}
      <div className="bg-[#722F37] rounded-2xl p-8 grid grid-cols-3 gap-4 text-center text-white mb-8">
        <div>
          <div className="text-3xl font-bold">10k+</div>
          <div className="text-xs text-white/70 mt-1">Happy customers</div>
        </div>
        <div>
          <div className="text-3xl font-bold">100%</div>
          <div className="text-xs text-white/70 mt-1">Quality checked</div>
        </div>
        <div>
          <div className="text-3xl font-bold">30 days</div>
          <div className="text-xs text-white/70 mt-1">Easy returns</div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-sm text-amber-900/60 mb-4">
          Explore our categories and curated collections — find the piece that tells your story.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#722F37] text-white px-8 py-3 rounded-full
                     font-semibold no-underline hover:bg-[#a71e2e] transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    </main>
  );
}