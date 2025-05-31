'use client'
import { useSettings } from '@/app/context/SettingsContext';
import React from 'react'
import { useEffect, useState, useRef } from "react";

function  Info({containerRef, show, setShow, sound, height, setHeight}) {

  const { darkMode, setDarkMode, allowSound, setAllowSound } = useSettings();



  const boxRef = useRef(null)

  const [isMd,setIsMd] = useState(false)

  const isClicked = useRef(false)

  const [zh,setZh] = useState()

      useEffect(()=>{

        if(boxDropLeftRef.current>window.innerWidth-695){
          setBoxLeft(window.innerWidth-695)
          boxLeftRef.current = window.innerWidth-695
          boxDropLeftRef.current = window.innerWidth-695
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
      // if(boxDropLeftRef.current>window.innerWidth-695){
      //     setBoxLeft(window.innerWidth-695)
      //     boxLeftRef.current = window.innerWidth-695
      //     boxDropLeftRef.current = window.innerWidth-695
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
    <div  style={dynamicStyle} className={` ${show?'':'hidden'} max-md:h-screen z-50  border-2 max-md:fixed max-md:rounded-t-3xl max-md:mt-10 max-md:w-full select-none  flex flex-col box md:absolute overflow-hidden md:w-[800px] md:h-[400px] md:rounded-3xl ${darkMode?'bg-[#212121] border-white':'bg-[#F9FCEA] border-black'} `}>
        
        <div ref={boxRef} className= {`px-5 sticky z-30 ${darkMode?'bg-[#6BD557] text-[#fff] border-b-white border-b-2':'bg-[#6BD557] text-[#fff]'}  top-0 flex items-center justify-between cursor-pointer w-full h-[50px] `}>
          <div className="text-xl " >About Me</div>
          <div onClick={()=>{
                    if(allowSound){
                      sound.play();
                    }
                    setHeight(height-1);
                    setShow(false);
                }} className="text-xl hover:scale-110 ">[x]</div>
        </div>
        <div className=" font-lato w-full h-full flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-10 overflow-y-scroll ">
          <div className="flex w-full h-full gap-5 p-5 ">
            <div className={`w-1/3 h-[280px] flex items-center justify-center `}>
                            <img src='https://res.cloudinary.com/decks92gf/image/upload/v1748533781/4627000b-01c7-41c8-94b5-43bebbb45d10_n10ws7.jpg' className={`rounded-full h-[250px] object-cover w-[250px]`}/>
            </div>
            <div className={`w-2/3 h-[280px] text-wrap flex flex-col  ${darkMode?'text-[#fff]':'text-[#000]'} items-start justify-center p-10 `}>
                <div className={`text-5xl text-[#FB3E5A] font-semibold pb-5`} >
                  Ayan Khajuria
                </div>
                <div className={`text-lg  font-light`}>
                  Full-stack developer and ex heuristic logorrhea abstractor and generator at think-less co. <br/>
                  Sofware Development Intern at <a className='text-[#5E9487] underline'>Infollion</a> <br/>
                  <a className={`text-[#5E9487] underline`} >My Resume!!</a>
                </div>
            </div>
          </div>
          <div className="w-full h-full mb-10 ">

                <div className={`${darkMode?'text-[#fff]':'text-[#000]'} px-5 flex flex-col items-start  gap-5 font-light `}>
                  <div className={`text-lg`}>
                    Hey super serious work people! i'm ayan, an undergrad software engineer at Delhi Technological University. I...<br/>
                    <ul className='list-disc text-md pl-5 ' >
                      <li>create problems and find innovative ways to "fix" them with software engineering</li>
                      <li>spend 90% of my time figuring out neo-vim.</li>
                      <li>also like to draw a lil :3 so excuse me if you find a doodle or two in the source code I was bored...</li>
                    </ul>
                    still interested in working with me? send me an email at <a className={`text-[#5E9487] underline`}>fwd.ayan@gmail.com</a>!:3

                  </div>
                  <div>
                    <span className={`text-3xl text-[#FB3E5A] font-bold italic`}>EDUCATION</span>
                    <ul className='list-disc text-md font-light pl-5'>
                      <li>Bachelor of Technology in Software Engineering <br/> Delhi Technological University (2022-2026) </li>
                    </ul>
                  </div>
                  <div>
                    <span className={`text-3xl text-[#FB3E5A] font-bold italic `} >OTHER INTERESTS</span>
                    <ul className='list-disc text-md font-light pl-5'>
                      <li>Literature Fiend!!</li>
                      <li>Illustrator (procreate vetran)</li>
                    </ul>
                  </div>
                </div>

          </div>
          


        </div>

        

      </div>
      
    </>

  )
}

export default Info
