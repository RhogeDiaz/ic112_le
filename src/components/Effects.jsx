import React from 'react'

const Effects = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/public/images/bg.jpg')" }}>
      {/* Static Blur Overlay */}
      <div className="inset-0 backdrop-blur-sm"></div>

      {/* Centered Scrollable Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-3/4 md:w-1/2 h-2/3 bg-white/50 backdrop-blur-md rounded-lg shadow-lg overflow-y-auto p-6">
          <h1 className="text-2xl font-bold text-center text-black mb-4">Effects</h1>
          <p className="text-gray-800 mb-3">
            Welcome to the introduction page! This section is designed to remain within the static viewport, while the content in this box is scrollable.
          </p>
          <p className="text-gray-800 mb-3">
            Use this area to add your introduction content. The parent page remains completely static, ensuring only this section scrolls vertically.
          </p>
          {/* Repeated content for demonstrating scroll */}
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
          <p className="text-gray-800 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis lorem eu erat aliquet, vel aliquet orci cursus.</p>
        </div>
      </div>
    </div>
  )
}

export default Effects