import { Nav } from "react-bootstrap";

export const BoardNav = () => {
  const episodes = 10;

  return (
    <Nav variant="tabs" dafaultActiveKey="/#10">
      {Array(episodes)
        .fill(0)
        .map((episode, index) => (
          <Nav.Item>
            <Nav.Link href={`#${index + 1}`}>第{index + 1}話</Nav.Link>
          </Nav.Item>
        ))}
    </Nav>
  );
};
