import React from "react"
import axios from "axios"

function ProductCard(props) {
	const { product } = props
	const handleDelete = async () => {
		try {
			const res = await axios.delete(
				`http://localhost:4000/api/product/${product._id}`
			)
			console.log(res.data)
		} catch (err) {
			console.log(err.message)
		}
	}
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row	",
				justifyContent: "space-evenly",
				margin: "10px",
				padding: "10px",
				border: "1px solid black",
				borderRadius: "5px",
				width: "500px",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					margin: "auto",
				}}
			>
				<img src={product.image} alt="image" />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					maxWidth: "400px",
					margin: "auto",
				}}
			>
				<p>{product.name}</p>
				<p>{product.specification}</p>
				<p>{product.mrp}</p>
				<p>{product.shippingCharge}</p>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
				}}
			>
				<button>edit</button>
				<button onClick={handleDelete}>delete</button>
			</div>
		</div>
	)
}

export default ProductCard
