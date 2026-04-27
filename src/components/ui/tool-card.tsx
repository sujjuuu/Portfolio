"use client";

import React, { MouseEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ToolCardProps {
  name: string;
  subtext: string;
  logoSrc: string;
}

const displayFont =
  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";
const textFont =
  "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

const identityMatrix =
  "1, 0, 0, 0, " +
  "0, 1, 0, 0, " +
  "0, 0, 1, 0, " +
  "0, 0, 0, 1";

const maxRotate = 0.25;
const minRotate = -0.25;
const maxScale = 1;
const minScale = 0.97;

const shimmerColors = [
  "hsl(358, 100%, 62%)",
  "hsl(30, 100%, 50%)",
  "hsl(60, 100%, 50%)",
  "hsl(96, 100%, 50%)",
  "hsl(233, 85%, 47%)",
  "hsl(271, 85%, 47%)",
  "hsl(300, 20%, 35%)",
  "transparent",
  "transparent",
  "white",
];

export function ToolCard({ name, subtext, logoSrc }: ToolCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [firstOverlayPosition, setFirstOverlayPosition] = useState(0);
  const [matrix, setMatrix] = useState(identityMatrix);
  const [currentMatrix, setCurrentMatrix] = useState(identityMatrix);
  const [disableInOutOverlayAnimation, setDisableInOutOverlayAnimation] = useState(true);
  const [disableOverlayAnimation, setDisableOverlayAnimation] = useState(false);
  const [isTimeoutFinished, setIsTimeoutFinished] = useState(false);
  const enterTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeout1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeout2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeout3 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getDimensions = () => {
    const rect = ref.current?.getBoundingClientRect();
    return {
      left: rect?.left || 0,
      right: rect?.right || 0,
      top: rect?.top || 0,
      bottom: rect?.bottom || 0,
    };
  };

  const getMatrix = (clientX: number, clientY: number) => {
    const { left, right, top, bottom } = getDimensions();
    const xCenter = (left + right) / 2;
    const yCenter = (top + bottom) / 2;

    const scale = [
      maxScale - (maxScale - minScale) * Math.abs(xCenter - clientX) / (xCenter - left),
      maxScale - (maxScale - minScale) * Math.abs(yCenter - clientY) / (yCenter - top),
      maxScale - (maxScale - minScale) * (Math.abs(xCenter - clientX) + Math.abs(yCenter - clientY)) / (xCenter - left + yCenter - top),
    ];

    const rotate = {
      x1: 0.25 * ((yCenter - clientY) / yCenter - (xCenter - clientX) / xCenter),
      x2: maxRotate - (maxRotate - minRotate) * Math.abs(right - clientX) / (right - left),
      x3: 0,
      y0: 0,
      y2: maxRotate - (maxRotate - minRotate) * (top - clientY) / (top - bottom),
      y3: 0,
      z0: -(maxRotate - (maxRotate - minRotate) * Math.abs(right - clientX) / (right - left)),
      z1: 0.2 - (0.2 + 0.6) * (top - clientY) / (top - bottom),
      z3: 0,
    };

    return (
      `${scale[0]}, ${rotate.y0}, ${rotate.z0}, 0, ` +
      `${rotate.x1}, ${scale[1]}, ${rotate.z1}, 0, ` +
      `${rotate.x2}, ${rotate.y2}, ${scale[2]}, 0, ` +
      `${rotate.x3}, ${rotate.y3}, ${rotate.z3}, 1`
    );
  };

  const getOppositeMatrix = (_matrix: string, clientY: number, onMouseEnter?: boolean) => {
    const { top, bottom } = getDimensions();
    const oppositeY = bottom - clientY + top;
    const weakening = onMouseEnter ? 0.7 : 4;
    const multiplier = onMouseEnter ? -1 : 1;

    return _matrix
      .split(", ")
      .map((item, index) => {
        if (index === 2 || index === 4 || index === 8) {
          return -parseFloat(item) * multiplier / weakening;
        } else if (index === 0 || index === 5 || index === 10) {
          return "1";
        } else if (index === 6) {
          return multiplier * (maxRotate - (maxRotate - minRotate) * (top - oppositeY) / (top - bottom)) / weakening;
        } else if (index === 9) {
          return (maxRotate - (maxRotate - minRotate) * (top - oppositeY) / (top - bottom)) / weakening;
        }
        return item;
      })
      .join(", ");
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    if (leaveTimeout1.current) clearTimeout(leaveTimeout1.current);
    if (leaveTimeout2.current) clearTimeout(leaveTimeout2.current);
    if (leaveTimeout3.current) clearTimeout(leaveTimeout3.current);
    setDisableOverlayAnimation(true);

    const { left, right, top, bottom } = getDimensions();
    const xCenter = (left + right) / 2;
    const yCenter = (top + bottom) / 2;

    setDisableInOutOverlayAnimation(false);
    enterTimeout.current = setTimeout(() => setDisableInOutOverlayAnimation(true), 350);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setFirstOverlayPosition(
          (Math.abs(xCenter - e.clientX) + Math.abs(yCenter - e.clientY)) / 1.5
        );
      });
    });

    const m = getMatrix(e.clientX, e.clientY);
    const oppositeMatrix = getOppositeMatrix(m, e.clientY, true);
    setMatrix(oppositeMatrix);
    setIsTimeoutFinished(false);
    setTimeout(() => setIsTimeoutFinished(true), 200);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, right, top, bottom } = getDimensions();
    const xCenter = (left + right) / 2;
    const yCenter = (top + bottom) / 2;

    setTimeout(
      () =>
        setFirstOverlayPosition(
          (Math.abs(xCenter - e.clientX) + Math.abs(yCenter - e.clientY)) / 1.5
        ),
      150
    );

    if (isTimeoutFinished) {
      setCurrentMatrix(getMatrix(e.clientX, e.clientY));
    }
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const oppositeMatrix = getOppositeMatrix(matrix, e.clientY);
    if (enterTimeout.current) clearTimeout(enterTimeout.current);

    setCurrentMatrix(oppositeMatrix);
    setTimeout(() => setCurrentMatrix(identityMatrix), 200);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setDisableInOutOverlayAnimation(false);
        leaveTimeout1.current = setTimeout(
          () => setFirstOverlayPosition(-firstOverlayPosition / 4),
          150
        );
        leaveTimeout2.current = setTimeout(() => setFirstOverlayPosition(0), 300);
        leaveTimeout3.current = setTimeout(() => {
          setDisableOverlayAnimation(false);
          setDisableInOutOverlayAnimation(true);
        }, 500);
      });
    });
  };

  useEffect(() => {
    if (isTimeoutFinished) {
      setMatrix(currentMatrix);
    }
  }, [currentMatrix, isTimeoutFinished]);

  const overlayKeyframes = [...Array(10).keys()]
    .map(
      (i) => `
      @keyframes toolShimmer${i + 1} {
        0%   { transform: rotate(${i * 10}deg); }
        50%  { transform: rotate(${(i + 1) * 10}deg); }
        100% { transform: rotate(${i * 10}deg); }
      }`
    )
    .join(" ");

  return (
    <div
      ref={ref}
      className="w-[130px] h-[156px] cursor-pointer select-none"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{overlayKeyframes}</style>
      <div
        style={{
          transform: `perspective(700px) matrix3d(${matrix})`,
          transformOrigin: "center center",
          transition: "transform 200ms ease-out",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="relative w-full h-full rounded-xl overflow-hidden flex flex-col items-center justify-center gap-3"
          style={{
            background: "#1c1c1e",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Shimmer overlay */}
          <div
            className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none"
            style={{ mixBlendMode: "overlay" }}
          >
            {shimmerColors.map((color, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: "200%",
                  height: "200%",
                  top: "-50%",
                  left: "-50%",
                  background: color,
                  opacity: 0.5,
                  filter: color !== "transparent" ? "blur(14px)" : "none",
                  transform: `rotate(${firstOverlayPosition + i * 10}deg)`,
                  transformOrigin: "center center",
                  transition: !disableInOutOverlayAnimation
                    ? "transform 200ms ease-out"
                    : "none",
                  animation: disableOverlayAnimation
                    ? "none"
                    : `toolShimmer${i + 1} 5s infinite`,
                  willChange: "transform",
                }}
              />
            ))}
          </div>

          {/* Logo */}
          <div className="relative z-10 w-12 h-12 flex items-center justify-center">
            <Image
              src={logoSrc}
              alt={name}
              width={48}
              height={48}
              className="object-contain rounded-lg"
              unoptimized
            />
          </div>

          {/* Name + subtext */}
          <div className="relative z-10 text-center px-3">
            <p
              style={{
                fontFamily: displayFont,
                fontSize: 13,
                fontWeight: 500,
                color: "#ffffff",
                letterSpacing: "-0.2px",
                lineHeight: 1.3,
              }}
            >
              {name}
            </p>
            <p
              style={{
                fontFamily: textFont,
                fontSize: 11,
                fontWeight: 400,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.02em",
                marginTop: 3,
              }}
            >
              {subtext}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
