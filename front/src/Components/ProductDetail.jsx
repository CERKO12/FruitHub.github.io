import {useParams, Link} from "react-router-dom"
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"
import { useState,useEffect } from "react"

export default function ProductDetail() {

    let params = useParams()
    let [productDetail,setProductDetail] = useState(null)

    useEffect(()=>{

        fetch('https://')
            .then(response => response.json())
            .then(data => {
                let productInfo = data.find((element)=>{
                    return element.id === parseInt(params.id)
                })
                setProductDetail(productInfo)
            })
    },[params.id]) 

    return (
        <div>
            {
                productDetail &&
                <div className="ProductDetail">
                    <Title mainTitle={productDetail.name+'Product Detail'} />

                    <table width="100%">
                        <tbody>
                        <tr>
                            <td align="right">
                                <img src={process.env.PUBLIC_URL+'/img/'+productDetail.image} alt={productDetail.name} width="400" />
                            </td>
                            <td width="45%" style={{padding: '10px'}}>
                                <p>Name : {productDetail.name}</p>
                                <p>Price : ${productDetail.price}</p>
                                <p>Description : {productDetail.description}</p><br/>
                                <QuantityBtn productInfo={productDetail} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            }
        
            <Link to="/" >
                <div className="backToGoodsListBtn">↩️ Go Back</div>
            </Link>
        </div>
    )
}