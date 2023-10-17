import GreenCircleWithCheck from "@/public/svgs/GreenCircleWithCheck";

function Steps() {
  return (
    <div className="
     h-32 mx-auto flex">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-5">
          <GreenCircleWithCheck />
          <small className="text-[20px]">
            Step 1 : Cart Review
          </small>
        </div>
        <div className="flex items-center gap-5">
          <GreenCircleWithCheck />
          <small className="text-[20px]">
            Step 1 : Cart Review
          </small>
        </div>
        <div className="flex items-center gap-5">
          <GreenCircleWithCheck />
          <small className="text-[20px]">
            Step 1 : Cart Review
          </small>
        </div>
        <div className="flex items-center gap-5">
          <GreenCircleWithCheck />
          <small className="text-[20px]">
            Step 1 : Cart Review
          </small>
        </div>
      </div>
    </div>
  );
}

export default Steps;
