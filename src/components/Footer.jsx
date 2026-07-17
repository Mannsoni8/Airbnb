import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold mb-4">Support</h3>

            <ul className="space-y-3 text-gray-600">
              <li>Help Center</li>
              <li>Get help with a safety issue</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighbourhood concern</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hosting</h3>

            <ul className="space-y-3 text-gray-600">
              <li>Airbnb your home</li>
              <li>Airbnb your experience</li>
              <li>Airbnb your service</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
              <li>Join a free hosting class</li>
              <li>Find a co‑host</li>
              <li>Refer a host</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Airbnb</h3>

            <ul className="space-y-3 text-gray-600">
              <li>2026 Summer Release</li>
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 text-gray-400" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            © 2026 Airbnb Clone. All rights reserved.
          </p>

          <div className="flex gap-5 text-xl mt-4 md:mt-0">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-sky-500" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
