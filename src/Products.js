import React, { useEffect, useState } from "react"
import ProductDetails from "./components/ProductDetails"
import ProductImages from "./components/ProductImages"
import ProductSpecifications from "./components/ProductSpecifications"
import axios from "axios"
import ProductCard from "./components/ProductCard"

function Products() {
	const [image, setImage] = useState()
	const [products, setProducts] = useState([])
	const [productDet, setProductDet] = useState({
		name: "",
		mrp: 0,
		discount: 0,
		shippingCharge: 0,
		specification: "",
	})
	const handleClick = async () => {
		try {
			const newForm = new FormData()
			newForm.append("name", productDet.name)
			newForm.append("mrp", productDet.mrp)
			newForm.append("discount", productDet.discount)
			newForm.append("shippingCharge", productDet.shippingCharge)
			newForm.append("specification", productDet.specification)
			newForm.append("images", image)
			const res = await axios.post(
				"http://localhost:4000/api/product",
				newForm
			)
			console.log(res.data)
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		;(async () => {
			const { data } = await axios.get("http://localhost:4000/api/product")
			setProducts(data)
		})()
	}, [])
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<div>
				<div>
					<h1>Add Product</h1>
				</div>
				<ProductDetails
					productDet={productDet}
					setProductDet={setProductDet}
				/>
				<ProductSpecifications
					productDet={productDet}
					setProductDet={setProductDet}
				/>
				<ProductImages image={image} setImage={setImage} />
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
						style={{
							margin: "5px",
						}}
						onClick={handleClick}
					>
						Add Product
					</button>
				</div>
			</div>
			<div>
				<div>
					<h1>Products</h1>
				</div>
				<div>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Products
