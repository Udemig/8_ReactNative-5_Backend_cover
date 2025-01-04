/*
 ! Prop:
 * Bir üst bileşenden alt bileşen veri aktarmaya yarıyor.
 * Prop özelliği sayesinde yazdığımızın bileşnelerin yeniden kullanlabili olamsını sağlıyoruz
 * Gönderilen prop verisi bileşnin parametre kısmında alınır.

*/

const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <img src={props.item.image} />

      <div className="body">
        <h4>{props.item.title}</h4>
        <h3>{props.item.category}</h3>
      </div>
    </div>
  );
};

export default Card;
