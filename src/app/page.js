"use client"
import { useEffect, useState, useRef } from "react";
import ReactHowler from 'react-howler'
import {Howl, Howler} from 'howler';
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Info from "@/components/Info";
import Links from "@/components/Links";
import ContactMe from "@/components/ContactMe";
import { imagesArray } from "@/utils/cloudinaryExports";



export default function Home() {
  const [soundon,setSoundon] = useState(true);
  const containerRef = useRef(null)
  const [showProjects,setShowProjects] = useState(false)
  const [showInfo,setShowInfo] = useState(false)
  const [showLinks,setShowLinks] = useState(false)
  const [showContact,setShowContact] = useState(false)
  const [height,setHeight] = useState(0)
  const [allowSound, setAllowSound] = useState(true)
  const [darkMode, setDarkMode] = useState(true)


  

  const sound = new Howl({
  src: ['https://cdn.jsdelivr.net/gh/ayan-plush/audio_files@main/mouse-click-290204.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.5,
  });

  const sparkle = new Howl({
    src: ['https://cdn.jsdelivr.net/gh/ayan-plush/audio_files@main/51715__bristolstories__u_chimes_short3.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.5,
  });


  const soundHandler = () => {
    if(soundon){
      setSoundon(false);
    }
    else{
      setSoundon(true);
    }
  };

  return ( 
    <div ref={containerRef} className={`overflow-y-hidden h-screen max-h-screen ${darkMode?'bg-[#000]':'bg-[#f9fcea]'} flex flex-col justify-between items-center`}>
      <img src={imagesArray.darkPc} style={{ display: 'none' }} alt="" />
      <img src={imagesArray.pc} style={{ display: 'none' }} alt="" />
      
      <Navbar allowSound={allowSound} setAllowSound={setAllowSound} darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* <Stickers/> */}

        <div
        className={`
          absolute select-none bg-gradient-to-b ${darkMode ? 'from-[#F47980] to-[#BD9CFD]' : 'from-[#F47980] to-[#f9fcea]'} max-w-[100dvw] top-1/7 px-3 md:px-20 lg:top-[12.5%] text-transparent bg-clip-text font-extrabold overflow-hidden text-center text-[16dvw] leading-[1] tracking-[-0.15em] `}>
        PORTFOLIO
      </div>

      <div style={{ backgroundImage: darkMode?`url(${imagesArray.darkPc})`:`url(${imagesArray.pc})` }} className= {`select-none relative max-sm:w-[400px] max-sm:h-[400px] max-lg:w-[500px] max-lg:h-[500px] w-[650px] max-w-[100dvw] h-[650px]  bg-center bg-contain bg-no-repeat `} >
        
        <div className= {`absolute cursor-pointer top-2/45 max-md:-left-1/10 flex flex-col min-w-[200px] items-center md:-right-3/45 md:hover:animate-bounce group`} ><img src="https://res.cloudinary.com/decks92gf/image/upload/v1747708849/f4d1e7fe8af3f2d63e72d4a3d4112336-removebg-preview_afgc8z.webp" className="md:h-[100px] h-[60px] md:w-[100px] w-[60px] " onClick={()=>{
          if(allowSound){sparkle.play();}
        }} /><span className="font-semibold text-[#fff] hidden md:group-hover:block ">My Hobbies ₍^. .^₎Ⳋ </span>
        </div>

        <div className={`absolute flex z-10 h-28/60 w-13/20 top-6/45 justify-start p-3 left-1/5`}>
        
          {/* <div className=" flex flex-col w-1/5 h-full pl-5 md:px-3">
              <div className="h-full cursor-pointer flex flex-col items-center  " ><img src="https://res.cloudinary.com/decks92gf/image/upload/v1747711185/information_qhynbq.webp" className=" lg:h-3/5 lg:w-3/5 max-md:w-[30px] hover:scale-110" /> <div className="text-sm max-sm:text-xs w-full text-[#fff] flex items-center justify-center text-nowrap ">About Me </div> </div>
              <div className="h-full cursor-pointer flex flex-col items-center " ><img src="https://res.cloudinary.com/decks92gf/image/upload/v1747711185/code_jzy8ty.webp" className=" lg:h-3/5 lg:w-3/5 max-md:w-[30px] hover:scale-110" /> <div className="text-sm w-full max-sm:text-xs text-[#fff] flex items-center justify-center text-nowrap ">Projects</div> </div>
              <div className="h-full cursor-pointer flex flex-col items-center " ><img src="https://res.cloudinary.com/decks92gf/image/upload/v1747711185/link_kbkkxb.webp" className=" lg:h-3/5 lg:w-3/5 max-md:w-[30px] hover:scale-110"  /> <div className="text-sm w-full max-sm:text-xs text-[#fff] flex items-center justify-center text-nowrap ">Links</div> </div>
              <div className="h-full cursor-pointer flex flex-col items-center " ><img src="https://res.cloudinary.com/decks92gf/image/upload/v1747711186/letter_gbajb3.webp" className=" lg:h-3/5 lg:w-3/5 max-md:w-[30px] hover:scale-110"  /> <div className="text-sm w-full max-sm:text-xs text-[#fff] flex items-center justify-center text-nowrap ">Contact Me</div> </div>
          </div>
        
          <div className="h-full px-5 pb-3 w-4/5 ">

          </div> */}
          
          <div className= {`h-full w-1/3 max-sm:px-1 px-2 gap-0.5 flex flex-col justify-between items-center`} >
            <div onClick={()=>{
              setShowInfo(true);
              if(!showInfo){
                setHeight(height+1);
              }
              if(allowSound){
                sound.play();
              }
              
            }} className= {`w-full h-1/5 flex flex-col items-start justify-center object-contain`} ><div className={`flex flex-col h-full items-center`}><img src="https://res.cloudinary.com/decks92gf/image/upload/v1747711185/information_qhynbq.webp" className=" h-4/5 hover:scale-110" /> <div className={`text-md flex w-[60px] justify-center max-sm:text-xs max-xs:text-[30px]  text-[#fff] text-nowrap`} >About Me</div></div></div>
            <div onClick={()=>{
              if(!showProjects){
                setHeight(height+1);
              }
              setShowProjects(true);
              if(allowSound){
                sound.play();
              }
            }} className= {`w-full h-1/5 flex flex-col items-start justify-start`} ><div className={`flex flex-col h-full items-center`}><img src="https://res.cloudinary.com/decks92gf/image/upload/v1747711185/code_jzy8ty.webp" className=" h-4/5 hover:scale-110" /> <div className={`text-md flex justify-center max-sm:text-xs max-xs:text-[30px] w-[60px] text-[#fff]  text-nowrap`}>Projects</div></div></div>
            <div onClick={()=>{
              if(!showLinks){
                setHeight(height+1);
              }
              setShowLinks(true);
              if(allowSound){
                sound.play();
              }
            }} className={`w-full h-1/5 flex flex-col items-start justify-start`} ><div className={`flex flex-col h-full items-center`}><img src="https://res.cloudinary.com/decks92gf/image/upload/v1747711185/link_kbkkxb.webp" className=" h-4/5 hover:scale-110" /> <div className={`text-md flex justify-center max-sm:text-xs max-xs:text-[30px] w-[60px]  text-[#fff] text-nowrap `}>Links</div></div></div>
            <div onClick={()=>{
              if(!showContact){
                setHeight(height+1);
              }
              setShowContact(true);
              if(allowSound){
                sound.play();
              }
            }} className= {`w-full h-1/5 flex flex-col items-start justify-start`} ><div className={`flex flex-col h-full items-center`}><img src="https://res.cloudinary.com/decks92gf/image/upload/v1747711186/letter_gbajb3.webp" className=" h-4/5 hover:scale-110" /> <div className={`text-md flex justify-center max-sm:text-xs max-xs:text-[30px] w-[60px] text-[#fff] text-nowrap `}>Contact Me</div></div></div>
          </div>

                    
        </div>

        <img style={{ content: darkMode?`url(${imagesArray.darkSn})`:`url(${imagesArray.sn})` }} className={`absolute h-[30dvw] max-lg:hidden top-6/45 md:top-1/4 lg:right-4/5`}></img>



      </div>


      <div className="w-1/4 h-[10px]">
                  
      </div>

      {/* <div  style={{
        top: `${boxTop-10}px`,
        left: `${boxLeft-150}px`
      }} className=" z-20  flex flex-col box absolute overflow-hidden border-black border-2 w-[400px] h-[400px] rounded-3xl bg-[#fff] ">
        <div ref={boxRef} className=" px-5 sticky z-30 top-0 flex items-center justify-between cursor-pointer w-full h-[50px] bg-[#C64949]">
          <div className="text-xl text-[#fff]" >Projects</div>
          <div onClick={()=>{
                    sound.play();
                    setHideSidebar(true);
                }} className="text-xl text-[#fff] hover:scale-110 ">[x]</div>
        </div>
        <div className="w-full h-full flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-10 overflow-y-scroll ">


        </div>

        

      </div> */}
      <Projects containerRef={containerRef} show={showProjects} setShow={setShowProjects} sound={sound} height={height} setHeight={setHeight} allowSound={allowSound} darkMode={darkMode} />
      <Info containerRef={containerRef} show={showInfo} setShow={setShowInfo} sound={sound} height={height} setHeight={setHeight} allowSound={allowSound} darkMode={darkMode} />
      <Links containerRef={containerRef} show={showLinks} setShow={setShowLinks} sound={sound} height={height} setHeight={setHeight} allowSound={allowSound} darkMode={darkMode} />
      <ContactMe containerRef={containerRef} show={showContact} setShow={setShowContact} sound={sound} height={height} setHeight={setHeight} allowSound={allowSound} darkMode={darkMode} />
      
      
    </div>
  );
}
