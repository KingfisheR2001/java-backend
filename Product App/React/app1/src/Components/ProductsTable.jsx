import React, { Component } from 'react'
import './ProductsTable.styles.css'
import Button from 'react-bootstrap/Button'

// const products = [
//     { id: 1, pname: 'Apple', pdesc: 'Sweet and red', price: 120, quantity: 100 },
//     { id: 2, pname: 'Orange', pdesc: 'Orange', price: 100, quantity: 50 },
//     { id: 3, pname: 'Kiwi', pdesc: 'Green', price: 150, quantity: 80 },
// ]

//let products = null;

function handleButtonOnClick(params) {
    alert(params);
}

export default function ProductsTable({products, onProductClick}) {

    return products && products.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product,index) => (
              <tr key={product.id}>
                <th scope="row">{index+1}</th>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td><Button variant = 'Primary' onClick = {() => onProductClick(product)}>Click</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <h3> No data found</h3>
        </>
      );

}