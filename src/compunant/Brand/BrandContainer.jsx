import { Container, Row } from "react-bootstrap"
import BrandCard from "./BrandCard"
import brand1 from "../../assets/Brand/brand1.jpg";
import brand2 from "../../assets/Brand/brand2.jpg";
import brand3 from "../../assets/Brand/brand3.jpg";
import brand4 from "../../assets/Brand/brand4.jpg";
import brand5 from "../../assets/Brand/brand5.jpg";
import brand6 from "../../assets/Brand/brand6.jpg";
import brand7 from "../../assets/Brand/brand7.jpg";
import brand8 from "../../assets/Brand/1.jpeg";
import brand9 from "../../assets/Brand/2.jpeg";
import brand10 from "../../assets/Brand/3.jpeg";
import brand11 from "../../assets/Brand/4.jpeg";
import brand12 from "../../assets/Brand/5.jpeg";
import brand13 from "../../assets/Brand/6.jpg";
import brand14 from "../../assets/Brand/7.jpg";
import brand15 from "../../assets/Brand/7.webp";
import brand16 from "../../assets/Brand/8.jpg";
import brand17 from "../../assets/Brand/9.jpg";

const BrandContainer = () => {
   
    return (
        <Container>
        <div className="admin-content-text mt-3">كل الماركات</div>
        <Row className='my-1 d-flex justify-content-between'>
        <BrandCard img={brand1}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand3}/>
        <BrandCard img={brand4}/>
        <BrandCard img={brand5}/>
        <BrandCard img={brand6}/>
        <BrandCard img={brand7}/>
        <BrandCard img={brand8}/>
        <BrandCard img={brand9}/>
        <BrandCard img={brand10}/>
        <BrandCard img={brand11}/>
        <BrandCard img={brand12}/>
        <BrandCard img={brand13}/>
        <BrandCard img={brand14}/>
        <BrandCard img={brand15}/>
        <BrandCard img={brand16}/>
        <BrandCard img={brand17}/>
        </Row>
        </Container>

    )
}

export default BrandContainer