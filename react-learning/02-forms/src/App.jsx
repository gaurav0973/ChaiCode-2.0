import { useState } from 'react'
import './App.css'
import ManualForm from './ManualForm'
import HookForm from './HookForm'

function App() {
  const [tab, setTab] = useState("manual") // manual/reactHookForm

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-3xl font-bold underline">
        Handling Forms in React
      </div>
      <div className='flex gap-4 mt-4 mb-4 '>
          <button className='bg-blue-500 text-white p-2 rounded' onClick={()=> setTab("manual")}>Manual Form</button>
          <button className='bg-blue-500 text-white p-2 rounded' onClick={()=> setTab("reactHookForm")}>HookForm</button>
      </div>
      <div className='p-4'>
        {tab === "manual" ? <ManualForm /> : <HookForm />}
      </div>
    </div>
  )
}

export default App
