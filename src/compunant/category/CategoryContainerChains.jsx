import { Col, Container, Row } from "react-bootstrap";
import Chains from "../../json/Chains.json";
import CategoryCard from "./CategoryCard";

const CategoryContainer1 = () => {
  console.log(Chains);
  return (
    <Container>
      <div className="admin-content-text mt-3">كل التصنيفات</div>
      <Row md={2} xs={1} lg={4} className="g-3 me-3">
        {Chains.map((item) => (
          <Col key={item.id}>
            <CategoryCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryContainer1;