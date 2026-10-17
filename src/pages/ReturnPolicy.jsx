import { Link } from "react-router-dom";

export default function ReturnPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-12">
      {/* breadcrumb */}
      <div className="text-xs text-amber-700 mb-2">
        <Link to="/" className="no-underline text-amber-700 hover:underline">Home</Link>
        {" / "}<span>Return & Exchange</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl text-[#722F37] mb-2">
        RETURN & EXCHANGE
      </h1>
      <p className="text-amber-900/60 mb-8">
        We want you to love your Cartiva pieces. If something isn't right, we're here to help.
      </p>

      {/* policy cards */}
      <div className="space-y-5">
        <div className="bg-amber-50/60 rounded-2xl p-6">
          <h3 className="font-semibold text-[#722F37] mb-2">🛍 30-Day Easy Returns</h3>
          <p className="text-sm text-amber-900/80 leading-relaxed">
            You can return any unworn item in its original packaging within 30 days of
            delivery for a full refund to your original payment method.
          </p>
        </div>

        <div className="bg-amber-50/60 rounded-2xl p-6">
          <h3 className="font-semibold text-[#722F37] mb-2">🔄 Free Exchanges</h3>
          <p className="text-sm text-amber-900/80 leading-relaxed">
            Need a different size (especially for rings)? Exchange it once for free —
            we'll arrange pickup of your item and deliver the new size at no extra cost.
          </p>
        </div>

        <div className="bg-amber-50/60 rounded-2xl p-6">
          <h3 className="font-semibold text-[#722F37] mb-2">✨ Non-Returnable Items</h3>
          <p className="text-sm text-amber-900/80 leading-relaxed">
            For hygiene reasons, pierced jewellery (earrings) and personalised/engraved
            pieces cannot be returned unless they arrive damaged or defective.
          </p>
        </div>

        <div className="bg-amber-50/60 rounded-2xl p-6">
          <h3 className="font-semibold text-[#722F37] mb-2">🚚 How It Works</h3>
          <ol className="text-sm text-amber-900/80 leading-relaxed list-decimal list-inside space-y-1">
            <li>Email us at <span className="text-[#a71e2e] font-medium">support@cartiva.in</span> with your order number.</li>
            <li>We'll arrange a free pickup within 2–3 working days.</li>
            <li>Once the item passes our quality check, your refund is processed within 5–7 business days.</li>
          </ol>
        </div>

        <div className="bg-amber-50/60 rounded-2xl p-6">
          <h3 className="font-semibold text-[#722F37] mb-2">🎁 Damaged or Wrong Item?</h3>
          <p className="text-sm text-amber-900/80 leading-relaxed">
            Contact us within 48 hours of delivery with photos — we'll replace it
            immediately, free of charge.
          </p>
        </div>
      </div>

      {/* back to shopping */}
      <div className="text-center mt-10">
        <Link
          to="/"
          className="inline-block bg-[#722F37] text-white px-8 py-3 rounded-full
                     font-semibold no-underline hover:bg-[#a71e2e] transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}