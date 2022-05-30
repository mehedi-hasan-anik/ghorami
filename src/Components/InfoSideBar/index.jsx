import { UserOutlined } from "@ant-design/icons";
import { Space } from "antd";
import user from "../../image/8TxrGkbGc.gif";
import "./InfoSideBar.styles.css";

const InfoSideBar = () => {
  return (
    <div className="info-side-bar-wrapper">
      <div>
        {" "}
        <Space>
          <UserOutlined />
          <span className="profile-title">Profile</span>
        </Space>
      </div>
      <img className="user-img" src={user} alt="user" />
      <h3>kaber uddin</h3>
      <p>Bangladesh</p>
      <p>ID : 871.567.4877</p>
      <br />
      <p className="user-details">
        Crowdfunding is a way of raising money to finance projects and
        businesses. It enables fundraisers to collect money from a large number
        of people via online platforms. Crowdfunding is most oen used by startup
        companies or growing businesses as a way of accessing alternative funds.
      </p>
    </div>
  );
};

export default InfoSideBar;
