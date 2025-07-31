import "./RegionSection.css"
import ae from "../../images/ae.png"
import america from "../../images/america.png"
import aus from "../../images/aus.png"
import Britain from "../../images/britian.png"
import china from "../../images/china.png"
import denmark from "../../images/denmark.png"
import france from "../../images/france.png"
import italy from "../../images/italy.png"
import germany from "../../images/germany.png"
import russia from "../../images/russia.png"



const RegionSection = () => {
  const regions = [
  { name: "Arabic Emirates", image: ae, domain: "shopname.ae" },
  { name: "Australia", image: aus, domain: "shopname.au" },
  { name: "United States", image: america, domain: "shopname.com" },
  { name: "Russia", image: russia, domain: "shopname.ru" }, 
  { name: "Italy", image: italy, domain: "shopname.it" },
  { name: "Denmark", image: france, domain: "denmark.com.dk" },
  { name: "France", image: denmark, domain: "shopname.com.fr" },
  { name: "China", image: china, domain: "shopname.ae" },
  { name: "Great Britain", image: Britain, domain: "shopname.co.uk" },
];


  return (
    <section className="region-section">
      <div className="container">
        <h2>Suppliers by region</h2>
        <div className="regions-grid">
          {regions.map((region, index) => (
            <div key={index} className="region-item">
              <img src={region.image} alt={region.name} className="region-flag" />
              <div className="region-info">
                <span className="region-name">{region.name}</span>
                <span className="region-domain">{region.domain}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RegionSection
