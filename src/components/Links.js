'use client'
import { useSettings } from '@/app/context/SettingsContext';
import React from 'react'
import { useEffect, useState, useRef } from "react";

function Links({containerRef, show, setShow, sound, height, setHeight }) {

    const { darkMode, setDarkMode, allowSound, setAllowSound } = useSettings();


  const boxRef = useRef(null)

  const [isMd,setIsMd] = useState(false)

  const isClicked = useRef(false)

  const [zh,setZh] = useState()

      useEffect(()=>{

        if(boxDropLeftRef.current>window.innerWidth-690){
          setBoxLeft(window.innerWidth-690)
          boxLeftRef.current = window.innerWidth-690
          boxDropLeftRef.current = window.innerWidth-690
        }

        if(!zh){
          setZh(height)
        }
        else{
          setZh()
        }
        
      },[show])

  const zee = height;
  
  const [boxTop,setBoxTop] = useState(90)
  const [boxLeft,setBoxLeft] = useState(900)

  const boxLeftRef = useRef(900);
    const boxTopRef = useRef(90);
    const boxDropLeftRef = useRef(900);


  useEffect(()=>{
    const checkSize = () => {
      setIsMd(window.innerWidth >= 768);
      // if(boxDropLeftRef.current>window.innerWidth-690){
      //     setBoxLeft(window.innerWidth-690)
      //     boxLeftRef.current = window.innerWidth-690
      //     boxDropLeftRef.current = window.innerWidth-690
      //   }

    
    }
    checkSize(); 
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  },[])

  const dynamicStyle = isMd
    ? {
        top: `${boxTop - 12}px`,
        left: `${boxLeft - 150}px`,
        position: 'absolute',
        zIndex: zh?zh+20:0
      }
    : {};



  useEffect(()=>{

    if(!boxRef.current||!containerRef.current) return;
    const box = boxRef.current;
    const container = containerRef.current;
    const onMouseDown = (e) => {
      isClicked.current=true
      boxLeftRef.current = e.clientX
      console.log(boxLeftRef.current,"mouse position on down")
    }
    const onMouseUp = (e) => {
      isClicked.current=false
      boxDropLeftRef.current = boxDropLeftRef.current + e.clientX - boxLeftRef.current
      console.log(boxDropLeftRef.current,"box position on up")
    }
    const onMouseMove = (e) => {
      if(!isClicked.current){
        return;
      }

        const box = boxRef.current;
        const container = containerRef.current;

        const containerRect = container.getBoundingClientRect();
        // const boxWidth = box.offsetWidth;
        // const boxHeight = box.offsetHeight;

        

        const mouseX = boxDropLeftRef.current + e.clientX - boxLeftRef.current ;
        const mouseY = e.clientY - containerRect.top;

        const maxX = containerRect.width - 700;
        const maxY = containerRect.height - 400;

        const clampedX = Math.max(0, Math.min(mouseX, maxX));
        const clampedY = Math.max(0, Math.min(mouseY, maxY));

        


      setBoxTop(clampedY)
      setBoxLeft(clampedX)
      console.log(e.clientX,containerRect.left)

    }
    const cleanup = () => {
      box.removeEventListener('mousedown',onMouseDown)
      box.removeEventListener('mouseup',onMouseUp)
      container.removeEventListener('mousemove',onMouseMove)
    }
    container.addEventListener('mousemove',onMouseMove)
    box.addEventListener('mousedown',onMouseDown)
    box.addEventListener('mouseup',onMouseUp)
    return cleanup;

  },[])



  return (
   <>
    <div  style={dynamicStyle} className={` ${show?'':'hidden'} max-md:h-screen  border-2 max-md:fixed max-md:rounded-t-3xl max-md:mt-10 max-md:w-full select-none z-20 flex flex-col box md:absolute overflow-hidden md:w-[800px] md:h-[400px] md:rounded-3xl ${darkMode?'bg-[#212121] border-white':'bg-[#fff] border-black'} `}>
        
        <div ref={boxRef} className= {`px-5 sticky z-30 ${darkMode?'bg-[#097BF9] text-[#fff] border-b-white border-b-2':'bg-[#097BF9] text-[#fff]'}  top-0 flex items-center justify-between cursor-pointer w-full h-[50px] `}>
          <div className="text-xl " >Links</div>
          <div onClick={()=>{
                    if(allowSound){
                      sound.play();
                    }
                    setHeight(height-1);
                    setShow(false);
                }} className="text-xl hover:scale-110 ">[x]</div>
        </div>
        <div className="w-full h-full flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-10 overflow-y-scroll ">


        </div>

        

      </div>
      
    </>

  )
}

export default Links
