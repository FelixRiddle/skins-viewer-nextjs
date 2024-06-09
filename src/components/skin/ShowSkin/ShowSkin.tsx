"use client";

import { useEffect } from "react";
import { SkinViewer, WalkingAnimation } from "skinview3d";

/**
 * Home component
 * 
 * @returns 
 */
export default function ShowSkin({
    username,
    skinName,
    ext = "png",
}: {
    username: string;
    skinName: string;
    ext?: string;
}) {
    
    useEffect(() => {
        const skinViewer = new SkinViewer({
            canvas: document.getElementById("skinContainer") as HTMLCanvasElement,
            width: 600,
            height: 800,
            skin: `/skins/${username}/${skinName}.${ext}`,
        });
        
        skinViewer.fov = 100;
        
        // Rotate the player
        skinViewer.autoRotate = true;
    
        // Apply an animation
        skinViewer.animation = new WalkingAnimation();
    
    }, []);
    
    return (
        <div>
            {/* Check if it works first */}
            <canvas id="skinContainer" className={"border "}></canvas>
        </div>
    );
}
