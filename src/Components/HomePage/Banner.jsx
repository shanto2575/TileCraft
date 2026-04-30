import 'animate.css';
import Link from "next/link";
import NewArrivals from "./NewArrivals";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        //         backInLeft
        // backInRight
        <div>
            <div className="container mx-auto bg-stone-100 text-black mt-1 rounded">
                <div className="container mx-auto px-6 py-24 flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight 
                        animate__animated animate__backInLeft">
                        Discover Your{" "}
                        <span className="text-amber-500 inline-block 
                        animate__animated animate__backInRight animate__delay-1s">
                            Perfect Aesthetic
                        </span>
                    </h1>
                    <p className="text-gray-500 mt-4 max-w-2xl">
                        Premium tiles for modern homes, offices, and luxury spaces. Explore
                        designs that match your style.
                    </p>
                    <Link href="/all-tiles">
                        <button className="mt-8 bg-amber-400 text-black px-6 py-3 rounded font-semibold hover:bg-amber-500 transition flex items-center gap-4  ">
                            Browse Now <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="container mx-auto">
                <NewArrivals />
            </div>
        </div>
    );
};

export default Banner;