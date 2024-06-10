import Header from "../../components/main/Header";
import FloatingMessaging from "../../components/main/FloatingMessage";
import LeftSide from "../../components/home/left-side";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <FloatingMessaging />
      <main className="home-main grid grid-cols-12 gap-4 main-padding mt-[4.25rem] sm:mt-20">
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <LeftSide />
        </div>
      </main>
    </div>
  );
}