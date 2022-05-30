import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./SearchBar.styles.css";

const SearchBar = () => {
  return (
    <div className="flex item_center content_between">
      <h3>Suppliers</h3>
      <Input
        className="search-bar"
        size="large"
        placeholder="Search"
        prefix={<SearchOutlined />}
        style={{ width: "200px" }}
      />
    </div>
  );
};

export default SearchBar;
