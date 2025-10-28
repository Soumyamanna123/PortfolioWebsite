import Footer from "@/components/homepage/Footer";
import NavBar from "@/components/homepage/NavBar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
