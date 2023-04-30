import React from 'react'
import { Link } from 'react-router-dom';
// Initialization for ES Users
import {
  Ripple,
  Input,
  initTE,
} from "tw-elements";

initTE({ Ripple, Input });


const ForgotPassword = () => {


  return (
    <div className='h-screen bg-neutral-500 pt-48'>
      <div
        class="block max-w-sm rounded-lg m-auto p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
        <h1 className='text-center pb-8 text-2xl text-primary-100 font-bold uppercase'>find your account</h1>
        <form>
            <p className='text-primary-200 py-4 text-lg'>Enter the 6 digits number sent to a*******@gmail.com</p>
          {/* <!--E-mail input--> */}
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="number"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="*** *** ***" />
            <label
              for="exampleInputEmail2"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 peer-focus:text-primary"
            >Email Code</label>
          </div>

          {/* <!--Remember me checkbox--> */}
          <div class="m-6 pt-2">

            <div class="mb-6 text-center">
              <Link to='/ForgotPassword'
                class="text-center transition duration-200 ease-in-out hover:text-primary-700 focus:text-primary-700 text-primary-400"
              >Didn't get a code</Link>
            </div>
          </div>

          {/* <!--Sign in button--> */}
          <Link to='/ResetPassword'>
            <button
              type="submit"
              class="active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Next
            </button>
          </Link>

        </form>
      </div>
    </div>
  )
}

export default ForgotPassword