import { useState, useEffect, useRef, useCallback } from "react";

/*
  🪿 GOOSE & FRIENDS — Feelings Helper v2
  Custom SVG animated animals + audio slot system
*/

// ─── SVG Animals ─────────────────────────────────────────────
function BearSVG({ emotion = "neutral", size = 160 }) {
  const isHappy = emotion === "happy" || emotion === "calm";
  const isScared = emotion === "scared";
  const isListening = emotion === "listening";
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <style>{`.bb{animation:bb 3s ease-in-out infinite}@keyframes bb{0%,100%{transform:translateY(0)}50%{transform:translateY(-1.5px)}}.be{animation:be 4s ease-in-out infinite;transform-origin:50px 15px}@keyframes be{0%,100%{transform:rotate(0)}25%{transform:rotate(3deg)}75%{transform:rotate(-3deg)}}`}</style>
      <g className="bb">
        <g className="be">
          <circle cx="25" cy="18" r="12" fill="#C4956A"/><circle cx="25" cy="18" r="7" fill="#E8C4A0"/>
          <circle cx="75" cy="18" r="12" fill="#C4956A"/><circle cx="75" cy="18" r="7" fill="#E8C4A0"/>
        </g>
        <ellipse cx="50" cy="45" rx="30" ry="28" fill="#D4A574"/>
        <ellipse cx="50" cy="78" rx="24" ry="18" fill="#D4A574"/>
        <ellipse cx="50" cy="80" rx="16" ry="12" fill="#E8D4BC"/>
        <ellipse cx="50" cy="52" rx="12" ry="9" fill="#E8D4BC"/>
        <ellipse cx="50" cy="49" rx="4" ry="3" fill="#6B4226"/>
        {isHappy ? <>
          <path d="M33 39 Q38 36 43 39" fill="none" stroke="#3D2516" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M57 39 Q62 36 67 39" fill="none" stroke="#3D2516" strokeWidth="2.2" strokeLinecap="round"/>
        </> : <>
          <ellipse cx="38" cy={isScared?36:38} rx={isScared?6:5} ry={isScared?7:6} fill="#3D2516"/>
          <ellipse cx="62" cy={isScared?36:38} rx={isScared?6:5} ry={isScared?7:6} fill="#3D2516"/>
          <circle cx="36" cy={isScared?34:36} r="1.8" fill="white" opacity="0.8"/>
          <circle cx="60" cy={isScared?34:36} r="1.8" fill="white" opacity="0.8"/>
        </>}
        {emotion==="angry" && <><line x1="31" y1="30" x2="42" y2="33" stroke="#3D2516" strokeWidth="2" strokeLinecap="round"/><line x1="58" y1="33" x2="69" y2="30" stroke="#3D2516" strokeWidth="2" strokeLinecap="round"/></>}
        {emotion==="sad" && <ellipse cx="65" cy="43" rx="2" ry="3.5" fill="#7CB8E8" opacity="0.7"/>}
        {emotion==="overwhelmed" && <><circle cx="38" cy="38" r="5" fill="none" stroke="#3D2516" strokeWidth="1.5"/><circle cx="62" cy="38" r="5" fill="none" stroke="#3D2516" strokeWidth="1.5"/></>}
        {emotion==="listening" && <><line x1="32" y1="32" x2="40" y2="30" stroke="#3D2516" strokeWidth="2" strokeLinecap="round"/></>}
        {emotion==="happy" && <path d="M42 56 Q50 63 58 56" fill="none" stroke="#3D2516" strokeWidth="2" strokeLinecap="round"/>}
        {emotion==="sad" && <path d="M42 58 Q50 53 58 58" fill="none" stroke="#3D2516" strokeWidth="2" strokeLinecap="round"/>}
        {emotion==="angry" && <path d="M43 57 L57 57" stroke="#3D2516" strokeWidth="2" strokeLinecap="round"/>}
        {emotion==="scared" && <ellipse cx="50" cy="57" rx="5" ry="4" fill="#3D2516"/>}
        {(emotion==="neutral"||emotion==="calm") && <path d="M44 55 Q50 59 56 55" fill="none" stroke="#3D2516" strokeWidth="1.5" strokeLinecap="round"/>}
        {emotion==="overwhelmed" && <ellipse cx="50" cy="57" rx="4" ry="3" fill="#3D2516"/>}
        {emotion==="listening" && <path d="M44 57 Q48 55 56 57" fill="none" stroke="#3D2516" strokeWidth="1.8" strokeLinecap="round"/>}
        {isHappy && <><ellipse cx="30" cy="48" rx="6" ry="3" fill="#FFB0A0" opacity="0.4"/><ellipse cx="70" cy="48" rx="6" ry="3" fill="#FFB0A0" opacity="0.4"/></>}
        <ellipse cx="26" cy="72" rx="6" ry="10" fill="#C4956A" transform="rotate(-15 26 72)"/>
        <ellipse cx="74" cy="72" rx="6" ry="10" fill="#C4956A" transform="rotate(15 74 72)"/>
        <ellipse cx="38" cy="94" rx="8" ry="5" fill="#C4956A"/>
        <ellipse cx="62" cy="94" rx="8" ry="5" fill="#C4956A"/>
      </g>
    </svg>
  );
}

function BunnySVG({ emotion = "neutral", size = 160 }) {
  const isHappy = emotion==="happy"||emotion==="calm";
  const isScared = emotion==="scared";
  return (
    <svg viewBox="0 -14 100 124" width={size} height={size}>
      <style>{`.bnb{animation:bnb 2.5s ease-in-out infinite}@keyframes bnb{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bel{animation:bel 3.5s ease-in-out infinite;transform-origin:38px 10px}.ber{animation:ber 3.8s ease-in-out infinite;transform-origin:62px 10px}@keyframes bel{0%,100%{transform:rotate(0)}50%{transform:rotate(-5deg)}}@keyframes ber{0%,100%{transform:rotate(0)}50%{transform:rotate(5deg)}}`}</style>
      <g className="bnb">
        <g className="bel"><ellipse cx="36" cy="12" rx="8" ry="22" fill="#E8A0BF"/><ellipse cx="36" cy="12" rx="5" ry="17" fill="#FFD0E0"/></g>
        <g className="ber"><ellipse cx="64" cy="12" rx="8" ry="22" fill="#E8A0BF"/><ellipse cx="64" cy="12" rx="5" ry="17" fill="#FFD0E0"/></g>
        <ellipse cx="50" cy="48" rx="26" ry="24" fill="#F0D0E0"/>
        <ellipse cx="50" cy="82" rx="22" ry="18" fill="#F0D0E0"/>
        <ellipse cx="50" cy="84" rx="14" ry="12" fill="#FFF0F5"/>
        <ellipse cx="30" cy="50" rx="6" ry="4" fill="#FFB8D0" opacity="0.5"/>
        <ellipse cx="70" cy="50" rx="6" ry="4" fill="#FFB8D0" opacity="0.5"/>
        {isHappy ? <>
          <path d="M35 43 Q40 40 45 43" fill="none" stroke="#4A2040" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M55 43 Q60 40 65 43" fill="none" stroke="#4A2040" strokeWidth="2.2" strokeLinecap="round"/>
        </> : <>
          <circle cx="40" cy={isScared?40:42} r={isScared?5:4} fill="#4A2040"/>
          <circle cx="60" cy={isScared?40:42} r={isScared?5:4} fill="#4A2040"/>
          <circle cx="39" cy={isScared?39:41} r="1.2" fill="white" opacity="0.8"/>
          <circle cx="59" cy={isScared?39:41} r="1.2" fill="white" opacity="0.8"/>
        </>}
        <ellipse cx="50" cy="50" rx="3" ry="2.5" fill="#D4708A"/>
        <line x1="28" y1="50" x2="40" y2="51" stroke="#C090A8" strokeWidth="0.8"/>
        <line x1="28" y1="53" x2="40" y2="53" stroke="#C090A8" strokeWidth="0.8"/>
        <line x1="60" y1="51" x2="72" y2="50" stroke="#C090A8" strokeWidth="0.8"/>
        <line x1="60" y1="53" x2="72" y2="53" stroke="#C090A8" strokeWidth="0.8"/>
        {emotion==="angry" && <><line x1="34" y1="34" x2="44" y2="37" stroke="#4A2040" strokeWidth="2" strokeLinecap="round"/><line x1="56" y1="37" x2="66" y2="34" stroke="#4A2040" strokeWidth="2" strokeLinecap="round"/></>}
        {emotion==="sad" && <ellipse cx="63" cy="47" rx="1.5" ry="2.5" fill="#7CB8E8" opacity="0.6"/>}
        {emotion==="overwhelmed" && <><circle cx="40" cy="42" r="4" fill="none" stroke="#4A2040" strokeWidth="1.2"/><circle cx="60" cy="42" r="4" fill="none" stroke="#4A2040" strokeWidth="1.2"/></>}
        {emotion==="listening" && <><line x1="34" y1="35" x2="43" y2="33" stroke="#4A2040" strokeWidth="2" strokeLinecap="round"/></>}
        {emotion==="happy" && <path d="M44 56 Q50 62 56 56" fill="none" stroke="#4A2040" strokeWidth="1.8" strokeLinecap="round"/>}
        {emotion==="sad" && <path d="M44 58 Q50 54 56 58" fill="none" stroke="#4A2040" strokeWidth="1.8" strokeLinecap="round"/>}
        {emotion==="angry" && <path d="M44 57 L56 57" stroke="#4A2040" strokeWidth="1.8" strokeLinecap="round"/>}
        {emotion==="scared" && <ellipse cx="50" cy="57" rx="4" ry="3.5" fill="#4A2040"/>}
        {(emotion==="neutral"||emotion==="calm") && <path d="M46 55 Q50 58 54 55" fill="none" stroke="#4A2040" strokeWidth="1.3" strokeLinecap="round"/>}
        {emotion==="overwhelmed" && <ellipse cx="50" cy="57" rx="3" ry="2.5" fill="#4A2040"/>}
        {emotion==="listening" && <path d="M44 57 Q48 55 56 57" fill="none" stroke="#4A2040" strokeWidth="1.5" strokeLinecap="round"/>}
        <circle cx="50" cy="98" r="5" fill="#FFF0F5"/>
        <ellipse cx="36" cy="96" rx="7" ry="4" fill="#E8A0BF"/>
        <ellipse cx="64" cy="96" rx="7" ry="4" fill="#E8A0BF"/>
        <ellipse cx="28" cy="74" rx="5" ry="9" fill="#F0D0E0" transform="rotate(-10 28 74)"/>
        <ellipse cx="72" cy="74" rx="5" ry="9" fill="#F0D0E0" transform="rotate(10 72 74)"/>
      </g>
    </svg>
  );
}

