import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import HomeCard from "../../Components/HomeCard";
import Navigation from "../../Components/Navigation";
import homePageData from "../../data/suppliers.json";
import "./Home.styles.css";

const Home = () => {
  const [supplier, setSupplier] = useState(null);

  useEffect(() => {
    setSupplier(homePageData);
  }, []);

  console.log("supplier", supplier);

  return (
    <Navigation>
      <div className="home-single-card-wrapper">
        <Row gutter={20}>
          <Col lg={18}>
            <Row>
              {supplier?.map((item, index) => (
                <Col className="gutter-row" lg={8}>
                  <HomeCard key={index} item={item} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              magnam quas ipsam asperiores, beatae voluptate pariatur tempora
              quod praesentium distinctio tenetur, eaque quos quia molestiae ad
              eum. Rerum, doloremque impedit.
            </p>
          </Col>
        </Row>
      </div>
    </Navigation>
  );
};

export default Home;
