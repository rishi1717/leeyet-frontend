import React from "react"

function ProductDetails(props) {
	const { productDet, setProductDet } = props
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
				<input
					type="text"
					name="name"
					value={productDet.name}
					onChange={(e) => {
						setProductDet({ ...productDet, name: e.target.value })
					}}
				/>
			</label>
			<label
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "0.5rem",
				}}
			>
				MRP :
				<input
					type="text"
					name="mrp"
					value={productDet.mrp}
					onChange={(e) => {
						setProductDet({ ...productDet, mrp: e.target.value })
					}}
				/>
			</label>
			<label
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "0.5rem",
				}}
			>
				Discount :
				<input
					type="text"
					name="discount"
					value={productDet.discount}
					onChange={(e) => {
						setProductDet({ ...productDet, discount: e.target.value })
					}}
				/>
			</label>
			<label
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "0.5rem",
				}}
			>
				Shipping Charge :
				<input
					type="text"
					name="shippingCharge"
					value={productDet.shippingCharge}
					onChange={(e) => {
						setProductDet({ ...productDet, shippingCharge: e.target.value })
					}}
				/>
			</label>
		</div>
	)
}

export default ProductDetails