function KittySVG({ emotion = "neutral", size = 160 }) {
  const isHappy = emotion==="happy"||emotion==="calm";
  const isScared = emotion==="scared";
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <style>{`.kb{animation:kb 2.8s ease-in-out infinite}@keyframes kb{0%,100%{transform:scale(1)}50%{transform:scale(1.02)}}.kt{animation:kt 2s ease-in-out infinite;transform-origin:78px 80px}@keyframes kt{0%,100%{transform:rotate(0)}50%{transform:rotate(12deg)}}`}</style>
      <g className="kb">
        <g className="kt"><path d="M75 80 Q90 65 85 50" fill="none" stroke="#FFB366" strokeWidth="5" strokeLinecap="round"/></g>
        <polygon points="24,22 34,4 42,26" fill="#FFB366"/><polygon points="27,22 34,9 39,24" fill="#FFD6A0"/>
        <polygon points="58,26 66,4 76,22" fill="#FFB366"/><polygon points="61,24 66,9 73,22" fill="#FFD6A0"/>
        <ellipse cx="50" cy="42" rx="26" ry="22" fill="#FFCC80"/>
        <ellipse cx="50" cy="76" rx="22" ry="18" fill="#FFCC80"/>
        <ellipse cx="50" cy="78" rx="15" ry="12" fill="#FFE8C8"/>
        {isHappy ? <>
          <path d="M34 41 Q40 37 46 41" fill="none" stroke="#5A3010" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M54 41 Q60 37 66 41" fill="none" stroke="#5A3010" strokeWidth="2.2" strokeLinecap="round"/>
        </> : <>
          <ellipse cx="40" cy={isScared?38:40} rx={isScared?5:4} ry={isScared?6:5} fill="#5A3010"/>
          <ellipse cx="60" cy={isScared?38:40} rx={isScared?5:4} ry={isScared?6:5} fill="#5A3010"/>
          <ellipse cx="40" cy={isScared?38:40} rx="1.5" ry={isScared?5:4} fill="#1A0A00"/>
          <ellipse cx="60" cy={isScared?38:40} rx="1.5" ry={isScared?5:4} fill="#1A0A00"/>
          <circle cx="38" cy={isScared?37:38} r="1.2" fill="white" opacity="0.7"/>
          <circle cx="58" cy={isScared?37:38} r="1.2" fill="white" opacity="0.7"/>
        </>}
        {emotion==="angry" && <><line x1="33" y1="32" x2="44" y2="35" stroke="#5A3010" strokeWidth="2" strokeLinecap="round"/><line x1="56" y1="35" x2="67" y2="32" stroke="#5A3010" strokeWidth="2" strokeLinecap="round"/></>}
        {emotion==="sad" && <ellipse cx="63" cy="44" rx="1.5" ry="2.5" fill="#7CB8E8" opacity="0.6"/>}
        {emotion==="overwhelmed" && <><circle cx="40" cy="40" r="4" fill="none" stroke="#5A3010" strokeWidth="1.2"/><circle cx="60" cy="40" r="4" fill="none" stroke="#5A3010" strokeWidth="1.2"/></>}
        <polygon points="48,47 52,47 50,49" fill="#FF8C6B"/>
        <line x1="24" y1="46" x2="40" y2="48" stroke="#D4A060" strokeWidth="0.8"/>
        <line x1="24" y1="50" x2="40" y2="50" stroke="#D4A060" strokeWidth="0.8"/>
        <line x1="60" y1="48" x2="76" y2="46" stroke="#D4A060" strokeWidth="0.8"/>
        <line x1="60" y1="50" x2="76" y2="50" stroke="#D4A060" strokeWidth="0.8"/>
        {emotion==="happy" && <path d="M44 52 Q50 58 56 52" fill="none" stroke="#5A3010" strokeWidth="1.8" strokeLinecap="round"/>}
        {emotion==="sad" && <path d="M44 54 Q50 50 56 54" fill="none" stroke="#5A3010" strokeWidth="1.8" strokeLinecap="round"/>}
        {emotion==="angry" && <path d="M44 53 L56 53" stroke="#5A3010" strokeWidth="1.8" strokeLinecap="round"/>}
        {emotion==="scared" && <ellipse cx="50" cy="53" rx="3.5" ry="3" fill="#5A3010"/>}
        {(emotion==="neutral"||emotion==="calm") && <path d="M47 51 Q50 53 53 51" fill="none" stroke="#5A3010" strokeWidth="1.3" strokeLinecap="round"/>}
        {emotion==="overwhelmed" && <ellipse cx="50" cy="53" rx="3" ry="2.5" fill="#5A3010"/>}
        {isHappy && <><ellipse cx="30" cy="46" rx="5" ry="3" fill="#FFB0A0" opacity="0.35"/><ellipse cx="70" cy="46" rx="5" ry="3" fill="#FFB0A0" opacity="0.35"/></>}
        <ellipse cx="36" cy="92" rx="7" ry="4" fill="#FFCC80"/><ellipse cx="64" cy="92" rx="7" ry="4" fill="#FFCC80"/>
        <ellipse cx="30" cy="72" rx="5" ry="8" fill="#FFCC80" transform="rotate(-12 30 72)"/>
        <ellipse cx="70" cy="72" rx="5" ry="8" fill="#FFCC80" transform="rotate(12 70 72)"/>
      </g>
    </svg>
  );
}

function PuppySVG({ emotion = "neutral", size = 160 }) {
  const isHappy = emotion==="happy"||emotion==="calm";
  const isScared = emotion==="scared";
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <style>{`.pb{animation:pb 2s ease-in-out infinite}@keyframes pb{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.ptl{animation:ptl .6s ease-in-out infinite;transform-origin:76px 75px}@keyframes ptl{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(10deg)}}.ped{animation:ped 3s ease-in-out infinite;transform-origin:30px 28px}@keyframes ped{0%,100%{transform:rotate(0)}50%{transform:rotate(-3deg)}}`}</style>
      <g className="pb">
        <g className="ptl"><path d="M74 75 Q85 60 80 48" fill="none" stroke="#B08D57" strokeWidth="5" strokeLinecap="round"/></g>
        <g className="ped">
          <ellipse cx="26" cy="38" rx="10" ry="16" fill="#8B6B3D" transform="rotate(-15 26 38)"/>
          <ellipse cx="74" cy="38" rx="10" ry="16" fill="#8B6B3D" transform="rotate(15 74 38)"/>
        </g>
        <ellipse cx="50" cy="42" rx="26" ry="24" fill="#C8A668"/>
        <ellipse cx="50" cy="48" rx="16" ry="14" fill="#E8D4A8"/>
        <ellipse cx="50" cy="78" rx="22" ry="17" fill="#C8A668"/>
        <ellipse cx="50" cy="80" rx="14" ry="11" fill="#E8D4A8"/>
        {isHappy ? <>
          <path d="M34 41 Q40 37 46 41" fill="none" stroke="#3D2000" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M54 41 Q60 37 66 41" fill="none" stroke="#3D2000" strokeWidth="2.5" strokeLinecap="round"/>
        </> : <>
          <circle cx="40" cy={isScared?38:40} r={isScared?5.5:4.5} fill="#3D2000"/>
          <circle cx="60" cy={isScared?38:40} r={isScared?5.5:4.5} fill="#3D2000"/>
          <circle cx="38" cy={isScared?37:38} r="1.5" fill="white" opacity="0.8"/>
          <circle cx="58" cy={isScared?37:38} r="1.5" fill="white" opacity="0.8"/>
        </>}
        <ellipse cx="50" cy="49" rx="4.5" ry="3.5" fill="#3D2000"/>
        <circle cx="48" cy="48" r="1" fill="white" opacity="0.3"/>
        {emotion==="angry" && <><line x1="34" y1="33" x2="44" y2="36" stroke="#3D2000" strokeWidth="2" strokeLinecap="round"/><line x1="56" y1="36" x2="66" y2="33" stroke="#3D2000" strokeWidth="2" strokeLinecap="round"/></>}
        {emotion==="sad" && <ellipse cx="64" cy="45" rx="2" ry="3" fill="#7CB8E8" opacity="0.6"/>}
        {emotion==="overwhelmed" && <><circle cx="40" cy="40" r="4" fill="none" stroke="#3D2000" strokeWidth="1.3"/><circle cx="60" cy="40" r="4" fill="none" stroke="#3D2000" strokeWidth="1.3"/></>}
        {emotion==="happy" && <><path d="M42 54 Q50 62 58 54" fill="none" stroke="#3D2000" strokeWidth="1.8" strokeLinecap="round"/><path d="M44 56 Q50 60 56 56" fill="#FF8888" opacity="0.4"/></>}
        {emotion==="sad" && <path d="M44 56 Q50 52 56 56" fill="none" stroke="#3D2000" strokeWidth="1.5" strokeLinecap="round"/>}
        {emotion==="angry" && <path d="M44 55 L56 55" stroke="#3D2000" strokeWidth="1.5" strokeLinecap="round"/>}
        {emotion==="scared" && <ellipse cx="50" cy="55" rx="4" ry="3.5" fill="#3D2000"/>}
        {(emotion==="neutral"||emotion==="calm") && <path d="M46 53 Q50 56 54 53" fill="none" stroke="#3D2000" strokeWidth="1.3" strokeLinecap="round"/>}
        {emotion==="overwhelmed" && <ellipse cx="50" cy="55" rx="3" ry="2.5" fill="#3D2000"/>}
        {isHappy && <><ellipse cx="30" cy="47" rx="5" ry="3" fill="#FFB0A0" opacity="0.35"/><ellipse cx="70" cy="47" rx="5" ry="3" fill="#FFB0A0" opacity="0.35"/></>}
        <ellipse cx="36" cy="93" rx="7" ry="4" fill="#C8A668"/><ellipse cx="64" cy="93" rx="7" ry="4" fill="#C8A668"/>
        <ellipse cx="28" cy="74" rx="5" ry="9" fill="#C8A668" transform="rotate(-8 28 74)"/>
        <ellipse cx="72" cy="74" rx="5" ry="9" fill="#C8A668" transform="rotate(8 72 74)"/>
      </g>
    </svg>
  );
}

function DuckSVG({ emotion = "neutral", size = 160 }) {
  const isHappy = emotion==="happy"||emotion==="calm";
  const isScared = emotion==="scared";
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <style>{`.db{animation:db 2.2s ease-in-out infinite}@keyframes db{0%,100%{transform:rotate(0)}25%{transform:rotate(2deg)}75%{transform:rotate(-2deg)}}`}</style>
      <g className="db">
        <ellipse cx="50" cy="72" rx="26" ry="20" fill="#F5D547"/>
        <ellipse cx="50" cy="74" rx="18" ry="14" fill="#FFF0A0"/>
        <ellipse cx="28" cy="70" rx="10" ry="14" fill="#E8C430" transform="rotate(-10 28 70)"/>
        <ellipse cx="72" cy="70" rx="10" ry="14" fill="#E8C430" transform="rotate(10 72 70)"/>
        <circle cx="50" cy="38" r="22" fill="#F5D547"/>
        <ellipse cx="50" cy="16" rx="4" ry="7" fill="#E8C430"/>
        <ellipse cx="46" cy="18" rx="3" ry="5" fill="#F5D547" transform="rotate(-15 46 18)"/>
        <ellipse cx="50" cy="48" rx="10" ry="5" fill="#FF9933"/>
        <ellipse cx="50" cy="47" rx="9" ry="4" fill="#FFB050"/>
        {isHappy ? <>
          <path d="M34 37 Q40 33 46 37" fill="none" stroke="#2A1800" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M54 37 Q60 33 66 37" fill="none" stroke="#2A1800" strokeWidth="2.2" strokeLinecap="round"/>
        </> : <>
          <circle cx="40" cy={isScared?34:36} r={isScared?5:4} fill="#2A1800"/>
          <circle cx="60" cy={isScared?34:36} r={isScared?5:4} fill="#2A1800"/>
          <circle cx="38" cy={isScared?33:34} r="1.3" fill="white" opacity="0.8"/>
          <circle cx="58" cy={isScared?33:34} r="1.3" fill="white" opacity="0.8"/>
        </>}
        {emotion==="angry" && <><line x1="34" y1="28" x2="44" y2="31" stroke="#2A1800" strokeWidth="2" strokeLinecap="round"/><line x1="56" y1="31" x2="66" y2="28" stroke="#2A1800" strokeWidth="2" strokeLinecap="round"/></>}
        {emotion==="sad" && <ellipse cx="63" cy="40" rx="1.5" ry="2.5" fill="#7CB8E8" opacity="0.6"/>}
        {emotion==="overwhelmed" && <><circle cx="40" cy="36" r="3.5" fill="none" stroke="#2A1800" strokeWidth="1.2"/><circle cx="60" cy="36" r="3.5" fill="none" stroke="#2A1800" strokeWidth="1.2"/></>}
        {isHappy && <><ellipse cx="32" cy="42" rx="5" ry="3" fill="#FFB0A0" opacity="0.35"/><ellipse cx="68" cy="42" rx="5" ry="3" fill="#FFB0A0" opacity="0.35"/></>}
        <ellipse cx="38" cy="92" rx="8" ry="3" fill="#FF9933"/><ellipse cx="62" cy="92" rx="8" ry="3" fill="#FF9933"/>
      </g>
    </svg>
  );
}

function OwlSVG({ emotion = "neutral", size = 160 }) {
  const isHappy = emotion==="happy"||emotion==="calm";
  const isScared = emotion==="scared";
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <style>{`.ob{animation:ob 4s ease-in-out infinite}@keyframes ob{0%,45%,55%,100%{transform:scaleY(1)}50%{transform:scaleY(0.97)}}.oel{animation:oel 3s ease-in-out infinite;transform-origin:30px 12px}.oer{animation:oer 3.2s ease-in-out infinite;transform-origin:70px 12px}@keyframes oel{0%,100%{transform:rotate(0)}50%{transform:rotate(-4deg)}}@keyframes oer{0%,100%{transform:rotate(0)}50%{transform:rotate(4deg)}}`}</style>
      <g className="ob">
        <g className="oel"><polygon points="28,22 22,4 36,18" fill="#A0785A"/></g>
        <g className="oer"><polygon points="72,22 78,4 64,18" fill="#A0785A"/></g>
        <ellipse cx="50" cy="74" rx="24" ry="20" fill="#B8926A"/>
        <ellipse cx="50" cy="76" rx="16" ry="15" fill="#E8D4B8"/>
        <ellipse cx="50" cy="40" rx="28" ry="24" fill="#C4956A"/>
        <ellipse cx="50" cy="42" rx="22" ry="18" fill="#E8D4BC"/>
        <circle cx="38" cy="38" r="10" fill="white" stroke="#A0785A" strokeWidth="1.5"/>
        <circle cx="62" cy="38" r="10" fill="white" stroke="#A0785A" strokeWidth="1.5"/>
        {isHappy ? <>
          <path d="M32 40 Q38 35 44 40" fill="none" stroke="#2A1800" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M56 40 Q62 35 68 40" fill="none" stroke="#2A1800" strokeWidth="2.5" strokeLinecap="round"/>
        </> : <>
          <circle cx="38" cy={isScared?37:39} r={isScared?6:5} fill="#2A1800"/>
          <circle cx="62" cy={isScared?37:39} r={isScared?6:5} fill="#2A1800"/>
          <circle cx="36" cy={isScared?35:37} r="1.8" fill="white" opacity="0.8"/>
          <circle cx="60" cy={isScared?35:37} r="1.8" fill="white" opacity="0.8"/>
        </>}
        {emotion==="angry" && <><line x1="30" y1="28" x2="42" y2="31" stroke="#2A1800" strokeWidth="2" strokeLinecap="round"/><line x1="58" y1="31" x2="70" y2="28" stroke="#2A1800" strokeWidth="2" strokeLinecap="round"/></>}
        {emotion==="sad" && <ellipse cx="66" cy="43" rx="1.5" ry="2.5" fill="#7CB8E8" opacity="0.6"/>}
        {emotion==="overwhelmed" && <><circle cx="38" cy="39" r="4.5" fill="none" stroke="#2A1800" strokeWidth="1.2"/><circle cx="62" cy="39" r="4.5" fill="none" stroke="#2A1800" strokeWidth="1.2"/></>}
        <polygon points="47,46 53,46 50,52" fill="#E8A040"/>
        {isHappy && <><ellipse cx="28" cy="46" rx="5" ry="3" fill="#FFB0A0" opacity="0.3"/><ellipse cx="72" cy="46" rx="5" ry="3" fill="#FFB0A0" opacity="0.3"/></>}
        <ellipse cx="26" cy="68" rx="8" ry="14" fill="#A0785A" transform="rotate(-8 26 68)"/>
        <ellipse cx="74" cy="68" rx="8" ry="14" fill="#A0785A" transform="rotate(8 74 68)"/>
        <ellipse cx="40" cy="93" rx="6" ry="3" fill="#E8A040"/><ellipse cx="60" cy="93" rx="6" ry="3" fill="#E8A040"/>
      </g>
    </svg>
  );
}

