import GreenCircleWithCheck from "@/public/svgs/GreenCircleWithCheck";

function Steps() {
  return (
    <div className="h-32 mx-auto w-full flex justify-center">
      <div className="flex gap-28 flex-wrap">
        <div className="flex items-center gap-5">
          <GreenCircleWithCheck />
          <small className="text-[20px]">
            Step 1 : Cart Review
          </small>
        </div>
        <div className="flex items-center gap-5">
          <GreenCircleWithCheck />
          <small className="text-[20px]">
            Step 2 : Checkout
          </small>
        </div>
        <div className="flex items-center gap-5">
          <GreenCircleWithCheck />
          <small className="text-[20px]">
            Step 3 : Special Offer
          </small>
        </div>
        <div className="flex items-center gap-5">
          <GreenCircleWithCheck />
          <small className="text-[20px]">
            Step 4 : Confirmation
          </small>
        </div>
      </div>
    </div>
  );
}

export default Steps;
