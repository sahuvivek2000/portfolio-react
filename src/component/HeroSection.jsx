import React from 'react'
import HeroSvg from '../assets/HeroSvg'

const renderLetters = (name, key) => {
    if (!name) return
    return name.split('').map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ))
  }
const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 h-[90dvh] md:grid-cols-2 items-center place-items-center">
        <div className="col-start-1 md:row-start-1 ml-4">
          <h1 className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter">
            <span className="block text-[#CC8B65] drop-shadow-[11px_8px_0px_#100C0D]">
              {/* {renderLetters(slice.primary.first_name, 'first')} */}
              Vivek
            </span>
            <span className="-mt-[.2em] block text-[#E3DCD2] drop-shadow-[11px_8px_0px_#100C0D]">
              {/* {renderLetters(slice.primary.last_name, 'last')} */}
              Sahu
            </span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-[#CC8B65] via-[#dab98b] to-[#E3DCD2] bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-100 md:text-4xl drop-shadow-[3px_4px_0px_#100C0D]">
            Full Stack Developer
          </span>
        </div>
        <div className='border-[#E3DCD2] border-4 bg-[#100c0d81] drop-shadow-[14px_14px_4px_#100C0D] p-5 rounded-2xl'>
        <HeroSvg />
        </div>
      </div>
  )
}

export default HeroSection