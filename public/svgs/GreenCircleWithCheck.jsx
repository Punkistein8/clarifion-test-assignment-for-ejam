const GreenCircleWithCheck = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle
      cx={20}
      cy={20}
      r={19}
      fill="#85BF55"
      stroke="#85BF55"
      strokeWidth={2}
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m10 20 6.659 7 13.34-14"
    />
  </svg>
)
export default GreenCircleWithCheck
