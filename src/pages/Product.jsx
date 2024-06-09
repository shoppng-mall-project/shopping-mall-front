import React, { useEffect, useState } from 'react';
import Editor from '../components/productDetail/ProducDetail';
import { getDummyData } from '../components/productDetail/dummyData';
import './Product.css'

const Product = function (){
    const [productDetailData, setProductDetailData] = useState();
    
    useEffect( () => {
        setProductDetailData(getDummyData());
    }, [])

    return(
        <div>
            <h1>Product Page</h1>
            <Editor
                data = {productDetailData}
            />
        </div>
    );
}

export default Product;