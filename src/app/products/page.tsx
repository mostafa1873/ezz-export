import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        {/* Simple thin border and clean typography */}
        <h1 className="text-6xl font-light tracking-tight text-gray-900 mb-4">
          PRODUCTS PAGE
        </h1>
        
        <div className="h-[1px] w-24 bg-gray-200 mx-auto mb-8"></div>
        
        <p className="text-gray-500 text-lg font-normal leading-relaxed mb-10">
          This is a minimalist approach. Simple, clean, and white. 
          Focusing on the content without any distractions.
        </p>

        <button className="border border-gray-900 px-8 py-2 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300">
          LEARN MORE
        </button>
      </div>
    </div>
  )
}