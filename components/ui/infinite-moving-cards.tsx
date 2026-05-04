"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  onItemClick,
}: {
  items: {
    title: string;
    category: string;
    description: string;
    tech: string[];
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  onItemClick?: (item: any) => void;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      // Ensure the DOM is ready before starting the animation
      requestAnimationFrame(() => {
        setStart(true);
      });
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            onClick={() => onItemClick?.(item)}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-primary/20 bg-background px-8 py-6 cursor-pointer hover:border-primary transition-colors md:w-[450px]"
            style={{
              background: "linear-gradient(180deg, var(--background), #000229)",
            }}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary/60">
                  {item.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.6] text-gray-300 font-normal line-clamp-2">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
