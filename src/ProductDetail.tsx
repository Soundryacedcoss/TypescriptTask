import React from 'react'
type ProductDetailProps = {
    // Defing type of props
    detail: {
        id: number
        rating: number
        price: number,
        title: string,
        images: string[]
    }[]
}
export const ProductDetail = (props: ProductDetailProps) => {
    return (
        <div>
            <h4>Product Details</h4>
            <hr />
            {props.detail.map((val) =>
                <div key={Math.random()}>
                    <div style={{ marginBottom: "4%" }}><b>Id:{val.id}</b> <br /> <b style={{ fontSize: '2.3vw' }}>{val.title}</b> <h4 style={{ fontSize: '1.8vw' }}>Price:{val.price}</h4> <b>Rating{":->"}{val.rating}</b> </div>
                    <div>{val.images.map((item) => <img key={Math.random()} src={item} className='ImgTag' alt="" />)}
                    </div> <hr /></div>)}


        </div>
    )
}
