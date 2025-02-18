import Image from "next/image";
import { Button } from "./ui/button";

const Categories = () => {
  return (
    <div className="py-4 flex relative">
      <Image
        src="https://images.unsplash.com/photo-1586878340506-af074f2ee999?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width="700"
        height="700"
        className="brightness-75"
      />

      <Image
        src="https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJhZ3N8ZW58MHwwfDB8fHww"
        alt=""
        width="800"
        height="700"
        className="brightness-75"
      />
      <div className="absolute bg-slate-50 p-8  top-[40%] left-[36%]">
        <div className="flex flex-row justify-center items-center h-full space-x-4">
          <Button className="rounded-none px-8 py-5">Shop Travel</Button>
          <Button variant={"outline"} className="rounded-none px-8 py-5">
            Shop Bags
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Categories;
