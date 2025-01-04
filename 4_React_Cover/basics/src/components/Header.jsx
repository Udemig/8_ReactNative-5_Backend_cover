/*
  ! React Bileşenleri (Component)
  * Kullanıcı arayüzü oluşturmak için kullanılan
  * temel yapı parçalarıdır. (ör:Yapboz Parçası)
  
  * Bileşen:
  * 1) Bir tane fonksiyon oluştururuz 
   
  * 2) Fonksyonun ismine bileşenin ismini veriyoruz.
   
  * !! Bileşenin ismini ilk harfi mutlaka büyük olmalı
  * !! Birden fazla kelimeden oluşuyorsa bitişik yazılmalı ve her kelimenin ilk harfi büyük olmalı
   
  * 3) Bileşen return satırında kullancının görüceği arayüz kodunu döndürmek zorundadır. (JSX - Javascript XML)
  * Döndürdüğümüz JSX kodu her zaman tek bir kapsayıcya sahip olmalıdır 
   
  * 4) Bileşeni farklı dosyalarda kulllanbilmek için export etmeliyiz
*/

function Header() {
  return (
    <>
      <header>
        <h1>REACT</h1>

        <nav>
          <p>selinatmaca</p>
          <button className="btn">Çıkış yap</button>
        </nav>
      </header>
    </>
  );
}
export default Header;
