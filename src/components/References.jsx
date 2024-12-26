import React from 'react'

const References = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/public/images/bg.jpg')" }}>
      {/* Static Blur Overlay */}
      <div className="inset-0 backdrop-blur-sm"></div>

      {/* Centered Scrollable Content */}
      <div className="relative z-10 flex items-center flex-col justify-center h-full text-gray-800" data-aos="zoom-in">
        <div className='text-white'>Click each reference to access the sources.</div>
        <div className="w-3/4 md:w-1/2 h-2/3 bg-white/50 backdrop-blur-md rounded-lg shadow-lg overflow-y-auto p-6">
        <ul className='flex flex-col gap-4 items-center md:items-start'>
            <li>
                <a href="https://www.academia.edu/85025015/Handbook_of_Satellite_Applications">Camacho, S. (2013). Handbook of Satellite Applications. Academia.edu.</a>
            </li>

            <li>
                <a href="https://www.hughesnet.com/blog/evolution-high-speed-satellite-internet">The Evolution of High-Speed Satellite Internet | HughesNet®. (n.d.).</a>
            </li>

            <li>
                <a href="https://www.pna.gov.ph/articles/1107303"> NCIP pushes for connectivity in indigenous communities | Philippine News Agency. (2020). Pna.gov.ph.</a>
            </li>
            
            <li>
                <a href="https://technology.inquirer.net/126156/starlink-connects-philippine-indigenous-communities">Arasa, D. (2023, July). Starlink connects Philippine indigenous communities. INQUIRER.net.</a>
            </li>
            
            <li>
                <a href="https://doi.org/10.1007/s10676-022-09661-y">Danaher, J., & Henrik Skaug Sætra. (2022). Technology and moral change: the transformation of truth and trust. Ethics and Information Technology, 24.</a>
            </li>

            <li>
                <a href="https://doi.org/10.54678/JSGE8362">World Commission on the Ethics of Scientific Knowledge and Technology. (2023). The ethical implications of the Internet of Things (IoT).</a>
            </li>

            <li>
                <a href="https://www.youtube.com/watch?v=xGSucWFkWT8">Tech Index. (2023, September 29). How Does Satellite Internet Work? (Starlink). YouTube.</a>
            </li>
        </ul>
        </div>
      </div>
    </div>

  )
}

export default References