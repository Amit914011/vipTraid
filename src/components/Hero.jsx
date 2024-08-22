import React from 'react'
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
import tradImage from '../assets/traid_image.png'
import { FaCircleCheck } from "react-icons/fa6";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mapimage1 from '../assets/mpa1.png'
import mapimage2 from '../assets/map2.png'
import mapimage3 from '../assets/map3.png'
import mapimage4 from '../assets/map4.png'
import mapimage5 from '../assets/map5.png'
import mapimage6 from '../assets/map6.png'
import futureimage1 from '../assets/feature-1.png'
import futureimage2 from '../assets/feature-2.png'
import futureimage3 from '../assets/feature-3.png'
import futureimage4 from '../assets/feature-4.png'
import futureimage5 from '../assets/feature-5.png'
import futureimage6 from '../assets/feature-6.png'
import traid from '../assets/traid.jpg'
import blogimage1 from '../assets/blog1.jpg'
import rocket from '../assets/rocket.gif'



export default function Hero() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    {/* ///////////////////// Banner Section Start///////////////////////////////////////// */}
    <div className='bannerimage p-20  flex items-center justify-center '>
      <div className='w-[50%]'>
        <h1 className='md:text-[56px] text-white customeFontFamily'>Invest in Stocks, Forex and Commodity market way to trade </h1>
        <p className='text-white text-[18px]'>Welcome to VIP Traid, your gateway to financial freedom through the exciting world of forex trading. At VIP Traid, we believe that everyone has the potential to achieve financial success with the right guidance and resources. Our comprehensive programs and supportive community are designed to help you navigate the forex market with confidence and skill.</p>
        <div className='flex gap-3 mt-3'>
        <button className='btn  btn-secondary px-4 uppercase'>Learn More</button>
        <button className='btn  btn-secondary px-4 uppercase'>Contact Us</button>
        </div>
      </div>
      <div className=' w-[50%]'>Section 2</div>
    </div>
    {/* //////////////////////////////// Banner Section End ////////////////////////////// */}

    {/* /////////////////////////////////// Welcome Section Start ///////////////////////////// */}
    <div className='welcome-main-container h-[350px]'>
        <div className='welcome-boxcontainer h-[350px] relative'>
            <p className='company-text absolute top-[50%] -left-10 text-gray-500'>Company Name</p>
            <div className='welcome-text-container w-full text-center pt-20 text-3xl font-bold text-white flex flex-col items-center justify-center'>
                <h1 className='text-4xl'>WELCOME TO <span className='text-[#6272F7]'>COMPANY NAME</span> </h1>
                <p className='mt-10 font-medium italic'><RiDoubleQuotesL className='inline text-[50px] me-16 text-[#404040]'/> We Believe & Live in Reality<RiDoubleQuotesR className='inline ms-16 text-[50px] text-[#404040]' /></p>
                <p className='w-[65%] text-[16px] font-semibold mt-10 leading-6'>We are happy to inform you that you all are not just our clients but also our business partners. Together we will make good profits in the global market. Join us at VIP TRADE, where we are committed to empowering the Forex and Commodity markets with cutting-edge solutions and unwavering dedication to our customers.</p>
            </div>
        </div>
    </div>
    {/* /////////////////////////////////// Welcome Section End ///////////////////////////// */}

    {/* /////////////////////////////////// Work Parts Section Start ///////////////////////// */}
        <div className='workpart-container '>
            <div className='workpart-subcontainer text-center pt-20 text-3xl font-bold text-white flex flex-col items-center justify-start relative'>
            <p className='company-text absolute top-[50%] -right-20 text-gray-500'>Company Name</p>
            <h1 className='text-4xl'>WHAT IS VIP TRAID &  <span className='text-[#6272F7]'>HOW IT WORKS?</span> </h1>
            <p className='mt-10 text-xl font-medium italic w-[50%]'>Join us at VIP TRADE, where we are committed to empowering the Forex and Commodity markets with cutting-edge solutions and unwavering dedication to our customers.</p>
            <div className='w-full flex items-center justify-center mt-16 px-20'>
                <div className=' w-[50%]'>
                    <img src={tradImage} alt="" width='100%' />
                </div>
                <div className='w-[50%] pe-[50px]'>
                <h1 className='text-4xl text-left'>We’ve built this platform to deal in Forex and Commodity market. </h1>
                <p className='mt-3 text-lg font-medium  text-left'>Welcome to VIP TRAID, where we power the Forex and Commodity market with innovative and reliable solutions for our customers. Our mission is to achieve mutual success with our clients in the global market, built on a foundation of Trust and Commitment.</p>
                <p className='mt-3 text-base font-medium  text-left'><FaCircleCheck className='inline me-3' />We Belive & Live in Reality.</p>
                <p className='mt-3 text-base font-medium text-left'><FaCircleCheck className='inline me-3' />Providing the help for your given transaction a full support for 24x7.</p>
                
                </div>
            </div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    {/* /////////////////////////////////// Work Parts Section End ///////////////////////// */}

    {/* //////////////////////////////////// Traid RoadMap Start ///////////////////////////////////*/}

        <div className='w-full bg-[#1f222b;] pt-12 flex flex-col items-center pb-10'>
        <h1 className='text-4xl text-white text-center font-bold'>VIP TRAID <span className='text-[#6272F7]'>RoadMap</span> </h1>
        <div className='w-full flex mt-20 px-20'>
            <div className='w-[50%]'>
            <div className='relative'>
            <div className='flex items-start gap-3 px-3 mapoutline'>
                <img src={mapimage1} alt="" width='60px' className='p-2 rounded-full mapimagebackground' />
                <div className='pt-3'>
                    <h1 className='text-white text-3xl font-bold'>Investing Program</h1>
                    <p className='text-[#888]'>VIP Trade Company is now launching its best investment programs through which people can get different types of income. trade profit income, referral income, reward income and also royalty income. He can earn a lot from all these income.</p>
                </div>
            </div>
        </div>
            <div className='relative mt-3 '>
            <div className='flex items-start gap-3 px-3 mapoutline'>
                <img src={mapimage2} alt="" width='60px' className='p-2 rounded-full mapimagebackground' />
                <div className='pt-3'>
                    <h1 className='text-white text-3xl font-bold'>Investing Program</h1>
                    <p className='text-[#888]'>VIP Trade Company is now launching its best investment programs through which people can get different types of income. trade profit income, referral income, reward income and also royalty income. He can earn a lot from all these income.</p>
                </div>
            </div>
        </div>
            <div className='relative mt-3 '>
            <div className='flex items-start gap-3 px-3'>
                <img src={mapimage3} alt="" width='60px' className='p-2 rounded-full mapimagebackground' />
                <div className='pt-3'>
                    <h1 className='text-white text-3xl font-bold'>Investing Program</h1>
                    <p className='text-[#888]'>VIP Trade Company is now launching its best investment programs through which people can get different types of income. trade profit income, referral income, reward income and also royalty income. He can earn a lot from all these income.</p>
                </div>
            </div>
        </div>
            </div>
       
        <div className='w-[50%]'>
        <div className='relative'>
            <div className='flex items-start gap-3 px-3 mapoutline'>
                <img src={mapimage4} alt="" width='60px' className='p-2 rounded-full mapimagebackground' />
                <div className='pt-3'>
                    <h1 className='text-white text-3xl font-bold'>Investing Program</h1>
                    <p className='text-[#888]'>VIP Trade Company is now launching its best investment programs through which people can get different types of income. trade profit income, referral income, reward income and also royalty income. He can earn a lot from all these income.</p>
                </div>
            </div>
        </div>
        <div className='relative mt-3'>
            <div className='flex items-start gap-3 px-3 mapoutline'>
                <img src={mapimage5} alt="" width='60px' className='p-2 rounded-full mapimagebackground' />
                <div className='pt-3'>
                    <h1 className='text-white text-3xl font-bold'>Investing Program</h1>
                    <p className='text-[#888]'>VIP Trade Company is now launching its best investment programs through which people can get different types of income. trade profit income, referral income, reward income and also royalty income. He can earn a lot from all these income.</p>
                </div>
            </div>
        </div>
        <div className='relative mt-3'>
            <div className='flex items-start gap-3 px-3'>
                <img src={mapimage6} alt="" width='60px' className='p-2 rounded-full mapimagebackground' />
                <div className='pt-3'>
                    <h1 className='text-white text-3xl font-bold'>Investing Program</h1>
                    <p className='text-[#888]'>VIP Trade Company is now launching its best investment programs through which people can get different types of income. trade profit income, referral income, reward income and also royalty income. He can earn a lot from all these income.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>

    {/* //////////////////////////////////// Traid RoadMap End /////////////////////////////////////*/}


    {/* /////////////////////////////////////VIP TRAID BEST FEATURES Section Start//////////////////////////////// */}
    <div className='w-full h-auto bg-black px-[80px] pb-14'>
        <div className='pt-10'>
        <h1 className='text-4xl text-white text-center font-bold'>VIP TRAID <span className='text-[#6272F7]'>BEST FEATURES</span> </h1>
        <p className='text-white text-[18px] text-center'>VIP TRAID provide Safe & Secure, Better Bonus and Easy to access platform for customers.</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100 cardbackgroundcontainer">
      <div className="card-body cardbackground p-5 flex flex-col justify-center items-center text-white">
        <img src={futureimage1} alt="" width='60px' className='cardimagebackground p-3' />
        <h5 className="card-title text-3xl font-bold">Card title</h5>
        <p className="card-text text-center">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100 cardbackgroundcontainer">
      <div className="card-body cardbackground p-5 flex flex-col justify-center items-center text-white">
        <img src={futureimage2} alt="" width='60px' className='cardimagebackground p-3' />
        <h5 className="card-title text-3xl font-bold">Card title</h5>
        <p className="card-text text-center">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100 cardbackgroundcontainer">
      <div className="card-body cardbackground p-5 flex flex-col justify-center items-center text-white">
        <img src={futureimage3} alt="" width='60px' className='cardimagebackground p-3' />
        <h5 className="card-title text-3xl font-bold">Card title</h5>
        <p className="card-text text-center">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100 cardbackgroundcontainer">
      <div className="card-body cardbackground p-5 flex flex-col justify-center items-center text-white">
        <img src={futureimage4} alt="" width='60px' className='cardimagebackground p-3' />
        <h5 className="card-title text-3xl font-bold">Card title</h5>
        <p className="card-text text-center">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100 cardbackgroundcontainer">
      <div className="card-body cardbackground p-5 flex flex-col justify-center items-center text-white">
        <img src={futureimage5} alt="" width='60px' className='cardimagebackground p-3' />
        <h5 className="card-title text-3xl font-bold">Card title</h5>
        <p className="card-text text-center">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100 cardbackgroundcontainer">
      <div className="card-body cardbackground p-5 flex flex-col justify-center items-center text-white">
        <img src={futureimage6} alt="" width='60px' className='cardimagebackground p-3' />
        <h5 className="card-title text-3xl font-bold">Card title</h5>
        <p className="card-text text-center">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

    </div>
    {/* /////////////////////////////////////VIP TRAID BEST FEATURES Section End//////////////////////////////// */}


    {/* /////////////////////////////////////BENEFITS FOREX & COMMODITY Section Start /////////////////////////// */}
    <div className='w-full h-auto bg-[#281F2F]'>
        <div className='w-full h-auto p-20'>
           <div className='flex flex-col items-center gap-9'>
           <h1 className='text-4xl text-white text-center font-bold'>BENEFITS FOREX & COMMODITY</h1>
           <p className='text-white text-[18px] text-center w-[70%] flex '>A Forex & Commodity , Forex-currency or Forex is a digital currency designed to work as a medium of exchange through a decentralized network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.</p>
           </div>
           <img src={traid} alt="" />
        </div>

    </div>

    {/* /////////////////////////////////////BENEFITS FOREX & COMMODITY Section End///////////////////////////// */}



    {/* /////////////////////////////////////Our Blog and News Section End///////////////////////////// */}

    <div className='w-full h-auto relative'>
        <div className='w-full h-auto p-14 bg-[#090717]'>
        <div className='flex flex-col items-center gap-9'>
            <img src={rocket} alt=""  className='absolute top-0 right-0' width='200px'/>
           <h1 className='text-4xl text-white text-center font-bold'>Our Blog and News</h1>
           <p className='text-white text-[18px] text-center w-[70%] flex '>Our blog provide a better information about investment,forex trading and current market status.</p>
           </div>
           <div className="slider-container border">
      <Slider {...settings}>
        <div>
        <div class="col">
    <div class="card">
      <img src={blogimage1} class="card-img-top" alt="..."/>
      <div class="card-body bg-[#090717] text-white text-center">
        <h5 class="card-title text-2xl">Card title</h5>
        <h5 class="card-title">Monday, 2024 | By John Don</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
        </div>
        <div>
        <div class="col">
    <div class="card">
      <img src={blogimage1} class="card-img-top" alt="..."/>
      <div class="card-body bg-[#090717] text-white text-center">
        <h5 class="card-title text-2xl">Card title</h5>
        <h5 class="card-title">Monday, 2024 | By John Don</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
        </div>
        <div>
        <div class="col">
    <div class="card">
      <img src={blogimage1} class="card-img-top" alt="..."/>
      <div class="card-body bg-[#090717] text-white text-center">
        <h5 class="card-title text-2xl">Card title</h5>
        <h5 class="card-title">Monday, 2024 | By John Don</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
        </div>
        <div>
        <div class="col">
    <div class="card">
      <img src={blogimage1} class="card-img-top" alt="..."/>
      <div class="card-body bg-[#090717] text-white text-center">
        <h5 class="card-title text-2xl">Card title</h5>
        <h5 class="card-title">Monday, 2024 | By John Don</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
        </div>
        <div>
        <div class="col">
    <div class="card">
      <img src={blogimage1} class="card-img-top" alt="..."/>
      <div class="card-body bg-[#090717] text-white text-center">
        <h5 class="card-title text-2xl">Card title</h5>
        <h5 class="card-title">Monday, 2024 | By John Don</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
        </div>
        <div>
        <div class="col">
    <div class="card">
      <img src={blogimage1} class="card-img-top" alt="..."/>
      <div class="card-body bg-[#090717] text-white text-center">
        <h5 class="card-title text-2xl">Card title</h5>
        <h5 class="card-title">Monday, 2024 | By John Don</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
        </div>
        <div>
        <div class="col">
    <div class="card">
      <img src={blogimage1} class="card-img-top" alt="..."/>
      <div class="card-body bg-[#090717] text-white text-center">
        <h5 class="card-title text-2xl">Card title</h5>
        <h5 class="card-title">Monday, 2024 | By John Don</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
        </div>
        <div>
        <div class="col">
    <div class="card">
      <img src={blogimage1} class="card-img-top" alt="..."/>
      <div class="card-body bg-[#090717] text-white text-center">
        <h5 class="card-title text-2xl">Card title</h5>
        <h5 class="card-title">Monday, 2024 | By John Don</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
        </div>
      </Slider>
    </div>
        </div>
    </div>

    {/* /////////////////////////////////////Our Blog and News Section End///////////////////////////// */}
    </>
  )
}
