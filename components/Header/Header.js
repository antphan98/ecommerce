import Link from "next/link";
export default function Header() {
  return (
    <>
      <nav className="navbar">
        <ul className="container">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/allskincare">
              <a>All Products</a>
            </Link>
          </li>
          <li>
            <Link href="/allskincare">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{``}</style>
    </>
  );
}
