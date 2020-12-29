import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStateValue } from "../context/StateProvider";

function MyTickets() {
    const [{ user }] = useStateValue();
    const [day, setDay] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get("http://localhost:3000/seat?email=" + user.email);
            if (response.data !== null) {
                setDay(response.data);
            }
        }
        if (user !== null) {
            fetchData();
        }
    }, [user]);

    return (
        <div>
            {
                user ? <div>
                    {
                        day.map((item) =>
                            <div className="card">

                                <div className="card-body d-flex justify-content-between">
                                    Sefer Kodu={item.code}--
                                Seçili koltuk={item.seatNumber}--
                                Gün={item.day}--
                                Saat={item.time}--
                                Fiyat={item.price}--
                                </div>
                            </div>
                        )
                    }
                </div> :
                    <h2 style={{color:"white"}}>Lütfen Giriş Olunuz</h2>

            }
        </div>
    );
}

export default MyTickets;