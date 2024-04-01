import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const ChiefBox = ({chief}) => {
  return (
    <div className="chief-box">
        <img src={chief.img} alt="" />
        <div className="cheif-info">
        <h3 className="chief-name">{chief.name}</h3>
        <p className="chief-recipe-count">Recipes:<b>{chief.rCount}</b></p>
        <p className="chief-cuisine">Cuisine <b>{chief.cuisine}</b></p>
        <p className="chief-icon">
        <BiLogoFacebookCircle/>
        <BiLogoInstagram />
        <BiLogoTwitter />
        </p>
        </div>
    </div>
  )
}
export default ChiefBox;
