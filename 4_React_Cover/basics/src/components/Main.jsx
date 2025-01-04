/*
 ! JSX (Javascript XML):
 * react tarafında kullanılan bir söz dizimi.
 * JSX, javascript içersinde HTML benzeri bir yapıyla  * kullanıcı arayüzünü tanımlamaya yarar
 
 * HTML | JSX farkları:
 * JSX html deki bütün etiketlere sahiptir.
 * 1) {}: doğrudan jsx içerisine js kodu yazabiliyoruz 
 * 2) className: sınıf tanımlarken class yerine kullanıyoruz.
 * 3) inlineCSS: {{}} çift parantez içerisne yazarız
 * 4) <div/>: bütün etiketler self closing olaiblir
 * 5) bütün eitketleirn kapanışını söylememiz lazım. (hr,br,input,img)
 * 6) olay izleme: izlemek isteğimiz olayı direkt etikette tanımlıyoruz
 * 7) <></>: fragment
*/

const Main = () => {
  const text = "React cover dersine hoşgeldiniz...";

  const formatPrice = (price) => price * 30 + " tl";

  const url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFl9kjInMXwPuz2CSD1WbU6aJoR_IMhy-W0g&s";

  return (
    <main>
      <h1>{text}</h1>
      <h1>text</h1>

      <h1>{formatPrice(50)}</h1>
      <h1>{formatPrice(6000)}</h1>

      <img src={url} />

      <div
        onClick={() => alert("TIKLANDI")}
        style={{
          width: "300px",
          height: "300px",
          background: "red",
        }}
      />
    </main>
  );
};

export default Main;
