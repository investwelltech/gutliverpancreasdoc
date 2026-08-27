import { cn } from "@/lib/utils";

/**
 * Gut / Liver / Pancreas — abstract clinical systems diagram.
 *
 * Composition: three concentric-ring nodes on a triangle, joined by fine
 * connectors inside a faint enclosing field. This is the "abstract medical
 * diagram" route rather than pseudo-anatomy — deliberately schematic, so it
 * reads as a clinical diagram and never as a cartoon organ.
 *
 * Implementation notes:
 *  - Pure inline SVG + CSS keyframes (see `globals.css`). No animation library,
 *    no canvas, no video, no JavaScript — works in Safari, Chrome, Firefox, Edge.
 *  - Only OPACITY is animated, so the cycle stays on the compositor with no
 *    layout or paint work. That keeps it smooth on older phones.
 *  - One cycle is 9s: gut (0s) → liver (3s) → pancreas (6s), then repeats.
 *  - `prefers-reduced-motion` pins every highlight on, showing the completed
 *    composition with nothing cycling.
 */

const NODES = [
  {
    id: "gut",
    label: "GUT",
    cx: 120,
    cy: 258,
    delay: "organ-delay-0",
    labelY: 322,
  },
  {
    id: "liver",
    label: "LIVER",
    cx: 210,
    cy: 96,
    delay: "organ-delay-1",
    labelY: 44,
  },
  {
    id: "pancreas",
    label: "PANCREAS",
    cx: 300,
    cy: 258,
    delay: "organ-delay-2",
    labelY: 322,
  },
] as const;

/* Connectors, pre-trimmed to the node edge so no line touches a ring. */
const CONNECTORS = [
  "M195.6 122.3Q157.2 175.4 134.4 231.7",
  "M224.4 122.3Q262.8 175.4 285.6 231.7",
  "M150 258Q210 266 270 258",
];

export function OrganSystem({
  className,
  labelled = true,
}: {
  className?: string;
  /** Renders the GUT / LIVER / PANCREAS captions inside the SVG. */
  labelled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 420 366"
      role="img"
      aria-label="Diagram of the three connected specialist areas of this practice: gut, liver and pancreas."
      className={cn("h-auto w-full", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="nodeWash" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0F6B68" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#0F6B68" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Enclosing field + connectors - the quiet structural layer. */}
      <g stroke="#102A43" strokeLinecap="round" fill="none">
        <circle cx="210" cy="186" r="152" strokeOpacity="0.14" strokeWidth="1" />
        <circle cx="210" cy="186" r="112" strokeOpacity="0.08" strokeWidth="1" />
        {CONNECTORS.map((d) => (
          <path key={d} d={d} strokeOpacity="0.22" strokeWidth="1" />
        ))}
      </g>

      {/* Resting node rings. */}
      {NODES.map((n) => (
        <g key={n.id} fill="none">
          <circle
            cx={n.cx}
            cy={n.cy}
            r="30"
            stroke="#102A43"
            strokeOpacity="0.24"
            strokeWidth="1.2"
          />
          <circle
            cx={n.cx}
            cy={n.cy}
            r="19"
            stroke="#102A43"
            strokeOpacity="0.16"
            strokeWidth="1.2"
          />
          <circle
            cx={n.cx}
            cy={n.cy}
            r="4.5"
            fill="#102A43"
            fillOpacity="0.28"
          />
        </g>
      ))}

      {/* Illuminated state - one node at a time. */}
      {NODES.map((n) => (
        <g key={`hl-${n.id}`} className={cn("organ-highlight", n.delay)}>
          <circle cx={n.cx} cy={n.cy} r="54" fill="url(#nodeWash)" />
          <circle
            cx={n.cx}
            cy={n.cy}
            r="30"
            stroke="#0F6B68"
            strokeWidth="1.8"
            fill="none"
          />
          <circle
            cx={n.cx}
            cy={n.cy}
            r="19"
            stroke="#0F6B68"
            strokeWidth="1.2"
            strokeOpacity="0.55"
            fill="none"
          />
          <circle cx={n.cx} cy={n.cy} r="4.5" fill="#0F6B68" />
        </g>
      ))}

      {/* Captions. */}
      {labelled && (
        <g
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontSize="10.5"
          letterSpacing="1.8"
          fill="#102A43"
          textAnchor="middle"
        >
          {NODES.map((n) => (
            <text
              key={`t-${n.id}`}
              x={n.cx}
              y={n.labelY}
              className={cn("organ-label", n.delay)}
            >
              {n.label}
            </text>
          ))}
        </g>
      )}
    </svg>
  );
}
