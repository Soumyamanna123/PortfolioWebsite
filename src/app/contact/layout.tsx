import Footer from "@/app/section/Footer";
import NavBar from "@/app/section/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
