import React from 'react'

export default function Card({userName = " DP ", post = "Not assigned yet"}) {
    // console.log(props);
    
  return (
    <div>
        <div className="flex flex-col items-center p-7 rounded-2xl">
            <h1>{userName}</h1>
    <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" />
  </div>
  <div className="flex">
    <span>ClassName Warfare</span>
    <span>The Anti-Patterns</span>
    <span className="flex">
      <span>{post}</span>
      <span>·</span>
      <span>2025</span>
    </span>
    </div>
    </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, libero.</p>
    </div>
  )
}
