const particles: Array<{ left?: string; right?: string; dur: number; delay: number }> = [
  // Left side margin
  { left: "2%",  dur: 14, delay: -3  },
  { left: "6%",  dur: 18, delay: -9  },
  { left: "11%", dur: 12, delay: -2  },
  { left: "16%", dur: 16, delay: -11 },
  { left: "8%",  dur: 20, delay: -7  },
  { left: "4%",  dur: 15, delay: -13 },
  { left: "18%", dur: 11, delay: -5  },
  { left: "13%", dur: 17, delay: -1  },
  { left: "1%",  dur: 22, delay: -17 },
  { left: "21%", dur: 19, delay: -15 },
  // Right side margin
  { right: "2%",  dur: 16, delay: -6  },
  { right: "6%",  dur: 12, delay: -10 },
  { right: "11%", dur: 18, delay: -4  },
  { right: "16%", dur: 14, delay: -12 },
  { right: "8%",  dur: 20, delay: -2  },
  { right: "4%",  dur: 11, delay: -14 },
  { right: "18%", dur: 15, delay: -7  },
  { right: "13%", dur: 17, delay: -9  },
  { right: "1%",  dur: 22, delay: -19 },
  { right: "21%", dur: 19, delay: -16 },
  // Centre — visible in the gap above the content box, hidden behind it below
  { left: "28%", dur: 16, delay: -4  },
  { left: "35%", dur: 20, delay: -11 },
  { left: "42%", dur: 13, delay: -7  },
  { left: "50%", dur: 18, delay: -2  },
  { left: "57%", dur: 15, delay: -14 },
  { left: "64%", dur: 21, delay: -8  },
  { left: "71%", dur: 12, delay: -17 },
  { left: "31%", dur: 19, delay: -5  },
  { left: "60%", dur: 14, delay: -10 },
];

export default function ParticleField() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden hidden lg:block">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute top-0 w-2 h-2 rounded-full bg-gray-400"
          style={{
            left: p.left,
            right: p.right,
            animationName: "particle-fall",
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        />
      ))}
    </div>
  );
}
