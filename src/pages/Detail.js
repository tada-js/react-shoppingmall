import { useEffect, useState } from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import { useParams } from "react-router-dom";



function Detail(props) {
  
  let {id} = useParams()
  let [alert, setAlert] = useState(true )

  useEffect(() => {
    setTimeout(()=>{setAlert(false)}, 2000)
  })

  return (
    <div className="container">
      {
        alert === true
        ? <div className="alert alert-warning">2초이내 구매시 할인</div>
        : null
      }
      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes1.jpg"}
            width="80%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[0].content}</p>
          <p>{props.shoes[0].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
