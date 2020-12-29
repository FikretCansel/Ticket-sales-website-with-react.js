import React, { useState } from 'react';
import '../css/seferler.css';
import { Link } from 'react-router-dom'
import { useStateValue } from "../context/StateProvider";
import axios from 'axios';

function Seferler({ id,code, companyName, day, time, emptySeat,price}) {
  const [{basket},dispatch]=useStateValue();
  const [booldetay, setbooldetay] = useState(false);
  const [seatvalue, setseatvalue] = useState("");
  const [Seats,setSeats]=useState();
  async function SelectSeat (number) {
      selectedButton.push(number);
      dispatch({
        type:'ADD_SEAT',
        item: {
          id: id,
          code:code,
          seatnumber:number,
          day:day,
          time:time,
          emptySeat:emptySeat,
          price:price
        }
      })
      setseatvalue(seatvalue+"+"+number);
  }
  const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25];
  var dizi=[];
  var Seat1;
  var selectedButton=[];

  const PaymentButton = () => {

  }
  const detaylarbutton= async()=> {
    const result=await axios.get("http://localhost:3000/seat?seferId="+id);
    result.data.map((item)=>{
      dizi.push(item.seatNumber)
    });
    var i,j;
    for (i=0; i< numbers1.length; i++){
      for (j=0; j< dizi.length; j++){
      if(numbers1[i] === dizi[j]){
        delete numbers1[i];
          }
        }
   }
    Seat1=numbers1.map((number) =>
      <button className="btnSeat1" onClick={()=> SelectSeat(number)}>{number}</button>
    );
    setSeats(Seat1);
    setbooldetay(!booldetay);
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h3>{companyName}</h3>
                <h4>{time}</h4>
                <button className="btn btn-success" onClick={detaylarbutton}>Detaylar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row"></div>

      {booldetay ? <div className="card">
      {seatvalue==="" ?<h5>Koltuk Seçiniz</h5>: <h5>Numaralı koltuk listeye eklendi: {seatvalue}</h5>}
        <div className="seat d-flex justify-content-start">
          {Seats}
        </div>
        <div className="seat d-flex justify-content-start">
          
        </div>
        <div className="seat d-flex justify-content-start">
          
        </div>
        {seatvalue!=="" ?<Link to="/payment"><button className="btn btn-success" onClick={PaymentButton}>Öde</button></Link> :null }
      </div> : null
      }
    </div>
  );
}

export default Seferler;
