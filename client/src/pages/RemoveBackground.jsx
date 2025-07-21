import { Eraser, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const RemoveBackground = () => {

  const [input, setInput] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    console.log(input, selectedCategory)
  }

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-row gap-4 text-slate-700'>
      {/* col 1 */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#FF4938]' />
          <h1 className='text-2xl font-semibold'>Background Removal</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Upload image</p>
        <input onChange={(e) => setInput(e.target.files[0])} type="file" accept='image/*' required className='w-full p-2 px-2 mt-2 outline-none border border-gray-300 rounded-md text-gray-600' />

        <p className='font-xs text-gray-500 font-light mt-1'>Supports JPG, JPEG, PNG and other image formats</p>

        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          <Eraser className='w-5' />
          Remove Background
        </button>
      </form>
      {/* col 2 */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 flex flex-col min-h-75 '>
        <div className='flex items-center gap-3'>
          <Eraser className='w-5 h-5 text-[#FF4938]' />
          <h1 className='text-xl font-semibold'>Processed Image Preview</h1>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Eraser className='w-9 h-9' />
            <p>Upload an image and click "Remove Background" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RemoveBackground