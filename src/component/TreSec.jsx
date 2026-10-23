import React from 'react'
import bg3 from "../assets/bg-3png.png"
export default function TreSec() {
  return (
    <div className='w-full  py-19 px-65.75 bg-no-repeat bg-cover flex justify-center' style={{backgroundImage: `url(${bg3})`}}>
        <div className='container w-full flex justify-between items-center'>
            <h1 className='text-[48px] text-SacramentoStateGreen font-bold font-livvic'>Ready to get started?</h1>
            <button className='text-SacramentoStateGreen text-[18px] font-semibold border-2 border-SacramentoStateGreen rounded-4xl px-8 py-2.75 hover:bg-SacramentoStateGreen hover:text-white transition'>contact us</button>
        </div>
    </div>
  )
}
