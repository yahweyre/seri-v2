type LogoProps = {
  size?: number;
};

export default function Logo({ size = 54 }: LogoProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#F97316"
          strokeWidth="6"
          opacity=".25"
        />

        <text
          x="50"
          y="63"
          textAnchor="middle"
          fill="#F97316"
          fontSize="42"
          fontWeight="700"
        >
          S
        </text>
      </svg>
    </div>
  );
}