const ANIMAL_MAP = { bear: BearSVG, bunny: BunnySVG, kitty: KittySVG, puppy: PuppySVG, duck: DuckSVG, owl: OwlSVG };
const ANIMALS = [{ id:"bear",name:"Bear" },{ id:"bunny",name:"Bunny" },{ id:"kitty",name:"Kitty" },{ id:"puppy",name:"Puppy" },{ id:"duck",name:"Duck" },{ id:"owl",name:"Owl" }];

function Animal({ id, emotion="neutral", size=160 }) {
  const C = ANIMAL_MAP[id];
  return C ? <C emotion={emotion} size={size} /> : <div style={{fontSize:size*0.5}}>🐾</div>;
}

// ─── Face-only versions for emotion buttons ─────────────────
function BearFace({ emotion = "neutral", size = 80 }) {
  const isHappy = emotion==="happy"||emotion==="calm";
  const isScared = emotion==="scared";
  return (
    <svg viewBox="5 2 90 62" width={size} height={size}>
      <circle cx="25" cy="18" r="12" fill="#C4956A"/><circle cx="25" cy="18" r="7" fill="#E8C4A0"/>
      <circle cx="75" cy="18" r="12" fill="#C4956A"/><circle cx="75" cy="18" r="7" fill="#E8C4A0"/>
      <ellipse cx="50" cy="45" rx="30" ry="28" fill="#D4A574"/>
      <ellipse cx="50" cy="52" rx="12" ry="9" fill="#E8D4BC"/>
      <ellipse cx="50" cy="49" rx="4" ry="3" fill="#6B4226"/>
      {isHappy ? <>
        <path d="M33 39 Q38 36 43 39" fill="none" stroke="#3D2516" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M57 39 Q62 36 67 39" fill="none" stroke="#3D2516" strokeWidth="2.5" strokeLinecap="round"/>
      </> : <>
        <ellipse cx="38" cy={isScared?36:38} rx={isScared?6:5} ry={isScared?7:6} fill="#3D2516"/>
        <ellipse cx="62" cy={isScared?36:38} rx={isScared?6:5} ry={isScared?7:6} fill="#3D2516"/>
        <circle cx="36" cy={isScared?34:36} r="1.8" fill="white" opacity="0.8"/>
        <circle cx="60" cy={isScared?34:36} r="1.8" fill="white" opacity="0.8"/>
      </>}
      {emotion==="angry" && <><line x1="31" y1="30" x2="42" y2="33" stroke="#3D2516" strokeWidth="2.5" strokeLinecap="round"/><line x1="58" y1="33" x2="69" y2="30" stroke="#3D2516" strokeWidth="2.5" strokeLinecap="round"/></>}
      {emotion==="sad" && <ellipse cx="65" cy="43" rx="2.5" ry="4" fill="#7CB8E8" opacity="0.7"/>}
      {emotion==="overwhelmed" && <><circle cx="38" cy="38" r="5" fill="none" stroke="#3D2516" strokeWidth="1.8"/><circle cx="62" cy="38" r="5" fill="none" stroke="#3D2516" strokeWidth="1.8"/></>}
      {emotion==="happy" && <path d="M42 56 Q50 63 58 56" fill="none" stroke="#3D2516" strokeWidth="2.2" strokeLinecap="round"/>}
      {emotion==="sad" && <path d="M42 58 Q50 53 58 58" fill="none" stroke="#3D2516" strokeWidth="2.2" strokeLinecap="round"/>}
      {emotion==="angry" && <path d="M43 57 L57 57" stroke="#3D2516" strokeWidth="2.2" strokeLinecap="round"/>}
      {emotion==="scared" && <ellipse cx="50" cy="57" rx="5" ry="4.5" fill="#3D2516"/>}
      {(emotion==="neutral"||emotion==="calm") && <path d="M44 55 Q50 59 56 55" fill="none" stroke="#3D2516" strokeWidth="1.8" strokeLinecap="round"/>}
      {emotion==="listening" && <><line x1="31" y1="31" x2="40" y2="29" stroke="#3D2516" strokeWidth="2.2" strokeLinecap="round"/><path d="M44 57 Q48 55 56 57" fill="none" stroke="#3D2516" strokeWidth="2" strokeLinecap="round"/></>}
      {isHappy && <><ellipse cx="30" cy="48" rx="6" ry="3" fill="#FFB0A0" opacity="0.45"/><ellipse cx="70" cy="48" rx="6" ry="3" fill="#FFB0A0" opacity="0.45"/></>}
    </svg>
  );
}

function BunnyFace({ emotion = "neutral", size = 80 }) {
  const isHappy = emotion==="happy"||emotion==="calm";
  const isScared = emotion==="scared";
  return (
    <svg viewBox="8 -14 84 82" width={size} height={size}>
      <ellipse cx="36" cy="12" rx="8" ry="22" fill="#E8A0BF"/><ellipse cx="36" cy="12" rx="5" ry="17" fill="#FFD0E0"/>
      <ellipse cx="64" cy="12" rx="8" ry="22" fill="#E8A0BF"/><ellipse cx="64" cy="12" rx="5" ry="17" fill="#FFD0E0"/>
      <ellipse cx="50" cy="48" rx="26" ry="24" fill="#F0D0E0"/>
      <ellipse cx="30" cy="50" rx="6" ry="4" fill="#FFB8D0" opacity="0.5"/>
      <ellipse cx="70" cy="50" rx="6" ry="4" fill="#FFB8D0" opacity="0.5"/>
      {isHappy ? <>
        <path d="M35 43 Q40 40 45 43" fill="none" stroke="#4A2040" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M55 43 Q60 40 65 43" fill="none" stroke="#4A2040" strokeWidth="2.5" strokeLinecap="round"/>
      </> : <>
        <circle cx="40" cy={isScared?40:42} r={isScared?5:4.5} fill="#4A2040"/>
        <circle cx="60" cy={isScared?40:42} r={isScared?5:4.5} fill="#4A2040"/>
        <circle cx="39" cy={isScared?39:41} r="1.3" fill="white" opacity="0.8"/>
        <circle cx="59" cy={isScared?39:41} r="1.3" fill="white" opacity="0.8"/>
      </>}
      <ellipse cx="50" cy="50" rx="3" ry="2.5" fill="#D4708A"/>
      <line x1="28" y1="50" x2="40" y2="51" stroke="#C090A8" strokeWidth="0.8"/>
      <line x1="28" y1="53" x2="40" y2="53" stroke="#C090A8" strokeWidth="0.8"/>
      <line x1="60" y1="51" x2="72" y2="50" stroke="#C090A8" strokeWidth="0.8"/>
      <line x1="60" y1="53" x2="72" y2="53" stroke="#C090A8" strokeWidth="0.8"/>
      {emotion==="angry" && <><line x1="34" y1="34" x2="44" y2="37" stroke="#4A2040" strokeWidth="2.2" strokeLinecap="round"/><line x1="56" y1="37" x2="66" y2="34" stroke="#4A2040" strokeWidth="2.2" strokeLinecap="round"/></>}
      {emotion==="sad" && <ellipse cx="63" cy="47" rx="2" ry="3" fill="#7CB8E8" opacity="0.6"/>}
      {emotion==="overwhelmed" && <><circle cx="40" cy="42" r="4" fill="none" stroke="#4A2040" strokeWidth="1.5"/><circle cx="60" cy="42" r="4" fill="none" stroke="#4A2040" strokeWidth="1.5"/></>}
      {emotion==="happy" && <path d="M44 56 Q50 62 56 56" fill="none" stroke="#4A2040" strokeWidth="2" strokeLinecap="round"/>}
      {emotion==="sad" && <path d="M44 58 Q50 54 56 58" fill="none" stroke="#4A2040" strokeWidth="2" strokeLinecap="round"/>}
      {emotion==="angry" && <path d="M44 57 L56 57" stroke="#4A2040" strokeWidth="2" strokeLinecap="round"/>}
      {emotion==="scared" && <ellipse cx="50" cy="57" rx="4" ry="3.5" fill="#4A2040"/>}
      {(emotion==="neutral"||emotion==="calm") && <path d="M46 55 Q50 58 54 55" fill="none" stroke="#4A2040" strokeWidth="1.5" strokeLinecap="round"/>}
      {emotion==="listening" && <><line x1="34" y1="35" x2="43" y2="33" stroke="#4A2040" strokeWidth="2" strokeLinecap="round"/><path d="M44 57 Q48 55 56 57" fill="none" stroke="#4A2040" strokeWidth="1.8" strokeLinecap="round"/></>}
    </svg>
  );
}

function KittyFace({ emotion = "neutral", size = 80 }) {
  const isHappy = emotion==="happy"||emotion==="calm";
  const isScared = emotion==="scared";
  return (
    <svg viewBox="10 0 80 58" width={size} height={size}>
      <polygon points="24,22 34,4 42,26" fill="#FFB366"/><polygon points="27,22 34,9 39,24" fill="#FFD6A0"/>
      <polygon points="58,26 66,4 76,22" fill="#FFB366"/><polygon points="61,24 66,9 73,22" fill="#FFD6A0"/>
      <ellipse cx="50" cy="42" rx="26" ry="22" fill="#FFCC80"/>
      {isHappy ? <>
        <path d="M34 41 Q40 37 46 41" fill="none" stroke="#5A3010" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M54 41 Q60 37 66 41" fill="none" stroke="#5A3010" strokeWidth="2.5" strokeLinecap="round"/>
      </> : <>
        <ellipse cx="40" cy={isScared?38:40} rx={isScared?5:4} ry={isScared?6:5} fill="#5A3010"/>
        <ellipse cx="60" cy={isScared?38:40} rx={isScared?5:4} ry={isScared?6:5} fill="#5A3010"/>
        <ellipse cx="40" cy={isScared?38:40} rx="1.5" ry={isScared?5:4} fill="#1A0A00"/>
        <ellipse cx="60" cy={isScared?38:40} rx="1.5" ry={isScared?5:4} fill="#1A0A00"/>
        <circle cx="38" cy={isScared?37:38} r="1.2" fill="white" opacity="0.7"/>
        <circle cx="58" cy={isScared?37:38} r="1.2" fill="white" opacity="0.7"/>
      </>}
      {emotion==="angry" && <><line x1="33" y1="32" x2="44" y2="35" stroke="#5A3010" strokeWidth="2.2" strokeLinecap="round"/><line x1="56" y1="35" x2="67" y2="32" stroke="#5A3010" strokeWidth="2.2" strokeLinecap="round"/></>}
      {emotion==="sad" && <ellipse cx="63" cy="44" rx="2" ry="3" fill="#7CB8E8" opacity="0.6"/>}
      {emotion==="overwhelmed" && <><circle cx="40" cy="40" r="4" fill="none" stroke="#5A3010" strokeWidth="1.5"/><circle cx="60" cy="40" r="4" fill="none" stroke="#5A3010" strokeWidth="1.5"/></>}
      <polygon points="48,47 52,47 50,49" fill="#FF8C6B"/>
      <line x1="24" y1="46" x2="40" y2="48" stroke="#D4A060" strokeWidth="0.8"/>
      <line x1="24" y1="50" x2="40" y2="50" stroke="#D4A060" strokeWidth="0.8"/>
      <line x1="60" y1="48" x2="76" y2="46" stroke="#D4A060" strokeWidth="0.8"/>
      <line x1="60" y1="50" x2="76" y2="50" stroke="#D4A060" strokeWidth="0.8"/>
      {emotion==="happy" && <path d="M44 52 Q50 58 56 52" fill="none" stroke="#5A3010" strokeWidth="2" strokeLinecap="round"/>}
      {emotion==="sad" && <path d="M44 54 Q50 50 56 54" fill="none" stroke="#5A3010" strokeWidth="2" strokeLinecap="round"/>}
      {emotion==="angry" && <path d="M44 53 L56 53" stroke="#5A3010" strokeWidth="2" strokeLinecap="round"/>}
      {emotion==="scared" && <ellipse cx="50" cy="53" rx="3.5" ry="3" fill="#5A3010"/>}
      {(emotion==="neutral"||emotion==="calm") && <path d="M47 51 Q50 53 53 51" fill="none" stroke="#5A3010" strokeWidth="1.5" strokeLinecap="round"/>}
      {emotion==="listening" && <><line x1="33" y1="33" x2="43" y2="31" stroke="#5A3010" strokeWidth="2" strokeLinecap="round"/><path d="M44 53 Q48 51 56 53" fill="none" stroke="#5A3010" strokeWidth="1.8" strokeLinecap="round"/></>}
      {isHappy && <><ellipse cx="30" cy="46" rx="5" ry="3" fill="#FFB0A0" opacity="0.4"/><ellipse cx="70" cy="46" rx="5" ry="3" fill="#FFB0A0" opacity="0.4"/></>}
    </svg>
  );
}

