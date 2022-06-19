import TopImage1 from "./images/undraw_movie_night_re_9umk.svg";
import TopImage2 from "./images/undraw_video_streaming_re_v3qg.svg";
import { NowDramas } from "./components/NowDramas";
import { Header } from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
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
      </div>
    </>
  );
};

export default App;
