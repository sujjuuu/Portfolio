"use client";

import React, { useState, useEffect } from "react";

interface PhotoCardProps {
  src: string;
  alt: string;
  rotation: number;
  text: string;
  index: number;
  style?: React.CSSProperties;
}

const PhotoCard = ({ src, alt, rotation, text, index, style = {} }: PhotoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 700 + index * 300);
    return () => clearTimeout(timer);
  }, [index]);

  const cardStyle: React.CSSProperties = {
    position: "absolute",
    transform: isHovered
      ? `rotate(${rotation + 2}deg) scale(1.05)`
      : `rotate(${rotation}deg) scale(1)`,
    zIndex: isHovered ? 20 : index === 1 ? 2 : 1,
    transition: "all 0.3s ease-out",
    opacity: isVisible ? 1 : 0,
    ...style,
  };

  return (
    <div
      className="w-[215px] h-[310px] p-2 rounded-md shadow-2xl cursor-pointer"
      style={{ ...cardStyle, background: "var(--card-bg)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-[85%] rounded-sm overflow-hidden" style={{ background: "var(--bg-section)" }}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ transform: isHovered ? "scale(1.04)" : "scale(1)" }}
        />
      </div>
      <div className="h-[15%] flex items-center justify-center">
        <p
          style={{ fontFamily: '"Zeyada", cursive', color: "var(--text-secondary)" }}
          className="text-sm tracking-tighter text-center"
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export function PhotoCardStack() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Zeyada&display=swap" rel="stylesheet" />

      <div className="relative w-[400px] h-[400px] flex items-center justify-center">
        <PhotoCard
          src="/images/about-car.jpeg"
          alt="Sujay driving"
          rotation={-10}
          text="in my element"
          index={0}
          style={{ top: "20px", left: "10px" }}
        />
        <PhotoCard
          src="/images/about-sujay.png"
          alt="Sujay mirror selfie"
          rotation={12}
          text="mirror check"
          index={1}
          style={{ top: "10px", right: "10px" }}
        />
      </div>
    </>
  );
}
