import React from 'react'

const PersonalInsight = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/public/images/bg.jpg')" }}>
      {/* Static Blur Overlay */}
      <div className="inset-0 backdrop-blur-sm"></div>

      {/* Centered Scrollable Content */}
      <div className="relative z-10 flex items-center justify-center h-full" data-aos="zoom-in">
        <div className="w-3/4 md:w-1/2 h-2/3 bg-white/50 backdrop-blur-md rounded-lg shadow-lg overflow-y-auto p-6">
          <h1 className="text-2xl font-bold text-center font-helvetica text-black mb-4">MY INSIGHTS</h1>
          <div className='flex flex-col gap-4'>
            <p className="text-gray-800 mb-3 text-justify tracking-wide">
              This compendium report is aimed towards the indigenous people in rural areas, where technology, if not nonexistent, is very underdeveloped. I believe not only in the importance of sharing knowledge of technology, but also in choosing what to share.
            </p>
            <p className="text-gray-800 mb-3 text-justify tracking-wide"> Why do I think that helping indigenous people learn something about satellite internet is important, you might ask? Well I think that satellite internet is the most valuable technological advancement such areas would have. The Internet, 
            as we all know it, unlocks a myriad of potential for people to learn, grow, and prevail.</p>
            <p className="text-gray-800 mb-3 text-justify tracking-wide">I have stated earlier that satellite internet might also introduce some problems especially in its cultural impact toward the said target, but I believe 
            that with proper governance and regulations, it could be implemented successfully.</p>
            <p className="text-gray-800 mb-3 text-justify tracking-wide">Finally, swerving away from the targeted readers of this report and going back to the general audience. An understanding of satellite internet, and the internet 
            in general, is arguably one of the most important tools a non-technical person could have, as it makes understanding other concepts easier and more intuitive. From online transactions, emails, scams, and hackings, an awareness of the importance of our online presence is a must.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInsight