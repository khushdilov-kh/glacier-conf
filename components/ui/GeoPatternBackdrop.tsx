import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type GeoPatternVariant = "topography" | "mesh" | "network" | "lowpoly";

interface GeoPatternBackdropProps extends HTMLAttributes<HTMLDivElement> {
  variant: GeoPatternVariant;
}

const networkNodes = [
  { x: 94, y: 146, r: 4.5 },
  { x: 218, y: 118, r: 3.5 },
  { x: 332, y: 170, r: 4 },
  { x: 472, y: 108, r: 3.5 },
  { x: 620, y: 160, r: 5 },
  { x: 778, y: 112, r: 4 },
  { x: 946, y: 182, r: 4.5 },
  { x: 1118, y: 124, r: 3.5 },
  { x: 1288, y: 198, r: 4 },
  { x: 176, y: 368, r: 4 },
  { x: 362, y: 438, r: 5 },
  { x: 566, y: 352, r: 4.5 },
  { x: 742, y: 432, r: 3.5 },
  { x: 962, y: 360, r: 4.5 },
  { x: 1180, y: 446, r: 4 },
  { x: 1308, y: 358, r: 5 },
  { x: 116, y: 658, r: 4 },
  { x: 308, y: 736, r: 3.5 },
  { x: 512, y: 648, r: 5 },
  { x: 712, y: 730, r: 4.5 },
  { x: 922, y: 642, r: 3.5 },
  { x: 1126, y: 716, r: 4 },
  { x: 1328, y: 642, r: 5 }
] as const;

const networkEdges = [
  [0, 1], [1, 2], [2, 4], [4, 5], [5, 6], [6, 7], [7, 8],
  [0, 9], [1, 9], [2, 10], [3, 11], [4, 11], [5, 12], [6, 13], [7, 13], [8, 15],
  [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15],
  [9, 16], [10, 17], [11, 18], [12, 19], [13, 20], [14, 21], [15, 22],
  [16, 17], [17, 18], [18, 19], [19, 20], [20, 21], [21, 22],
  [2, 11], [4, 12], [6, 12], [10, 18], [12, 20], [14, 22]
] as const;

const meshPolygons = [
  "0,256 170,74 346,192 198,392",
  "170,74 378,42 528,168 346,192",
  "346,192 528,168 660,326 446,388",
  "198,392 346,192 446,388 264,576",
  "446,388 660,326 822,472 562,612",
  "528,168 746,82 900,228 660,326",
  "660,326 900,228 1098,332 822,472",
  "900,228 1182,98 1378,262 1098,332",
  "822,472 1098,332 1308,474 1050,662",
  "264,576 562,612 404,848 126,786",
  "562,612 836,598 720,884 404,848",
  "836,598 1050,662 954,902 720,884",
  "1050,662 1308,474 1440,686 954,902"
] as const;

const lowPolyFaces = [
  { points: "0,0 238,0 174,208 0,258", fillOpacity: 0.045 },
  { points: "238,0 510,0 420,214 174,208", fillOpacity: 0.05 },
  { points: "510,0 836,0 720,240 420,214", fillOpacity: 0.04 },
  { points: "836,0 1166,0 1032,226 720,240", fillOpacity: 0.055 },
  { points: "1166,0 1440,0 1440,284 1032,226", fillOpacity: 0.04 },
  { points: "0,258 174,208 308,466 40,554", fillOpacity: 0.05 },
  { points: "174,208 420,214 510,484 308,466", fillOpacity: 0.06 },
  { points: "420,214 720,240 748,520 510,484", fillOpacity: 0.045 },
  { points: "720,240 1032,226 1102,516 748,520", fillOpacity: 0.05 },
  { points: "1032,226 1440,284 1440,598 1102,516", fillOpacity: 0.04 },
  { points: "40,554 308,466 352,860 0,960", fillOpacity: 0.055 },
  { points: "308,466 510,484 676,960 352,860", fillOpacity: 0.045 },
  { points: "510,484 748,520 970,960 676,960", fillOpacity: 0.06 },
  { points: "748,520 1102,516 1284,960 970,960", fillOpacity: 0.05 },
  { points: "1102,516 1440,598 1440,960 1284,960", fillOpacity: 0.045 }
] as const;

