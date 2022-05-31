import { Col, Row } from "antd";
import Advertisment from "../../Components/Advertisment";
import InfoHeader from "../../Components/InfoHeader";
import InfoSideBar from "../../Components/InfoSideBar";
import Navigation from "../../Components/Navigation/index";
import SearchBar from "../../Components/SearchBar";
import information from "../../data/information.json";

const Information = () => {
  return (
    <Navigation>
      <Row gutter={20}>
        <Col lg={20} style={{ padding: "20px" }}>
          <SearchBar />
          <InfoHeader />
          <Row gutter={60} style={{ padding: "20px" }}>
            {information?.map((item, index) => (
              <Col className="gutter-row" lg={8}>
                <Advertisment
                  img={item?.img}
                  title={item?.title}
                  subTitle={item?.description}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={4}>
          <InfoSideBar />
        </Col>
      </Row>
    </Navigation>
  );
};

export default Information;
