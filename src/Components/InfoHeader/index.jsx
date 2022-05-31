import { Col, Row } from "antd";
import InfoHeaderCard from "../InfoHeaderCard";
import "./InfoHeader.styles.css";

const InfoHeader = () => {
  return (
    <div className="info-header-wrapper">
      <Row gutter={10}>
        <Col lg={6}>
          <InfoHeaderCard title="Available Project" subtitle="34" number="20" />
        </Col>
        <Col lg={6}>
          <InfoHeaderCard title="Running Project" subtitle="34" number="50" />
        </Col>
        <Col lg={6}>
          <InfoHeaderCard
            title="Non Profit Project"
            subtitle="34"
            number="80"
          />
        </Col>
        <Col lg={6}>
          <InfoHeaderCard title="Profit Projrct" subtitle="34" number="45" />
        </Col>
      </Row>
    </div>
  );
};

export default InfoHeader;
