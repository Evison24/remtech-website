"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

type Product = {
  title: string;
  link: string;
  thumbnail: string;
};

type HeroParallaxProps = {
  products: Product[];
};

export const HeroParallax: React.FC<HeroParallaxProps> = ({ products }) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 10);
  const thirdRow = products.slice(10, 15);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 200, damping: 25 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0.3, 0.9], [0, 300]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0.3, 0.9], [0, -300]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [25, 0]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.3, 1]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [-400, 100]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="min-h-screen overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
        className="flex flex-col gap-20 will-change-transform"
      >
        <motion.div className="flex justify-center space-x-6 px-6">
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>

        <motion.div className="flex justify-center space-x-6 px-6">
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateXReverse}
            />
          ))}
        </motion.div>

        <motion.div className="flex justify-center space-x-6 px-6">
          {thirdRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-32 px-4 w-full">
      <h1 className="text-2xl md:text-7xl font-bold text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-6 text-neutral-300">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

type ProductCardProps = {
  product: Product;
  translate: MotionValue<number>;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  // translate,
}) => {
  return (
    <motion.div
      // style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product h-96 w-[27rem] relative shrink-0"
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        className="object-cover object-left-top absolute h-full w-full inset-0"
        fill
      />

      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition duration-300" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-lg font-semibold transition duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};
