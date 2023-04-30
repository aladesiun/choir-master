import React from 'react'
import { Link } from 'react-router-dom';
// Initialization for ES Users
import {
    Ripple,
    Input,
    initTE,
} from "tw-elements";

initTE({ Ripple, Input });

const login = () => {

    return (
        <div className='h-screen bg-neutral-500 pt-32'>
            <div
                class="block max-w-sm rounded-lg m-auto p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
                <h1 className='text-center pb-8 text-2xl text-primary-100 font-bold uppercase'>Login Here</h1>
                <form>
                    {/* <!--E-mail input--> */}
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="email"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInputEmail2"
                            aria-describedby="emailHelp"
                            placeholder="Enter email" />
                        <label
                            for="exampleInputEmail2"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 peer-focus:text-primary"
                        >Email address</label>
                    </div>

                    {/* <!--Password input--> */}
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="password"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInputPassword2"
                            placeholder="Password" />
                        <label
                            for="exampleInputPassword2"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 peer-focus:text-primary"
                        >Password</label>
                    </div>

                    {/* <!--Remember me checkbox--> */}
                    <div class="mb-6  items-center justify-between">
                        <div class="block min-h-[1.5rem] pl-[1.5rem]">

                            <label
                                for="exampleInputPassword2"
                                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 peer-focus:text-primary"
                            >Password</label>
                        </div>
                        <div class="mb-6 flex items-center justify-between">
                            <div class="block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent border-neutral-600 checked:border-primary checked:bg-primary focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    value=""
                                    id="exampleCheck2" />
                                <label
                                    class="inline-block pl-[0.15rem] text-primary-100 hover:cursor-pointer"
                                    for="exampleCheck2">
                                    Remember me
                                </label>
                            </div>
                            <Link to='/ForgotPassword'
                                class="transition duration-200 ease-in-out hover:text-primary-700 focus:text-primary-700 text-primary-400"
                            >Forgot password?</Link>
                        </div>
                    </div>

                    {/* <!--Sign in button--> */}
                    <button
                        type="submit"
                        class="active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Sign in
                    </button>

                    {/* <!--Register link--> */}
                    <p class="mt-6 text-center text-neutral-200">
                        Not a member?
                        <Link
                            to='/Signup'
                            class="pl-1 transition duration-150 ease-in-out text-primary-400 hover:text-primary-500 focus:text-primary-500 active:text-primary-600"
                        >Register</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default login