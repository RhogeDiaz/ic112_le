import React from 'react'
import Footer from './Footer'

const Effects = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/public/images/bg.jpg')" }}>
      {/* Static Blur Overlay */}
      <div className="inset-0 backdrop-blur-sm"></div>
      {/* Centered Scrollable Content */}
      <div className="relative z-10 flex items-center justify-center h-full" data-aos="zoom-in">
        <div className="w-3/4 md:w-1/2 h-2/3 bg-white/50 backdrop-blur-md rounded-lg shadow-lg overflow-y-auto p-6">
          <h1 className="text-2xl font-bold text-center font-helvetica text-black mb-8">EFFECTS TO ETHICS</h1>
          <div className='flex flex-wrap gap-8 md:gap-0'>
            <div className='flex flex-col items-center md:w-2/4 gap-4 border border-black p-4'>
              <p className="text-gray-800 mb-3 font-bold font-helvetica">THE POSITIVES</p>
              <div className='flex flex-col items-center pb-4'>
                <p className="text-gray-800 mb-3 text-center">EQUITY AND INCLUSION</p>
                <p className='text-justify text-gray-800 md:p-4'>Satellite internet promotes inclusivity by providing access to those previously disconnected, ensuring that everyone, regardless of location, can benefit from the digital world. This fosters a sense of equity and social justice, as access to information becomes more democratized.</p>
              </div>
              <div className='flex flex-col items-center'>
                <p className="text-gray-800 mb-3 text-center">DIGITAL LITERACY AND RESPONSIBILITY</p>
                <p className='text-justify text-gray-800 md:p-4'>Satellite internet can improve digital literacy, enabling users to develop skills needed for responsible internet use. This includes understanding the ethical implications of online behavior.</p>
              </div>
            </div>

            <div className='flex flex-col items-center md:w-2/4 gap-4 border border-black  p-4'>
              <p className="text-gray-800 mb-3 font-bold font-helvetica">THE NEGATIVES</p>
              <div className='flex flex-col items-center pb-4'>
                <p className="text-gray-800 mb-3 text-center">IMPACT ON TRADITIONAL COMMUNICATION</p>
                <p className='text-justify text-gray-800 md:p-4'>The advent of digital communication might diminish traditional forms of communication and social interaction, impacting the social fabric and interpersonal relationships within the community.
                </p>
              </div>
              <div className='flex flex-col items-center pb-4'>
                <p className="text-gray-800 mb-3 text-center">CULTURAL IMPACT</p>
                <p className='text-justify text-gray-800 md:p-4'>Introducing internet access to remote communities can lead to cultural shifts, as exposure to global media and external influences may alter traditional lifestyles and values.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Effects