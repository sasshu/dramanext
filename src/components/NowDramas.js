import { Card } from "react-bootstrap";
import Image0 from "../images/202204-myfamily.webp";
import Image1 from "../images/202204-miraten.jpg";
import Image2 from "../images/202204-motokare.jpg";
import Image3 from "../images/202203-kamakuradono.jpg";

export const NowDramas = () => {
  const dramas = [
    {
      title: "マイファミリー",
      subTitle: "日曜夜9時 TBSテレビ",
      text: '二宮和也&多部未華子 夫婦役で15年ぶり共演!! そんな2人に襲いかかる前代未聞の"完全誘拐" 娘を助ける唯一の方法は警察排除!? 夫婦だけで娘を取り返せ!! 誘拐事件で試される"家族の絆" 一瞬たりとも目が離せないノンストップファミリーエンターテインメント!',
      image: Image0,
    },
    {
      title: "未来への10カウント",
      subTitle: "木曜夜9時 テレビ朝日",
      text: "生きる希望を失った高校ボクシング部のコーチが、人生のリベンジマッチへ…！ 木村拓哉が脚本家・福田靖と再タッグを組み、「まれに見る」役どころに初挑戦 閉塞感が漂う今、熱い気持ちを思い出させてくれる！ 世代を超えた青春群像劇",
      image: Image1,
    },
    {
      title: "元彼の遺言状",
      subTitle: "月曜夜9時 フジテレビ",
      text: "綾瀬はるかさんが月９初主演で初の弁護士役！ 彼女は諦めない！ 金も地位も名誉も、そしてどんな難事件も！ うっ屈した現代社会をスカッと吹き飛ばす、痛快推理劇開幕！",
      image: Image2,
    },
    {
      title: "鎌倉殿の13人",
      subTitle: "日曜夜8時 NHK",
      text: "華やかな源平合戦、誕生する鎌倉幕府、権力を巡る男たち女たちの駆け引きー 源頼朝にすべてを学び、武士の世を盤石にした男 二代執権・北条義時。野心とは無縁だった若者は、いかにして武士の頂点に上り詰めたのか。三谷幸喜が贈る予測不能エンターテインメント！ 主演 小栗旬",
      image: Image3,
    },
  ];

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex" style={{ flexWrap: "wrap" }}>
        {dramas.map((drama, index) => (
          <Card style={{ width: "20rem" }} key={index} className="m-3 shadow">
            <Card.Link
              href={`#card${index}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card.Body>
                <Card.Img variant="top" src={drama.image} className="mb-2" />
                <Card.Title>{drama.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {drama.subTitle}
                </Card.Subtitle>
                <Card.Text>{drama.text}</Card.Text>
              </Card.Body>
            </Card.Link>
          </Card>
        ))}
      </div>
    </div>
  );
};
