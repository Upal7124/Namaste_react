const Tools = () => {
  return (
    <div className="bg-[#020617] text-amber-50 py-4 px-40">
      <div className="pb-8 text-5xl text-center">
        <h1>Explore Canva's template and AI tools</h1>
      </div>
      <div className="pb-8 w-4xl ">
        <ul className="bg-[#7f7d9c] flex items-center justify-center h-20 border-none rounded-[40px]  ">
          <li className="px-6 text-lg font-medium hover:cursor-pointer h-12 flex justify-between items-center rounded-3xl pl-6 bg-amber-50 text-black hover:border-2 hover:bg-[#7f7d9c] hover:text-amber-50 border-2 border-amber-50">
            Try it now
          </li>
          <li className="px-6 text-lg font-medium hover:cursor-pointer">AI</li>
          <li className="px-6 text-lg font-medium hover:cursor-pointer">
            Presentation
          </li>
          <li className="px-6 text-lg font-medium hover:cursor-pointer">
            Social Media
          </li>
          <li className="px-6 text-lg font-medium hover:cursor-pointer">
            Print
          </li>
          <li className="px-6 text-lg font-medium hover:cursor-pointer">
            Video
          </li>
          <li className="px-6 text-lg font-medium hover:cursor-pointer">
            Education
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Tools;
