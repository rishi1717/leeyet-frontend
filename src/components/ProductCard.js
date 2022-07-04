import React from "react"

function ProductCard(props) {
	const { product } = props
	return (
		<div>
			<div>
				<h1>{product.name}</h1>
			</div>
			<div>
				<h2>{product.price}</h2>
			</div>
			<div>
				<h2>{product.description}</h2>
			</div>
		</div>
	)
}

export default ProductCard
