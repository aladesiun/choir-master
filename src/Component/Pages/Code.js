import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Code = () => {

  const [numberInput, setNumberInput] = useState('')

  const handleNumberInput = (e) => {
    setNumberInput(e.target.value)
  }
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 pt-20 md:pt-0">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Forgot your password?
            </h1>
            <p className="font-light text-gray-500 dark:text-gray-400">Don't fret! Just type in the 6 digits letters code we sent to a***************@gmail.com!</p>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label for="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter code</label>
                <input value={numberInput} onChange={handleNumberInput} type="number" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*** *** ***" required="" />
              </div>
              <div className="ml-3 text-center text-sm">
                <label for="terms" className="font-light text-gray-500 dark:text-gray-300">Didn't get a code <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Click here</a></label>
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><Link to='/ResetPassword'>Reset password</Link></button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Code