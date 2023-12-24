import { Container, Row } from "react-bootstrap"
import SubTitle from "../../compunant/Utility/SubTitle"
import CategoryCard from "../../compunant/category/CategoryCard"
import one from '../../assets/products/Rings/1.webp'
import two from '../../assets/products/Rings/2.webp'
import three from '../../assets/products/Rings/3.jpg'
import four from '../../assets/products/Rings/4.webp'
import five from '../../assets/products/Rings/5.webp'
import six from '../../assets/products/Rings/6.webp'

const HomeCategory = () => {
  return (
    <Container>
    <SubTitle title="الخواتم" btntitle="المزيد" pathText="/allcategory"/>
    <Row className="my-2 d-flex justify-between">
    <CategoryCard img={one} text='Lorem ipsum, dolor sit amet consectetur'/>
    <CategoryCard img={two} text='Lorem ipsum, dolor sit amet consectetur'/>
    <CategoryCard img={three} text='Lorem ipsum, dolor sit amet consectetur'/>
    <CategoryCard img={four} text='Lorem ipsum, dolor sit amet consectetur'/>
    <CategoryCard img={five} text='Lorem ipsum, dolor sit amet consectetur'/>
    <CategoryCard img={six} text='Lorem ipsum, dolor sit amet consectetur'/>
    </Row>
    </Container>
  )
}

export default HomeCategory