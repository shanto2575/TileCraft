import Link from "next/link";
import NewArrivals from "./NewArrivals";

const Banner = () => {
    return (
        <div>
            <div className="container mx-auto bg-slate-100 text-black mt-1 rounded">
                <div className="container mx-auto px-6 py-24 flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Discover Your <span className="text-amber-400">Perfect Aesthetic</span>
                    </h1>
                    <p className="text-gray-400 mt-4 max-w-2xl">
                        Premium tiles for modern homes, offices, and luxury spaces. Explore
                        designs that match your style.
                    </p>

                    <Link href="/all-tiles">
                        <button className="mt-8 bg-amber-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-500 transition">
                            Browse Now
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