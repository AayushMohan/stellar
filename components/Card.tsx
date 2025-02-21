import Image from "next/image";
import { Button } from "./ui/button";

const Card = () => {
  return (
    <div className="grid grid-cols-2 h-[100vh] p-14">
      <div className="bg-[#B69573] h-full pt-36 pl-24 text-white">
        <div className="space-y-4">
          <h1 className="text-6xl font-medium mb-4">Nere</h1>
          <span className="text-xl font-semibold">Up to 30% off*</span>
          <p className="text-md leading-7 pt-16 font-extralight mr-20">
            Pick one, pack one. Explore a world of possibilities with Nere,
            crafted for those who demand style and sophistication. This season,
            Nere introduces a stunning range of new colours to elevate your
            journey.
          </p>
        </div>
        <Button
          variant="link"
          className="pt-24 text-md uppercase text-white -ml-4 font-medium"
        >
          Shop Now
        </Button>
      </div>
      <div className="bg-[#F9F9F9] h-full flex items-center justify-center">
        <Image
          src="https://www.strandbags.co.nz/cdn/shop/files/IWT_666x826_AU-1.jpg?v=1737609250&width=1920"
          alt="Nere Product"
          height={330}
          width={330}
        />
      </div>
    </div>
  );
};

export default Card;
