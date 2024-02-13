import { Col, Container, Row } from "react-bootstrap";
import DoToUp from "./D-to-Up.json";
import CategoryCard from "../../../../compunant/category/CategoryCard";

const CategoryDUpEarring = () => {
  return (
    <Container>
      <Row md={2} xs={1} lg={4} className="g-3 me-3">
        {DoToUp.map((item) => (
          <Col key={item.id}>
            <CategoryCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryDUpEarring;