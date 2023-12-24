import { Container, Row } from 'react-bootstrap'
import BrandCard from './BrandCard'
import brand1 from "../../assets/Brand/brand1.jpg";
import brand2 from "../../assets/Brand/brand2.jpg";
import brand3 from "../../assets/Brand/brand3.jpg";
import brand4 from "../../assets/Brand/brand4.jpg";
import brand5 from "../../assets/Brand/brand5.jpg";
import brand6 from "../../assets/Brand/brand6.jpg";
import SubTitle from '../Utility/SubTitle';

// eslint-disable-next-line react/prop-types
const BrandFeatured = ({ title, btntitle }) => {
    return (
        <Container>
            <SubTitle title={title} btntitle={btntitle} pathText='/allbrand'/>
            <Row className='my-1 d-flex justify-content-between'>
            <BrandCard img={brand1}/>
            <BrandCard img={brand2}/>
            <BrandCard img={brand3}/>
            <BrandCard img={brand4}/>
            <BrandCard img={brand5}/>
            <BrandCard img={brand6}/>
            </Row>
        </Container>
    )
}

export default BrandFeatured