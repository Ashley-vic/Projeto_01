import "./styles.css"

const ProductCard = ({nome, price, button, product}) => {
  console.log(product)
  return <div className="catalogo-card">
      <div className="card card-side bg-base-100 shadow-xl">
          <figure>
              <img
              src={product?.images[0]?.image?.link}
              alt="" />
          </figure>
          <div className="card-body">
              <h2 className="card-title">{product?.name}</h2>
              <p>R${product?.price}</p>
              <div className="card-actions justify-end">
              <button className="btn btn-primary">{button}</button>
              </div>
          </div>
      </div>
  </div>
}

export default ProductCard