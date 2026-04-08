import React from "react";

interface SVGProps {
  className?: string;
}

export const Ladybug: React.FC<SVGProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="30" ry="28" fill="#e53e3e" stroke="#2d3b2d" strokeWidth="2" />
    <line x1="50" y1="27" x2="50" y2="83" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="50" cy="32" r="12" fill="#2d3b2d" />
    <circle cx="45" cy="30" r="2.5" fill="white" />
    <circle cx="55" cy="30" r="2.5" fill="white" />
    <circle cx="38" cy="48" r="4" fill="#2d3b2d" />
    <circle cx="62" cy="48" r="4" fill="#2d3b2d" />
    <circle cx="40" cy="65" r="3.5" fill="#2d3b2d" />
    <circle cx="60" cy="65" r="3.5" fill="#2d3b2d" />
    <circle cx="55" cy="78" r="3" fill="#2d3b2d" />
    <path d="M44 22 Q40 10 35 5" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M56 22 Q60 10 65 5" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <circle cx="35" cy="4" r="2" fill="#2d3b2d" />
    <circle cx="65" cy="4" r="2" fill="#2d3b2d" />
  </svg>
);

export const Bird: React.FC<SVGProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="50" rx="25" ry="20" fill="#f6ad55" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="38" cy="38" r="12" fill="#f6ad55" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="35" cy="36" r="2" fill="#2d3b2d" />
    <polygon points="24,38 15,36 24,40" fill="#e53e3e" stroke="#2d3b2d" strokeWidth="1" />
    <ellipse cx="55" cy="48" rx="16" ry="10" fill="#ed8936" stroke="#2d3b2d" strokeWidth="1.5" />
    <path d="M70 55 Q85 45 90 55 Q80 52 72 60" fill="#ed8936" stroke="#2d3b2d" strokeWidth="1.5" />
    <path d="M42 68 L40 82 L45 78 L48 85 L50 70" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <ellipse cx="48" cy="60" rx="8" ry="5" fill="#faf089" stroke="#2d3b2d" strokeWidth="1" />
  </svg>
);

export const Butterfly: React.FC<SVGProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="3" ry="20" fill="#2d3b2d" />
    <path d="M50 40 Q25 15 15 35 Q10 55 50 55" fill="#d69e2e" stroke="#2d3b2d" strokeWidth="1.5" />
    <path d="M50 40 Q75 15 85 35 Q90 55 50 55" fill="#d69e2e" stroke="#2d3b2d" strokeWidth="1.5" />
    <path d="M50 55 Q25 55 20 72 Q18 85 50 75" fill="#ed8936" stroke="#2d3b2d" strokeWidth="1.5" />
    <path d="M50 55 Q75 55 80 72 Q82 85 50 75" fill="#ed8936" stroke="#2d3b2d" strokeWidth="1.5" />
    <circle cx="35" cy="38" r="5" fill="#2d3b2d" opacity="0.3" />
    <circle cx="65" cy="38" r="5" fill="#2d3b2d" opacity="0.3" />
    <circle cx="35" cy="65" r="3.5" fill="#2d3b2d" opacity="0.3" />
    <circle cx="65" cy="65" r="3.5" fill="#2d3b2d" opacity="0.3" />
    <path d="M47 35 Q42 20 38 12" stroke="#2d3b2d" strokeWidth="1.5" fill="none" />
    <path d="M53 35 Q58 20 62 12" stroke="#2d3b2d" strokeWidth="1.5" fill="none" />
    <circle cx="37" cy="11" r="2" fill="#2d3b2d" />
    <circle cx="63" cy="11" r="2" fill="#2d3b2d" />
  </svg>
);

export const Bee: React.FC<SVGProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="22" ry="18" fill="#f6e05e" stroke="#2d3b2d" strokeWidth="2" />
    <rect x="35" y="45" width="30" height="5" fill="#2d3b2d" rx="1" />
    <rect x="35" y="55" width="30" height="5" fill="#2d3b2d" rx="1" />
    <rect x="38" y="65" width="24" height="4" fill="#2d3b2d" rx="1" />
    <circle cx="50" cy="35" r="12" fill="#f6e05e" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="45" cy="33" r="2.5" fill="#2d3b2d" />
    <circle cx="55" cy="33" r="2.5" fill="#2d3b2d" />
    <path d="M46 39 Q50 42 54 39" stroke="#2d3b2d" strokeWidth="1.5" fill="none" />
    <ellipse cx="32" cy="38" rx="12" ry="8" fill="white" opacity="0.6" stroke="#2d3b2d" strokeWidth="1" transform="rotate(-30 32 38)" />
    <ellipse cx="68" cy="38" rx="12" ry="8" fill="white" opacity="0.6" stroke="#2d3b2d" strokeWidth="1" transform="rotate(30 68 38)" />
    <path d="M46 24 Q42 12 38 8" stroke="#2d3b2d" strokeWidth="1.5" fill="none" />
    <path d="M54 24 Q58 12 62 8" stroke="#2d3b2d" strokeWidth="1.5" fill="none" />
    <circle cx="37" cy="7" r="2" fill="#2d3b2d" />
    <circle cx="63" cy="7" r="2" fill="#2d3b2d" />
  </svg>
);

