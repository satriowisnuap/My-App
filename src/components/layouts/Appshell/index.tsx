import Navbar from "../navbar";
import Footer from "../footer";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

// const Navbar = dynamic(() => import("../navbar"), {
//   loading: () => <p>Loading Navbar...</p>,
//   ssr: false,
// });

const disableNavbar = ["/auth/login", "/auth/register", "/404"];
const disableFooter = ["/auth/login", "/auth/register"];

type AppShellProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <main className={roboto.className}>
      {!disableNavbar.includes(pathname) && <Navbar />}

      {children}

      {!disableFooter.includes(pathname) && <Footer />}
    </main>
  );
};

export default AppShell;
