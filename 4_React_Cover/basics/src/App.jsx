import Card from "./components/Card";
import Header from "./components/Header";
import { data } from "./constant";

function App() {
  // koşullu renderlama
  const title = "";

  return (
    <div>
      <Header />
      {/* ternary ? : */}
      {/* eğer title varsa ekrana title yoksa null döndür */}
      {title ? <h1>{title}</h1> : <h1>başlık verisi alınamdı</h1>}

      {/* 2.yöntem > and */}
      {title && <h1>{title}</h1>}

      {/*  çoklu renderlama */}
      <div className="wrapper">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>

      {/* <Main /> */}
    </div>
  );
}

export default App;
