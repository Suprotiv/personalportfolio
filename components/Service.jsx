import { useState } from "react";
import { FadeIn } from "./FadeIn";

const Service = () => {
  // State to track the hovered list item
  const [hoveredItem, setHoveredItem] = useState(null);

  // Map list items to their respective background images
  const backgroundImages = {
    "Frontend Websites": "/frontend.png",
    "Full Stack Websites": "/fullstack.jpg",
    "Portfolio Websites": "/webdesign.jpg",
    "Interactive Mobile Apps": "/mobile.png",
  };

  // Map list items to their respective custom text
  const customText = {
    "Frontend Websites":
      "Our frontend development services focus on creating visually stunning and responsive websites. Whether you need a corporate website, an e-commerce platform, or a personal blog, we ensure seamless navigation, interactive elements, and modern designs. We use cutting-edge technologies like React and Tailwind CSS to deliver websites that perform flawlessly across all devices.",
    "Full Stack Websites":
      "With our full-stack development services, you get comprehensive solutions that cover both the frontend and backend. From database management to API integrations and advanced server-side logic, we build scalable and secure applications tailored to your specific needs. Whether it's a custom web app or a dynamic content platform, we’ve got you covered.",
    "Portfolio Websites":
      "Your portfolio is your digital identity. Our portfolio website services focus on showcasing your achievements, projects, and skills in a visually compelling way. We ensure your site reflects your personality while being highly functional, fast-loading, and optimized for search engines. Let your work take center stage with a portfolio that leaves a lasting impression.",
    "Interactive Mobile Apps":
      "We specialize in creating engaging mobile applications that provide a seamless user experience. From ideation to deployment, we handle every aspect of app development. Whether it's a social networking app, a fitness tracker, or an e-commerce platform, we prioritize user-centric design and functionality to make your app stand out in a competitive market.",
  };

  return (
    <div
      className="flex flex-col h-screen justify-between"
      style={{
        backgroundImage: `url(${
          hoveredItem ? backgroundImages[hoveredItem] : "/bgservice.jpg"
        })`,
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        transition: "background-image 0.25s ease",
        transitionDelay: "0.5s", // Smooth transition for background changes
      }}
    >
      {/* Heading */}
      <div className="absolute top-8 w-full text-center">
        <FadeIn>
          <h1 className="text-white font-bold text-5xl">Services</h1>
        </FadeIn>
      </div>

      {/* Content */}
      <div className="flex h-full items-center justify-between">
        {/* Left Side: List */}
        <div className="absolute top-0 z-50 w-1/2">
          <ul className="relative top-[22vh] left-[20vh]">
            {Object.keys(backgroundImages).map((item) => (
              <FadeIn key={item} view="-150px">
                <li
                  key={item}
                  className="text-gray-100 hover:text-white text-3xl py-8 inline-block hover:cursor-pointer hover:font-bold hover:text-4xl transition-all duration-500"
                  onMouseEnter={() => setHoveredItem(item)} // Update state on hover
                  onMouseLeave={() => setHoveredItem(null)} // Reset state on hover out
                >
                  {item}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>

        {/* Right Side: Custom Text */}
        <div className="w-[46vw] relative left-1/2 h-1/2 flex items-center justify-center">
          {hoveredItem ? (
            <FadeIn key={hoveredItem} view="-150px">
              <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg animate-fadeInTopToBottom">
                <p className="text-black text-xl font-medium text-center">
                  {customText[hoveredItem]}
                </p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn view="-150px">
              <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
                <p className="text-black text-xl font-medium text-center">
                  Hover over a service to learn more about what we offer.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
