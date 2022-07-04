import React from "react"

function ProductDetails() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				maxWidth: "400px",
				margin: "10px",
				border: "1px solid black",
				borderRadius: "5px",
				padding: "10px",
			}}
		>
			<label
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "0.5rem",
				}}
			>
				Name :
				<input type="text" name="name" />
			</label>
			<label
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "0.5rem",
				}}
			>
				MRP :
				<input type="text" name="mrp" />
			</label>
			<label
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "0.5rem",
				}}
			>
				Discount :
				<input type="text" name="discount" />
			</label>
			<label
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "0.5rem",
				}}
			>
				Shipping Charge :
				<input type="text" name="shippingCharge" />
			</label>
		</div>
	)
}

export default ProductDetails
