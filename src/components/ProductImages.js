import React from "react"

function ProductImages() {
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
				<input type="file" name="images" />
			</label>
			<div>
				{[1,2,3,4].map((url) => (
					<img key={url} src={url} alt="..." />
				))}
			</div>
		</div>
	)
}

export default ProductImages
