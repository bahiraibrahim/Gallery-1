import { Col, Container, Row } from "react-bootstrap"

const CategoryHeader = () => {
  return (
    <div className="cat-header">
    <Container>
      <Row >
        <Col className="d-flex justify-content-start gap-5 py-2 flex-wrap">
          <div className="cat-text-header ">الكل</div>
          <div className="cat-text-header">خطوبة</div>
          <div className="cat-text-header">اكسسوار</div>
          <div className="cat-text-header"> السعر من الاقل للاعلى</div>
          <div className="cat-text-header"> السعر من الاعلى للاقل</div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default CategoryHeader