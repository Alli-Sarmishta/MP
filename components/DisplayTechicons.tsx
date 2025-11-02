"use client";
import { cn } from "@/lib/utils";

import { getTechLogos } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const DisplayTechicons = ({ techStack }: TechIconProps) => {
    const [techIcons, setTechIcons] = useState<{ tech: string; url: string }[]>([]);

    useEffect(() => {
        const fetchIcons = async () => {
            const icons = await getTechLogos(techStack);
            setTechIcons(icons);
        };
        fetchIcons();
    }, [techStack]);

    return (
        <div className="flex flex-row gap-2">
            {techIcons.slice(0, 3).map(({ tech, url }, index) => (
                <div
                    key={tech + index}
                    className={cn("relative group bg-dark rounded-full p-2 flex-center", index >= 1 && '-ml-3')} >
                    <span className="tech-tooltip">{tech}</span>
                    <Image src={url} alt={tech} width={100} height={100} className="size-5" />
                </div>
            ))}
        </div>
    );
};

export default DisplayTechicons;