export const Rabbit: React.FC<SVGProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="65" rx="22" ry="20" fill="#faf5e4" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="50" cy="42" r="16" fill="#faf5e4" stroke="#2d3b2d" strokeWidth="2" />
    <ellipse cx="40" cy="15" rx="6" ry="18" fill="#faf5e4" stroke="#2d3b2d" strokeWidth="2" />
    <ellipse cx="60" cy="15" rx="6" ry="18" fill="#faf5e4" stroke="#2d3b2d" strokeWidth="2" />
    <ellipse cx="40" cy="15" rx="3" ry="12" fill="#f9a8d4" />
    <ellipse cx="60" cy="15" rx="3" ry="12" fill="#f9a8d4" />
    <circle cx="43" cy="39" r="2.5" fill="#2d3b2d" />
    <circle cx="57" cy="39" r="2.5" fill="#2d3b2d" />
    <ellipse cx="50" cy="46" rx="3" ry="2" fill="#f9a8d4" />
    <path d="M47 49 Q50 52 53 49" stroke="#2d3b2d" strokeWidth="1" fill="none" />
    <line x1="30" y1="44" x2="18" y2="40" stroke="#2d3b2d" strokeWidth="1" />
    <line x1="30" y1="47" x2="18" y2="48" stroke="#2d3b2d" strokeWidth="1" />
    <line x1="70" y1="44" x2="82" y2="40" stroke="#2d3b2d" strokeWidth="1" />
    <line x1="70" y1="47" x2="82" y2="48" stroke="#2d3b2d" strokeWidth="1" />
    <circle cx="65" cy="78" r="5" fill="#faf5e4" stroke="#2d3b2d" strokeWidth="1.5" />
  </svg>
);

export const Snail: React.FC<SVGProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20 75 Q15 65 25 60 Q35 55 50 60 Q65 55 70 60 L72 58" fill="#f6ad55" stroke="#2d3b2d" strokeWidth="2" />
    <ellipse cx="20" cy="75" rx="12" ry="4" fill="#f6ad55" stroke="#2d3b2d" strokeWidth="1" />
    <circle cx="55" cy="45" r="22" fill="#d69e2e" stroke="#2d3b2d" strokeWidth="2" />
    <path d="M55 25 Q65 30 65 40 Q65 50 55 50 Q47 50 47 43 Q47 37 55 37 Q60 37 60 42" fill="none" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="75" cy="52" r="3" fill="#2d3b2d" />
    <path d="M22 58 Q18 42 15 35" stroke="#2d3b2d" strokeWidth="1.5" fill="none" />
    <path d="M28 57 Q30 42 33 35" stroke="#2d3b2d" strokeWidth="1.5" fill="none" />
    <circle cx="14" cy="33" r="2.5" fill="#2d3b2d" />
    <circle cx="34" cy="33" r="2.5" fill="#2d3b2d" />
    <line x1="15" y1="80" x2="75" y2="80" stroke="#a0aec0" strokeWidth="1" opacity="0.3" />
  </svg>
);

