interface MonogramProps {
  size?: number; // size in px, e.g. 40, 56, 120, 240
  className?: string;
}

/**
 * Ahmed Salama's Official Monogram
 * A | S in italic Lora font with a fine gold vertical divider inside a Sage 700 circle.
 */
export default function Monogram({ size = 40, className = '' }: MonogramProps) {
  // Ratio calculations based on viewBox 0 0 100 100
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Ahmed Salama Monogram (AS)"
      role="img"
    >
      {/* Outer Sage Green Circle */}
      <circle cx="50" cy="50" r="48" fill="#3D5A47" />

      {/* Letter A (Lora Italic) */}
      <text
        x="33"
        y="65"
        fill="#F7F3EC"
        fontFamily="Lora, Georgia, serif"
        fontSize="40"
        fontStyle="italic"
        fontWeight="600"
        textAnchor="middle"
      >
        A
      </text>

      {/* Fine Gold Vertical Divider */}
      <line
        x1="50"
        y1="24"
        x2="50"
        y2="76"
        stroke="#C9A46A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Letter S (Lora Italic) */}
      <text
        x="67"
        y="65"
        fill="#F7F3EC"
        fontFamily="Lora, Georgia, serif"
        fontSize="40"
        fontStyle="italic"
        fontWeight="600"
        textAnchor="middle"
      >
        S
      </text>
    </svg>
  );
}
