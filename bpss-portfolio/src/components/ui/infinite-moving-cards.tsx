"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
    showControls = true,
    autoPlay = true,
}: {
    items: {
        quote?: string;
        name: string;
        title?: string;
        width?: number;
        height?: number;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
    showControls?: boolean;
    autoPlay?: boolean;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [currentSpeed, setCurrentSpeed] = useState(speed);

    const getSpeedValue = useCallback((speed: string) => {
        switch (speed) {
            case "fast":
                return "20s";
            case "normal":
                return "40s";
            case "slow":
                return "80s";
            default:
                return "40s";
        }
    }, []);

    const addAnimation = useCallback(() => {
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
            setStart(true);
        }
    }, [direction, currentSpeed]);

    const getDirection = useCallback(() => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );
        }
    }, [direction]);

    const getSpeed = useCallback(() => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-duration",
                getSpeedValue(currentSpeed)
            );
        }
    }, [currentSpeed, getSpeedValue]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-play-state",
                isPlaying ? "paused" : "running"
            );
        }
    };

    const changeSpeed = () => {
        const speeds = ["fast", "normal", "slow"];
        const currentIndex = speeds.indexOf(currentSpeed);
        const nextIndex = (currentIndex + 1) % speeds.length;
        setCurrentSpeed(speeds[nextIndex] as "fast" | "normal" | "slow");
    };

    const scrollTo = (dir: "left" | "right") => {
        if (scrollerRef.current) {
            const scrollAmount = dir === "left" ? -300 : 300;
            scrollerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        addAnimation();
    }, [addAnimation]);

    useEffect(() => {
        getSpeed();
    }, [currentSpeed, getSpeed]);

    return (
        <div className="relative group">
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
                        "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                        start && isPlaying && "animate-scroll",
                        pauseOnHover && "hover:[animation-play-state:paused]"
                    )}
                    style={{
                        animationPlayState: isPlaying ? "running" : "paused",
                    }}
                >
                    {items.map((item, idx) => (
                        <li
                            className="relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 overflow-hidden"
                            style={{
                                background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
                                width: item.width ? `${item.width}px` : "350px",
                                height: item.height ? `${item.height}px` : "auto",
                                minHeight: "160px",
                            }}
                            key={`${item.name}-${idx}`}
                        >
                            <blockquote className="h-full w-full">
                                <div
                                    aria-hidden="true"
                                    className="user-select-none -z-1 pointer-events-none absolute w-[calc(100%_+_4px)]"
                                ></div>
                                <Image
                                    src={item.name}
                                    width={item.width || 350}
                                    height={item.height || 200}
                                    alt="Card image"
                                    className="object-cover w-full h-full rounded-2xl"
                                    priority={idx < 3} // Only prioritize first few images
                                />
                               
                            </blockquote>
                        </li>
                    ))}
                </ul>
            </div>

            {showControls && (
                <>
                    <div className="absolute left-1/2 -translate-x-1/2 z-30 flex gap-2">
                        <button
                            onClick={togglePlay}
                            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};