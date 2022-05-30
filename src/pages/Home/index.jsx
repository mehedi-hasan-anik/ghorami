import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import Advertisment from "../../Components/Advertisment";
import HomeCard from "../../Components/HomeCard";
import Navigation from "../../Components/Navigation";
import SearchBar from "../../Components/SearchBar";
import homePageData from "../../data/suppliers.json";
import photo from "../../image/8TxrGkbGc.gif";
import "./Home.styles.css";

const Home = () => {
  const [supplier, setSupplier] = useState(null);

  useEffect(() => {
    setSupplier(homePageData);
  }, []);

  return (
    <Navigation>
      <div className="home-single-card-wrapper">
        <Row gutter={20}>
          <Col lg={20}>
            <SearchBar />
            <Row>
              {supplier?.map((item, index) => (
                <Col className="gutter-row" lg={8}>
                  <HomeCard key={index} item={item} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={4}>
            <h3>Exclusive</h3>
            <Advertisment
              img={photo}
              title="EasySell"
              subTitle="Professional features for your business to grow. Crowdfunding is most
        oen used by startup companies or growing businesses as a way of
        accessing alternative funds."
            />
            <br />
            <Advertisment
              img={photo}
              title="EasySell"
              subTitle="Professional features for your business to grow. Crowdfunding is most
        oen used by startup companies or growing businesses as a way of
        accessing alternative funds."
            />
          </Col>
        </Row>
      </div>
    </Navigation>
  );
};

export default Home;
