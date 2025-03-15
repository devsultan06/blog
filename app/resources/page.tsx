import Future from "@components/layout/Future"

const Resources = () => {
    return (
        <div className="news bg-deepblack text-white ">

            <div className=" max-900:block px-[100px] max-900:px-[20px] border-b  border-dark20 py-[100px] max-900:py-[50px]">
                <h1 className="text-[40px] max-900:text-[33px] font-kumbh text-white">Unlock a World of </h1>
                <div className="flex gap-9 items-center justify-center mt-[10px] max-900:block">
                    <div>
                        <h1 className="text-[40px] max-900:text-[33px] text-white">Knowledge</h1>

                    </div>
                    <div>
                        <p className="text-grey60 text-[17px]">Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.</p>

                    </div>
                </div>


            </div>

            <Future/>
        </div>
    )
}

export default Resources