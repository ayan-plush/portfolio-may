'use client'
import { useSettings } from '@/app/context/SettingsContext';
import React from 'react'
import { useEffect, useState, useRef } from "react";
import { FaGithub,FaExternalLinkAlt,FaInfoCircle  } from "react-icons/fa";

function Projects({containerRef, show, setShow, sound, height, setHeight }) {

    const { darkMode, setDarkMode, allowSound, setAllowSound } = useSettings();


  const projectArray = [
    {
      name: "NitiKnow",
      description: "Nitiknow addresses the growing gap in political transparency caused by declining media accountability. Built as a full-stack solution, it systematically collects and structures public data on 500+ MPs and 4,000+ MLAs using automated scraping pipelines (Playwright, Selenium) and NLP techniques. ML-driven article summarization and entity linking ensure relevant, concise insights.",
      image: "https://res.cloudinary.com/decks92gf/image/upload/v1754411479/nitiknow_l8axxm.jpg",
      link: "https://github.com/ayan-plush/nitiknowbackend",
      github: "https://github.com/ayan-plush/nitiknowbackend",
      demo: "https://nitiknow.onrender.com/"
    },
    {
      name: "Lit Link",
      description: "At LitLink, we believe that books are more than pages bound together—they are portals of human understanding and catalysts for connection. In a world increasingly fragmented by digital isolation, we are reimagining the book as a conduit of human experience. Our platform is not just about lending books; it's about creating a vibrant third space where stories flow freely, where strangers become companions.",
      image: "https://res.cloudinary.com/decks92gf/image/upload/v1748445808/WhatsApp_Image_2025-05-28_at_20.52.05_p1mmo5.webp",
      link: "https://github.com/ayan-plush/litlink-v3",
      github: "https://github.com/ayan-plush/litlink-v3",
      demo: "https://litlink-frontend.onrender.com/"
    },
    {
      name: "WeatherIt",
      description: " Built a responsive React app integrating GeoDB, OpenWeatherMap, and WAQI APIs to provide real-time weather, AQI data, and personalized activity suggestions for over 200,000+ cities worldwide.",
      image: "https://res.cloudinary.com/decks92gf/image/upload/v1748532614/WhatsApp_Image_2025-05-29_at_20.58.16_kxwfm9.webp",
      link: "https://github.com/ayan-plush/webit",
      github: "https://github.com/ayan-plush/webit",
      demo: "https://webit-six.vercel.app/"
    }
    
  ]


  const boxRef = useRef(null)

  const [isMd,setIsMd] = useState(false)
  

  const isClicked = useRef(false)

  const [zh,setZh] = useState()

      useEffect(()=>{

        if(boxDropLeftRef.current>window.innerWidth-710){
          setBoxLeft(window.innerWidth-710)
          boxLeftRef.current = window.innerWidth-710
          boxDropLeftRef.current = window.innerWidth-710
        }

        if(!zh){
          setZh(height)
        }
        else{
          setZh()
        }
        
      },[show])

  const zee = height;
  
  


  useEffect(()=>{
    const checkSize = () => {
      setIsMd(window.innerWidth >= 768);
      // if(boxDropLeftRef.current>window.innerWidth-700){
      //     setBoxLeft(window.innerWidth-700)
      //     boxLeftRef.current = window.innerWidth-700
      //     boxDropLeftRef.current = window.innerWidth-700
      //   }

    
    }
    checkSize(); 
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  },[])

  const [boxTop,setBoxTop] = useState(95)
  const [boxLeft,setBoxLeft] = useState(890)

  const boxLeftRef = useRef(890);
  const boxTopRef = useRef(95);
  const boxDropLeftRef = useRef(890);

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

  },[containerRef])



  return (
   <>
    <div  style={dynamicStyle} className={` ${show?'':'hidden'} max-md:h-full max-md:bottom-0 z-50 border-2 max-md:fixed max-md:rounded-t-3xl max-md:mt-20 max-md:w-full select-none  flex flex-col box md:absolute overflow-hidden md:w-[800px] md:h-[400px] md:rounded-3xl ${darkMode?'bg-[#212121] border-white':'bg-[#F9FCEA] border-black'} `}>
        
        <div ref={boxRef} className= {`px-5 sticky z-30 ${darkMode?'bg-[#C6494A] text-[#fff] border-b-white border-b-2':'bg-[#C6494A] text-[#fff]'}  top-0 flex items-center justify-between cursor-pointer w-full h-[50px] `}>
          <div className="text-xl " >Projects</div>
          <div onClick={()=>{
                    if(allowSound){
                      sound.play();
                    }
                    setHeight(height-1);
                    setShow(false);
                }} className="text-xl hover:scale-110 ">[x]</div>
        </div>
        <div className="w-full h-full flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-10 overflow-y-scroll ">

          <div className=" flex flex-col gap-5 p-5 ">

            { projectArray.map((proj,i)=> <div key={i} className="h-[320px]  flex max-md:flex-col py-3 items-center md:justify-between md:gap-3  w-full">
                <span className={`text-5xl font-lato font-bold pb-2 italic text-[#FB3E5A] md:hidden uppercase `}>{proj.name}</span>
                <div style={{ backgroundImage: `url(${proj.image})`}} className='md:w-[40%] w-full group overflow-hidden relative h-full bg-cover rounded-3xl '>
                  <div className="w-full h-full bg-[#000000aa] md:hidden max-md:hidden text-[#ffffff74] px-10 md:group-hover:flex justify-between items-center ">
                    <a target="_blank" href={`${proj.github}`}><FaGithub className='w-[40px] cursor-pointer h-full' /></a>
                    <a target="_blank" href={`${proj.demo}`}><FaExternalLinkAlt className='w-[40px] h-[40px] cursor-pointer bg-[#ffffff74] text-[#110B08] px-2 rounded-full' /></a>
                    <a target="_blank" href={`${proj.link}`}><FaInfoCircle className='w-[40px] h-full cursor-pointer ' /></a>                  
                  </div>
                </div>
                <div className={`flex font-lato font-light italic text-[#5E9487] md:hidden gap-3 `}>
                  <a className={`underline`} >Github</a>
                  <a className={`underline`} >Demo</a>
                  <a className={`underline`} >Learn More</a>
                </div>
                <div className={`md:w-[60%] max-md:hidden h-full flex gap-2 flex-col items-start p-5 ${darkMode? ' text-[#fff] ':' text-[#000]'} `}>
                  <div className={`font-lato font-bold italic text-[#FB3E5A] uppercase text-4xl`}>{proj.name}</div>
                  <div className={`font-light font-lato`}>{proj.description}</div>
                  <div className={`flex font-lato font-light italic text-[#5E9487] gap-3 `}>
                  <a href={`${proj.github}`} className={`underline`} >Github</a>
                  <a href={`${proj.demo}`} className={`underline`} >Demo</a>
                  <a href={`${proj.link}`} className={`underline`} >Learn More</a>
                </div>
                </div>
              </div>
              
               )

            }

          </div>
          
        </div>

        

      </div>
      
    </>

  )
}

export default Projects
