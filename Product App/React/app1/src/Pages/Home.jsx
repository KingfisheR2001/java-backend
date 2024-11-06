import React, { Component , useState , useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsTable from '../Components/ProductsTable';
import ProductModal from '../Components/ProductModal';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchAllProducts } from '../Services/ProductServices';

// const products = [
//     { id: 1, pname: 'Apple', pdesc: 'Sweet and red', price: 120, quantity: 100 },
//     { id: 2, pname: 'Orange', pdesc: 'Orange', price: 100, quantity: 50 },
//     { id: 3, pname: 'Kiwi', pdesc: 'Green', price: 150, quantity: 80 },
// ]

export default function Home() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleSelectedProduct = (product) => { setSelectedProduct(product); setShow(true) }


    useEffect(() => {
        // Fetch products from the product service
        fetchAllProducts()
          
          .then((data) => {
            setProducts(data);
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
          });
      }, []);


    return (
        <>
            <Button variant = "success" onClick={() => navigate('addProduct')}>ADD PRODUCT</Button>
            <ProductsTable products={products} onProductClick={handleSelectedProduct} />
            <ProductModal selectedProduct={selectedProduct} show={show} handleClose={handleClose} />
            
        </>
    )
}