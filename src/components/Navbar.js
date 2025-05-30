"use client"
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { IoVolumeMute, IoVolumeMedium } from "react-icons/io5";
import {Howl, Howler} from 'howler';
import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { useSettings } from '@/app/context/SettingsContext';





function Navbar() {
      const { darkMode, setDarkMode, allowSound, setAllowSound } = useSettings();

    const sound = new Howl({
    src: ['https://cdn.jsdelivr.net/gh/ayan-plush/audio_files@main/mouse-click-290204.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    });
    const [hideSidebar,setHideSidebar] = useState(true);
    
  return (
    <div className='h-[80px] w-full fixed z-50'>

        <div className={hideSidebar?`fixed h-screen right-0 w-[350px]  flex-col gap-10 max-w-screen  bg-[#70D857] z-50 hidden`:`fixed h-screen bg-[#70D857] right-0 w-[350px] flex flex-col gap-10 max-w-screen z-50`}>
            <div  className="w-full h-[80px] px-10  flex justify-end items-center "> 
                <div onClick={()=>{
                    if(allowSound){
                        sound.play();
                    }
                    
                    setHideSidebar(true);
                }} className="text-3xl text-[#fff] cursor-pointer">[x]
                </div> 
            </div>
        </div>

        <div className={` h-[80px] ${darkMode?`text-[#fff] bg-[#212121]`:`text-[#4F61F1] border-b-4 border-b-[#4F61F1]`} justify-between w-full flex items-center px-10`}>
            <div className='flex justify-between  items-center h-full gap-15 w-[120px]'>
                {darkMode?<FaSun onClick={()=>{ setDarkMode(false); sound.play();}} className="w-[30px] h-full hover:scale-110 cursor-pointer" />:<FaMoon onClick={()=>{ setDarkMode(true); sound.play();}} className="w-[30px] h-full hover:scale-110 cursor-pointer" />}
                {allowSound?<IoVolumeMedium onClick={()=>{setAllowSound(false); sound.play();}} className="w-[40px] h-full hover:scale-110 cursor-pointer" />: <IoVolumeMute onClick={()=>{setAllowSound(true); sound.play();}} className="w-[40px] h-full hover:scale-110 cursor-pointer" />}
            </div>
            <GiHamburgerMenu onClick={()=>{
                setHideSidebar(false);
                if(allowSound){
                        sound.play();
                }               
            }} className="h-full w-[30px]  hover:scale-110 cursor-pointer" />
            
        </div>
        

      
    </div>
  )
}

export default Navbar
