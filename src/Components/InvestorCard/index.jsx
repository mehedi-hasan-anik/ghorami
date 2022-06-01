import "./InvestorCard.styles.css";

const InvestorCard = ({ photo, title, subTitle }) => {
  return (
    <div>
      <div className="investment-single-card flex content_between item_center">
        <img src={photo} alt="img" />
        <div>
          <h3>{subTitle}</h3>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default InvestorCard;
