"use client"

import { useEffect } from "react"

export default function LogoPage() {
  useEffect(() => {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="800" height="240">
  <g transform="translate(50, 60)">
    <path d="M -30 15 Q -30 -30 0 -30 Q 30 -30 30 15" fill="none" stroke="#0d9488" strokeWidth="4" strokeLinecap="round"/>
    <path d="M -20 15 Q -20 -18 0 -18 Q 20 -18 20 15" fill="none" stroke="#0d9488" strokeWidth="4" strokeLinecap="round"/>
    <path d="M -10 15 Q -10 -6 0 -6 Q 10 -6 10 15" fill="none" stroke="#0d9488" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="0" cy="20" r="5" fill="#0d9488"/>
  </g>
  <text x="100" y="72" fontFamily="Georgia, Times New Roman, serif" fontSize="48" fontWeight="400" fill="#1e293b" letterSpacing="2">Boror</text>
</svg>`

    const blob = new Blob([svgContent], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "boror-logo.svg"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [])

  const handleDownload = () => {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="800" height="240">
  <g transform="translate(50, 60)">
    <path d="M -30 15 Q -30 -30 0 -30 Q 30 -30 30 15" fill="none" stroke="#0d9488" strokeWidth="4" strokeLinecap="round"/>
    <path d="M -20 15 Q -20 -18 0 -18 Q 20 -18 20 15" fill="none" stroke="#0d9488" strokeWidth="4" strokeLinecap="round"/>
    <path d="M -10 15 Q -10 -6 0 -6 Q 10 -6 10 15" fill="none" stroke="#0d9488" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="0" cy="20" r="5" fill="#0d9488"/>
  </g>
  <text x="100" y="72" fontFamily="Georgia, Times New Roman, serif" fontSize="48" fontWeight="400" fill="#1e293b" letterSpacing="2">Boror</text>
</svg>`

    const blob = new Blob([svgContent], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "boror-logo.svg"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Boror Logo</h1>
      <p className="text-green-600 mb-8">Download should start automatically...</p>

      {/* Logo Display */}
      <div className="bg-white p-12 rounded-2xl shadow-lg mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="600" height="180">
          <g transform="translate(50, 60)">
            <path
              d="M -30 15 Q -30 -30 0 -30 Q 30 -30 30 15"
              fill="none"
              stroke="#0d9488"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M -20 15 Q -20 -18 0 -18 Q 20 -18 20 15"
              fill="none"
              stroke="#0d9488"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M -10 15 Q -10 -6 0 -6 Q 10 -6 10 15"
              fill="none"
              stroke="#0d9488"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="0" cy="20" r="5" fill="#0d9488" />
          </g>
          <text
            x="100"
            y="72"
            fontFamily="Georgia, Times New Roman, serif"
            fontSize="48"
            fontWeight="400"
            fill="#1e293b"
            letterSpacing="2"
          >
            Boror
          </text>
        </svg>
      </div>

      {/* Manual Download Button */}
      <button
        onClick={handleDownload}
        className="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium text-lg"
      >
        Click to Download Again
      </button>
    </div>
  )
}
