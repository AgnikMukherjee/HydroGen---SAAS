import { Image, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const GeneratedImages = () => {
  const imageStyles = ['Realistic', 'Anime style', 'Cartoon style', 'Abstract style', 'Vintage style', 'Modern style', 'Fantasy style', 'Minimalist style', 'Cyberpunk style','Pop art style', '3D style', 'Black and white style', 'Graffiti style',, 'Sketch style', 'Watercolor style', 'Oil painting style',, 'Ghibli Style' ]
    
      const [selectedStyle, setSelectedStyle] = useState('Realistic')
      const [input, setInput] = useState('')
      const [publish, setPublish] = useState(false)
    
      const onSubmitHandler = async (e) => {
        e.preventDefault()
        console.log(input, selectedStyle)
      }
      
  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-row gap-4 text-slate-700'>
      {/* col 1 */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#00AD25]' />
          <h1 className='text-2xl font-semibold'>Image Configuration</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Describe your image</p>
        <textarea onChange={(e) => setInput(e.target.value)} value={input} rows={4} placeholder='Describe what do you want in your image' required className='w-full p-2 px-2 mt-2 outline-none border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500' />

        <p className='mt-4 text-sm font-medium'>Style</p>
        <div className='flex flex-wrap gap-3 mt-3 sm:max-w-9/11'>
          {
            imageStyles.map((item) => (
              <span onClick={() => setSelectedStyle(item)}
                className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedStyle === item ? 'bg-green-50 text-green-700' : 'border-gray-300 text-gray-500'}`} key={item} >
                {item}
              </span>
            ))
          }
        </div>

        <div className='flex items-center gap-2 mt-6'>
          <label className="relative cursor-pointer">
            <input type="checkbox" checked={publish} onChange={(e) => setPublish(e.target.checked)} className="sr-only peer" />
            
            <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition'></div>

            <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition '></span>
          </label>
          <p>Publish to community</p>
        </div>

        <br />
        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          <Image className='w-5' />
          Generate Title
        </button>
      </form>
      {/* col 2 */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 flex flex-col min-h-99 '>
        <div className='flex items-center gap-3'>
          <Image className='w-5 h-5 text-[#00AD25]' />
          <h1 className='text-xl font-semibold'>image Preview</h1>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Image className='w-9 h-9' />
            <p>Enter a topic and click "Generate Image" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneratedImages