export const CATEGORIES = [
  { id: "necklaces", name: "Necklaces", image: "https://i.pinimg.com/necklace.jpg" },
  { id: "earrings", name: "Earrings", image: "https://i.pinimg.com/earrings.jpg" },
  { id: "rings", name: "Rings", image: "https://i.pinimg.com/ring.jpg" },
  { id: "bracelets", name: "Bracelets", image: "https://i.pinimg.com/bracelet.jpg" },
  { id: "fine-gifts", name: "Fine Gifts", image: "https://i.pinimg.com/gifts.jpg" },
  { id: "wedding", name: "Wedding", image: "https://i.pinimg.com/wedding.jpg" },
  // curated collection 
   { id: "petal-pearl", name: "Petal & Pearl", image: "https://i.pinimg.com/petal-pearl.jpg",
    blurb: "Soft florals and lustrous pearls for a romantic everyday look." },
  { id: "golden-romance", name: "Golden Romance", image: "https://i.pinimg.com/golden-romance.jpg",
    blurb: "Warm gold tones made for date nights and special moments." },
  { id: "celestial-glow", name: "Celestial Glow", image: "https://i.pinimg.com/celestial-glow.jpg",
    blurb: "Stars, moons and sparkle — inspired by the night sky." },
  { id: "minimal-muse", name: "Minimal Muse", image: "https://i.pinimg.com/minimal-muse.jpg",
    blurb: "Clean, delicate lines for effortless everyday elegance." },
];

export const NECKLACE_PRODUCTS = [
  { id: "n1", name: "Aurelia Pendant", price: 129, oldPrice: 175, rating: 4.8, reviewsCount: 26, image: "https://i.pinimg.com/736x/da/a2/e9/daa2e9ddcc7a53a9948a94e321ffeda9.jpg",
    details: "18k gold-plated pendant on a 45cm cable chain. Nickel-free, hypoallergenic.",
    reviews: [
      { author: "Ananya R.", stars: 5, text: "Stunning piece — the gold finish is even better in person.", date: "Oct 12, 2026" },
      { author: "Priya S.", stars: 4, text: "Elegant and lightweight, perfect for daily wear.", date: "Oct 5, 2026" },
    ] },
  { id: "n2", name: "Cascade Chain", price: 189, oldPrice: 249, rating: 4.6, reviewsCount: 19, image: "https://i.pinimg.com/736x/bd/ba/60/bdba60f1d71a417ea242f2c5b6577d6c.jpg",
    details: "Layered waterfall chain in polished gold vermeil. Adjustable 40–50cm.",
    reviews: [
      { author: "Sofia D.", stars: 5, text: "Beautiful layering without tangling. Love it.", date: "Oct 8, 2026" },
    ] },
  { id: "n3", name: "Solstice Layer", price: 249, oldPrice: 320, rating: 4.9, reviewsCount: 33, image: "https://i.pinimg.com/736x/7d/1e/8a/7d1e8ab566ce42a110ca2e148a9f109c.jpg",
    details: "Triple-layer necklace with sage-tone glass beads and gold spacers.",
    reviews: [
      { author: "Elena P.", stars: 5, text: "My new everyday favourite. Doesn't tarnish.", date: "Oct 2, 2026" },
    ] },
  { id: "n4", name: "Mira Choker", price: 159, oldPrice: 210, rating: 4.4, reviewsCount: 12, image: "https://i.pinimg.com/736x/e8/f7/e7/e8f7e7707677dc9a4b93439b776a19d2.jpg",
    details: "Minimal huggie choker with a dainty coral charm. 38cm + 5cm extender.",
    reviews: [
      { author: "Meera K.", stars: 4, text: "Cute and delicate, great for gifting.", date: "Sep 20, 2026" },
    ] },
];

