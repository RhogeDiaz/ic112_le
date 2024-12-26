import React from 'react';

const Intro = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/public/images/bg.jpg')" }}>
      {/* Static Blur Overlay */}
      <div className="inset-0 backdrop-blur-sm"></div>

      {/* Centered Scrollable Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-3/4 md:w-1/2 h-2/3 bg-white/50 backdrop-blur-md rounded-lg shadow-lg overflow-y-auto p-6">
          <h1 className="text-2xl font-bold text-center text-black mb-4">INTRODUCTION</h1>
          {/* Repeated content for demonstrating scroll */}
          <p className="text-gray-800 mb-3 text-justify">The satellite internet is a technology that uses satellites orbiting the Earth to provide internet access. This type of internet service is especially useful in remote and rural areas where traditional wired connections are not available.</p>
          <p className="text-gray-800 mb-3 text-justify font-bold pt-4">FIRST AND FOREMOST, WHAT'S A SATELLITE?</p>
          <p className="text-gray-800 mb-3 text-justify">A satellite is a man-made object launched into space to orbit the Earth. These satellites are equipped with various technologies, including solar panels for power, transponders for communication, and antennas for sending and receiving signals.</p>
          <p className="text-gray-800 mb-3 text-justify font-bold pt-4">BRIEF HISTORY</p>
          <p className="text-gray-800 mb-3 text-justify">A satellite is a man-made object launched into space to orbit the Earth. These satellites are equipped with various technologies, including solar panels for power, transponders for communication, and antennas for sending and receiving signals.</p>
          <p className="text-gray-800 mb-3 text-justify font-bold pt-4">HOW IT WORKS</p>
          <div className='flex flex-col gap-4 text-justify text-gray-800'>
            <p>Satellite internet operates through a series of steps involving satellites, ground stations, and user equipment:</p>
            <p>- <i>Ground Station</i>: Internet service providers send signals from ground stations to satellites in space.
            </p>
            <p>- <i>Satellite</i>: The satellite receives the signal and relays it back to Earth.
            </p>
            <p>- <i>User Equipment</i>: Users have a satellite dish that captures the signal. This dish connects to a modem, translating the signal into an internet connection.
            </p>
            <p>- <i>Data Transmission</i>: Data travels between the user's equipment and the satellite, enabling internet access.
            </p>
          </div>
          {/* video diri */}
          <div className="mb-6 pt-6">
            <video
              controls
              className="w-full rounded-lg shadow-md"
            >
              <source src="/public/videos/How Does Satellite Internet Work_ (Starlink).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className='text-gray-800 text-center'><i>Courtesy: Tech Index</i></div>
          </div>

          <p className="text-gray-800 mb-3 text-justify font-bold pt-6">WHY IS IT IMPORTANT</p>
          <p className="text-gray-800 mb-3 text-justify">Satellite internet is crucial in remote and rural areas where traditional ISP cables can't reach due to difficult terrain and lack of infrastructure. It provides a viable solution by bypassing physical obstacles and delivering internet access to these isolated regions. This access to the internet is a significant step toward technological progress, unlocking opportunities for education, healthcare, and economic development. For indigenous communities, it empowers individuals, supports cultural preservation, and bridges the digital divide, ensuring that everyone can benefit from modern technology.</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
