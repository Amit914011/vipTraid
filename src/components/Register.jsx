import React from 'react';
// import contactBanner from '../assets/contact-banner1.png'

export default function Register() {
  return (
    <div>
      <div className='w-full h-auto flex flex-col justify-center items-center welcome-main-container'>
        <div className='w-full h-auto flex flex-col justify-center items-center welcome-boxcontainer'>
          <div className='w-full mt-20 flex flex-col justify-center items-center' id='bannerimage'>
            <h1 className='text-[65px] uppercase font-bold z-50 text-white transition-transform duration-500 hover:scale-105'>Register</h1>
          </div>
          <div className='w-full h-auto p-[5%]'>
            <form action="post">
              <h1 className='text-3xl font-bold mb-4 text-white'>Personal Details</h1>
              <div className='w-full md:flex gap-6 items-center justify-center mb-10'>
                <input type="text" placeholder='Enter Sponsor ID (Optional)' className='w-full md:w-[50%] h-[50px] px-3 text-xl font-medium border rounded mb-3 md:mb-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500' name='sponsorId' />
                <input type="text" placeholder='Enter Sponsor Name' className='w-full md:w-[50%] h-[50px] px-3 text-xl font-medium border rounded mb-3 md:mb-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500' name='sponsorname' />
              </div>
              <div className='w-full md:flex gap-6 items-center justify-center mb-7'>
                <input type="text" placeholder='Enter First Name' className='w-full md:w-[50%] h-[50px] px-3 text-xl border font-medium rounded mb-3 md:mb-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500' name='firstname' />
                <input type="text" placeholder='Enter Last Name' className='w-full md:w-[50%] h-[50px] px-3 text-xl font-medium border rounded mb-3 md:mb-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500' name='lastname' />
              </div>
              <div className='w-full md:flex gap-6 items-center justify-center mb-10'>
                <div className='flex-col w-[50%]'>
                  <h1 className='text-xl mb-2 text-white font-bold'>D.O.B.</h1>
                  <div className='flex justify-between'>
                    <select name="date" className='w-[200px] h-[50px] border px-2 me-5 rounded text-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      {Array.from({ length: 31 }, (_, i) => (
                        <option value={i + 1} key={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                    <select name="month" className='w-[200px] h-[50px] border px-2 me-5 rounded text-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, i) => (
                        <option value={month} key={i}>{month}</option>
                      ))}
                    </select>
                    <select name="year" className='w-[200px] h-[50px] border px-2 me-5 rounded text-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      {Array.from({ length: 22 }, (_, i) => (
                        <option value={2000 + i} key={2000 + i}>{2000 + i}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <input type="text" placeholder='Enter Mother Name' className='w-full md:w-[50%] h-[50px] px-3 text-xl font-medium border rounded mt-7 mb-3 md:mb-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
              </div>

              <div className='w-full md:flex gap-6 items-center justify-center mb-10'>
                <select name="countrycode" className='w-[50%] h-[50px] border px-2 rounded text-xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="india+91">India +91</option>
                  <option value="india+92">India +92</option>
                  <option value="india+93">India +93</option>
                </select>
                <input type="email" placeholder='Enter Mobile Number' className='w-full md:w-[50%] h-[50px] px-3 text-xl font-medium border rounded mb-3 md:mb-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
              </div>
              <div className='w-full md:flex gap-6 items-center justify-center mb-10'>
                <input type="text" placeholder='Enter Email Address' className='w-full md:w-[50%] h-[50px] px-3 text-xl font-medium border rounded mb-3 md:mb-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                <input type="text" placeholder='Enter OTP' className='w-full md:w-[50%] h-[50px] px-3 text-xl font-medium border rounded mb-3 md:mb-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
              </div>
              <div className='w-full mb-10'>
                <h1 className='text-3xl font-bold mb-4 text-white'>KYC Information</h1>
                <div className='flex gap-6'>
                  <select name="" className='w-[50%] h-[50px] border px-2 rounded text-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="">Select Document Type</option>
                    <option value="adharcard">Aadhar Card</option>
                    <option value="drivinglicence">Driving Licence</option>
                    <option value="passport">Passport</option>
                  </select>
                  <input type="text" placeholder='Enter Document Number' className='w-full md:w-[50%] h-[50px] px-3 text-xl font-medium border rounded mb-3 md:mb-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
              </div>
              <div className='flex w-full gap-6 mb-10'>
                <div className='w-[50%]'>
                  <h1 className="text-xl text-white">Front Document</h1>
                  <input type="file" className='w-[100%] h-[50px] bg-white pt-3 pl-3 rounded transition-all duration-300 focus:outline-none' />
                </div>
                <div className='w-[50%]'>
                  <h1 className="text-xl text-white">Back Document</h1>
                  <input type="file" className='w-[100%] h-[50px] bg-white pt-3 pl-3 rounded transition-all duration-300 focus:outline-none' />
                </div>
              </div>
              <div className='w-full md:flex gap-6 items-center justify-center mb-10'>
                <input type="password" placeholder='Enter Password' className='w-full md:w-[50%] h-[50px] px-3 text-xl font-medium border rounded mb-3 md:mb-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                <input type="text" placeholder='Enter Confirm Password' className='w-full md:w-[50%] h-[50px] px-3 text-xl font-medium border rounded mb-3 md:mb-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
              </div>
              <div className='flex justify-center items-center gap-5'>
                <button className='bg-black text-white px-10 py-3 text-xl uppercase font-bold rounded hover:bg-slate-900 transition-all duration-300 transform hover:scale-105'>Submit</button>
                <button className='bg-black text-white px-10 py-3 text-xl uppercase font-bold rounded hover:bg-slate-900 transition-all duration-300 transform hover:scale-105'>Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
