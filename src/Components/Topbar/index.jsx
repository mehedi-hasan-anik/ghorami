import { Col, Row } from "antd";
import logo from "../../image/8TxrGkbGc.gif";
import "./Topbar.styles.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <img src={logo} alt="logo" className="logo" />
        </Col>
        <Col className="gutter-row" span={8}>
          <div>col-6</div>
        </Col>
      </Row>
    </div>
  );
};

export default Topbar;
