import React, { useRef, useState } from 'react'
import { IoMdCopy } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import StrengthIndicator from './StrengthIndicator'
import Checkbox from './Checkbox'

const App = () => {
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState('')
  const [range, setRange] = useState(10)
  const [upperCase, setUpperCase] = useState(false)
  const [lowerCase, setLowerCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [isCopy, setIsCopy] = useState(false)
  const inputRangeRef = useRef(null)

  const handleRange = (e) => {
    setRange(e.target.value)
    const thumbPosition = ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100;
    inputRangeRef.current.style.backgroundSize = `${thumbPosition}% 100%`;
  }

  const handleClick = () => {
    let charset = ''
    if (upperCase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (lowerCase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (numbers) charset += '0123456789'
    if (symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let result = ''
    for (let i = 0; i < range; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      result += charset[randomIndex]
    }
    const strength = result.length * Math.log2(charset.length)

    if (charset.length) {
      setPassword(result)
      if (strength < 25) {
        setStrength('too-weak')
      } else if (strength >= 25 && strength < 50) {
        setStrength('weak')
      } else if (strength >= 50 && strength < 75) {
        setStrength('medium')
      } else {
        setStrength('strong')
      }
    }
  }

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password)
      setIsCopy(true)
      setTimeout(() => {
        setIsCopy(false)
      }, 3000)
    }
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='basis-[35rem] flex flex-col gap-8 m-6'>
        <h1 className='text-center text-header-color text-2xl'>Password Generator</h1>
        <div className='flex justify-between items-center p-5 bg-bg-card-color'>
          <input type='text' disabled placeholder='PTx1f5DaFX' className='outline-none border-none bg-transparent text-3xl text-white w-full max-[500px]:text-xl'
            value={password}
          />
          <div className='flex items-center gap-4'>
            <span className={`text-custom-green-color transition-opacity ${isCopy ? 'opacity-1' : 'opacity-0'}`}>COPIED</span>
            <IoMdCopy className='text-custom-green-color size-7 hover:text-white cursor-pointer'
              onClick={handleCopy}
            />
          </div>
        </div>
        <div className='p-5 bg-bg-card-color text-text-color'>
          <div className='flex justify-between items-center'>
            <p>Character Length</p>
            <p className='text-3xl text-custom-green-color'>{range}</p>
          </div>
          <input type='range' min='1' max='20' className='w-full my-6'
            value={range} onChange={handleRange}
            ref={inputRangeRef}
          />
          <div className='flex flex-col gap-4'>
            <Checkbox id='checkbox1' label='Include Uppercase Letters' value={upperCase} onChange={() => setUpperCase(current => !current)} />
            <Checkbox id='checkbox2' label='Include Lowercase Letters' value={lowerCase} onChange={() => setLowerCase(current => !current)} />
            <Checkbox id='checkbox3' label='Include Numbers' value={numbers} onChange={() => setNumbers(current => !current)} />
            <Checkbox id='checkbox4' label='Include Symbols' value={symbols} onChange={() => setSymbols(current => !current)} />
          </div>
          <div className='p-4 flex justify-between items-center bg-inner-card-color my-6'>
            <p className='text-header-color font-bold text-lg max-[500px]:text-base'>STRENGTH</p>
            <StrengthIndicator strength={strength} />
          </div>
          <button className='w-full border-2 border-custom-green-color p-4 flex justify-center items-center gap-4 bg-custom-green-color hover:bg-bg-card-color text-bg-card-color hover:text-custom-green-color'
            onClick={handleClick}
          >
            <span className='text-lg font-bold'>GENERATE</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
