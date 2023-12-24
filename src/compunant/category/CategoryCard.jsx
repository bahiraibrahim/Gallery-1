import { Card, Col } from "react-bootstrap";
import favoff from "../../assets/bx-heart.svg";
import rate from "../../assets/bxs-star.svg";
import { style } from "./CategoryStyle";

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ img, title, text }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="2" className="my-4  ">
      <Card className="my-2" style={style}>
        <div className="allCard mb-3">
          <img
            alt="zcv"
            src={img}
            className="category-card-img"
            style={{
              width: "100%",
              margin: "auto",
            }}
          />
          <Card.Body>
            <p className="category-text my-2">{text}</p>

            <div className="d-flex justify-content-end mx-2">
              <img
                src={favoff}
                alt=""
                className="icon"
                style={{
                  height: "24px",
                  width: "26px",
                  marginLeft: "-50px",
                }}
              />
            </div>
            <Card.Text>
              <div className="d-flex justify-content-between ">
                <div className="d-flex">
                  <img
                    className="rate"
                    src={rate}
                    style={{
                      height: "16px",
                      width: "16px",
                      marginTop: "20px",
                    }}
                  />
                  <div
                    className="card-rate mx-2"
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    4.5
                  </div>
                </div>
                <div className="d-flex">
                  <div className="card-price" style={{ marginTop: "20px" }}>
                    {title}
                  </div>
                  <div
                    className="card-currency mx-1"
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    جنيه
                  </div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};

export default CategoryCard;
