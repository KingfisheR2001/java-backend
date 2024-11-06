import { useState } from "react";
import { addProduct } from "../Services/ProductServices";
 
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.00);
  const [quantity, setQuantity] = useState(0);
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "price":
        setPrice(parseFloat(value)); // Ensure price is a number
        break;
      case "quantity":
        setQuantity(parseInt(value)); // Ensure quantity is an integer
        break;
      default:
        break;
    }
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");
 
    const formData = { name, price, quantity };
    console.log(formData);
    const { data } = await addProduct(formData);
    console.log(data);
    // history.pushState(formData, "/home");
  };
 
  return (
<>
<h1 style={{ marginLeft: "10px" }}>Add Product</h1>
<div className="container" style={{ padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
<form onSubmit={handleSubmit}>
<label htmlFor="productName" className="form-label">Product Name</label>
<input type="text" name="name" id="productName" className="form-control" onChange={handleChange} value={name} />
 
          <label htmlFor="productPrice" className="form-label">Product Price</label>
<input type="number" name="price" id="productPrice" className="form-control" min="0" step="0.5" pattern="^\d+(?:\.\d{1,2})?$" onChange={handleChange} value={price} />
 
          <label htmlFor="productQuantity" className="form-label">Product Quantity</label>
<input type="number" name="quantity" id="productQuantity" className="form-control" min="0" step="1" pattern="^\d*" onChange={handleChange} value={quantity} />
 
          <input type="submit" className="btn btn-success" style={{ marginTop: "10px" }} value="Submit" />
</form>
</div>
</>
  );
};
 
export default AddProduct;