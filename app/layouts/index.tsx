import Footer from "./footer";
import Nav from "./nav";

export default function Layout({children}: {
  children: React.ReactNode;
}) {
 return (
  //  Wrap in JSX fragment; JSX expressions must have one parent element.
  <>
   <header className="border-b">
    <Nav />
   </header>
   <main className="container flex justify-center flex-grow mx-auto">
     {children}
   </main>
   <Footer />
  </>
  );
}