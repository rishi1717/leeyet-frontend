import React from 'react'

function ProductSpecifications() {
  return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				margin: "10px",
				width: "400px",
				border: "1px solid black",
				borderRadius: "5px",
				padding: "10px",
			}}
		>
			<label>Enter Specifications : </label>
			<textarea rows={8} cols={22} />
		</div>
  )
}

export default ProductSpecifications