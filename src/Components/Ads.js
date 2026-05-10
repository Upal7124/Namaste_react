const Ads = () => {
  return (
    <div className="bg-[#020617] px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
        {/* LEFT CARD */}
        <div className="relative w-full lg:w-[65%]">
          <video
            src="https://content-management-files.canva.com/fbd599e2-8bae-40e1-91a0-628a9182c09d/Recommended_DreamLab_Desktop2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex items-start justify-center pt-8">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
              Explore with Canva
            </h2>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative w-full lg:w-[35%]">
          <img
            src="https://content-management-files.canva.com/3aefbd76-8499-4ee1-807f-9b2c901a3878/Recommended_BGremover_Desktop_2x.png"
            alt="Ad"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div>
              <h2 className="text-black text-2xl md:text-3xl font-bold max-w-[250]">
                Bye-bye background in a single click
              </h2>
            </div>

            <button className="bg-white text-black px-5 py-3 rounded-full font-semibold w-fit hover:bg-gray-200 transition">
              Remove background
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
