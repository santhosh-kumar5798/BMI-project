import React, { useState } from 'react'
import image from "./assets/image.jpg"

function Bmi() {
    const [height,setHeight] =useState("");
    const [weight,setWeight] =useState("");
    const [bmi,setBmi] = useState(null)
    const [bmiStatus,setBmiStatus] = useState("")
    const [err,setErr] = useState("")

    const calculateBmi = ()=>{
        const validHeight = /^\d+$/.test(height);
        const validWeight = /^\d+$/.test(weight);
        if(validHeight && validWeight){
           const heightInMeter = height / 100;
           const bmiValue = weight / (heightInMeter * heightInMeter);
           setBmi(bmiValue.toFixed(2));
           if(bmiValue < 18.5){
            setBmiStatus("under Weight")
           }
           else if(bmiValue >=18.5 && bmiValue < 24.9){
            setBmiStatus("normal Weight")
           }
           else if(bmiValue >=24.9 && bmiValue < 29.9){
            setBmiStatus("over weight")
           }
           else if( bmiValue >=29.9 && bmiValue < 34.9){
            setBmiStatus("obese")
           }
           else{
            setBmiStatus("extremely obese")
           }
           setErr("")

        }
        else{
            setBmi(null)
            setBmiStatus("")
            setErr("please enter valid height and weight")
        }
    }
    const reset = ()=>{
        setHeight("");
        setWeight("");
        setBmi(null);
        setBmiStatus("")
    }

  return (
    <>
    <div className="w-full h-lvh bg-slate-400 flex justify-center items-center">
      <div className="w-full md:w-[60%] h-[70%] bg-slate-600 rounded-xl flex">
        <div className="w-1/2 p-5">
            {/* bmi image */}
            <img src={image} alt="" className='h-full rounded-lg' />
        </div>
        <div className="w-1/2 flex flex-col gap-5 justify-center items-center">
            {/* bmi form */}
            <h1 className='text-2xl capitalize font-bold '>bmi calculator</h1>
            {/* height */}
            <h3 className='text-red-500 block capitalize'>{err}</h3>
            <div className="">
                
                <label htmlFor="height" className='block'>Height(cm) * </label>
                <input type="text" value={height} onChange={(e)=>setHeight(e.target.value)} id='height' className='bg-gray-300 rounded-lg mt-3 px-3 py-2 placeholder:pl-3 capitalize' placeholder='enter your height' />
            </div>
            {/* weight */}
             <div className="">
                <label htmlFor="weight" className='p-0 block'>weight(kg) * </label>
                <input type="text" value={weight}  onChange={(e)=>setWeight(e.target.value)} id='weight' className='bg-gray-300 rounded-lg mt-3 px-3 py-2 placeholder:pl-3 capitalize' placeholder='enter your weight' />
            </div>
            <div className="">
                <button onClick={calculateBmi} className="bg-slate-700 px-3 text-gray-900 uppercase py-3 rounded-full">calculate bmi</button> <button className="bg-slate-700 px-3 text-gray-900 uppercase py-3 rounded-full" onClick={reset}>reset</button>
            </div>
            {bmi !==null && (
                <div className="border-4 border-gray-700 p-5 ">
                <p className='uppercase'>your bmi:{bmi}</p>
                <p className='uppercase'>status:{bmiStatus}</p>
            </div>
            )}


        </div>

      </div>
    </div>
   
    </>
  )
}

export default Bmi