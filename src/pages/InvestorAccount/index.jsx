import { Col, Row } from "antd";
import InvestorCard from "../../Components/InvestorCard";
import Navigation from "../../Components/Navigation";
import photo from "../../image/8TxrGkbGc.gif";
import "./InvestorAccount.styles.css";

const InvestorAccount = () => {
  return (
    <div>
      <Navigation>
        <div className="investorAccount-page">
          <h3 className="investor-account-page-title">Accounts Details</h3>
          <div className="investment-card flex content_between item_center">
            <img src={photo} alt="img" />
            <div>
              <h3>Total Investment</h3>
              <h2>$2000BDT</h2>
            </div>
          </div>
          <Row className="card">
            <Col lg={8}>
              <InvestorCard
                photo={photo}
                title="$2000BDT"
                subTitle="Total Earning "
              />
            </Col>
            <Col lg={8}>
              <InvestorCard
                photo={photo}
                title=" 2000BDT"
                subTitle="Total Deposit"
              />
            </Col>
            <Col lg={8}>
              <InvestorCard
                photo={photo}
                title="2000BDT"
                subTitle="Total Cashout"
              />
            </Col>
          </Row>
        </div>
      </Navigation>
    </div>
  );
};

export default InvestorAccount;
