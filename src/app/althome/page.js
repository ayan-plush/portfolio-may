"use client"
import { useState } from "react";

export default function AltHome() {
  const [mode,setMode] = useState(true)
  return ( 
    <div className="h-screen bg-center bg-cover flex flex-col justify-center items-center"
      style={{
          backgroundImage: `url(${mode
            ? 'https://res.cloudinary.com/decks92gf/image/upload/v1747632175/lightcloud_vwkutu.webp'
            : 'https://res.cloudinary.com/decks92gf/image/upload/v1747632168/nightcloud_xzil7i.webp'})`,
        }}
    >
      <div>

      </div>
      <div className="md:w-1/2 w-4/5 h-[400px] bg-[#fff] rounded-3xl border-[#55a3a0] border-5 ">

      </div>
      <div>
        
      </div>
      
    </div>
  );
}
