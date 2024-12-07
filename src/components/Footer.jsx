import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4">
              Grand Saraswati Restaurant
            </h2>
            <p className="text-sm sm:text-base">
              Experience the perfect blend of taste and luxury at Grand
              Saraswati. We serve delicious meals in a warm, inviting
              atmosphere.
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-500 text-sm sm:text-base">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="hover:text-yellow-500 text-sm sm:text-base"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="hover:text-yellow-500 text-sm sm:text-base"
                >
                  Signup
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base">
              Behind Sarawati Eye Hospital, Goasala Road, Barwani (M.P.)
            </p>
            <p className="text-sm sm:text-base">Email: Thegrandsaraswatipalace@gmail.com</p>
            <p className="text-sm sm:text-base">Phone: 992-661-8566</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4">
            Follow Us
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-600 text-xl sm:text-2xl"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-400 text-xl sm:text-2xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-sky-300 text-xl sm:text-2xl"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-xs sm:text-sm border-t border-gray-700 pt-4">
          <p>
            &copy; {new Date().getFullYear()} Grand Saraswati Restaurant. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
