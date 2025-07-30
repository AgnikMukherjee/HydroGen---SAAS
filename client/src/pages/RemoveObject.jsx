import { Scissors, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const RemoveObject = () => {

   const [input, setInput] = useState('')
   const [object, setObject] = useState('')
  
    const onSubmitHandler = async (e) => {
      e.preventDefault()
      console.log(input, selectedCategory)
    }

  return (
     <div className='h-full overflow-y-scroll p-6 flex items-start flex-row gap-4 text-slate-700'>
      {/* col 1 */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#4A7AFF]' />
          <h1 className='text-2xl font-semibold'>Object Removal</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Upload image</p>
        <input onChange={(e) => setInput(e.target.files[0])} type="file" accept='image/*' required className='w-full p-2 px-2 mt-2 outline-none border border-gray-300 rounded-md text-gray-600' />

        <p className='mt-6 text-sm font-medium'>Describe the object you want to remove</p>

        <textarea onChange={(e) => setObject(e.target.value)} value={object} rows={4} placeholder='e.g., a chair, a person , only single object name.' required className='w-full p-2 px-2 mt-2 outline-none border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-500' />

        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          <Scissors className='w-5' />
          Remove Object
        </button>
      </form>
      {/* col 2 */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 flex flex-col min-h-75 '>
        <div className='flex items-center gap-3'>
          <Scissors className='w-5 h-5 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold'>Processed Image Preview</h1>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Scissors className='w-9 h-9' />
            <p>Upload an image and click "Remove Object" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RemoveObject