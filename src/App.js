import './App.css';
 
function App() {
  return (
    <div className="App">
        <h1>Product showcase</h1>
        <p> welcome to our amazing store!.</p>

        <div className="product-card" >
          <img src="/images/laptop.jpg" alt="Boots" />
           <h3>Built for Strength & Style</h3>
             <p>This boots product showcases a modern design focused on comfort, strength, and long-lasting performance. The product emphasizes quality materials, ergonomic fit, and reliable grip, making it ideal for daily wear and rugged conditions.</p>
             <span className="price">$5000</span>
                <button>Add to Cart</button>
       </div>
        <div className="product-card" >
          <img src="/images/laptop1.jpg" alt="Boots" />
            <h3>Built for Strength & Style</h3>
            <p>This boots product combines modern design with durable construction, offering enhanced comfort, strong grip, and long-term reliability for various outdoor and casual activities.</p>
            <span className="price">$4500</span>
                <button>Add to Cart</button>
          </div>
          <div className="product-card" >
          <img src="/images/laptop2.jpg" alt="Boots" />
            <h3>Built for Strength & Style</h3>
            <p>Experience premium comfort and durability with this boots product. Crafted with strong materials and a supportive sole, it delivers excellent grip, flexibility, and all-day comfort for any environment</p>
            <span className="price">$4800</span>
                <button>Add to Cart</button>
          </div>
     </div>
  );
}
 
 export default App;