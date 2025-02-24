"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type EnhancedGalleryParallaxImageProps = {
  src: string;
  alt: string;
  speed?: number;
  customStyle?: React.CSSProperties;
};

function EnhancedGalleryParallaxImage({
  src,
  alt,
  speed = 50,
  customStyle = {},
}: EnhancedGalleryParallaxImageProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, speed * 1.2]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.05]);
  const x = useTransform(scrollY, [0, 1000], [0, speed * 0.7]);

  return (
    <motion.div
      style={{ y, scale, x, ...customStyle }}
      className="absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      <Image src={src} alt={alt} width={400} height={300} />
    </motion.div>
  );
}

const galleryImagesData = [
  {
    src: "https://cdn.prod.website-files.com/62d355d9727756759479db7a/62d355d9727756c5f879db91_bg-dots-saas-x-template.svg",
    style: { top: "5%", left: "10%", width: "100px", height: "50px" },
    speed: 40,
  },
  {
    src: "https://cdn.prod.website-files.com/62d355d9727756759479db7a/62e1b08a6a4cad35ee6904be_growth-svgrepo-com.svg",
    style: { top: "20%", right: "15%" },
    speed: -30,
  },
  {
    src: "https://cdn.prod.website-files.com/62d355d9727756759479db7a/64fb537e9085e3b652178280_output-onlinepngtools-2022-11-03T173756.380-p-800.png",
    style: { bottom: "10%", left: "20%" },
    speed: 50,
  },
  {
    src: "https://cdn.prod.website-files.com/62d355d9727756759479db7a/64fb52a42af301cacd583126_Untitled-design-2022-11-03T164246.018.png",
    style: { top: "30%", left: "50%" },
    speed: -40,
  },
  {
    src: "https://cdn.prod.website-files.com/62d355d9727756759479db7a/62d355d9727756c5f879db91_bg-dots-saas-x-template.svg",
    style: { bottom: "15%", right: "25%" },
    speed: 30,
  },
  {
    src: "https://cdn.prod.website-files.com/62d355d9727756759479db7a/62d355d9727756c5f879db91_bg-dots-saas-x-template.svg",
    style: { top: "70%", left: "15%" },
    speed: 45,
  },
  {
    src: "https://cdn.prod.website-files.com/62d355d9727756759479db7a/62d355d9727756c5f879db91_bg-dots-saas-x-template.svg",
    style: { bottom: "5%", right: "10%" },
    speed: -35,
  },
];

export function ParallaxGallerySection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {galleryImagesData.map((item, idx) => (
          <EnhancedGalleryParallaxImage
            key={idx}
            src={item.src}
            alt={`Gallery Image ${idx + 1}`}
            speed={item.speed}
            customStyle={item.style}
          />
        ))}
      </div>
    </section>
  );
}
