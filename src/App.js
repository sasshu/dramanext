import { Link } from "react-router-dom";
import TopImage1 from "./images/undraw_movie_night_re_9umk.svg";
import TopImage2 from "./images/undraw_video_streaming_re_v3qg.svg";
import { NowDramas } from "./components/NowDramas";
import { BoardNav } from "./components/BoardNav";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

const App = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#" className="ms-4">
            <h1>DramaNext</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="justify-content-end flex-grow-1 pe-3" navbarScroll>
              <Nav.Link href="#">ホーム</Nav.Link>
              <Nav.Link href="#call">お問い合わせ</Nav.Link>
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
      <div className="p-5" style={{ backgroundColor: "#fff2cc" }}>
        <div className="p-5">
          <h2 className="ms-5 mt-5">気になるドラマの続きをみんなで考えよう</h2>
          <div className="d-flex my-5">
            <img src={TopImage1} alt="movie-night" className="w-50 mx-5" />
            <img
              src={TopImage2}
              alt="undraw_video_streaming"
              className="w-25 ms-5"
            />
          </div>
        </div>
        <div className="p-5">
          <h2 className="text-center mb-5">今放送中のドラマ（抜粋）</h2>
          <NowDramas />
        </div>
        <BoardNav />
        <Link to="/drama">Drama</Link>
      </div>
    </>
  );
};

export default App;
