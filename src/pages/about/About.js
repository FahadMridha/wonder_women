import React from "react";

const About = () => {
  const images = [
    "https://source.unsplash.com/800x600/?travel",
    "https://source.unsplash.com/800x600/?explore",
    "https://source.unsplash.com/800x600/?adventure",
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">About Our Travel Service</h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-8">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <p className="text-lg">
            Welcome to our travel service! We are passionate about providing
            memorable travel experiences for our customers. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nullam aliquam justo sit amet
            vestibulum molestie. Proin finibus felis ut congue malesuada. Sed
            euismod, justo nec cursus ullamcorper, justo lectus euismod diam,
            nec ultricies urna elit id quam.
          </p>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden mb-4 animate__animated animate__fadeIn"
            >
              <img
                src={image}
                alt={`Image ${index}`}
                className="w-full h-40 object-cover transition-transform transform hover:scale-110 duration-300 rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-600">
          Our dedicated team works hard to ensure your travel experiences are
          seamless and enjoyable.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Team Member 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
          <img
            src="https://source.unsplash.com/800x600/?team-member1"
            alt="Team Member 1"
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">John Doe</h3>
          <p className="text-gray-600">Founder & CEO</p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
          <img
            src="https://source.unsplash.com/800x600/?team-member2"
            alt="Team Member 2"
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
          <p className="text-gray-600">Head of Operations</p>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
          <img
            src="https://source.unsplash.com/800x600/?team-member3"
            alt="Team Member 3"
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Bob Johnson</h3>
          <p className="text-gray-600">Lead Travel Consultant</p>
        </div>
      </div>
    </div>
  );
};

export default About;
