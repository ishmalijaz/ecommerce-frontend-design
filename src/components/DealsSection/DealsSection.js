import "./DealsSection.css"
import homeWatch from "../../images/homeWatch.png";
import homeCamera from "../../images/homecamera.png";
import homeLaptop from "../../images/homelaptop.png";
import homeheadphone from "../../images/homeheadphone.png";
import homecanon from "../../images/homecanon.png";


const DealsSection = () => {
  const dealsProducts = [
    { id: 1, name: "Smart watches", discount: "-25%", image: homeWatch },
    { id: 2, name: "Laptops", discount: "-15%", image: homeLaptop },
    { id: 3, name: "GoPro cameras", discount: "-40%", image: homeCamera },
    { id: 4, name: "Headphones", discount: "-25%", image: homeheadphone },
    { id: 5, name: "Canon cameras", discount: "-25%", image: homecanon },
  ];

  return (
    <section className="deals-section">
      <div className="deals-header">
        <div className="deals-title">
          <h2>Deals and offers</h2>
          <p className="deals-subtitle">Hygiene equipments</p>
        </div>
        <div className="countdown">
          <div className="time-unit"><span className="time-number">04</span><span className="time-label">Days</span></div>
          <div className="time-unit"><span className="time-number">13</span><span className="time-label">Hour</span></div>
          <div className="time-unit"><span className="time-number">34</span><span className="time-label">Min</span></div>
          <div className="time-unit"><span className="time-number">56</span><span className="time-label">Sec</span></div>
        </div>
      </div>
      <div className="deals-grid">
        {dealsProducts.map((product) => (
          <div key={product.id} className="deal-card">
            <div className="deal-image">
              <img src={product.image} alt={product.name} />
            </div>
            <h3 className="deal-name">{product.name}</h3>
            <div className="discount-badge">{product.discount}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsSection;