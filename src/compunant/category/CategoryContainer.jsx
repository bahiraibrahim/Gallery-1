import { Container, Row } from "react-bootstrap"
import one from '../../assets/products/Rings/1.webp'
import two from '../../assets/products/Rings/2.webp'
import three from '../../assets/products/Rings/3.jpg'
import four from '../../assets/products/Rings/4.webp'
import five from '../../assets/products/Rings/5.webp'
import six from '../../assets/products/Rings/6.webp'
import seven from '../../assets/products/Rings/7.jpg'
import nine from '../../assets/products/Rings/9.jpg'
import ten from '../../assets/products/Rings/10.jpg'
import eleven from '../../assets/products/Rings/11.webp'
import twelve from '../../assets/products/Rings/12.jpg'
import thirteen from '../../assets/products/Rings/13.jpg'
import fourteen from '../../assets/products/Rings/14.webp'
import fifteen from '../../assets/products/Rings/15.webp'
import sixteen from '../../assets/products/Rings/16.webp'
import seventeen from '../../assets/products/Rings/17.webp'
import eighteen from '../../assets/products/Rings/18.webp'
import nineteen from '../../assets/products/Rings/19.webp'
import twenty from '../../assets/products/Rings/20.webp'
import twentyOne from '../../assets/products/Rings/21.webp'
import twentyTwo from '../../assets/products/Rings/22.jpg'
import twentyThree from '../../assets/products/Rings/23.jpg'
import twentyFour from '../../assets/products/Rings/24.webp'
import twentyFive from '../../assets/products/Rings/25.webp'
import twentySix from '../../assets/products/Rings/26.jpg'
import twentySeven from '../../assets/products/Rings/27.jpg'
import twentyEight from '../../assets/products/Rings/28.jpg'
import twentyNine from '../../assets/products/Rings/29.jpg'
import thirty from '../../assets/products/Rings/30.jpeg'
import thirtyOne from '../../assets/products/Rings/31.jpeg'
import thirtyTwo from '../../assets/products/Rings/32.jpeg'
import thirtyThree from '../../assets/products/Rings/33.jpeg'
import thirtyFour from '../../assets/products/Rings/34.jpeg'
import CategoryCard from "./CategoryCard"

const CategoryContainer = () => {
  return (
    <Container>
    <div className="admin-content-text mt-3">كل التصنيفات</div>
    <Row className="my-2 d-flex justify-between">
    <CategoryCard img={one} text='Lorem ipsum, dolor sit amet consectetur' title={'100'}/>
    <CategoryCard img={two} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={three} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={four} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={five} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={six} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={seven} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={nine} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={ten} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={eleven} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={twelve} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={thirteen} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={fourteen} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={fifteen} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={sixteen} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={seventeen} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={eighteen} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={nineteen} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={twenty} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={twentyOne} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={twentyTwo} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={twentyThree} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={twentyFour} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={twentyFive} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={twentySix} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={twentySeven} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={twentyEight} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={twentyNine} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={thirty} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={thirtyOne} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={thirtyTwo} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    <CategoryCard img={thirtyThree} text='Lorem ipsum, dolor sit amet consectetur'title={'150'}/>
    <CategoryCard img={thirtyFour} text='Lorem ipsum, dolor sit amet consectetur'title={'100'}/>
    </Row>
    </Container>
  )
}

export default CategoryContainer