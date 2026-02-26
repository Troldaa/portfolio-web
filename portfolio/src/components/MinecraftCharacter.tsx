import React, { useEffect, useRef } from 'react';
import * as skinview3d from 'skinview3d';

interface MinecraftCharacterProps {
  skinUrl: string;
}

const MinecraftCharacter: React.FC<MinecraftCharacterProps> = ({ skinUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const viewer = new skinview3d.SkinViewer({
        canvas: canvasRef.current,
        width: 300,
        height: 400,
        skin: skinUrl,
      });

      // Add walking animation
      viewer.animation = new skinview3d.WalkingAnimation();

      // Control camera
      viewer.camera.position.set(0, 10, 40);
      viewer.controls.enableZoom = false;

      return () => {
        viewer.dispose();
      };
    }
  }, [skinUrl]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Nickname on top of head */}
      <div className="mb-4 minecraft-font text-white text-[10px] md:text-sm bg-black/80 px-4 py-2 border-2 border-brand-blue shadow-[4px_4px_0px_0px_rgba(0,102,255,1)] z-10">
        MiniOmega_69
      </div>
      <canvas ref={canvasRef} className="cursor-pointer" />
    </div>
  );
};

export default MinecraftCharacter;
