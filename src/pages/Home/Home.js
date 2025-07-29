import HeroSection from "../../components/HeroSection/HeroSection"
import CategorySidebar from "../../components/CategorySide/CategorySide"
import DealsSection from "../../components/DealsSection/DealsSection"
import ProductGrid from "../../components/ProductGrid/ProductGrid"
import QuoteSection from "../../components/QuoteSection/QuoteSection"
import RecommendedItems from "../../components/RecommendedItems/RecommendedItems"
import ServicesSection from "../../components/ServicesSection/ServicesSection"
import RegionSection from "../../components/RegionSection/RegionSection"
import Newsletter from "../../components/Newsletter/Newsletter"
import "./Home.css"

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="home-layout">
          <aside className="sidebar">
            <CategorySidebar />
          </aside>
          <main className="main-content-area">
            <HeroSection />
            <DealsSection />
            <ProductGrid />
            <QuoteSection />
          </main>
        </div>
        {/* Full width sections */}
        <RecommendedItems />
        <ServicesSection />
        <RegionSection />
        <Newsletter />
      </div>
    </div>
  )
}

export default Home
