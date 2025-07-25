import { Edit, Sparkles } from 'lucide-react'
import { useState } from 'react'

const WriteArticle = () => {

  const articleLength = [
    { length: 800, text: 'Short (500-800 words)' },
    { length: 1200, text: 'Medium (800-1200 words)' },
    { length: 1600, text: 'long (1200+ words)' }
  ]

  const [selectedLength, setSelectedLength] = useState(articleLength[0])
  const [input, setInput] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    console.log(input, selectedLength)
  }
  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-row gap-4 text-slate-700'>
      {/* col 1 */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#4A7AFF]' />
          <h1 className='text-2xl font-semibold'>Article Configuration</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Article Topic</p>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter the topic of your article' required className='w-full p-2 px-2 mt-2 outline-none border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500' />

        <p className='mt-4 text-sm font-medium'>Article length</p>
        <div className='flex flex-wrap gap-3 mt-3 sm:max-w-9/11'>
          {
            articleLength.map((item, index) => (
              <span onClick={() => setSelectedLength(item)}
                className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedLength.text === item.text ? 'bg-blue-50 text-blue-700' : 'border-gray-300 text-gray-500'}`} key={index} >
                {item.text}
              </span>
            ))
          }
        </div>

        <br />
        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          <Edit className='w-5' />
          Generate Article
        </button>
      </form>
      {/* col 2 */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 flex flex-col min-h-90 max-h-[600px]'>
          <div className='flex items-center gap-3'>
              <Edit className='w-5 h-5 text-[#4A7AFF]'/>
              <h1 className='text-xl font-semibold'>Article Preview</h1>
          </div>
          <div className='flex-1 flex justify-center items-center'>
            <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
              <Edit className='w-9 h-9'/>
              <p>Enter a topic and click "Generate Article" to get started</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default WriteArticle