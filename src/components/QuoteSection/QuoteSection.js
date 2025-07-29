import "./QuoteSection.css"

const QuoteSection = () => {
  return (
    <section className="quote-section">
      <div className="quote-content">
        <div className="quote-left">
          <h2>An easy way to send requests to all suppliers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className="quote-form">
          <h3>Send quote to suppliers</h3>
          <form className="supplier-form">
            <input type="text" placeholder="What item you need?" className="form-input" />
            <textarea placeholder="Type more details" className="form-textarea" rows="3"></textarea>
            <div className="form-row">
              <input type="number" placeholder="Quantity" className="form-input quantity-input" />
              <select className="form-select">
                <option>Pcs</option>
                <option>Kg</option>
                <option>Tons</option>
              </select>
            </div>
            <button type="submit" className="send-inquiry-btn">
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default QuoteSection
