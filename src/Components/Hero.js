const Hero = () => {
  return (
    <div className="flex py-10 bg-[#020617]">
      <div className="text-amber-50 pl-6">
        <div className="text-6xl">Where heart meets art</div>
        <div className="hero-sub py-4">
          Canva makes it easy to create and share professional designs.
        </div>
        <div className="">
          <button className="bg-[#7f7d9c] p-3 rounded-2xl hover:cursor-pointer  hover:bg-gray-100 hover:text-black">
            Sign up and start designing
          </button>
        </div>
      </div>
      <div className="pl-36 pr-8">
        <video
          src="https://content-management-files.canva.com/f521ebb2-bf15-4e2b-9085-9979b16a4362/canva_jadu_dadu_hin_16_9.mp4"
          width="600"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    </div>
  );
};
export default Hero;
