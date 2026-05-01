import Banner from "@/Components/HomePage/Banner";
import TopTiles from "@/Components/HomePage/TopTiles";

export const metadata = {
  title: "TileCarft - Home",
};
export default function Home() {
  return (
    <div>
      <Banner />
      <TopTiles />
    </div>
  );
}
