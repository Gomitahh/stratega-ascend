export function WorldMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 800"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="wm-fade" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        <pattern id="wm-dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1.4" cy="1.4" r="1.4" fill="currentColor" />
        </pattern>
        <mask id="wm-mask">
          <rect width="1600" height="800" fill="url(#wm-fade)" />
        </mask>
      </defs>
      <g mask="url(#wm-mask)" opacity="0.9">
        {/* Approximate continent shapes as dot fills */}
        <path
          d="M180 220 Q260 150 380 180 Q470 200 500 260 Q540 340 470 400 Q380 460 300 430 Q200 400 170 320 Z"
          fill="url(#wm-dots)"
        />
        <path
          d="M540 240 Q640 190 760 220 Q820 250 800 320 Q760 380 680 380 Q580 370 540 310 Z"
          fill="url(#wm-dots)"
        />
        <path
          d="M760 340 Q820 340 860 400 Q880 480 830 560 Q780 620 730 580 Q700 500 720 420 Z"
          fill="url(#wm-dots)"
        />
        <path
          d="M860 240 Q1000 200 1160 240 Q1280 280 1300 360 Q1260 420 1140 420 Q980 400 880 340 Z"
          fill="url(#wm-dots)"
        />
        <path
          d="M1200 440 Q1300 420 1360 480 Q1380 560 1320 620 Q1240 660 1200 580 Z"
          fill="url(#wm-dots)"
        />
        <path
          d="M320 500 Q400 480 460 540 Q480 620 400 660 Q320 660 300 580 Z"
          fill="url(#wm-dots)"
        />
      </g>
    </svg>
  );
}