function TopographyPattern() {
 return (
   <svg viewBox="0 0 1440 960" preserveAspectRatio="xMidYMid slice" className="h-full w-full" fill="none">
     <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
       <path strokeWidth="1.2" strokeOpacity="0.18" d="M-120 148C52 34 214 232 404 144s352-122 566-18 310 90 590-30" />
       <path strokeWidth="1.15" strokeOpacity="0.17" d="M-96 248C82 132 258 332 442 252s344-116 552-12 292 86 544-38" />
       <path strokeWidth="1.1" strokeOpacity="0.16" d="M-140 360C52 246 234 438 424 360s340-112 544-4 296 90 604-30" />
       <path strokeWidth="1.05" strokeOpacity="0.15" d="M-124 488C72 366 252 564 448 494s328-108 530 4 282 92 594-18" />
       <path strokeWidth="1" strokeOpacity="0.14" d="M-160 640C54 500 252 706 468 646s338-110 548 2 280 96 576-8" />
       <path strokeWidth="0.95" strokeOpacity="0.13" d="M-148 810C54 696 272 882 478 822s332-98 530 10 278 90 560 12" />
       <path strokeWidth="1.1" strokeOpacity="0.12" d="M962 232c42-62 138-92 224-74 98 20 150 112 116 192-34 80-128 136-228 126-88-10-170-62-182-144-10-42 10-72 70-100Z" />
       <path strokeWidth="1" strokeOpacity="0.11" d="M1008 278c30-44 96-66 154-54 70 14 108 78 84 136-24 58-90 100-162 94-64-6-122-44-130-104-4-28 12-50 54-72Z" />
       <path strokeWidth="1" strokeOpacity="0.1" d="M1044 324c20-28 62-42 102-34 46 10 70 52 56 92-16 40-58 68-104 66-42-4-80-28-86-70-2-20 10-34 32-54Z" />
       <path strokeWidth="1.1" strokeOpacity="0.12" d="M188 588c56-52 162-78 246-54 96 28 144 120 108 214-38 96-154 170-274 162-106-8-204-68-218-168-10-56 20-104 76-154Z" />
       <path strokeWidth="1" strokeOpacity="0.11" d="M242 628c40-36 116-54 176-38 70 20 106 86 80 154-28 70-110 122-194 116-76-6-144-48-154-120-6-40 16-74 56-112Z" />
       <path strokeWidth="0.95" strokeOpacity="0.1" d="M288 666c24-22 70-34 106-24 42 12 64 54 48 96-18 44-66 78-118 74-46-4-88-28-94-74-4-24 10-44 30-72Z" />
     </g>
   </svg>
 );
}

function MeshPattern() {
 return (
   <svg viewBox="0 0 1440 960" preserveAspectRatio="xMidYMid slice" className="h-full w-full" fill="none">
     <g stroke="currentColor" strokeWidth="1.05" strokeLinejoin="round">
       {meshPolygons.map((points, index) => (
         <polygon
           key={points}
           points={points}
           fill="currentColor"
           fillOpacity={index % 3 === 0 ? "0.04" : "0.025"}
           strokeOpacity="0.14"
         />
       ))}
       <path strokeOpacity="0.1" d="M0 256 170 74 378 42 746 82 1182 98 1440 232" />
       <path strokeOpacity="0.1" d="M0 256 198 392 264 576 126 786 0 960" />
       <path strokeOpacity="0.09" d="M378 42 528 168 900 228 1378 262" />
       <path strokeOpacity="0.09" d="M198 392 446 388 822 472 1308 474" />
       <path strokeOpacity="0.09" d="M126 786 404 848 720 884 954 902 1440 686" />
     </g>
   </svg>
 );
}

function NetworkPattern() {
 return (
   <svg viewBox="0 0 1440 960" preserveAspectRatio="xMidYMid slice" className="h-full w-full" fill="none">
     <g stroke="currentColor" strokeWidth="1.05" strokeLinecap="round">
       {networkEdges.map(([startIndex, endIndex]) => (
         <line
           key={`${startIndex}-${endIndex}`}
           x1={networkNodes[startIndex].x}
           y1={networkNodes[startIndex].y}
           x2={networkNodes[endIndex].x}
           y2={networkNodes[endIndex].y}
           strokeOpacity="0.16"
         />
       ))}
     </g>
     <g fill="currentColor">
       {networkNodes.map((node, index) => (
         <circle key={`${node.x}-${node.y}`} cx={node.x} cy={node.y} r={node.r} fillOpacity={index % 4 === 0 ? "0.28" : "0.18"} />
       ))}
     </g>
   </svg>
 );
}

function LowPolyPattern() {
 return (
   <svg viewBox="0 0 1440 960" preserveAspectRatio="xMidYMid slice" className="h-full w-full" fill="none">
     <g stroke="currentColor" strokeWidth="1" strokeLinejoin="round" strokeOpacity="0.14">
       {lowPolyFaces.map((face) => (
         <polygon key={face.points} points={face.points} fill="currentColor" fillOpacity={face.fillOpacity.toString()} />
       ))}
       <path d="M174 208 420 214 720 240 1032 226 1440 284" />
       <path d="M40 554 308 466 510 484 748 520 1102 516 1440 598" />
       <path d="M0 258 174 208 308 466 352 860" />
       <path d="M510 0 420 214 510 484 676 960" />
       <path d="M1166 0 1032 226 1102 516 1284 960" />
     </g>
   </svg>
 );
}

const patternMap = {
 topography: TopographyPattern,
 mesh: MeshPattern,
 network: NetworkPattern,
 lowpoly: LowPolyPattern
} satisfies Record<GeoPatternVariant, () => JSX.Element>;

export default function GeoPatternBackdrop({
 variant,
 className,
 ...props
}: GeoPatternBackdropProps) {
 const Pattern = patternMap[variant];

 return (
   <div
     {...props}
     aria-hidden="true"
     className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <Pattern />
    </div>
  );
}

