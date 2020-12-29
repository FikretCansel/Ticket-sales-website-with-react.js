import React from 'react';

function Infos({id,code,day,emptySeat,seatnumber,price,time}) {
    return (
        <div className="row">
            <h3> Kod = {code}---- Koltuk={seatnumber}---- Gün ={day}---- Saat={time}---- Adet Ücreti={price}</h3>
        </div>
    );
}

export default Infos;