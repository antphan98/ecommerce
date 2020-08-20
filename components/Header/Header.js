import Link from "next/link";
import { Navbar } from "react-bulma-components";

export default function Header() {
  return (
    <>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item dropdown hoverable href="#">
              <Navbar.Link>Skincare</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item>
                  <Link href="/all-skincare">All Skincare</Link>
                </Navbar.Item>
                <Navbar.Item>
                  <Link href="/cleansers">Cleansers</Link>
                </Navbar.Item>
                <Navbar.Item>
                  <Link href="/toners">Toners</Link>
                </Navbar.Item>
                <Navbar.Item>
                  <Link href="/serums">Serums</Link>
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
            <Navbar.Item href="/toners">Toners</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="#">Sign In/Sign Up</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
      <style jsx>{``}</style>
    </>
  );
}
