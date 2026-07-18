export const NAV_LINKS = [
  { label: "Home", href: "#top"},
  { label: "About", href: "#about" },
  { label: "Chef", href: "#chef" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reserve", href: "#reserve" },
  { label: "Contact", href: "#contact" },
];

export const SIGNATURE_DISHES = [
  {
    name: "Truffle Risotto Nero",
    description: "Carnaroli rice, aged parmesan, black winter truffle, gold leaf.",
    price: "$46",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Wagyu A5 Tenderloin",
    description: "Charcoal-seared Japanese wagyu, smoked bone marrow jus, heirloom carrots.",
    price: "$92",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Hokkaido Scallop Crudo",
    description: "Yuzu kosho, finger lime, cured egg yolk, seaweed oil.",
    price: "$38",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80",
  },
];

export const MENU: Record<string, { name: string; desc: string; price: string }[]> = {
  Starters: [
    { name: "Burrata & Heirloom Tomato", desc: "Basil oil, aged balsamic, sea salt.", price: "$22" },
    { name: "Foie Gras Torchon", desc: "Toasted brioche, fig compote, port reduction.", price: "$28" },
    { name: "Tuna Tartare", desc: "Avocado, sesame, ponzu, crispy nori.", price: "$26" },
    { name: "Wild Mushroom Velouté", desc: "Truffle cream, chive oil, sourdough.", price: "$18" },
  ],
  Mains: [
    { name: "Roasted Duck Breast", desc: "Cherry gastrique, celeriac purée.", price: "$48" },
    { name: "Chilean Sea Bass", desc: "Miso glaze, baby bok choy, dashi.", price: "$52" },
    { name: "Lamb Rack Provençal", desc: "Herb crust, ratatouille, rosemary jus.", price: "$56" },
    { name: "Handmade Lobster Ravioli", desc: "Saffron cream, brown butter, chervil.", price: "$44" },
  ],
  Desserts: [
    { name: "Valrhona Chocolate Soufflé", desc: "Crème anglaise, vanilla bean ice cream.", price: "$18" },
    { name: "Tahitian Vanilla Crème Brûlée", desc: "Caramelized sugar crust, berries.", price: "$16" },
    { name: "Yuzu Cheesecake", desc: "Matcha crumble, white chocolate.", price: "$17" },
    { name: "Cheese Trolley Selection", desc: "Aged artisanal cheeses, honeycomb.", price: "$24" },
  ],
  Wine: [
    { name: "Château Margaux 2015", desc: "Bordeaux, France — full bodied.", price: "$320" },
    { name: "Dom Pérignon Vintage", desc: "Champagne, France.", price: "$285" },
    { name: "Opus One 2018", desc: "Napa Valley, USA.", price: "$260" },
    { name: "Sassicaia 2019", desc: "Tuscany, Italy.", price: "$240" },
  ],
};

export const GALLERY = [
  {
    image: "/images/G1.jpg",
    title: "Signature Tasting Menu",
  },
  {
   image: "/images/G2.jpg",
    title: "Chef's Table Experience",
  },
  {
    image: "/images/G3.jpg",
    title: "Seasonal Creations",
  },
  {
    image: "/images/G4.jpg",
    title: "Private Dining",
  },
  {
    image: "/images/G5.jpg",
    title: "Artisan Desserts",
  },
  {
    image: "/images/G6.jpg",
    title: "Fresh Local Ingredients",
  },
  {
    image: "/images/G7.jpg",
    title: "Elegant Interiors",
  },
  {
    image: "/images/G8.jpg",
    title: "Curated Wine Collection",
  },
];


export const TESTIMONIALS = [
  {
    quote:
      "An unforgettable evening. Every course was a masterpiece and the service felt effortless yet deeply attentive.",
    name: "Tharun Naik",
    role: "Regular Guest",
  },
  {
    quote:
      "Saffron House redefines what modern fine dining should feel like — intimate, precise, and quietly bold.",
    name: "Harsh Reddy",
    role: "Private Dining Member",
  },
  {
    quote:
      "The tasting menu was pure poetry on a plate. My most memorable meal of the year — bar none.",
    name: "Akash Chowdary",
    role: "Food Enthusiast",
  },
];

export const FAQS = [
  {
    q: "What is your dress code?",
    a: "We suggest smart-elegant attire. Jackets are appreciated but not required.",
  },
  {
    q: "Do you accommodate dietary restrictions?",
    a: "Absolutely. Please notify us at reservation and our chef will craft a bespoke tasting.",
  },
  {
    q: "Is there a corkage fee?",
    a: "Yes, $45 per 750ml bottle. Limited to two bottles per table.",
  },
  {
    q: "Do you host private events?",
    a: "Our chef's table seats up to 14 guests. Contact our events team for bespoke menus.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Reservations can be cancelled up to 48 hours in advance without charge.",
  },
];

export const STATS = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 4.9, suffix: "★", label: "Guest Rating" },
  { value: 48, suffix: "", label: "Signature Dishes" },
  { value: 12000, suffix: "+", label: "Happy Guests" },
];