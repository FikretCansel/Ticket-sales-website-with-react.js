import React, { useState, useEffect } from 'react';
import '../css/payment.css'
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";
import Infos from './Infos';
import axios from 'axios';
import {useHistory} from "react-router-dom";

function Payment() {
    const [{ basket }] = useStateValue();
    const [{ user }, dispath] = useStateValue();
    const [nameAndSurname, setnameAndSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const history=useHistory();

    useEffect(() => {
        if (user !== null) {
            setnameAndSurname(user.displayName);
            setEmail(user.email);
        }
    }, [user]);
    
    const sellFuc = (e) => {
        e.preventDefault();
        basket.map(async(item) => {
            const response = await axios.post("http://localhost:3000/seat",
                {
                    seferId:item.id,
                    email:email,
                    nameAndSurname: nameAndSurname,
                    code:item.code,
                    seatNumber:item.seatnumber,
                    day:item.day,
                    time:item.time,
                    price:item.price
                }
            );
        });
        history.push("/");
        dispath({
            type:"RESET_BASKET"
        });
    }

    return (
        <div>
            {
                getBasketTotal(basket) === 0 ? <h1>Bilet Seçiniz</h1> : <div>
                    <div className="ss">
                        {basket.map((item) => <Infos
                            id={item.id}
                            code={item.code}
                            seatnumber={item.seatnumber}
                            day={item.day}
                            time={item.time}
                            emptySeat={item.emptySeat}
                            price={item.price}
                        />)}
                        <h3>Toplam Ücret : {getBasketTotal(basket)}TL</h3>
                        
                    </div>
                    <form>
                        <label>Adınız:</label>
                        <input type="text" placeholder="Ad ve Soyad" value={nameAndSurname} onChange={(e) => setnameAndSurname(e.target.value)} />
                        <br />
                        <input type="text" placeholder="Card-no" />
                        <br />
                        <input type="text" placeholder="Cvs-code" />
                        <br />
                        <input type="text" placeholder="Telefon no" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        <br />
                        <button className="btn btn-success" onClick={sellFuc}>Öde</button>
                    </form>
                </div>
            }
        </div>
    );
}

export default Payment;