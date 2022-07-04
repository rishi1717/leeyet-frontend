import React, { useEffect, useState } from "react"
import ProductDetails from "./components/ProductDetails"
import ProductImages from "./components/ProductImages"
import ProductSpecifications from "./components/ProductSpecifications"
import axios from "axios"
import ProductCard from "./components/ProductCard"

function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await axios.get("http://localhost:4000/api/product")
            setProducts(data)
        })();
    },[])
	return (
		<div style={{
            display: "flex",
            justifyContent: "space-between",
        }}>
			<div>
				<div>
					<h1>Add Product</h1>
				</div>
				<form>
					<ProductDetails />
					<ProductSpecifications />
					<ProductImages />
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							margin: "10px",
							width: "400px",
							borderRadius: "5px",
							padding: "10px",
						}}
					>
						<button
							type="reset"
							style={{
								margin: "5px",
							}}
						>
							Clear
						</button>
						<button
							type="submit"
							style={{
								margin: "5px",
							}}
						>
							Add Product
						</button>
					</div>
				</form>
			</div>
			<div>
				<div>
					<h1>Products</h1>
				</div>
                <div>
                    {products.map((product) => <ProductCard key = {product._id}/>)}
                </div>
			</div>
		</div>
	)
}

export default Products
