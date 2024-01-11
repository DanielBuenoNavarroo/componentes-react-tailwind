const YoutubeLogo = () => {
  return (
    <div className="h-screen snap-center flex items-center justify-center">
      <div className="YoutubeLogoContainer h-screen w-screen flex items-center justify-center">
        <div className="relative w-[400px] h-[500px] flex justify-center items-center rounded-[20px] border-8 border-zinc-950 bg-zinc-950">
          <div className="relative w-48 h-32 bg-red-600 rounded-xl flex justify-center items-center">
            <span className="w-0 h-0 border-l-[50px] border-r-white border-y-[25px] border-y-transparent border-solid"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YoutubeLogo