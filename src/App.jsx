import React from 'react'
import {Bar} from "react-chartjs-2"
import {Chart as ChartJS, CategoryScale, LinearScale,BarElement, Title, Tooltip} from "chart.js"
import logo from "./images/logo.svg"

ChartJS.register(CategoryScale, LinearScale,BarElement, Title, Tooltip)


const App = () => {
  const state={
    labels:["mon","tue","wed","thu","fri","sat","sun"],
    datasets:[{
      backgroundColor:"hsl(10, 79%, 65%)",
      hoverBackgroundColor:"hsl(186, 34%, 60%)",
      borderRadius:8,
      data:[17.45,34.91,52.36,31.07,23.39,43.28,25.48]
    }],
    
  }
  return (
    <>
      <div className='max-w-xl mx-auto p-5 flex  justify-center flex-col h-screen'>
        <div className='soft-red p-5 rounded-2xl shadow flex items-center justify-between '>
          <h2 className='font-bold text-white text-3xl'><span className='block text-base font-normal'>My Balance</span>$921.48</h2>
          <img src={logo} alt="" />
        </div>
        <div className='bg-white mt-8 p-8 rounded-2xl box-shadow'>
          <div className='pb-8'>
            <h1 className='font-bold text-2xl md:text-3xl mb-5'>Spending - Last 7 days</h1>
            <Bar data={state}/>
          </div>

          <div className='border-t border-slate-200 pt-8 flex justify-between'>
            <h2 className='font-bold text-4xl'><span className='text-base block font-normal opacity-75'>Total this month</span>$478.33</h2>
            <h3 className='flex items-end justify-end flex-col text-base font-bold'>  +2.4%
              <span className='font-normal block opacity-75'>from last month</span>
            
            </h3>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App