import photo from "../../image/8TxrGkbGc.gif";
import "./InfoHeaderCard.styles.css";

const InfoHeaderCard = ({ title, subtitle, number }) => {
  return (
    <div className="flex content_center item_center info-header-card-wrapper">
      <img src={photo} alt="img" />
      <div>
        <p>{title}</p>
        <h3>{subtitle}</h3>
      </div>
      <div>{number}%</div>
    </div>
  );
};

export default InfoHeaderCard;
