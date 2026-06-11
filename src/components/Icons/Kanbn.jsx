import React from 'react'

export const Kanbn = props => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="32" height="32" rx="10.5681" fill="url(#kanbn_gradient)" />
      <rect x="7" y="9" width="4.5" height="14" rx="1.2" fill="#fff" />
      <rect x="13.75" y="9" width="4.5" height="9" rx="1.2" fill="#fff" />
      <rect x="20.5" y="9" width="4.5" height="11.5" rx="1.2" fill="#fff" />
      <defs>
        <linearGradient
          id="kanbn_gradient"
          x1="5"
          y1="30"
          x2="30"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B7FFF" />
          <stop offset="1" stopColor="#9CC0FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Kanbn
