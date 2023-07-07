import Link from "next/link";
import Header from "./Header";
const Layout = ({ children }) => (
  <>
    <Header />
    <nav>
      <Link href="/">
        <a>Tasks 🏡</a>
      </Link>

      <Link href="/form">
        <a>Form 🔢 </a>
      </Link>
      <Link href="/data">
        <a>Data 📖 </a>
      </Link>
    </nav>
    <main>{children}</main>
    <style jsx>{`
      nav {
        text-align: center;
        margin-top: 0.0rem;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        background: teal;
        color: #fafafa;
      }
      nav a {
        margin-right: 2px;
        padding: 1px;
        font-size: 1.45rem;
      }
      main {
        margin: 0rem;
        padding: 0rem;
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </>
);

export default Layout;
