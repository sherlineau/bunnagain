import "./index.css";
import placeholder from '../../assets/images/placeholder-image.webp'
import carrot from '../../assets/images/carrot.png'


const index = (data) => {
  const { name, gender, sn, age, weight, color, litter_trained, good } = data;
  return (
    <div className="rabbit-card">
        <div className="profile">
            <img src={placeholder} alt="" className="adoptable-img"/>
            <div className="info">
                <p><span className="bold">Breed:</span>{name}</p>
                <p><span className="bold">Gender:</span>{gender}</p>
                <p><span className="bold">Spay/Neutered:</span>{sn}</p>
                <p><span className="bold">Age:</span>{age}</p>
                <p><span className="bold">Weight:</span>{weight}</p>
                <p><span className="bold">Color:</span>{color}</p>
                <p><span className="bold">Litterbox Trained:</span>{litter_trained}</p>
                <p><span className="bold">Good with:</span>{good}</p>
            </div>
            <div className="carrot">
            <img src={carrot} alt="" />
            <p className="name">Ralphie</p>
            </div>
        </div>
        <div>
          <p className="desc">
            Meet Ralphie, the charming rabbit who is eagerly awaiting his forever home. This lovable and sweet boy has a heart full of affection, and he adores receiving pets. Ralphie is not only gentle and affectionate but also gets along well with cats and young children, making him a delightful addition to any loving home. With his calm demeanor and friendly nature, Ralphie is sure to bring joy and warmth to the hearts of his future adopters. 
          </p>
        </div>
    </div>
  );
};

export default index;
