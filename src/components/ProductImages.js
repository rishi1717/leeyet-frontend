import React from "react"

function ProductImages(props) {
	const { image, setImage } = props
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				margin: "10px",
				width: "400px",
				border: "1px solid black",
				borderRadius: "5px",
				padding: "10px",
			}}
		>
			<label>
				Add images :
				<input
					type="file"
					name="images"
					onChange={(e) => {
						setImage(e.target.files[0])
					}}
				/>
			</label>
			<div>
				<img src={image} alt="..." />
			</div>
		</div>
	)
}

export default ProductImages
