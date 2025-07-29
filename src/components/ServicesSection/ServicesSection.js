import "./ServicesSection.css"

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Source from Industry hubs",
      image: "/placeholder.svg?height=120&width=180",
      icon: "🔍",
    },
    {
      id: 2,
      title: "Customize Your Products",
      image: "/placeholder.svg?height=120&width=180",
      icon: "📋",
    },
    {
      id: 3,
      title: "Fast, reliable shipping by ocean or air",
      image: "/placeholder.svg?height=120&width=180",
      icon: "✈️",
    },
    {
      id: 4,
      title: "Product monitoring and inspection",
      image: "/placeholder.svg?height=120&width=180",
      icon: "⚡",
    },
  ]

  return (
    <section className="services-section">
      <div className="container">
        <h2>Our extra services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image || "/placeholder.svg"} alt={service.title} />
                <div className="service-icon">{service.icon}</div>
              </div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
