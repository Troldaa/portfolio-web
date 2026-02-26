import React, { useEffect, useRef } from 'react';
import * as skinview3d from 'skinview3d';

interface MinecraftCharacterProps {
  skin: string;
}

const MinecraftCharacter: React.FC<MinecraftCharacterProps> = ({ skin }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const viewer = new skinview3d.SkinViewer({
        canvas: canvasRef.current,
        width: canvasRef.current.parentElement?.clientWidth || 300,
        height: canvasRef.current.parentElement?.clientHeight || 400,
        skin: `https://minotar.net/skin/${skin}`,
      });

      // Set character position
      viewer.controls.enableZoom = false;
      viewer.fov = 70;

      // Add animation
      const walk = new skinview3d.WalkingAnimation();
      viewer.animation = walk;

      // Custom rotation that slows down and speeds up
      walk.addAnimation((player, progress) => {
        player.rotation.y = progress * 0.5;
      });

      const handleResize = () => {
        if (canvasRef.current && canvasRef.current.parentElement) {
          viewer.setSize(
            canvasRef.current.parentElement.clientWidth,
            canvasRef.current.parentElement.clientHeight
          );
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        viewer.dispose();
      };
    }
  }, [skin]);

  const items = [
    { src: 'https://minecraft.wiki/images/Diamond_JE3_BE3.png', pos: 'top-10 left-10', delay: '0s' },
    { src: 'https://minecraft.wiki/images/Redstone_Dust_JE2_BE2.png', pos: 'bottom-20 right-10', delay: '1s' },
    { src: 'https://minecraft.wiki/images/Lapis_Lazuli_JE2_BE2.png', pos: 'top-1/2 right-20', delay: '2s' },
    { src: 'https://minecraft.wiki/images/Emerald_JE3_BE3.png', pos: 'bottom-10 left-20', delay: '1.5s' },
    { src: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png', pos: 'top-20 right-1/4', delay: '0.5s' },
  ];

  return (
    <div className="w-full h-full relative group">
        <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Floating Minecraft items/elements around the character */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {items.map((item, i) => (
                <div
                    key={i}
                    className={`absolute ${item.pos} animate-float opacity-10 group-hover:opacity-40 transition-all duration-1000`}
                    style={{ animationDelay: item.delay }}
                >
                    <img src={item.src} alt="MC Item" className="w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                </div>
            ))}
        </div>
    </div>
  );
};

export default MinecraftCharacter;
