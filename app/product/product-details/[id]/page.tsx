import React from 'react'

const Product = async ({ params }: { params : { id: string } }) => {
  const id = (await params).id
  return (
    <div>
      Product Details {id}
    </div>
  )
}

export default Product
