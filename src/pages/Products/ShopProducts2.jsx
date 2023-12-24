import { Col, Container, Row } from "react-bootstrap"
import SearchCountResult from "../../compunant/Utility/SearchCountResult"
import CategoryHeader from "../../compunant/category/CategoryHeader"
import SideFilter from "../../compunant/Utility/SideFilter"
import Pagination from "../../compunant/Utility/Pagination"
import CategoryContainer from "../../compunant/category/CategoryContainer"

const ShopProducts = () => {
  return (
    <div style={{minHeight:'670px'}}>
    <CategoryHeader/>
    <Container>
    <SearchCountResult title='400 نتيجة بحث ...'/>
    <Row className="d-flex flex-row">
    <Col sm='2' xs='2' md='1' className="d-flex">
    <SideFilter/>
    </Col>
    <Col sm='10' xs='10' md='11'>
    <CategoryContainer title='' btntitle=""/>
    </Col>
    </Row>
    <Pagination/>
    </Container>
    </div>
  )
}

export default ShopProducts