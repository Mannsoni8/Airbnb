import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-[85vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Not sure where to go?
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Discover amazing places to stay around the world.
        </p>

        <button className="mt-8 rounded-full bg-white px-8 py-4 text-lg font-semibold text-pink-600 shadow-lg transition hover:scale-105">
          I'm Flexible
        </button>
      </div>
    </section>
  );
};

export default Hero;