function PuppyFace({ emotion = "neutral", size = 80 }) {
  const isHappy = emotion==="happy"||emotion==="calm";
  const isScared = emotion==="scared";
  return (
    <svg viewBox="10 10 80 58" width={size} height={size}>
      <ellipse cx="26" cy="38" rx="10" ry="16" fill="#8B6B3D" transform="rotate(-15 26 38)"/>
      <ellipse cx="74" cy="38" rx="10" ry="16" fill="#8B6B3D" transform="rotate(15 74 38)"/>
      <ellipse cx="50" cy="42" rx="26" ry="24" fill="#C8A668"/>
      <ellipse cx="50" cy="48" rx="16" ry="14" fill="#E8D4A8"/>
      {isHappy ? <>
        <path d="M34 41 Q40 37 46 41" fill="none" stroke="#3D2000" strokeWidth="2.8" strokeLinecap="round"/>
        <path d="M54 41 Q60 37 66 41" fill="none" stroke="#3D2000" strokeWidth="2.8" strokeLinecap="round"/>
      </> : <>
        <circle cx="40" cy={isScared?38:40} r={isScared?5.5:4.5} fill="#3D2000"/>
        <circle cx="60" cy={isScared?38:40} r={isScared?5.5:4.5} fill="#3D2000"/>
        <circle cx="38" cy={isScared?37:38} r="1.5" fill="white" opacity="0.8"/>
        <circle cx="58" cy={isScared?37:38} r="1.5" fill="white" opacity="0.8"/>
      </>}
      <ellipse cx="50" cy="49" rx="4.5" ry="3.5" fill="#3D2000"/>
      <circle cx="48" cy="48" r="1" fill="white" opacity="0.3"/>
      {emotion==="angry" && <><line x1="34" y1="33" x2="44" y2="36" stroke="#3D2000" strokeWidth="2.2" strokeLinecap="round"/><line x1="56" y1="36" x2="66" y2="33" stroke="#3D2000" strokeWidth="2.2" strokeLinecap="round"/></>}
      {emotion==="sad" && <ellipse cx="64" cy="45" rx="2" ry="3" fill="#7CB8E8" opacity="0.6"/>}
      {emotion==="overwhelmed" && <><circle cx="40" cy="40" r="4" fill="none" stroke="#3D2000" strokeWidth="1.5"/><circle cx="60" cy="40" r="4" fill="none" stroke="#3D2000" strokeWidth="1.5"/></>}
      {emotion==="happy" && <><path d="M42 54 Q50 62 58 54" fill="none" stroke="#3D2000" strokeWidth="2" strokeLinecap="round"/><path d="M44 56 Q50 60 56 56" fill="#FF8888" opacity="0.4"/></>}
      {emotion==="sad" && <path d="M44 56 Q50 52 56 56" fill="none" stroke="#3D2000" strokeWidth="1.8" strokeLinecap="round"/>}
      {emotion==="angry" && <path d="M44 55 L56 55" stroke="#3D2000" strokeWidth="1.8" strokeLinecap="round"/>}
      {emotion==="scared" && <ellipse cx="50" cy="55" rx="4" ry="3.5" fill="#3D2000"/>}
      {(emotion==="neutral"||emotion==="calm") && <path d="M46 53 Q50 56 54 53" fill="none" stroke="#3D2000" strokeWidth="1.5" strokeLinecap="round"/>}
      {emotion==="listening" && <><line x1="34" y1="34" x2="43" y2="32" stroke="#3D2000" strokeWidth="2.2" strokeLinecap="round"/><path d="M44 55 Q48 53 56 55" fill="none" stroke="#3D2000" strokeWidth="1.8" strokeLinecap="round"/></>}
      {isHappy && <><ellipse cx="30" cy="47" rx="5" ry="3" fill="#FFB0A0" opacity="0.4"/><ellipse cx="70" cy="47" rx="5" ry="3" fill="#FFB0A0" opacity="0.4"/></>}
    </svg>
  );
}

function DuckFace({ emotion = "neutral", size = 80 }) {
  const isHappy = emotion==="happy"||emotion==="calm";
  const isScared = emotion==="scared";
  return (
    <svg viewBox="18 8 64 52" width={size} height={size}>
      <circle cx="50" cy="38" r="22" fill="#F5D547"/>
      <ellipse cx="50" cy="16" rx="4" ry="7" fill="#E8C430"/>
      <ellipse cx="46" cy="18" rx="3" ry="5" fill="#F5D547" transform="rotate(-15 46 18)"/>
      <ellipse cx="50" cy="48" rx="10" ry="5" fill="#FF9933"/>
      <ellipse cx="50" cy="47" rx="9" ry="4" fill="#FFB050"/>
      {isHappy ? <>
        <path d="M34 37 Q40 33 46 37" fill="none" stroke="#2A1800" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M54 37 Q60 33 66 37" fill="none" stroke="#2A1800" strokeWidth="2.5" strokeLinecap="round"/>
      </> : <>
        <circle cx="40" cy={isScared?34:36} r={isScared?5:4} fill="#2A1800"/>
        <circle cx="60" cy={isScared?34:36} r={isScared?5:4} fill="#2A1800"/>
        <circle cx="38" cy={isScared?33:34} r="1.3" fill="white" opacity="0.8"/>
        <circle cx="58" cy={isScared?33:34} r="1.3" fill="white" opacity="0.8"/>
      </>}
      {emotion==="angry" && <><line x1="34" y1="28" x2="44" y2="31" stroke="#2A1800" strokeWidth="2.2" strokeLinecap="round"/><line x1="56" y1="31" x2="66" y2="28" stroke="#2A1800" strokeWidth="2.2" strokeLinecap="round"/></>}
      {emotion==="sad" && <ellipse cx="63" cy="40" rx="2" ry="3" fill="#7CB8E8" opacity="0.6"/>}
      {emotion==="overwhelmed" && <><circle cx="40" cy="36" r="3.5" fill="none" stroke="#2A1800" strokeWidth="1.5"/><circle cx="60" cy="36" r="3.5" fill="none" stroke="#2A1800" strokeWidth="1.5"/></>}
      {emotion==="listening" && <><line x1="34" y1="28" x2="43" y2="27" stroke="#2A1800" strokeWidth="2" strokeLinecap="round"/></>}
      {isHappy && <><ellipse cx="32" cy="42" rx="5" ry="3" fill="#FFB0A0" opacity="0.4"/><ellipse cx="68" cy="42" rx="5" ry="3" fill="#FFB0A0" opacity="0.4"/></>}
    </svg>
  );
}

function OwlFace({ emotion = "neutral", size = 80 }) {
  const isHappy = emotion==="happy"||emotion==="calm";
  const isScared = emotion==="scared";
  return (
    <svg viewBox="10 0 80 60" width={size} height={size}>
      <polygon points="28,22 22,4 36,18" fill="#A0785A"/>
      <polygon points="72,22 78,4 64,18" fill="#A0785A"/>
      <ellipse cx="50" cy="40" rx="28" ry="24" fill="#C4956A"/>
      <ellipse cx="50" cy="42" rx="22" ry="18" fill="#E8D4BC"/>
      <circle cx="38" cy="38" r="10" fill="white" stroke="#A0785A" strokeWidth="1.5"/>
      <circle cx="62" cy="38" r="10" fill="white" stroke="#A0785A" strokeWidth="1.5"/>
      {isHappy ? <>
        <path d="M32 40 Q38 35 44 40" fill="none" stroke="#2A1800" strokeWidth="2.8" strokeLinecap="round"/>
        <path d="M56 40 Q62 35 68 40" fill="none" stroke="#2A1800" strokeWidth="2.8" strokeLinecap="round"/>
      </> : <>
        <circle cx="38" cy={isScared?37:39} r={isScared?6:5} fill="#2A1800"/>
        <circle cx="62" cy={isScared?37:39} r={isScared?6:5} fill="#2A1800"/>
        <circle cx="36" cy={isScared?35:37} r="1.8" fill="white" opacity="0.8"/>
        <circle cx="60" cy={isScared?35:37} r="1.8" fill="white" opacity="0.8"/>
      </>}
      {emotion==="angry" && <><line x1="30" y1="28" x2="42" y2="31" stroke="#2A1800" strokeWidth="2.2" strokeLinecap="round"/><line x1="58" y1="31" x2="70" y2="28" stroke="#2A1800" strokeWidth="2.2" strokeLinecap="round"/></>}
      {emotion==="sad" && <ellipse cx="66" cy="43" rx="2" ry="3" fill="#7CB8E8" opacity="0.6"/>}
      {emotion==="overwhelmed" && <><circle cx="38" cy="39" r="4.5" fill="none" stroke="#2A1800" strokeWidth="1.5"/><circle cx="62" cy="39" r="4.5" fill="none" stroke="#2A1800" strokeWidth="1.5"/></>}
      <polygon points="47,46 53,46 50,52" fill="#E8A040"/>
      {emotion==="listening" && <><line x1="30" y1="29" x2="40" y2="27" stroke="#2A1800" strokeWidth="2" strokeLinecap="round"/></>}
      {isHappy && <><ellipse cx="28" cy="46" rx="5" ry="3" fill="#FFB0A0" opacity="0.35"/><ellipse cx="72" cy="46" rx="5" ry="3" fill="#FFB0A0" opacity="0.35"/></>}
    </svg>
  );
}

const FACE_MAP = { bear: BearFace, bunny: BunnyFace, kitty: KittyFace, puppy: PuppyFace, duck: DuckFace, owl: OwlFace };

function Face({ id, emotion="neutral", size=80 }) {
  const C = FACE_MAP[id];
  return C ? <C emotion={emotion} size={size} /> : <div style={{fontSize:size*0.4}}>🐾</div>;
}
const EMOTIONS = [
  { id:"angry", label:"Angry", color:"#E8625E", bg:"#FFF0EF", activity:"breathing" },
  { id:"sad", label:"Sad", color:"#5B8BD4", bg:"#EFF4FF", activity:"hug" },
  { id:"scared", label:"Scared", color:"#9B6DD7", bg:"#F4EEFF", activity:"grounding" },
  { id:"listening", label:"Not\nListening", color:"#E8A033", bg:"#FFF8F0", activity:"listening" },
];

const GROUND = [
  {id:"stuffy",emoji:"🧸",label:"Stuffy"},{id:"blanket",emoji:"🛏️",label:"Blanket"},
  {id:"window",emoji:"🪟",label:"Window"},{id:"pet",emoji:"🐾",label:"Pet"},
  {id:"shoe",emoji:"👟",label:"Shoe"},{id:"cup",emoji:"🥤",label:"Cup"},
  {id:"sky",emoji:"🌤️",label:"Sky"},{id:"tree",emoji:"🌳",label:"Tree"},
  {id:"clouds",emoji:"☁️",label:"Clouds"},{id:"moon",emoji:"🌙",label:"Moon"},
  {id:"birds",emoji:"🐦",label:"Birds"},
];

// Audio: set USE_PRE=true & AUDIO_URL when you have files named {id}.mp3
const AUDIO_URL = "/audio/";
const USE_PRE = true;

