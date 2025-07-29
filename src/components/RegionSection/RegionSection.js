import "./RegionSection.css"

const RegionSection = () => {
  const regions = [
    { name: "Arabic Emirates", flag: "🇦🇪", domain: "shopname.ae" },
    { name: "Australia", flag: "🇦🇺", domain: "shopname.au" },
    { name: "United States", flag: "🇺🇸", domain: "shopname.com" },
    { name: "Russia", flag: "🇷🇺", domain: "shopname.ru" },
    { name: "Italy", flag: "🇮🇹", domain: "shopname.it" },
    { name: "Denmark", flag: "🇩🇰", domain: "denmark.com.dk" },
    { name: "France", flag: "🇫🇷", domain: "shopname.com.fr" },
    { name: "Arabic Emirates", flag: "🇦🇪", domain: "shopname.ae" },
    { name: "China", flag: "🇨🇳", domain: "shopname.ae" },
    { name: "Great Britain", flag: "🇬🇧", domain: "shopname.co.uk" },
  ]

  return (
    <section className="region-section">
      <div className="container">
        <h2>Suppliers by region</h2>
        <div className="regions-grid">
          {regions.map((region, index) => (
            <div key={index} className="region-item">
              <span className="region-flag">{region.flag}</span>
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
