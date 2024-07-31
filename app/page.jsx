import ArtWork from "./components/ArtWork/ArtWork";
import AllHere from "./components/AllHere";
import Hero from "./components/Hero/Hero";
import LiveAction from "./components/LiveAction/LiveAction";
import Subscribe from "./components/Subscribe";
import TopCustomers from "./components/TopCustomers";
import CreateArt from "./components/CreateArt/CreateArt";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto max-h-max space-y-5">
      <Hero />
      <AllHere />
      <ArtWork />
      <TopCustomers />
      <CreateArt />
      <LiveAction />
      <Subscribe />
      <Footer />
    </main>
  );
}
