import { useState, useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState('')

  //ref hook

  const passwordRef = useRef(null)

  const passswordGenerator = useCallback(() => {
    let pass = ''
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%&~+=_-{}*"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  // passwordRef.current?.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(password)
},[password] )

  useEffect(()=>{passswordGenerator()},[length,numberAllowed,charAllowed,passswordGenerator])
  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 h-full justify-center mt-80 text-2xl'>
        <h1 className='text-white text-center text-2xl my-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 text-slate-600 bg-white' placeholder='password' readOnly 
           ref={passwordRef} />

          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-yellow-300'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={9}
              max={54}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput' onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
              defaultChecked={charAllowed}
              id='characterInput' onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
