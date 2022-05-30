import "./Advertisment.styles.css";

const Advertisment = ({ img, title, subTitle }) => {
  return (
    <div className="advertisment-wrapper">
      <img src={img} alt="advertisment-img" className="advertisment-photo" />
      <h2>{title}</h2>
      <p className="ad-details">{subTitle}</p>
      <h6 className="ad-sub-title">IT& Web Development</h6>
      <div className="progress-title flex content_between item_center">
        <div>$165638 BDT Raised</div>
        <div>45%</div>
      </div>
      <progress id="file" value="100" max="100" className="progress-bar" />
    </div>
  );
};

export default Advertisment;
