import { Link } from "react-router-dom";

function AuthourCard(props){

    return <div class="container">
      <div class="card col-md-2 myAuthourCard">
  <h5 class="card-header">{props.authour.authourName}</h5>
  <div class="card-body">
    <h5 class="card-title">{props.authour.id}</h5>
    <p class="card-text">{props.authour.gender}</p>
    <img src={"/images/"+props.authour.gender+".jpg"} width="100px"/>
    <Link to={"/authourForm/"+props.authour.id} class="btn btn-primary">edit</Link>
  </div>
</div>
    </div>
}

export default AuthourCard;