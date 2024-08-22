import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className='w-full h-auto  bg-black p-16'>
        <div className='flex justify-center items-start text-white pt-20'>
            <div className='w-[30%]'>
                <h1 className='text-3xl'>Logo Here</h1>
                <p>Join us at VIP TRAID, where we are Committed to empowering the Forex and Commodity market with cutting-edge solutions and unwavering dedication to our customers.</p>
            </div>
            <div className='w-[30%] pl-20'>
                <h1 className='text-3xl font-bold mb-7 underline'>Useful Links</h1>
                <ul className='flex flex-col gap-3 text-xl'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Login</li>
                    <li>Register</li>
                </ul>
            </div>
            <div className='w-[30%] text-3xl'>
                <h1>Follow Us on</h1>
                <div className='flex mt-3 gap-3'>
                <FaFacebookF className='border p-2 text-5xl rounded-full cursor-pointer'/>
                <FaTwitter className='border p-2 text-5xl rounded-full cursor-pointer'/>
                <FaLinkedinIn  className='border p-2 text-5xl rounded-full cursor-pointer'/>
                <FaSquareInstagram  className='border p-2 text-5xl rounded-full cursor-pointer'/>
                </div>
            </div>
        </div>
        <div className='w-full h-[100px]'>
            <div className='border-t-2 mt-5 border-dotted'>

            </div>

        </div>
      </div>
    </>
  )
}