export const Hedgehog: React.FC<SVGProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="60" rx="32" ry="22" fill="#d69e2e" stroke="#2d3b2d" strokeWidth="2" />
    {/* Spines */}
    <line x1="30" y1="42" x2="25" y2="25" stroke="#2d3b2d" strokeWidth="2" />
    <line x1="38" y1="40" x2="35" y2="22" stroke="#2d3b2d" strokeWidth="2" />
    <line x1="46" y1="39" x2="45" y2="20" stroke="#2d3b2d" strokeWidth="2" />
    <line x1="54" y1="39" x2="55" y2="20" stroke="#2d3b2d" strokeWidth="2" />
    <line x1="62" y1="40" x2="65" y2="22" stroke="#2d3b2d" strokeWidth="2" />
    <line x1="70" y1="42" x2="75" y2="25" stroke="#2d3b2d" strokeWidth="2" />
    <line x1="76" y1="48" x2="85" y2="35" stroke="#2d3b2d" strokeWidth="2" />
    <line x1="24" y1="48" x2="15" y2="35" stroke="#2d3b2d" strokeWidth="2" />
    <ellipse cx="30" cy="62" rx="14" ry="12" fill="#faf5e4" stroke="#2d3b2d" strokeWidth="1.5" />
    <circle cx="24" cy="58" r="2" fill="#2d3b2d" />
    <circle cx="20" cy="64" r="3" fill="#2d3b2d" />
    <path d="M35 78 L33 85" stroke="#2d3b2d" strokeWidth="2" />
    <path d="M45 80 L44 87" stroke="#2d3b2d" strokeWidth="2" />
    <path d="M55 80 L56 87" stroke="#2d3b2d" strokeWidth="2" />
    <path d="M65 78 L67 85" stroke="#2d3b2d" strokeWidth="2" />
  </svg>
);

export const Frog: React.FC<SVGProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="58" rx="28" ry="20" fill="#48bb78" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="35" cy="35" r="12" fill="#48bb78" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="65" cy="35" r="12" fill="#48bb78" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="35" cy="32" r="5" fill="white" stroke="#2d3b2d" strokeWidth="1" />
    <circle cx="65" cy="32" r="5" fill="white" stroke="#2d3b2d" strokeWidth="1" />
    <circle cx="36" cy="32" r="2.5" fill="#2d3b2d" />
    <circle cx="66" cy="32" r="2.5" fill="#2d3b2d" />
    <path d="M40 58 Q50 65 60 58" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M22 68 Q10 80 5 85 L12 82 L8 88 L15 84 L14 90 Q20 80 28 72" fill="#48bb78" stroke="#2d3b2d" strokeWidth="1.5" />
    <path d="M78 68 Q90 80 95 85 L88 82 L92 88 L85 84 L86 90 Q80 80 72 72" fill="#48bb78" stroke="#2d3b2d" strokeWidth="1.5" />
    <circle cx="42" cy="52" r="2" fill="#2d8a4e" />
    <circle cx="58" cy="52" r="2" fill="#2d8a4e" />
  </svg>
);

export const Spider: React.FC<SVGProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="45" rx="12" ry="10" fill="#4a5568" stroke="#2d3b2d" strokeWidth="2" />
    <ellipse cx="50" cy="62" rx="16" ry="14" fill="#4a5568" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="46" cy="42" r="2" fill="#e53e3e" />
    <circle cx="54" cy="42" r="2" fill="#e53e3e" />
    {/* Legs */}
    <path d="M38 50 Q20 40 10 30" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M62 50 Q80 40 90 30" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M36 55 Q18 52 5 48" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M64 55 Q82 52 95 48" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M36 62 Q18 65 5 62" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M64 62 Q82 65 95 62" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M38 68 Q22 78 12 85" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M62 68 Q78 78 88 85" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    {/* Web lines */}
    <path d="M10 10 L46 42" stroke="#a0aec0" strokeWidth="0.5" opacity="0.5" />
    <path d="M90 10 L54 42" stroke="#a0aec0" strokeWidth="0.5" opacity="0.5" />
  </svg>
);

export const Mouse: React.FC<SVGProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="25" ry="18" fill="#d4c5a9" stroke="#2d3b2d" strokeWidth="2" />
    <ellipse cx="32" cy="50" rx="10" ry="8" fill="#d4c5a9" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="25" cy="48" r="2" fill="#2d3b2d" />
    <circle cx="20" cy="52" r="3.5" fill="#f9a8d4" />
    <line x1="10" y1="48" x2="20" y2="50" stroke="#2d3b2d" strokeWidth="1" />
    <line x1="10" y1="52" x2="20" y2="52" stroke="#2d3b2d" strokeWidth="1" />
    <line x1="10" y1="56" x2="20" y2="54" stroke="#2d3b2d" strokeWidth="1" />
    <ellipse cx="40" cy="38" rx="8" ry="10" fill="#d4c5a9" stroke="#2d3b2d" strokeWidth="2" />
    <ellipse cx="55" cy="38" rx="8" ry="10" fill="#d4c5a9" stroke="#2d3b2d" strokeWidth="2" />
    <ellipse cx="40" cy="38" rx="5" ry="7" fill="#f9a8d4" />
    <ellipse cx="55" cy="38" rx="5" ry="7" fill="#f9a8d4" />
    <path d="M75 55 Q85 50 95 55 Q88 58 80 56" stroke="#2d3b2d" strokeWidth="1.5" fill="none" />
    <path d="M40 70 L38 80" stroke="#2d3b2d" strokeWidth="1.5" />
    <path d="M50 72 L50 82" stroke="#2d3b2d" strokeWidth="1.5" />
    <path d="M60 70 L62 80" stroke="#2d3b2d" strokeWidth="1.5" />
  </svg>
);

