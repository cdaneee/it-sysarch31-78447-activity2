// Card.jsx
import yijin from './assets/yijin.jpg';
import seungwan from './assets/seungwan.jpg';
import heedo from './assets/heedo.jpg';
import jiwoong from './assets/jiwoong.jpg';
import yurim from './assets/yurim.jpg';

function Card({ student }) {
 
  const studentImage = {
    "yijin": yijin, "seungwan": seungwan,"heedo": heedo, "jiwoong": jiwoong, "yurim":yurim};

  const studImage = studentImage[student.img];
  return (
    <div role="listitem" className="card-container">
      <img className= "card-image" src={ studImage }/>
      <h2>{student.name}</h2>
      <p>{student.email}</p>
      <hr></hr>
    </div>
)
}

export default Card;
