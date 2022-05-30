import { EyeOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import "./HomeCard.styles.css";

const HomeCard = ({ item }) => {
  return (
    <div className="home-card-wrapper">
      <div className="user-name-and-img flex item_center .content_center">
        <img src={item?.img} alt="user" />
        <div>
          <h2 className="name">{item?.name}</h2>
          <p>Bangladesh</p>
          <p>id: 89457483959</p>
        </div>
      </div>
      <div className="details">
        <h4>Available Project- 20</h4>
        <h4>Valuation - 5 core</h4>
      </div>
      <div className="all-star">
        <StarOutlined className="star" />
        <StarOutlined className="star" />
        <StarOutlined className="star" />
        <StarOutlined className="star" />
      </div>
      <Space
        size={20}
        className="view-button-wrapper flex content_end item_center"
      >
        <EyeOutlined />
        <Button type="primary">primary</Button>
      </Space>
    </div>
  );
};

export default HomeCard;
