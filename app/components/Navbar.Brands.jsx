import Image from "next/image"
import logoClarifion from "@/public/images/logoClarifion.png"
import logoMacAfee from "@/public/images/logoMacAfee.png"
import logoNorton from "@/public/images/logoNorton.png"
export const NavbarBrands = () => {
  return (
    <div className="h-24 grid grid-cols-3">
      <div className="mx-auto my-auto">
        <Image src={logoClarifion} priority='true' width={192} height={36} alt="Clarifion logo" />
      </div>
      <div></div>
      <div className="flex justify-center items-center gap-[32px]">
        <div>
          <Image src={logoMacAfee} width={88} height={32} alt="MacAfee logo" />
        </div>
        <div>
          <Image src={logoNorton} width={82} height={32} alt="Norton logo" />
        </div>
      </div>
    </div>
  );
}
