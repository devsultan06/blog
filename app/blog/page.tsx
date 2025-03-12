export default function Blog() {
    return (
        <div className="relative h-[50vh] w-full z-0 bg-no-repeat bg-cover bg-right flex items-end justify-center text-center pt-[80px]"
            style={{ backgroundImage: `url(/images/blog1.png)` }}>

            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/90 to-transparent"></div>

            <h1 className="relative z-10 text-white text-3xl pb-4 font-semibold">
                The Rise of Artificial Intelligence in Healthcare
            </h1>
        </div>
    );
}
