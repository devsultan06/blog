import Image from "next/image";

export default function Home() {
  return (
    <div className="home">

      <header className="bg-deepblack text-white border-b border-dark20">
        <div className="box flex justify-between items-start max-900:flex-col">
          <div className="item flex-1 border-r border-b border-t border-dark20  pt-[100px] max-900:pt-[50px]">
            <div className="pl-[100px] max-900:pl-[20px]">
              <p className="text-lightgrey text-[20px]">Your Journey to Tomorrow Begins Here</p>
              <h1 className="text-[40px]">Explore the Frontiers of </h1>
              <h1 className="text-[40px]">Artificial Intelligence</h1>
              <p className="text-lightgrey text-[17px] mt-[5px] max-900:w-full max-700:w-[50%] max-700:text-[12px]">Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
            </div>

            <div className="box flex justify-between items-center mt-[80px] border-r border-t border-b border-dark20 max-900:w-full">
              <div className="item border-r border-dark20 w-full p-[50px] pl-[100px] max-900:pl-[20px] text-[25px] font-semibold">
                300<span className="text-yellow">+</span>
                <p className="text-lightgrey text-[15px] font-normal mt-[7px]">Resources Available</p>
              </div>
              <div className="item border-r border-dark20 w-full p-[50px] text-[25px] font-semibold ">
                12k<span className="text-yellow">+</span>
                <p className="text-lightgrey text-[15px] font-normal mt-[7px]">Total Downloads</p>
              </div>

              <div className="item  w-full p-[50px] text-[25px] font-semibold ">
                10k<span className="text-yellow">+</span>
                <p className="text-lightgrey text-[15px] font-normal mt-[7px]">Active Users</p>
              </div>
            </div>

          </div>

          <div className="item w-1/3 flex flex-col items-start max-900:w-full max-900:pb-[30px]">
            <Image src="/images/ray.png" alt="AI Illustration" width={300} height={300} />
            <div className="pl-[40px] mt-[-30px]">
              <Image src="/images/people.png" alt="Arrow" width={150} height={150} />
              <h1 className="text-[20px] my-[10px]">Explore 1000+ resources</h1>
              <p className="text-lightgrey text-[14px]">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
              <button className="flex justify-between items-center gap-1 mt-[20px] border border-dark20 text-lightgrey px-4 py-3 rounded-md hover:bg-yellow-600 transition">
                <span className="font-medium">Explore Resources</span>
                <Image src="/images/arrow.png" alt="Arrow" width={20} height={20} />
              </button>

            </div>

          </div>
        </div>
      </header>

      <section className="h-[50vh] bg-deepblack">

      </section>

    </div>

  );
}