export const EARRING_PRODUCTS = [
  { id: "e1", name: "Blush Studs", price: 99, oldPrice: 139, rating: 4.7, reviewsCount: 22, image: "https://i.pinimg.com/736x/4c/7f/ef/4c7fef65691cf076b6b6f09ecc63abce.jpg",
    details: "Coral-tone crystal studs on 18k gold-plated posts. Secure butterfly clasp.",
    reviews: [
      { author: "Priya S.", stars: 5, text: "Gorgeous sparkle, comfortable all day.", date: "Oct 10, 2026" },
    ] },
  { id: "e2", name: "Radiance Hoops", price: 129, oldPrice: 175, rating: 4.8, reviewsCount: 30, image: "https://i.pinimg.com/736x/96/be/45/96be45cc134e86ea75df9e8e2e4bd183.jpg",
    details: "Medium 25mm polished gold hoops with a click-top closure.",
    reviews: [
      { author: "Sofia D.", stars: 5, text: "Lightweight and don't irritate my sensitive ears.", date: "Sep 27, 2026" },
    ] },
  { id: "e3", name: "Petal Drops", price: 149, oldPrice: 199, rating: 4.5, reviewsCount: 15, image: "https://i.pinimg.com/1200x/73/7e/18/737e183e584c3df2681e64e1c4029ae8.jpg",
    details: "Hand-enamelled petal drop earrings with pearl accents.",
    reviews: [
      { author: "Ritika M.", stars: 5, text: "Got compliments all evening at the party.", date: "Oct 6, 2026" },
    ] },
  { id: "e4", name: "Coral Climbers", price: 119, oldPrice: 160, rating: 4.3, reviewsCount: 9, image: "https://i.pinimg.com/1200x/b7/f8/8e/b7f88ed72302f75ff2b47b45e015069c.jpg",
    details: "Ear climbers with graduated coral crystals. Sold as a pair.",
    reviews: [
      { author: "Elena P.", stars: 4, text: "Unique design, stays put once on.", date: "Sep 22, 2026" },
    ] },
];

export const RING_PRODUCTS = [
  { id: "r1", name: "Eternal Solitaire", price: 299, oldPrice: 389, rating: 4.9, reviewsCount: 41, image: "https://i.pinimg.com/1200x/cc/ec/2b/ccec2b58dc9c9e3a1c10e7d36d8225d9.jpg",
    details: "Cushion-cut solitaire in a four-prong 18k gold-plated setting. Sizes 5–10.",
    reviews: [
      { author: "Ananya R.", stars: 5, text: "Looks so real, the stone catches light beautifully.", date: "Oct 11, 2026" },
    ] },
  { id: "r2", name: "Sage Stack Band", price: 89, oldPrice: 120, rating: 4.6, reviewsCount: 18, image: "https://i.pinimg.com/1200x/82/f8/bf/82f8bfd43f3e24c9fff9a1657b9217dc.jpg",
    details: "Slim matte band with sage enamel inlay. Designed for stacking.",
    reviews: [
      { author: "Priya S.", stars: 5, text: "Perfect stacking band, true to size.", date: "Sep 29, 2026" },
    ] },
  { id: "r3", name: "Coral Halo Ring", price: 219, oldPrice: 285, rating: 4.7, reviewsCount: 24, image: "https://i.pinimg.com/1200x/86/ed/80/86ed8001ef51307e7b2c0caf47c3faf4.jpg",
    details: "Oval centre stone framed by a coral crystal halo on a pavé band.",
    reviews: [
      { author: "Sofia D.", stars: 5, text: "Statement piece without being over the top.", date: "Oct 7, 2026" },
    ] },
  { id: "r4", name: "Twist Duo Ring", price: 159, oldPrice: 210, rating: 4.4, reviewsCount: 11, image: "https://i.pinimg.com/1200x/50/e4/7c/50e47cc4a28cd3871bdea3139aa6cab5.jpg",
    details: "Two-band twisted ring with a brushed and polished finish.",
    reviews: [
      { author: "Ritika M.", stars: 4, text: "Very comfortable, the twist detail is lovely.", date: "Sep 25, 2026" },
    ] },
];

export const BRACELET_PRODUCTS = [
  { id: "b1", name: "Tennis Line Bracelet", price: 249, oldPrice: 320, rating: 4.8, reviewsCount: 28, image: "https://i.pinimg.com/1200x/bd/4e/0d/bd4e0d19ecc61b3e6a369f6202c0773b.jpg",
    details: "Classic 3mm crystal tennis bracelet in a gold-plated box clasp. 17–19cm.",
    reviews: [
      { author: "Meera K.", stars: 5, text: "Sparkles like the real thing. Clasp feels secure.", date: "Oct 9, 2026" },
    ] },
  { id: "b2", name: "Charm Story Bangle", price: 179, oldPrice: 235, rating: 4.6, reviewsCount: 16, image: "https://i.pinimg.com/1200x/72/12/04/7212045bf356bbcefc2c19d06ea2249d.jpg",
    details: "Adjustable bangle with three removable charms: heart, star, and moon.",
    reviews: [
      { author: "Ananya R.", stars: 5, text: "The adjustable fit is great for my small wrist.", date: "Sep 30, 2026" },
    ] },
  { id: "b3", name: "Serpent Cuff", price: 199, oldPrice: 260, rating: 4.5, reviewsCount: 13, image: "https://i.pinimg.com/736x/b2/7e/13/b27e133974ba7146c7ccfc9e72663c26.jpg",
    details: "Open-ended serpent cuff with emerald-tone crystal eyes.",
    reviews: [
      { author: "Elena P.", stars: 4, text: "Bold and comfy, doesn't pinch.", date: "Oct 4, 2026" },
    ] },
  { id: "b4", name: "Beaded Aura Bracelet", price: 89, oldPrice: 119, rating: 4.3, reviewsCount: 8, image: "https://i.pinimg.com/736x/01/63/85/016385bf8e6bbac6180bf61414592b6b.jpg",
    details: "Sage and gold glass bead bracelet on stretch cord. One size.",
    reviews: [
      { author: "Priya S.", stars: 4, text: "Cute everyday piece at a nice price.", date: "Sep 19, 2026" },
    ] },
];

