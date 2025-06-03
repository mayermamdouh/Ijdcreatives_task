import AppBar from "@/components/AppBar";
import FirstPage from "@/components/first-section";
import Footer from "@/components/footer";
import SecondPage from "@/components/second-section";
import ThirdSection from "@/components/third-section";

export default function Home() {
  return (
    <div>
      <AppBar />
      <FirstPage />
      <SecondPage />
      <ThirdSection />
      <Footer />
    </div>
  );
}
