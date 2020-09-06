import Link from "next/link";
import { Navbar } from "react-bulma-components";

export default function Header() {
  return (
    <>
      <Navbar id="nav">
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
                  <Link href="/all-skincare">
                    <a>All Skincare</a>
                  </Link>
                </Navbar.Item>
                <Navbar.Item>
                  <Link href="/cleansers">
                    <a>Cleansers</a>
                  </Link>
                </Navbar.Item>
                <Navbar.Item>
                  <Link href="/toners">Toners</Link>
                </Navbar.Item>
                <Navbar.Item>
                  <Link href="/moisturizers">Moisturizers</Link>
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
            <Navbar.Item href="/exfoliators">Exfoliators</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="#">Sign In/Sign Up</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
      <style jsx>{`
        .navbar #nav {
          position: absolute;
        }
      `}</style>
    </>
  );
}