export const FINE_GIFT_PRODUCTS = [
  { id: "g1", name: "The Signature Gift Box", price: 299, oldPrice: 399, rating: 4.9, reviewsCount: 35, image: "https://i.pinimg.com/736x/70/07/e4/7007e4734d8558772173f48a89206f53.jpg",
    details: "Necklace + studs duo in a keepsake box with a hand-written note card.",
    reviews: [
      { author: "Sofia D.", stars: 5, text: "Bought as a gift and she loved it. Gorgeous packaging!", date: "Oct 10, 2026" },
    ] },
  { id: "g2", name: "Mini Moments Set", price: 149, oldPrice: 195, rating: 4.7, reviewsCount: 20, image: "https://i.pinimg.com/736x/88/04/bc/8804bc318292ff9e050a436a56332519.jpg",
    details: "Three mini pieces (ring, studs, bracelet) for first-time gifting.",
    reviews: [
      { author: "Ritika M.", stars: 5, text: "Perfect little 'thinking of you' gift.", date: "Oct 2, 2026" },
    ] },
  { id: "g3", name: "Birthstone Gift Set", price: 189, oldPrice: 245, rating: 4.6, reviewsCount: 14, image: "https://i.pinimg.com/736x/8a/de/6e/8ade6e4c05e3efabde6fbc1d3126e7db.jpg",
    details: "Birthstone pendant and matching studs in a velvet travel pouch.",
    reviews: [
      { author: "Ananya R.", stars: 4, text: "Stone colour was accurate and vivid.", date: "Sep 26, 2026" },
    ] },
  { id: "g4", name: "Little Luxuries Box", price: 119, oldPrice: 159, rating: 4.4, reviewsCount: 10, image: "https://i.pinimg.com/736x/ce/dc/3a/cedc3ab08aaabc86d1d83442b8a1b6ac.jpg",
    details: "Assorted five-piece mix of our best-selling mini pieces.",
    reviews: [
      { author: "Meera K.", stars: 4, text: "Fun surprise mix — great party favour too.", date: "Sep 21, 2026" },
    ] },
];

export const WEDDING_PRODUCTS = [
  { id: "w1", name: "Bridal Radiance Set", price: 449, oldPrice: 580, rating: 4.9, reviewsCount: 38, image: "https://i.pinimg.com/736x/56/59/ce/5659ced7121299047af66daa2d62f964.jpg",
    details: "Three-piece bridal parure: necklace, earrings, and maang tikka in pearl and gold.",
    reviews: [
      { author: "Priya S.", stars: 5, text: "Wore this on my big day — photographs beautifully!", date: "Oct 12, 2026" },
      { author: "Elena P.", stars: 5, text: "Heirloom quality look for a fraction of the price.", date: "Oct 1, 2026" },
    ] },
  { id: "w2", name: "Forever Vow Bands", price: 259, oldPrice: 340, rating: 4.8, reviewsCount: 27, image: "https://i.pinimg.com/736x/d5/ea/76/d5ea76e2f581a8ed177f1beab57ccd9f.jpg",
    details: "His-and-hers 4mm gold vermeil bands, engraved on request. Sizes 5–12.",
    reviews: [
      { author: "Meera K.", stars: 5, text: "We got ours engraved and they're perfect.", date: "Sep 28, 2026" },
    ] },
  { id: "w3", name: "Something Blue Parure", price: 329, oldPrice: 425, rating: 4.6, reviewsCount: 17, image: "https://i.pinimg.com/736x/65/b5/bb/65b5bbb28010172766653455f30291e5.jpg",
    details: "Sapphire-tone crystal necklace and earring set with pearl drops.",
    reviews: [
      { author: "Sofia D.", stars: 5, text: "The 'something blue' every bride needs.", date: "Oct 5, 2026" },
    ] },
  { id: "w4", name: "Bridal Star Studs", price: 139, oldPrice: 185, rating: 4.5, reviewsCount: 12, image: "https://i.pinimg.com/1200x/03/7c/fe/037cfea238ea249e21c5d00531cc25cc.jpg",
    details: "Starburst crystal studs with secure screw-backs. Bridal classic.",
    reviews: [
      { author: "Ritika M.", stars: 4, text: "Comfortable through a full day of ceremonies.", date: "Sep 24, 2026" },
    ] },
];