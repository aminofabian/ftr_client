import React from 'react'

const Slider = () => {
  return (
    <div>
    <fieldset className="flex flex-nowrap items-center w-full space-x-2 dark:text-gray-100">
    <label htmlFor="slider" className="text-sm">
    </label>
    <input id="slider" type="range" value="70" className="w-full h-1 rounded-md bg-primary cursor-pointer accent-primary" />
    <label htmlFor="slider" className="text-sm">
    </label>
    </fieldset>
    </div>
    )
  }
  
  export default Slider