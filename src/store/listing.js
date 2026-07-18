const locations = [
  "Manali",
  "Goa",
  "Mumbai",
  "Udaipur",
  "Kerala",
  "Bangalore",
  "Jaipur",
  "Shimla",
  "Ooty",
  "Pondicherry",
];

const titles = [
  "Mountain Cabin",
  "Luxury Villa",
  "Modern Apartment",
  "Lake House",
  "Tree House",
  "Beach House",
  "Palm Resort",
  "Hill Cottage",
  "Skyline Studio",
  "Forest Retreat",
];

const sectionTitles = [
  "Popular homes in Gurgaon",
  "Available in Mumbai",
  "Stay in Goa",
  "Amazing pools",
  "Cabins",
  "Beachfront stays",
  "Trending homes",
  "Countryside homes",
  "Luxury stays",
  "New this week",
];

export const sections = sectionTitles.map((title, sectionIndex) => ({
  id: sectionIndex + 1,
  title,
  listings: Array.from({ length: 10 }, (_, i) => ({
    id: sectionIndex * 10 + i + 1,
    image: `https://picsum.photos/500/500?random=${sectionIndex * 10 + i + 1}`,
    title: titles[i],
    location: locations[i],
    price: `${6500 + i * 700}`,
    rating: (4.5 + Math.random() * 0.5).toFixed(1),
  })),
}));
