import "./index.css";
import carrot from '../../assets/images/carrot.png'


const index = (data) => {
  const { name,breed, gender, sn, age, weight, color, litter_trained, good, img, desc } = data.data;
  return (
    <div className="rabbit-card">
        <div className="profile">
            <img src={img} alt="" className="adoptable-img"/>
            <div className="info">
                <p><span className="bold">Breed:</span>{breed}</p>
                <p><span className="bold">Gender:</span>{gender}</p>
                <p><span className="bold">Spay/Neutered:</span>{sn ? "yes": "no"}</p>
                <p><span className="bold">Age:</span>{age}</p>
                <p><span className="bold">Weight:</span>{weight}</p>
                <p><span className="bold">Color:</span>{color}</p>
                <p><span className="bold">Litterbox Trained:</span>{litter_trained}</p>
                <p><span className="bold">Good with:</span>{good}</p>
            </div>
            <div className="carrot">
            <img src={carrot} alt="" />
            <p className="name">{name}</p>
            </div>
        </div>
        <div className="flex">
          <p className="desc">
            {desc}
          </p>
        </div>
    </div>
  );
};

export default index;