const VP = {
  angry_intro:{id:"angry_intro",label:"😠 Intro",text:"Oh no, {buddy} is feeling angry! What should we do to help?"},
  angry_done:{id:"angry_done",label:"⭐ All done",text:"Great job {name}! {buddy} feels so much better now!"},
  angry_breathing:[
    {id:"angry_smell1",label:"🌸 Smell flower 1",text:"Let's smell a pretty flower... breathe in through your nose, nice and slow."},
    {id:"angry_blow1",label:"🕯️ Blow candle 1",text:"Now blow out the candle... breathe out through your mouth, nice and slow."},
    {id:"angry_smell2",label:"🌸 Smell flower 2",text:"Great! Let's smell another flower... a big deep breath in."},
    {id:"angry_blow2",label:"🕯️ Blow candle 2",text:"And blow it out... nice and easy, you're doing so well."},
    {id:"angry_smell3",label:"🌸 Smell flower 3",text:"One more flower... the biggest smell yet! Breathe in..."},
    {id:"angry_blow3",label:"🕯️ Blow candle 3",text:"And the last candle... blow it all the way out. Whoooosh!"},
  ],
  angry_squeeze:[
    {id:"angry_sq_intro",label:"✊ Squeeze intro",text:"Let's squeeze those angry feelings out! Make fists with your hands!"},
    {id:"angry_sq1",label:"✊ Squeeze 1",text:"Squeeze your hands really tight... tight tight tight!"},
    {id:"angry_rel1",label:"🤲 Release 1",text:"Now let go... shake your hands out. Feel that?"},
    {id:"angry_sq2",label:"✊ Squeeze 2",text:"One more time! Squeeze really hard... you're so strong!"},
    {id:"angry_rel2",label:"🤲 Release 2",text:"And release... let all that anger float right out of your fingers."},
  ],
  angry_counting:[
    {id:"angry_count_intro",label:"🔢 Count intro",text:"Let's count to five together, nice and slow. Ready?"},
    {id:"angry_count1",label:"1️⃣ One",text:"One..."},
    {id:"angry_count2",label:"2️⃣ Two",text:"Two..."},
    {id:"angry_count3",label:"3️⃣ Three",text:"Three..."},
    {id:"angry_count4",label:"4️⃣ Four",text:"Four..."},
    {id:"angry_count5",label:"5️⃣ Five",text:"Five! Great counting, {name}!"},
  ],
  sad:[
    {id:"sad_intro",label:"😢 Intro",text:"{buddy} is feeling sad. Can you help them feel better?"},
    {id:"sad_validate",label:"💛 Validate",text:"Can you tell {buddy}... it's okay to be sad?"},
    {id:"sad_happy",label:"🌈 Happy thing",text:"That was so kind! Now can you tell {buddy} something that makes you happy?"},
    {id:"sad_hug_ask",label:"🤗 Hug ask",text:"{buddy} says... can I have a hug?"},
    {id:"sad_hugging",label:"🤗 Hugging",text:"Hold {buddy} tight... you're such a good friend."},
    {id:"sad_done",label:"⭐ All done",text:"{buddy} feels so much better! You're amazing, {name}!"},
  ],
  scared:[
    {id:"scared_intro",label:"😨 Intro",text:"{buddy} is feeling scared. Let's look around and find some friendly things!"},
    {id:"scared_find",label:"👀 Find things",text:"Can you look around, {name}? Tap the things you can see near you!"},
    {id:"scared_done",label:"⭐ All done",text:"You found them! See, there are so many nice things around us. {buddy} feels safe now!"},
  ],
  overwhelmed:[
    {id:"over_intro",label:"😵‍💫 Intro",text:"{buddy} has really big feelings right now. Let's squeeze them out!"},
    {id:"over_squeeze",label:"✊ Squeeze",text:"Squeeze your hands really tight... tight tight tight!"},
    {id:"over_release",label:"🤲 Release",text:"Now let go... let all those big feelings float away."},
    {id:"over_done",label:"⭐ All done",text:"Amazing, {name}! {buddy} feels so much lighter now!"},
  ],
  listening:[
    {id:"listen_intro",label:"👂 Intro",text:"{buddy} isn't listening right now. Can you help them learn?"},
    {id:"listen_eyes",label:"👀 Eyes",text:"Can you tell {buddy}... first we use our eyes to look at the person talking?"},
    {id:"listen_ears",label:"👂 Ears",text:"Great! Now tell {buddy}... we use our ears to hear the words."},
    {id:"listen_body",label:"🧍 Body",text:"And tell {buddy}... we keep our body still and calm."},
    {id:"listen_try",label:"🌟 Try it",text:"Now let's practice! Can you show {buddy} your best listening? Look at me with your eyes, open your ears, and keep your body still!"},
    {id:"listen_done",label:"⭐ All done",text:"Wow, {name}! You're such an amazing listener! {buddy} learned so much from you!"},
  ],
};

// ─── Helpers ─────────────────────────────────────────────────
const FT = "'Nunito', sans-serif";
const BR = "#5D4037";
const BL = "#8D6E63";
const CSS = `@keyframes gf{0%,100%{transform:translateY(0)}50%{transform:translateY(-30px)}}@keyframes gi{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes gb{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}@keyframes gg{0%,100%{box-shadow:0 0 8px rgba(255,150,100,0.3)}50%{box-shadow:0 0 24px rgba(255,150,100,0.6)}}*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}`;

function tts(t){return new Promise(r=>{if(!window.speechSynthesis){r();return}window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.rate=0.82;u.pitch=1.1;const voices=window.speechSynthesis.getVoices();const samantha=voices.find(v=>v.name==="Samantha")||voices.find(v=>v.name.includes("Samantha"))||null;if(samantha)u.voice=samantha;u.onend=r;u.onerror=r;speechSynthesis.speak(u)})}
const sharedAudio = new Audio();

function playF(url) {
  if (!url) return Promise.resolve();

  return new Promise((resolve, reject) => {
    sharedAudio.pause();
    sharedAudio.currentTime = 0;
    sharedAudio.src = url;
    sharedAudio.load();

    const cleanup = () => {
      sharedAudio.onended = null;
      sharedAudio.onerror = null;
      sharedAudio.oncanplaythrough = null;
    };

    sharedAudio.onended = () => {
      cleanup();
      resolve();
    };

    sharedAudio.onerror = (e) => {
      console.error("Audio failed:", url);
      cleanup();
      reject(e);
    };

    sharedAudio.oncanplaythrough = () => {
      sharedAudio.play().catch((err) => {
        console.error("Play blocked:", err);
        cleanup();
        reject(err);
      });
    };
  });
}
function ld(k){try{const d=localStorage.getItem(k);return d?JSON.parse(d):null}catch{return null}}
function sv(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}

function useV(p,vm){
  return useCallback(async(pr)=>{
    if(vm[pr.id]){await playF(vm[pr.id]);return}
    if(USE_PRE){try{await playF(`${AUDIO_URL}${pr.id}.mp3`);return}catch{}}
    await tts(pr.text.replace(/\{buddy\}/g,p.buddyName).replace(/\{name\}/g,p.childName));
  },[p,vm]);
}

// ─── UI Parts ────────────────────────────────────────────────
function Dots({color="#FFD4A0"}){
  const d=useRef(Array.from({length:10},()=>({w:8+Math.random()*18,x:Math.random()*100,y:Math.random()*100,dur:6+Math.random()*8,del:Math.random()*5,op:0.1+Math.random()*0.13}))).current;
  return <div style={{position:"fixed",inset:0,pointerEvents:"none",overflow:"hidden",zIndex:0}}>{d.map((p,i)=><div key={i} style={{position:"absolute",width:p.w,height:p.w,borderRadius:"50%",background:color,opacity:p.op,left:`${p.x}%`,top:`${p.y}%`,animation:`gf ${p.dur}s ease-in-out infinite`,animationDelay:`${p.del}s`}}/>)}</div>;
}

function Btn({onClick,color="#5BAE7C",children,disabled,style:s={}}){
  return <button onClick={onClick} disabled={disabled} style={{background:color,color:"#fff",border:"none",borderRadius:28,padding:"18px 36px",fontSize:21,fontFamily:FT,fontWeight:800,cursor:disabled?"default":"pointer",opacity:disabled?0.45:1,boxShadow:`0 6px 18px ${color}44`,transition:"transform .12s",letterSpacing:0.4,...s}} onPointerDown={e=>{if(!disabled)e.currentTarget.style.transform="scale(0.94)"}} onPointerUp={e=>{e.currentTarget.style.transform="scale(1)"}} onPointerLeave={e=>{e.currentTarget.style.transform="scale(1)"}}>{children}</button>;
}

function SB({onClick,color,children}){return <button onClick={onClick} style={{background:color,color:"#fff",border:"none",borderRadius:12,padding:"8px 16px",fontFamily:FT,fontSize:13,fontWeight:700,cursor:"pointer"}}>{children}</button>}

function Pg({children,bg="linear-gradient(160deg,#FFFAF5 0%,#FFF3E8 50%,#FFE8D6 100%)",pc="#FFD4A0"}){
  return <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,background:bg,fontFamily:FT,position:"relative"}}><style>{CSS}</style><Dots color={pc}/><div style={{position:"relative",zIndex:1,width:"100%",maxWidth:480,textAlign:"center"}}>{children}</div></div>;
}

function BB({onClick}){return <button onClick={onClick} style={{background:"none",border:"none",fontSize:16,fontFamily:FT,fontWeight:700,color:BL,cursor:"pointer",marginBottom:16,textAlign:"left",display:"block"}}>← Back</button>}

// ─── Shared Done Screen ──────────────────────────────────────
function DoneScreen({prof,onDone,bg="linear-gradient(160deg,#EEFFF3,#D4F5DE)",pc="#A0E8B0"}){
  return <Pg bg={bg} pc={pc}><div style={{animation:"gi .5s ease",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"80vh"}}>
    <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Animal id={prof.animal.id} emotion="happy" size={220}/>
      <p style={{fontSize:28,color:"#5BAE7C",fontWeight:800,margin:"20px 0 0"}}>⭐ Great job! ⭐</p>
    </div>
    <div style={{paddingBottom:40,width:"100%",display:"flex",justifyContent:"center"}}>
      <Btn onClick={onDone} style={{width:"80%",maxWidth:300,textAlign:"center"}}>Back Home 🏠</Btn>
    </div>
  </div></Pg>;
}

// ─── Shared Intro Screen ─────────────────────────────────────
function IntroScreen({prof,emotion="neutral",bg="linear-gradient(160deg,#FFFAF5,#FFF3E8)",pc="#FFD4A0"}){
  return <Pg bg={bg} pc={pc}><div style={{animation:"gi .5s ease",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"80vh"}}>
    <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Animal id={prof.animal.id} emotion={emotion} size={220}/>
    </div>
    <div style={{paddingBottom:60}}>
      <p style={{fontSize:20,color:BL,fontWeight:700}}>Getting ready...</p>
    </div>
  </div></Pg>;
}

