import { Link } from "react-router-dom"
import "./CategorySide.css"

const CategorySidebar = () => {
  const categories = [
    { name: "Automobiles", color: "#ff6b6b" },
    { name: "Clothes and wear", color: "#4ecdc4" },
    { name: "Home interiors", color: "#45b7d1" },
    { name: "Computer and tech", color: "#f9ca24" },
    { name: "Tools, equipments", color: "#6c5ce7" },
    { name: "Sports and outdoor", color: "#a29bfe" },
    { name: "Animal and pets", color: "#fd79a8" },
    { name: "Machinery tools", color: "#00b894" },
    { name: "More category", color: "#636e72" },
  ]

  return (
    <div className="category-sidebar">
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <Link to={`/products/${category.name.toLowerCase().replace(/\s+/g, "-")}`} className="category-link">
              <span className="category-indicator" style={{ backgroundColor: category.color }}></span>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategorySidebar
