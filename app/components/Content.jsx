import Image from "next/image"

import phoneClarifion from "@/public/images/phoneClarifion.png"
import profilePhoto1 from "@/public/images/profile/profilePhoto1.png"
import clarifionProduct from "@/public/images/content/clarifionProduct.png"
import saveDiscount from "@/public/images/content/saveDiscount.png"
import cards from "@/public/images/content/cards.png"
import satisfactionGuarantee from "@/public/images/content/satisfactionGuarantee.png"

import Star from "@/public/svgs/Star"


export const Content = () => {
  return (
    <div>
      <div className="bg-[#FAFAFA] mx-auto w-3/4 rounded-md grid grid-cols-2">
        <div className="flex flex-col">
          <Image src={phoneClarifion} width={575} height={591} className="mt-8 mx-auto max-w-[575px]" />
          <div className="bg-white mt-10 mx-auto mb-10 w-full max-w-[575px] rounded-md select-none">
            <div className="flex items-center gap-5 mt-5 mx-5 font-[Manrope]">
              <div className="bg-[#F2F2F2] rounded-full h-[48px] w-[48px]">
                <Image src={profilePhoto1} width={48} height={48} className="rounded-full" />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-1">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-bold text-[20px]">Ken T.</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  <p className="text-green-800">
                    Verified Customer
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mx-5 text-justify mt-4 mb-4 text-[16px]">As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.
            </p>


          </div>
        </div>
        <div className="font-[Manrope]">
          <h1 className="capitalize text-[32px] mt-8"><span className="text-[#2C7EF8]">ONE TIME ONLY</span> special price for 6 <br /> extra Clarifion for only <span className="text-[#2C7EF8]">$14 each</span> <br /> ($84.00 total!)
          </h1>
          <Image src={clarifionProduct} width={575} height={591} className="mt-4" />
          <div className="flex flex-col my-4">
            <div className="flex gap-4 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#2C7EF8" width={30} height={30}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p className="text-[16px] text-[#4D5254]">Negative Ion Technology may <b >help with allergens</b></p>
            </div>
            <div className="flex gap-4 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#2C7EF8" width={30} height={30}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p className="text-[16px] text-[#4D5254]">Designed for <b >air rejuvenation</b></p>
            </div>
            <div className="flex gap-4 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#2C7EF8" width={30} height={30}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p className="text-[16px] text-[#4D5254]"><b>Perfect for every room</b> in all types of places.</p>
            </div>
          </div>
          <Image src={saveDiscount} width={542} height={56} className="mb-6 mx-auto" />
          <button className="bg-green-600 text-white font-bold text-[20px] rounded-full w-full h-[56px] mb-3 hover:bg-green-700 transition-all ease-in-out">YES - CLAIM MY DISCOUNT → </button>
          <Image src={cards} width={542} height={33} className="mt-2 mb-10 mx-auto" />
          <p className="text-red-600 underline underline-offset-1 mx-auto text-center w-full text-[18px]">NO THANKS, I DON'T WANT THIS.</p>
          <Image src={satisfactionGuarantee} width={420} className="mx-auto mt-10 w-[600px]"/>
        </div>
      </div>
    </div >
  )
}