// ─── Setup ───────────────────────────────────────────────────
function Setup({onDone}){
  const[s,setS]=useState(0);const[cn,setCn]=useState("Goose");const[an,setAn]=useState(null);const[bn,setBn]=useState("");
  const inp={fontSize:26,padding:"14px 22px",borderRadius:18,border:"3px solid #FFD4A0",textAlign:"center",width:"75%",maxWidth:280,fontFamily:FT,fontWeight:700,color:BR,background:"#FFFAF5",outline:"none"};
  return <Pg><div style={{animation:"gi .5s ease"}}>
    {s===0&&<><div style={{fontSize:68,marginBottom:12}}>🪿</div><h1 style={{fontSize:30,color:BR,margin:"0 0 6px"}}>Welcome!</h1><p style={{fontSize:19,color:BL,marginBottom:28}}>What's your little one's name?</p><input value={cn} onChange={e=>setCn(e.target.value)} placeholder="Goose" style={inp}/><div style={{marginTop:28}}><Btn onClick={()=>cn.trim()&&setS(1)} color="#FF9966" disabled={!cn.trim()}>Next →</Btn></div></>}
    {s===1&&<><h1 style={{fontSize:26,color:BR,margin:"0 0 6px"}}>Hi {cn}! 👋</h1><p style={{fontSize:19,color:BL,marginBottom:24}}>Pick a buddy to take care of!</p><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:28}}>{ANIMALS.map(a=><button key={a.id} onClick={()=>setAn(a)} style={{background:an?.id===a.id?"#FFF0E0":"#FFFAF5",border:an?.id===a.id?"4px solid #FF9966":"3px solid #FFE0C0",borderRadius:22,padding:"12px 4px",cursor:"pointer",transition:"transform .12s",transform:an?.id===a.id?"scale(1.05)":"scale(1)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><Animal id={a.id} emotion="happy" size={70}/><div style={{fontSize:13,fontFamily:FT,fontWeight:700,color:BL,marginTop:2}}>{a.name}</div></button>)}</div><Btn onClick={()=>an&&setS(2)} color="#FF9966" disabled={!an}>Next →</Btn></>}
    {s===2&&<><Animal id={an.id} emotion="happy" size={120}/><h1 style={{fontSize:26,color:BR,margin:"8px 0 6px"}}>Name your {an.name}!</h1><p style={{fontSize:18,color:BL,marginBottom:24}}>What should {cn} call their buddy?</p><input value={bn} onChange={e=>setBn(e.target.value)} placeholder={`My ${an.name}`} style={inp}/><div style={{marginTop:28}}><Btn onClick={()=>onDone({childName:cn.trim(),animal:an,buddyName:bn.trim()||an.name})} color="#5BAE7C">Let's Go! 🎉</Btn></div></>}
  </div></Pg>;
}

// ─── Home ────────────────────────────────────────────────────
function Home({prof,onEmo,onDash,onVoice}){
  return <Pg><div style={{animation:"gi .5s ease",display:"flex",flexDirection:"column",alignItems:"center"}}>
    <div style={{animation:"gb 2s ease-in-out infinite",marginBottom:28,display:"flex",justifyContent:"center"}}><Animal id={prof.animal.id} emotion="neutral" size={200}/></div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16,marginBottom:36,width:"100%",maxWidth:340}}>
      {EMOTIONS.map(em=><button key={em.id} onClick={()=>onEmo(em)} style={{background:em.bg,border:`4px solid ${em.color}44`,borderRadius:26,padding:"16px 8px",cursor:"pointer",transition:"transform .12s",display:"flex",flexDirection:"column",alignItems:"center",gap:6}} onPointerDown={e=>{e.currentTarget.style.transform="scale(0.93)"}} onPointerUp={e=>{e.currentTarget.style.transform="scale(1)"}} onPointerLeave={e=>{e.currentTarget.style.transform="scale(1)"}}>
        <Face id={prof.animal.id} emotion={em.id} size={80}/>
        <span style={{fontSize:16,fontFamily:FT,fontWeight:800,color:em.color,lineHeight:1.2}}>{em.label}</span>
      </button>)}
    </div>
    <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
      <button onClick={onVoice} style={{background:"none",border:"2px solid #DDCFC0",borderRadius:16,padding:"10px 18px",fontFamily:FT,fontSize:14,fontWeight:700,color:BL,cursor:"pointer"}}>🎙️ Record Voices</button>
      <button onClick={onDash} style={{background:"none",border:"2px solid #DDCFC0",borderRadius:16,padding:"10px 18px",fontFamily:FT,fontSize:14,fontWeight:700,color:BL,cursor:"pointer"}}>📊 Parent Dashboard</button>
    </div>
  </div></Pg>;
}

// ─── Activities ──────────────────────────────────────────────

// Step-queue runner: plays a sequence of {prompt, delay} steps reliably
function useStepQueue(playVoice) {
  const [step, setStep] = useState(-1);
  const queueRef = useRef([]);
  const [done, setDone] = useState(false);
  const m = useRef(true);
  const timerRef = useRef(null);
  useEffect(() => () => { m.current = false; clearTimeout(timerRef.current); }, []);

  const start = useCallback((steps) => {
    queueRef.current = steps;
    setDone(false);
    setStep(0);
  }, []);

  useEffect(() => {
    const queue = queueRef.current;
    if (step < 0 || !queue.length) return;
    if (step >= queue.length) { setDone(true); return; }
    const item = queue[step];
    if (!item) return;
    let cancelled = false;
    (async () => {
      if (item.prompt) await playVoice(item.prompt);
      if (cancelled || !m.current) return;
      const delay = item.delay || 0;
      if (delay > 0) {
        timerRef.current = setTimeout(() => { if (!cancelled && m.current) setStep(s => s + 1); }, delay);
      } else {
        setStep(s => s + 1);
      }
    })();
    return () => { cancelled = true; clearTimeout(timerRef.current); };
  }, [step]);

  return { step, done, start };
}

const ANGRY_ACTIVITIES = [
  { key: "breathing", icon: "🌸", label: "Smell\nFlowers", color: "#FF8A80" },
  { key: "squeeze", icon: "✊", label: "Squeeze\n& Release", color: "#FFB060" },
  { key: "counting", icon: "🔢", label: "Count\nto Five", color: "#A0C4FF" },
];

function AngryActivity({ prof, vm, onDone }) {
  const pv = useV(prof, vm);
  const [phase, setPhase] = useState("intro");
  const [chosen, setChosen] = useState(null);
  const { step, done, start } = useStepQueue(pv);
  const m = useRef(true);
  useEffect(() => () => { m.current = false }, []);

  useEffect(() => { (async () => { await pv(VP.angry_intro); if (m.current) setPhase("pick"); })() }, []);
  useEffect(() => { if (done) { (async () => { await pv(VP.angry_done); if (m.current) setPhase("done"); })(); } }, [done]);

  const pick = (key) => {
    setChosen(key);
    setPhase("activity");
    const BP = VP.angry_breathing;
    const SP = VP.angry_squeeze;
    const CP = VP.angry_counting;
    if (key === "breathing") {
      start([
        { prompt: BP[0], delay: 3500 }, { prompt: BP[1], delay: 3500 },
        { prompt: BP[2], delay: 3500 }, { prompt: BP[3], delay: 3500 },
        { prompt: BP[4], delay: 3500 }, { prompt: BP[5], delay: 3500 },
      ]);
    } else if (key === "squeeze") {
      start([
        { prompt: SP[0], delay: 500 },
        { prompt: SP[1], delay: 4000 }, { prompt: SP[2], delay: 4000 },
        { prompt: SP[3], delay: 4000 }, { prompt: SP[4], delay: 2000 },
      ]);
    } else if (key === "counting") {
      start([
      { prompt: CP[0], delay: 300 },
      { prompt: CP[1], delay: 600 },
      { prompt: CP[2], delay: 600 },
      { prompt: CP[3], delay: 600 },
      { prompt: CP[4], delay: 600 },
      { prompt: CP[5], delay: 500 },
    ]);
    }   
  };

  const breathStep = chosen === "breathing" ? step : -1;
  const isSmell = breathStep >= 0 && breathStep % 2 === 0;
  const [circleSize, setCircleSize] = useState(80);
  useEffect(() => {
    if (chosen !== "breathing" || phase !== "activity") return;
    if (breathStep < 0) return;
    if (isSmell) {
      // Start small, grow big (breathing in)
      setCircleSize(80);
      const t = setTimeout(() => setCircleSize(180), 50);
      return () => clearTimeout(t);
    } else {
      // Start big, shrink small (breathing out)
      setCircleSize(180);
      const t = setTimeout(() => setCircleSize(80), 50);
      return () => clearTimeout(t);
    }
  }, [breathStep, chosen, phase]);
  const squeezeStep = chosen === "squeeze" ? step : -1;
  const isSqueeze = squeezeStep === 1 || squeezeStep === 3;
  const countStep = chosen === "counting" ? step : -1;
  const countNum = countStep >= 1 ? Math.min(countStep, 5) : 0;

  if (phase === "done") return <DoneScreen prof={prof} onDone={onDone} bg="linear-gradient(160deg,#FFF0EF,#EEFFF3)" pc="#A0E8B0" />;
  if (phase === "intro") return <IntroScreen prof={prof} emotion="angry" bg="linear-gradient(160deg,#FFF0EF,#FFE8E6)" pc="#FFB0A0" />;

  return <Pg bg="linear-gradient(160deg,#FFF0EF,#FFE8E6)" pc="#FFB0A0"><div style={{ animation: "gi .5s ease", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Animal id={prof.animal.id} emotion="angry" size={phase === "pick" ? 120 : 100} />

    {phase === "pick" && <>
      <p style={{ fontSize: 20, color: "#C0524E", fontWeight: 800, margin: "16px 0 20px", textAlign: "center" }}>What should we try?</p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        {ANGRY_ACTIVITIES.map(opt => (
          <button key={opt.key} onClick={() => pick(opt.key)} style={{
            background: "#FFFAF5", border: `4px solid ${opt.color}`, borderRadius: 24,
            padding: "18px 12px", cursor: "pointer", transition: "transform .12s",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: 110,
          }}
            onPointerDown={e => { e.currentTarget.style.transform = "scale(0.93)" }}
            onPointerUp={e => { e.currentTarget.style.transform = "scale(1)" }}
            onPointerLeave={e => { e.currentTarget.style.transform = "scale(1)" }}
          >
            <span style={{ fontSize: 42 }}>{opt.icon}</span>
            <span style={{ fontSize: 13, fontFamily: FT, fontWeight: 800, color: BR, whiteSpace: "pre-line", lineHeight: 1.3, textAlign: "center" }}>{opt.label}</span>
          </button>
        ))}
      </div>
    </>}

    {phase === "activity" && chosen === "breathing" && <>
      <p style={{ fontSize: 22, color: "#C0524E", fontWeight: 800, margin: "12px 0 16px" }}>
        {isSmell ? "🌸 Smell the flower..." : "🕯️ Blow the candle..."}
      </p>
      <div style={{
        width: circleSize, height: circleSize, borderRadius: "50%", margin: "0 auto 16px",
        background: isSmell ? "radial-gradient(circle,#FFB7B0,#FF8A80)" : "radial-gradient(circle,#FFCC80,#FFB060)",
        transition: "width 3s ease, height 3s ease, background 0.3s ease",
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36,
      }}>{isSmell ? "🌸" : "🕯️"}</div>
      <p style={{ fontSize: 15, color: BL }}>{Math.min(Math.floor(step / 2) + 1, 3)} of 3</p>
    </>}

    {phase === "activity" && chosen === "squeeze" && <>
      <p style={{ fontSize: 24, color: "#E0922E", fontWeight: 800, margin: "12px 0 16px" }}>
        {squeezeStep === 0 ? "Getting ready..." : isSqueeze ? "✊ Squeeze tight!" : "🤲 Let it go..."}
      </p>
      <div style={{
        fontSize: 80, transition: "transform 3.5s ease",
        transform: isSqueeze ? "scale(0.7)" : "scale(1.2)",
      }}>{isSqueeze ? "✊" : "🤲"}</div>
      <p style={{ fontSize: 15, color: BL, marginTop: 16 }}>{squeezeStep <= 2 ? "1" : "2"} of 2</p>
    </>}

    {phase === "activity" && chosen === "counting" && <>
      <p style={{ fontSize: 20, color: "#5B8BD4", fontWeight: 800, margin: "12px 0 8px" }}>Let's count together...</p>
      <div style={{
        fontSize: 72, fontFamily: FT, fontWeight: 900, color: "#5B8BD4",
        margin: "8px 0", transition: "transform 0.3s ease",
        transform: countNum > 0 ? "scale(1)" : "scale(0.5)",
      }}>{countNum > 0 ? countNum : "..."}</div>
      <div style={{ display: "flex", gap: 10, margin: "12px 0", justifyContent: "center" }}>
        {[1, 2, 3, 4, 5].map(n => <div key={n} style={{
          width: 20, height: 20, borderRadius: "50%",
          background: n <= countNum ? "#5B8BD4" : "#D0D8E8",
          transition: "background 0.3s ease, transform 0.3s ease",
          transform: n === countNum ? "scale(1.3)" : "scale(1)",
        }} />)}
      </div>
    </>}
  </div></Pg>;
}

function SadActivity({prof,vm,onDone}){
  const pv=useV(prof,vm);
  // Phases: intro → validate → happy → hug_ask → hugging → done
  const[ph,setPh]=useState("intro");
  const[hugProgress,setHugProgress]=useState(0);
  const hugTimer=useRef(null);
  const P=VP.sad; // intro=0, validate=1, happy=2, hug_ask=3, hugging=4, done=5
  const m=useRef(true);
  useEffect(()=>()=>{m.current=false;clearInterval(hugTimer.current)},[]);

  // Start: play intro then move to validate
  useEffect(()=>{(async()=>{
    await pv(P[0]);
    if(m.current){setPh("validate");await pv(P[1])}
  })()},[]);

  const tapHeart=async()=>{
    if(ph==="validate"){
      setPh("happy");
      await pv(P[2]);
    } else if(ph==="happy"){
      setPh("hug_ask");
      await pv(P[3]);
    }
  };

  // Start hug countdown
  const startHug=()=>{
    setPh("hugging");
    setHugProgress(0);
    pv(P[4]);
    hugTimer.current=setInterval(()=>{
      setHugProgress(p=>{
        if(p>=100){
          clearInterval(hugTimer.current);
          if(m.current){setPh("done");pv(P[5])}
          return 100;
        }
        return p+1.25; // ~8 seconds (100/1.25 = 80 ticks * 100ms)
      });
    },100);
  };

  const buddyEmo=ph==="done"?"happy":ph==="hugging"?"calm":ph==="hug_ask"?"sad":ph==="happy"?"neutral":"sad";
  const stepLabels={validate:"It's okay to be sad",happy:"Something that makes you happy"};

  if(ph==="done") return <DoneScreen prof={prof} onDone={onDone} bg="linear-gradient(160deg,#EFF4FF,#EEFFF3)" pc="#A0C4FF"/>;
  if(ph==="intro") return <IntroScreen prof={prof} emotion="sad" bg="linear-gradient(160deg,#EFF4FF,#E0ECFF)" pc="#A0C4FF"/>;

  return <Pg bg="linear-gradient(160deg,#EFF4FF,#E0ECFF)" pc="#A0C4FF"><div style={{animation:"gi .5s ease",display:"flex",flexDirection:"column",alignItems:"center"}}>
    <style>{`@keyframes hugGlow{0%,100%{filter:drop-shadow(0 0 12px rgba(91,139,212,0.3))}50%{filter:drop-shadow(0 0 30px rgba(255,180,200,0.6))}}`}</style>

    {/* Buddy */}
    <div style={{
      transition:"transform 0.5s ease",
      transform:ph==="hugging"?"scale(1.15)":"scale(1)",
      animation:ph==="hugging"?"hugGlow 2s ease-in-out infinite":"none",
    }}>
      <Animal id={prof.animal.id} emotion={buddyEmo} size={ph==="hugging"?160:130}/>
    </div>

    {/* Step 1 & 2: Validate & Happy thing */}
    {(ph==="validate"||ph==="happy")&&<>
      {/* Progress dots */}
      <div style={{display:"flex",gap:10,margin:"16px 0 12px"}}>
        <div style={{width:12,height:12,borderRadius:"50%",background:ph==="happy"||ph==="hug_ask"?"#5B8BD4":"#5B8BD4",opacity:1}}/>
        <div style={{width:12,height:12,borderRadius:"50%",background:ph==="happy"?"#5B8BD4":"#D0D8E8",opacity:1}}/>
        <div style={{width:12,height:12,borderRadius:"50%",background:"#D0D8E8"}}/>
      </div>

      <p style={{fontSize:18,color:"#5B8BD4",fontWeight:800,margin:"8px 0 4px",textAlign:"center",maxWidth:320}}>
        {ph==="validate"?"Can you tell them..." :"Now can you tell them..."}
      </p>
      <p style={{fontSize:22,color:BR,fontWeight:800,margin:"4px 0 20px",textAlign:"center",maxWidth:320,fontStyle:"italic"}}>
        "{stepLabels[ph]}"
      </p>

      <button onClick={tapHeart} style={{
        width:80,height:80,borderRadius:"50%",border:"none",
        background:"linear-gradient(135deg,#FFB0B0,#FF7090)",
        fontSize:40,cursor:"pointer",transition:"transform .15s",
        boxShadow:"0 6px 20px rgba(255,112,144,0.4)",
        display:"flex",alignItems:"center",justifyContent:"center",
      }}
        onPointerDown={e=>{e.currentTarget.style.transform="scale(0.9)"}}
        onPointerUp={e=>{e.currentTarget.style.transform="scale(1.1)"}}
        onPointerLeave={e=>{e.currentTarget.style.transform="scale(1)"}}
      >💛</button>
      <p style={{fontSize:13,color:BL,marginTop:8}}>Tap when you've said it!</p>
    </>}

    {/* Step 3: Buddy asks for hug */}
    {ph==="hug_ask"&&<>
      <div style={{display:"flex",gap:10,margin:"16px 0 12px"}}>
        <div style={{width:12,height:12,borderRadius:"50%",background:"#5B8BD4"}}/>
        <div style={{width:12,height:12,borderRadius:"50%",background:"#5B8BD4"}}/>
        <div style={{width:12,height:12,borderRadius:"50%",background:"#5B8BD4"}}/>
      </div>

      <p style={{fontSize:22,color:"#5B8BD4",fontWeight:800,margin:"12px 0 4px",textAlign:"center"}}>
        {prof.buddyName} says...
      </p>
      <p style={{fontSize:26,color:BR,fontWeight:800,margin:"4px 0 24px",textAlign:"center",fontStyle:"italic"}}>
        "Can I have a hug?"
      </p>

      <button onClick={startHug} style={{
        width:100,height:100,borderRadius:"50%",border:"none",
        background:"linear-gradient(135deg,#B0D4FF,#7CB8FF)",
        fontSize:48,cursor:"pointer",transition:"transform .15s",
        boxShadow:"0 8px 24px rgba(91,139,212,0.4)",
        display:"flex",alignItems:"center",justifyContent:"center",
      }}
        onPointerDown={e=>{e.currentTarget.style.transform="scale(0.92)"}}
        onPointerUp={e=>{e.currentTarget.style.transform="scale(1.05)"}}
        onPointerLeave={e=>{e.currentTarget.style.transform="scale(1)"}}
      >🤗</button>
      <p style={{fontSize:14,color:BL,marginTop:10}}>Tap to give a hug!</p>
    </>}

    {/* Hugging phase */}
    {ph==="hugging"&&<>
      <p style={{fontSize:24,color:"#5B8BD4",fontWeight:800,margin:"12px 0 8px"}}>
        🤗 Hugging...
      </p>
      <p style={{fontSize:16,color:BL,marginBottom:12}}>Hold {prof.buddyName} tight!</p>
      <div style={{width:260,height:12,borderRadius:6,background:"#E0ECFF",overflow:"hidden"}}>
        <div style={{
          height:"100%",borderRadius:6,
          background:"linear-gradient(90deg,#FFB0C0,#FF7090,#FF5070)",
          width:`${hugProgress}%`,transition:"width .1s",
        }}/>
      </div>
      <div style={{display:"flex",gap:6,margin:"12px 0",justifyContent:"center"}}>
        {["💛","🧡","💖"].map((h,i)=><span key={i} style={{fontSize:24,animation:`gi ${0.3+i*0.15}s ease`,opacity:hugProgress>i*30?1:0.3,transition:"opacity .3s"}}>{h}</span>)}
      </div>
    </>}

  </div></Pg>;
}

function Grounding({prof,vm,onDone}){
  const pv=useV(prof,vm);const[ph,setPh]=useState("i");const[found,setFound]=useState([]);const[items]=useState(()=>[...GROUND].sort(()=>Math.random()-0.5).slice(0,6));const P=VP.scared;const m=useRef(true);
  useEffect(()=>()=>{m.current=false},[]);
  useEffect(()=>{(async()=>{await pv(P[0]);if(m.current){await pv(P[1]);setPh("f")}})()},[]);
  const tap=it=>{if(found.includes(it.id))return;const n=[...found,it.id];setFound(n);if(n.length>=3)setTimeout(async()=>{if(!m.current)return;setPh("d");await pv(P[2])},500)};
  if(ph==="d") return <DoneScreen prof={prof} onDone={onDone} bg="linear-gradient(160deg,#F4EEFF,#EEFFF3)" pc="#C8A8FF"/>;
  if(ph==="i") return <IntroScreen prof={prof} emotion="scared" bg="linear-gradient(160deg,#F4EEFF,#E8DDFF)" pc="#C8A8FF"/>;
  return <Pg bg="linear-gradient(160deg,#F4EEFF,#E8DDFF)" pc="#C8A8FF"><div style={{animation:"gi .5s ease"}}>
    <Animal id={prof.animal.id} emotion="scared" size={90}/>
    <p style={{fontSize:20,color:"#9B6DD7",fontWeight:800,margin:"8px 0 4px"}}>👀 Can you find these things?</p><p style={{fontSize:15,color:BL,marginBottom:16}}>Tap {3-found.length} more!</p><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>{items.map(it=>{const d=found.includes(it.id);return <button key={it.id} onClick={()=>tap(it)} style={{fontSize:36,background:d?"#D4EDDA":"#FFFAF5",border:d?"3px solid #5BAE7C":"3px solid #E0D4F0",borderRadius:18,padding:"14px 0",cursor:"pointer",transition:"transform .15s",transform:d?"scale(1.05)":"scale(1)",opacity:d?0.65:1}}><div>{d?"✅":it.emoji}</div><div style={{fontSize:11,fontFamily:FT,fontWeight:700,color:BL,marginTop:2}}>{it.label}</div></button>})}</div>
  </div></Pg>;
}

function Squeeze({prof,vm,onDone}){
  const pv=useV(prof,vm);const[ph,setPh]=useState("s");const[cy,setCy]=useState(0);const P=VP.overwhelmed;const m=useRef(true);
  useEffect(()=>()=>{m.current=false},[]);
  useEffect(()=>{(async()=>{await pv(P[0]);if(m.current)setPh("sq")})()},[]);
  useEffect(()=>{
    if(ph==="sq"){(async()=>{await pv(P[1]);setTimeout(()=>m.current&&setPh("re"),2000)})()}
    if(ph==="re"){(async()=>{await pv(P[2]);setTimeout(()=>{if(!m.current)return;const n=cy+1;setCy(n);setPh(n>=3?"done":"sq")},2000)})()}
    if(ph==="done")pv(P[3]);
  },[ph]);
  if(ph==="done") return <DoneScreen prof={prof} onDone={onDone} bg="linear-gradient(160deg,#FFF6EC,#EEFFF3)" pc="#FFD0A0"/>;
  return <Pg bg="linear-gradient(160deg,#FFF6EC,#FFECD6)" pc="#FFD0A0"><div style={{animation:"gi .5s ease"}}>
    <Animal id={prof.animal.id} emotion="overwhelmed" size={100}/>
    <p style={{fontSize:24,color:"#E0922E",fontWeight:800,margin:"12px 0 16px"}}>{ph==="sq"?"✊ Squeeze tight!":ph==="re"?"🤲 Let it go...":"Getting ready..."}</p><div style={{fontSize:80,transition:"transform 2.5s ease",transform:ph==="sq"?"scale(0.7)":"scale(1.2)"}}>{ph==="sq"?"✊":"🤲"}</div><p style={{fontSize:15,color:BL,marginTop:16}}>{Math.min(cy+1,3)} of 3</p>
  </div></Pg>;
}

function Celebrate({prof,vm,emo,onDone}){
  const pv=useV(prof,vm);const isH=emo.id==="happy";const P=isH?VP.happy:VP.calm;const[st,setSt]=useState(false);
  useEffect(()=>{(async()=>{await pv(P[0]);setSt(true);await pv(P[1])})()},[]);
  return <Pg bg={isH?"linear-gradient(160deg,#EEFFF3,#D4F5DE)":"linear-gradient(160deg,#EDF7FB,#D6EEF5)"} pc={isH?"#A0E8B0":"#A0D4E8"}><div style={{animation:"gi .5s ease"}}>
    <Animal id={prof.animal.id} emotion={emo.id} size={140}/>
    <p style={{fontSize:26,color:isH?"#5BAE7C":"#62A8C4",fontWeight:800,margin:"12px 0 8px"}}>{isH?"🎉 Yay! 🎉":"✨ So peaceful ✨"}</p>
    <p style={{fontSize:18,color:BL,marginBottom:8}}>{isH?`${prof.buddyName} is so happy!`:`${prof.buddyName} is nice and calm.`}</p>
    {st&&<div style={{fontSize:36,marginBottom:24,animation:"gi .6s ease"}}>{isH?"⭐🌟⭐🌟⭐":"🌙💫✨💫🌙"}</div>}
    <Btn onClick={onDone} color={isH?"#5BAE7C":"#62A8C4"}>Back Home 🏠</Btn>
  </div></Pg>;
}

function ListeningActivity({prof,vm,onDone}){
  const pv=useV(prof,vm);
  const[ph,setPh]=useState("intro");
  const[listenStep,setListenStep]=useState(0);
  const P=VP.listening;
  const m=useRef(true);
  useEffect(()=>()=>{m.current=false},[]);

  useEffect(()=>{(async()=>{await pv(P[0]);if(m.current){setPh("teach");await pv(P[1])}})()},[]);

  const stepIcons=["👀","👂","🧍","🌟"];
  const stepLabels=["Use our eyes to look","Use our ears to hear","Keep our body still","Show your best listening!"];

  const tapNext=async()=>{
    const next=listenStep+1;
    if(next>=4){
      setListenStep(next);
      setPh("done");
      await pv(P[5]);
    } else {
      setListenStep(next);
      await pv(P[next+1]);
    }
  };

  const buddyEmo=ph==="done"?"happy":listenStep>=3?"calm":listenStep>=2?"neutral":"angry";

  if(ph==="done") return <DoneScreen prof={prof} onDone={onDone} bg="linear-gradient(160deg,#FFF8F0,#EEFFF3)" pc="#FFD4A0"/>;
  if(ph==="intro") return <IntroScreen prof={prof} emotion="angry" bg="linear-gradient(160deg,#FFF8F0,#FFECD6)" pc="#FFD4A0"/>;

  return <Pg bg="linear-gradient(160deg,#FFF8F0,#FFECD6)" pc="#FFD4A0"><div style={{animation:"gi .5s ease",display:"flex",flexDirection:"column",alignItems:"center"}}>
    <Animal id={prof.animal.id} emotion={buddyEmo} size={120}/>

    <div style={{display:"flex",gap:8,margin:"16px 0 12px"}}>
      {[0,1,2,3].map(i=><div key={i} style={{
        width:14,height:14,borderRadius:"50%",
        background:i<=listenStep?"#E8A033":"#E0D4C4",
        opacity:i<=listenStep?1:0.4,
        transition:"all 0.3s ease",
        transform:i===listenStep?"scale(1.3)":"scale(1)",
      }}/>)}
    </div>

    <div style={{fontSize:48,margin:"8px 0"}}>{stepIcons[Math.min(listenStep,3)]}</div>
    <p style={{fontSize:18,color:"#E8A033",fontWeight:800,margin:"4px 0",textAlign:"center",maxWidth:300}}>
      {stepLabels[Math.min(listenStep,3)]}
    </p>

    {listenStep<4&&<>
      <p style={{fontSize:13,color:BL,marginTop:8,marginBottom:16}}>Tap when you've told them!</p>
      <button onClick={tapNext} style={{
        width:70,height:70,borderRadius:"50%",border:"none",
        background:"linear-gradient(135deg,#FFD080,#E8A033)",
        fontSize:32,cursor:"pointer",transition:"transform .15s",
        boxShadow:"0 6px 18px rgba(232,160,51,0.4)",
        display:"flex",alignItems:"center",justifyContent:"center",
      }}
        onPointerDown={e=>{e.currentTarget.style.transform="scale(0.9)"}}
        onPointerUp={e=>{e.currentTarget.style.transform="scale(1.1)"}}
        onPointerLeave={e=>{e.currentTarget.style.transform="scale(1)"}}
      >👂</button>
    </>}
  </div></Pg>;
}

// ─── Voice Setup ─────────────────────────────────────────────
// Build a flat map for voice recording organized by tabs
const VOICE_TABS = [
  { id:"angry", label:"Angry", prompts:[VP.angry_intro,...VP.angry_breathing,...VP.angry_squeeze,...VP.angry_counting,VP.angry_done] },
  { id:"sad", label:"Sad", prompts:VP.sad },
  { id:"scared", label:"Scared", prompts:VP.scared },
  { id:"listening", label:"Listening", prompts:VP.listening },
];
const ALL_PROMPTS = VOICE_TABS.flatMap(t=>t.prompts);

function VoiceSetup({prof,vm,setVm,onBack}){
  const[sel,setSel]=useState("angry");const[rec,setRec]=useState(null);const mr=useRef(null);const ch=useRef([]);
  const sR=async pid=>{try{const s=await navigator.mediaDevices.getUserMedia({audio:true});mr.current=new MediaRecorder(s);ch.current=[];mr.current.ondataavailable=e=>ch.current.push(e.data);mr.current.start();setRec(pid)}catch{alert("Mic error")}};
  const eR=pid=>{if(!mr.current)return;mr.current.onstop=()=>{const b=new Blob(ch.current,{type:"audio/webm"});const u=URL.createObjectURL(b);mr.current.stream.getTracks().forEach(t=>t.stop());setVm(p=>({...p,[pid]:u}));setRec(null)};mr.current.stop()};
  const tab=VOICE_TABS.find(t=>t.id===sel);
  const ps=tab?tab.prompts:[];
  const rc=Object.keys(vm).length;const tot=ALL_PROMPTS.length;
  return <Pg><div style={{animation:"gi .5s ease",textAlign:"left"}}>
    <BB onClick={onBack}/>
    <h2 style={{fontSize:24,color:BR,margin:"0 0 6px",textAlign:"center"}}>🎙️ Record Your Voice</h2>
    <p style={{fontSize:14,color:BL,textAlign:"center",marginBottom:4}}>Record prompts so {prof.childName} hears you!</p>
    <p style={{fontSize:12,color:"#5BAE7C",textAlign:"center",marginBottom:16}}>{rc}/{tot} recorded</p>
    <div style={{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginBottom:16}}>
      {VOICE_TABS.map(t=>{const em=EMOTIONS.find(e=>e.id===t.id);const dn=t.prompts.every(p=>vm[p.id]);return <button key={t.id} onClick={()=>setSel(t.id)} style={{background:sel===t.id?(em?.bg||"#f0f0f0"):"#FFFAF5",border:sel===t.id?`2px solid ${em?.color||"#ccc"}`:"2px solid #E8E0D8",borderRadius:14,padding:"8px 12px",cursor:"pointer",fontFamily:FT,fontSize:13,fontWeight:700,color:em?.color||BR}}><Animal id={prof.animal.id} emotion={t.id} size={24}/> {dn?"✓":""}</button>})}
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:10}}>
      {ps.map(p=>{const has=!!vm[p.id];const isR=rec===p.id;return <div key={p.id} style={{background:"#FFFAF5",borderRadius:16,padding:"14px 16px",border:has?"2px solid #5BAE7C":isR?"2px solid #E8625E":"2px solid #F0E8E0",animation:isR?"gg 1.5s ease-in-out infinite":"none"}}>
        <div style={{fontSize:14,fontWeight:800,color:BR,marginBottom:4}}>{p.label}</div>
        <div style={{fontSize:12,color:BL,marginBottom:10,fontStyle:"italic"}}>"{p.text.replace(/\{buddy\}/g,prof.buddyName).replace(/\{name\}/g,prof.childName)}"</div>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          {isR?<SB onClick={()=>eR(p.id)} color="#E8625E">⏹ Stop</SB>:<SB onClick={()=>sR(p.id)} color="#FF9966">🎙️ {has?"Re-record":"Record"}</SB>}
          {has&&<SB onClick={()=>playF(vm[p.id])} color="#5BAE7C">▶ Play</SB>}
          {has&&<span style={{fontSize:12,color:"#5BAE7C"}}>✓</span>}
        </div>
      </div>})}
    </div>
    <div style={{marginTop:20,padding:16,background:"#FFF8F0",borderRadius:16,border:"2px solid #F0E8E0"}}>
      <h3 style={{fontSize:14,color:BR,margin:"0 0 8px"}}>📁 Drop-in Audio Files</h3>
      <p style={{fontSize:12,color:BL,lineHeight:1.5,margin:0}}>Place MP3 files named by prompt ID (e.g. <code style={{background:"#F0E8E0",padding:"1px 4px",borderRadius:4}}>angry_intro.mp3</code>) in an <code style={{background:"#F0E8E0",padding:"1px 4px",borderRadius:4}}>audio/</code> folder, then set <code style={{background:"#F0E8E0",padding:"1px 4px",borderRadius:4}}>USE_PRE = true</code> in the code.</p>
    </div>
  </div></Pg>;
}

// ─── Dashboard ───────────────────────────────────────────────
function Dash({prof,log,onBack,onReset}){
  const[showConfirm,setShowConfirm]=useState(false);
  const ct={};EMOTIONS.forEach(e=>{ct[e.id]=0});log.forEach(en=>{ct[en.emotion]=(ct[en.emotion]||0)+1});
  const tot=log.length;const mx=Math.max(1,...Object.values(ct));
  const tm={morning:0,afternoon:0,evening:0,night:0};log.forEach(en=>{const h=new Date(en.time).getHours();if(h<12)tm.morning++;else if(h<17)tm.afternoon++;else if(h<21)tm.evening++;else tm.night++});
  const rec=[...log].reverse().slice(0,12);const cd={background:"#FFFAF5",borderRadius:20,padding:20,marginBottom:16,border:"2px solid #F0E8E0"};
  return <Pg><div style={{animation:"gi .5s ease",textAlign:"left"}}>
    <BB onClick={onBack}/>
    <h2 style={{fontSize:24,color:BR,margin:"0 0 6px",textAlign:"center"}}>📊 Parent Dashboard</h2>
    <p style={{fontSize:15,color:BL,textAlign:"center",marginBottom:24}}>{prof.childName}'s patterns — {tot} check-in{tot!==1?"s":""}</p>
    {tot===0?<div style={{textAlign:"center",padding:40,color:BL}}>No check-ins yet!</div>:<>
      <div style={cd}><h3 style={{fontSize:16,color:BR,margin:"0 0 14px"}}>Emotion Frequency</h3>{EMOTIONS.map(em=><div key={em.id} style={{marginBottom:10}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}><Animal id={prof.animal.id} emotion={em.id} size={28}/><span style={{fontSize:13,fontWeight:700,color:BR}}>{em.label.replace("\n"," ")}</span><span style={{fontSize:13,color:BL,marginLeft:"auto"}}>{ct[em.id]}</span></div><div style={{height:10,background:"#F0E8E0",borderRadius:5,overflow:"hidden"}}><div style={{height:"100%",borderRadius:5,background:em.color,width:`${(ct[em.id]/mx)*100}%`,transition:"width .5s"}}/></div></div>)}</div>
      <div style={cd}><h3 style={{fontSize:16,color:BR,margin:"0 0 14px"}}>Time of Day</h3><div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,textAlign:"center"}}>{[{l:"Morning",e:"🌅",c:tm.morning},{l:"Afternoon",e:"☀️",c:tm.afternoon},{l:"Evening",e:"🌇",c:tm.evening},{l:"Night",e:"🌙",c:tm.night}].map(t=><div key={t.l} style={{background:"#FFF8F0",borderRadius:14,padding:"12px 4px",border:"2px solid #F0E8E0"}}><div style={{fontSize:22}}>{t.e}</div><div style={{fontSize:20,fontWeight:800,color:BR}}>{t.c}</div><div style={{fontSize:10,color:BL,fontWeight:700}}>{t.l}</div></div>)}</div></div>
      <div style={cd}><h3 style={{fontSize:16,color:BR,margin:"0 0 14px"}}>Recent</h3>{rec.map((en,i)=>{const em=EMOTIONS.find(e=>e.id===en.emotion);const d=new Date(en.time);return <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:i<rec.length-1?"1px solid #F0E8E0":"none"}}><Animal id={prof.animal.id} emotion={en.emotion} size={28}/><span style={{fontSize:13,fontWeight:700,color:em?.color}}>{em?.label?.replace("\n"," ")}</span><span style={{fontSize:12,color:BL,marginLeft:"auto"}}>{d.toLocaleDateString()} {d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</span></div>})}</div>
    </>}
    <div style={{textAlign:"center",marginTop:8}}>
      {!showConfirm
        ? <button onClick={()=>setShowConfirm(true)} style={{background:"none",border:"2px solid #E8625E44",borderRadius:14,padding:"10px 20px",fontFamily:FT,fontSize:13,fontWeight:700,color:"#E8625E",cursor:"pointer"}}>Reset All Data</button>
        : <div style={{background:"#FFF0EF",borderRadius:18,padding:20,border:"2px solid #E8625E44"}}>
            <p style={{fontSize:15,fontWeight:800,color:BR,margin:"0 0 8px",textAlign:"center"}}>Erase all data and start fresh?</p>
            <p style={{fontSize:13,color:BL,margin:"0 0 16px",textAlign:"center"}}>This will remove {prof.childName}'s buddy and all check-ins.</p>
            <div style={{display:"flex",gap:10,justifyContent:"center"}}>
              <button onClick={()=>setShowConfirm(false)} style={{background:"#F0E8E0",border:"none",borderRadius:14,padding:"10px 20px",fontFamily:FT,fontSize:14,fontWeight:700,color:BL,cursor:"pointer"}}>Cancel</button>
              <button onClick={onReset} style={{background:"#E8625E",border:"none",borderRadius:14,padding:"10px 20px",fontFamily:FT,fontSize:14,fontWeight:700,color:"#fff",cursor:"pointer"}}>Yes, Reset</button>
            </div>
          </div>
      }
    </div>
  </div></Pg>;
}

