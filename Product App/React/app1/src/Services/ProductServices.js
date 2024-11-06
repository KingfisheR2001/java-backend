import axios from "axios"
 
export async function fetchAllProducts(){
    const products = await axios.get("http://localhost:9090/products")
    .then((res)=>res.data)
    .then((dat)=>dat)
    .catch(error => console.log(error));
 
    return products;
};
 
export async function addProduct(product){
    console.log(product);
    const productId = await axios.post("http://localhost:9090/products",product)
    .then((res)=>res.data)
    .then((dat)=>dat)
    .catch(error => console.log(error));
 
    return productId;
};