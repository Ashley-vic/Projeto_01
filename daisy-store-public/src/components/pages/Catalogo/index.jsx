import { useEffect } from 'react';
import { GET_PRODUCTS } from '../../../api';
import Pagination from '../../Pagination';
import ProductCard from '../../ProductCard/index';
import './styles.css';
import useFetch from '../../../hooks/useFetch';

const Catalogo = () => {
  const { data, error, loading, request } = useFetch();
  const { url, options } = GET_PRODUCTS();

  useEffect(() => {
    const fetchProducts = async () => {
      await request(url, options);
    };
    fetchProducts();
  }, [])

  const products = data || [];
  console.log(products)

  return <div className='catalogo'>
    Catalogo
      <div className='catalog-container'>
        <div className='catalog-card'>
          {products.map((product, index)=>(
            <ProductCard key={index} nome="Calça" price="R$ 190,00" button="Adicionar Produto" product={product}/>
          ))}
        </div>
        <div className='pagination'>
          <Pagination/>
        </div>
      </div>
  </div>
}

export default Catalogo;