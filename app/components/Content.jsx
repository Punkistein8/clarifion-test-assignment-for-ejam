import Image from "next/image"

import phoneClarifion from "@/public/images/phoneClarifion.png"
import profilePhoto1 from "@/public/images/profile/profilePhoto1.png"
import Star from "@/public/svgs/Star"
export const Content = () => {
  return (
    <div>
      <div className="bg-[#FAFAFA] mx-auto w-3/4 rounded-md grid grid-cols-2">
        <div className="flex flex-col">
          <Image src={phoneClarifion} width={575} height={591} className="mt-8 mx-auto max-w-[575px]" />
          <div className="bg-white mt-10 mx-auto w-full max-w-[575px] rounded-md">
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
                <p className="font-bold text-[20px]">Ken T.</p>
                <p className="text-[#828282]">Verified Buyer</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