export const Caterpillar: React.FC<SVGProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="80" cy="55" r="10" fill="#48bb78" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="65" cy="58" r="9" fill="#68d391" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="52" cy="55" r="9" fill="#48bb78" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="39" cy="58" r="9" fill="#68d391" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="26" cy="55" r="9" fill="#48bb78" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="15" cy="50" r="11" fill="#48bb78" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="11" cy="47" r="2" fill="#2d3b2d" />
    <path d="M8 52 Q5 55 8 56" stroke="#2d3b2d" strokeWidth="1" fill="none" />
    <path d="M12 40 Q8 30 5 25" stroke="#2d3b2d" strokeWidth="1.5" fill="none" />
    <path d="M18 40 Q22 30 25 25" stroke="#2d3b2d" strokeWidth="1.5" fill="none" />
    <circle cx="4" cy="24" r="2" fill="#e53e3e" />
    <circle cx="26" cy="24" r="2" fill="#e53e3e" />
    {/* Little legs */}
    <line x1="26" y1="63" x2="24" y2="72" stroke="#2d3b2d" strokeWidth="1.5" />
    <line x1="39" y1="66" x2="37" y2="75" stroke="#2d3b2d" strokeWidth="1.5" />
    <line x1="52" y1="63" x2="50" y2="72" stroke="#2d3b2d" strokeWidth="1.5" />
    <line x1="65" y1="66" x2="63" y2="75" stroke="#2d3b2d" strokeWidth="1.5" />
    <line x1="80" y1="64" x2="78" y2="73" stroke="#2d3b2d" strokeWidth="1.5" />
  </svg>
);

export const Beetle: React.FC<SVGProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="58" rx="24" ry="22" fill="#276749" stroke="#2d3b2d" strokeWidth="2" />
    <line x1="50" y1="36" x2="50" y2="80" stroke="#2d3b2d" strokeWidth="1.5" />
    <circle cx="50" cy="35" r="10" fill="#276749" stroke="#2d3b2d" strokeWidth="2" />
    <circle cx="46" cy="33" r="2" fill="#f6e05e" />
    <circle cx="54" cy="33" r="2" fill="#f6e05e" />
    <path d="M44 26 Q38 15 32 10" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M56 26 Q62 15 68 10" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    {/* Legs */}
    <path d="M28 48 Q15 40 8 35" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M72 48 Q85 40 92 35" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M26 58 Q12 58 5 55" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M74 58 Q88 58 95 55" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M28 68 Q15 75 8 80" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    <path d="M72 68 Q85 75 92 80" stroke="#2d3b2d" strokeWidth="2" fill="none" />
    {/* Shell detail */}
    <ellipse cx="40" cy="55" rx="6" ry="8" fill="none" stroke="#2d3b2d" strokeWidth="0.8" opacity="0.4" />
    <ellipse cx="60" cy="55" rx="6" ry="8" fill="none" stroke="#2d3b2d" strokeWidth="0.8" opacity="0.4" />
  </svg>
);

export const animalComponents: Record<string, React.FC<SVGProps>> = {
  ladybug: Ladybug,
  bird: Bird,
  butterfly: Butterfly,
  bee: Bee,
  rabbit: Rabbit,
  snail: Snail,
  hedgehog: Hedgehog,
  frog: Frog,
  spider: Spider,
  mouse: Mouse,
  caterpillar: Caterpillar,
  beetle: Beetle,
};

export const animalNames: Record<string, string> = {
  ladybug: "Marienkäfer",
  bird: "Vogel",
  butterfly: "Schmetterling",
  bee: "Biene",
  rabbit: "Hase",
  snail: "Schnecke",
  hedgehog: "Igel",
  frog: "Frosch",
  spider: "Spinne",
  mouse: "Maus",
  caterpillar: "Raupe",
  beetle: "Käfer",
};
