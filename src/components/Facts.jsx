import React from 'react';

const Facts = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/public/images/bg.jpg')" }}
    >
      {/* Static Blur Overlay */}
      <div className="inset-0 backdrop-blur-sm"></div>

      {/* Centered Scrollable Content */}
      <div className="relative z-10 flex items-center justify-center h-full" data-aos="zoom-in">
        <div className="w-3/4 md:w-1/2 h-2/3 bg-white/50 backdrop-blur-md rounded-lg shadow-lg overflow-y-auto p-6">
          <h1 className="text-2xl font-bold text-center font-helvetica text-black mb-4">FUN FACTS</h1>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col items-center">
              <img
                className="w-full max-w-xs h-auto rounded-md object-cover"
                src="/images/global_coverage.jpg"
                alt="Global Coverage"
              />
              <p className="text-gray-800 text-justify mt-2 md:px-8">
                Global Coverage: Satellite internet can reach virtually any part of the Earth, including the polar regions, providing connectivity where traditional internet services can't (PELTON ET AL., 2013).
              </p>
            </div>
            <div className="flex flex-col items-center">
            <img
              className="w-full max-w-xs h-40 md:h-52 rounded-md object-cover object-center"
              src="/images/inside_planes.jpg"
              alt="Satellite Internet on Planes"
            />
              <p className="text-gray-800 text-justify mt-2 md:px-8">
                Satellite Internet on Planes: Many commercial airlines use satellite internet to provide in-flight Wi-Fi, allowing passengers to stay connected even at 35,000 feet (WOOD, 2003).
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-full max-w-xs h-auto rounded-md object-cover"
                src="/images/astronaut_internet.jpg"
                alt="Astronaut Internet"
              />
              <p className="text-gray-800 text-justify mt-2 md:px-8">
                Astronaut Internet: The International Space Station (ISS) also relies on satellite internet to communicate with mission control and provide internet access for astronauts (NASA, N.D.).
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-full max-w-xs h-auto rounded-md object-cover"
                src="/images/satellite.jpg"
                alt="Evolving Satellites"
              />
              <p className="text-gray-800 text-justify mt-2 md:px-8">
                Evolving Satellites: The first satellite, Sputnik 1, was only the size of a beach ball (NASA, N.D.).
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-full max-w-xs h-auto rounded-md object-cover"
                src="/images/balloon.jpg"
                alt="High Altitude Balloons"
              />
              <p className="text-gray-800 text-justify mt-2 md:px-8">
                High Altitude Balloons: Some companies are experimenting with high-altitude balloons to provide internet in remote areas, supplementing satellite technology (GOOGLE LOON, 2020).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
