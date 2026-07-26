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

const hotelImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  "https://images.unsplash.com/photo-1601918774946-25832a4be0d6",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
];

export const sections = sectionTitles.map((title, sectionIndex) => ({
  id: sectionIndex + 1,
  title,
  listings: Array.from({ length: 8 }, (_, i) => ({
    id: sectionIndex * 10 + i + 1,

    image: `${hotelImages[(sectionIndex * 3 + i) % hotelImages.length]}?auto=format&fit=crop&w=500&h=500`,

    title: titles[i],
    location: locations[i],
    price: `${6500 + i * 700}`,
    rating: (4.5 + Math.random() * 0.5).toFixed(1),
  })),
}));
