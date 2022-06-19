import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#" className="ms-4">
          <h1>DramaNext</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end flex-grow-1 pe-3" navbarScroll>
            <Nav.Link href="/">ホーム</Nav.Link>
            <Nav.Link href="/drama">お問い合わせ</Nav.Link>
          </Nav>
          <Form className="d-flex me-4">
            <FormControl
              type="search"
              placeholder="ドラマを探す"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary" size="lg">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
