import ProductCard from '../../ProductCard';
import './styles.css';

const products = [{},{}, {},{},{}]

const Carrinho = () => {
  return <div className="cart-container">
    <h1>Carrinho</h1>
      <div className='cart-products'>
        {products.map((product) => (
          <ProductCard nome="Blusa" price="R$ 20,00" button="Remover do Carrinho" product={product}/>
        ))}
      </div>
      <div className='confirm'>
        <div className='subtotal'>
          <span>Subtotal:</span>
        </div>
        <div className='cart-btn'>
          <button className="btn">Realizar pedido</button>
        </div>
      </div>
  </div>
}

export default Carrinho;