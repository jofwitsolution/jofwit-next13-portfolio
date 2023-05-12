import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Image
        src="icons/loader.svg"
        width={80}
        height={80}
        alt="loader"
        className="object-contain"
      />
    </div>
  );
};

export default Loading;