// ─── App ─────────────────────────────────────────────────────
export default function GooseAndFriends(){
  const[sc,setSc]=useState("loading");const[prof,setProf]=useState(null);const[vm,setVm]=useState({});const[log,setLog]=useState([]);const[emo,setEmo]=useState(null);
  useEffect(()=>{const p=ld("goose_profile");const l=ld("goose_log")||[];setLog(l);if(p){setProf(p);setSc("home")}else setSc("setup");if(!document.getElementById("gf")){const lk=document.createElement("link");lk.id="gf";lk.rel="stylesheet";lk.href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap";document.head.appendChild(lk)}},[]);
  useEffect(()=>{sv("goose_log",log)},[log]);
  const onS=p=>{setProf(p);sv("goose_profile",p);setSc("home")};
  const onE=em=>{setEmo(em);setLog(p=>[...p,{emotion:em.id,time:new Date().toISOString()}]);setSc("act")};
  const onD=()=>{setEmo(null);setSc("home")};
  const onR=()=>{try{localStorage.removeItem("goose_profile");localStorage.removeItem("goose_log")}catch{} setProf(null);setLog([]);setVm({});setSc("setup")};

  if(sc==="loading")return <Pg><div style={{fontSize:60}}>🪿</div></Pg>;
  if(sc==="setup")return <Setup onDone={onS}/>;
  if(sc==="home")return <Home prof={prof} onEmo={onE} onDash={()=>setSc("dash")} onVoice={()=>setSc("voice")}/>;
  if(sc==="voice")return <VoiceSetup prof={prof} vm={vm} setVm={setVm} onBack={()=>setSc("home")}/>;
  if(sc==="dash")return <Dash prof={prof} log={log} onBack={()=>setSc("home")} onReset={onR}/>;
  if(sc==="act"&&emo){
    const a=emo.activity;
    if(a==="breathing")return <AngryActivity prof={prof} vm={vm} onDone={onD}/>;
    if(a==="hug")return <SadActivity prof={prof} vm={vm} onDone={onD}/>;
    if(a==="grounding")return <Grounding prof={prof} vm={vm} onDone={onD}/>;
    if(a==="squeeze")return <Squeeze prof={prof} vm={vm} onDone={onD}/>;
    if(a==="listening")return <ListeningActivity prof={prof} vm={vm} onDone={onD}/>;
  }
  return <Pg><p style={{color:BR}}>Something went wrong</p><Btn onClick={()=>setSc("home")}>Go Home</Btn></Pg>;
}
