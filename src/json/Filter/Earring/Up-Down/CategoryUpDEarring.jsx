import { Col, Container, Row } from "react-bootstrap";
import UpToDo from "./UpToDo.json";
import CategoryCard from "../../../../compunant/category/CategoryCard";

const CategoryUpDEarring = () => {
  return (
    <Container>
      <Row md={2} xs={1} lg={4} className="g-3 me-3">
        {UpToDo.map((item) => (
          <Col key={item.id}>
            <CategoryCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryUpDEarring;