import { Hero, Container, Footer, Content } from "react-bulma-components";

export default function footer() {
  return (
    <Hero size="fullheight">
      <Hero.Head renderAs="header" />
      <Hero.Body />
      <Hero.Footer>
        <Footer>
          <Container>
            <Content style={{ textAlign: "center" }}>
              <p>
                <strong>Bulma</strong> by{" "}
                <a href="http://jgthms.com">Jeremy Thomas</a>. The source code
                is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
                . The website content is licensed{" "}
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                  CC BY NC SA 4.0
                </a>
                .
              </p>
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
    </Hero>
  );
}
