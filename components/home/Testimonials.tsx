import { testimonial } from "@/data/testimonial";
import Image from "next/image";

const Testimonials = () => {
    return (
        <div className="grid bg-deepblack grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[100px] max-900:px-[20px]">
            {testimonial.map((testimonial) => (
                <div key={testimonial.id} className="px-6 py-10 border border-dark20 bg-dark  text-center">
                    <div className="flex gap-2 justify-center items-center ">
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                        <div className="text-left">
                            <h2 className=" font-semibold">{testimonial.name}</h2>
                            <p className="text-lightgrey text-sm">{testimonial.location}</p>
                        </div>

                    </div>

                    <div className="rounded-[10px] border border-dark20 bg-black mt-[60px] p-[15px] relative flex flex-col justify-center flex-1  min-h-[180px] items-center ">
                        <div className="flex justify-center absolute left-1/2 -translate-x-1/2 top-[-20px] rounded-[20px] border border-dark20 bg-deepblack px-3 py-1">
                            {"⭐".repeat(testimonial.rating)}
                        </div>

                        <p className="text-white mt-6 text-[16px]">{testimonial.review}</p>
                    </div>



                </div>
            ))}
        </div>
    );
};

export default Testimonials;
