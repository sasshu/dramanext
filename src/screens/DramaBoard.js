import { BoardNav } from "../components/BoardNav";
import { Header } from "../components/Header";

export const DramaBoard = () => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "80px" }}>
        <BoardNav />
      </div>
    </div>
  );
};
