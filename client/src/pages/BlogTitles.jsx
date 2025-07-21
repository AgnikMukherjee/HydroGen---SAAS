import { Hash, Sparkles } from 'lucide-react'
import { useState } from 'react'

const BlogTitles = () => {

  const blogCategories = ['General','Technology', 'Health', 'Lifestyle', 'Travel', 'Food', 'Education', 'Finance', 'Entertainment']
  
    const [selectedCategory, setSelectedCategory] = useState('General')
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
          <Sparkles className='w-6 text-[#8E37EB]' />
          <h1 className='text-2xl font-semibold'>Blog Title Configuration</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Keyword</p>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter the topic of your article' required className='w-full p-2 px-2 mt-2 outline-none border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500' />

        <p className='mt-4 text-sm font-medium'>Category</p>
        <div className='flex flex-wrap gap-3 mt-3 sm:max-w-9/11'>
          {
            blogCategories.map((item) => (
              <span onClick={() => setSelectedCategory(item)}
                className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedCategory === item ? 'bg-purple-50 text-purple-700' : 'border-gray-300 text-gray-500'}`} key={item} >
                {item}
              </span>
            ))
          }
        </div>

        <br />
        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          <Hash className='w-5' />
          Generate Title
        </button>
      </form>
      {/* col 2 */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 flex flex-col min-h-99 '>
        <div className='flex items-center gap-3'>
          <Hash className='w-5 h-5 text-[#8E37EB]' />
          <h1 className='text-xl font-semibold'>Tiles Preview</h1>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Hash className='w-9 h-9' />
            <p>Enter a topic and click "Generate Title" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogTitles