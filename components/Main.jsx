import Botton from "./Botton";

const MainPage = () => {
  return (
    <div className="w-full h-full relative">
      <div className="z-20 absolute top-[40vh] w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-[5%] md:mx-[10%] lg:mx-[20%] animate-fadeInSlow">
        <h1 className="text-gray-300 text-sm md:text-md lg:text-lg">
          For website and video editing
        </h1>
        <h1 className="text-white text-4xl lg:text-5xl my-2 font-bold">
          Suprotiv Moitra
        </h1>

        <h1 className="text-white text-4xl lg:text-5xl mt-2 mb-3 ">
          Freelance Web Developer
        </h1>
        <div className="mt-6">
          <Botton value={"See My Work"} size={"3xl"} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
