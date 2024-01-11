const NetflixLogo = () => {
  return (
    <div className="h-screen snap-center flex items-center justify-center">
      <div className="NetflixLogoContainer h-screen w-screen flex items-center justify-center">
        <div className="relative w-[400px] h-[500px] flex justify-center items-center rounded-[20px] border-8 border-zinc-950 bg-zinc-950">
        <div className="-left-12 bg-red-800 h-64 w-16 relative before:bg-red-800 before:h-64 before:w-16 before:absolute before:left-24 after:bg-zinc-950 after:h-5 after:w-44 after:absolute after:-left-2 after:-bottom-3 after:rounded-[50%]">
        <span className="absolute h-64 w-16 bg-red-700 left-12 skew-x-[20deg] shadow-[0_0_10px_-4px_#222]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetflixLogo;
