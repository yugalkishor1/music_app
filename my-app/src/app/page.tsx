import Herosection from "./components/Herosection";

export default function Page() {
  return (
    <div 
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Herosection/>
    </div>
  );
}