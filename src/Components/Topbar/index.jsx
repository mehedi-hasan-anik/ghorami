import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Col, Image, Input, Popover, Row } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
// import Clock from "react-clock";
import logo from "../../image/8TxrGkbGc.gif";
import "./Topbar.styles.css";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const Topbar = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div className="topbar">
      <Row>
        <Col className="gutter-row flex item_center" lg={12}>
          <div className="flex item_center">
            <div className="header_logo">
              <img src={logo} alt="logo" className="logo" />
            </div>

            <div className="search_ber">
              <Input
                size="large"
                placeholder="Search"
                prefix={<SearchOutlined />}
                style={{ width: "300px" }}
              />
            </div>
          </div>
        </Col>
        <Col className="gutter-row flex content_end item_center" lg={12}>
          <div className="flex content_end item_center">
            <div className="dateWrapper">
              {/* <Clock value={date} /> */}
              <h1 style={{ margin: "0px" }}>{moment(date).format("LT")}</h1>
            </div>

            <div className="flex content_end item_center">
              <Popover content={content} title="Title">
                <h4 className="userName">
                  Anik
                  <span>
                    <DownOutlined />
                  </span>
                </h4>
              </Popover>

              <Image
                className="userPhoto"
                preview={false}
                width={60}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Topbar;
