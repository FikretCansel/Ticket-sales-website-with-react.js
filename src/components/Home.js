import React, { Component } from 'react';
import '../css/home.css';
import Seferler from './Seferler';
import axios from 'axios';
class Home extends Component {
    
    state = {
        seferler: [],
        FromCity: "34",
        ToCity: "06",
        date:"",
        clickedseferbul:false
    };
    onSubmitfuc = async (e) => { 
        const response = await axios.get("http://localhost:3000/seferler?code="+this.state.FromCity+this.state.ToCity+"&day="+this.state.date);
        this.setState({
            seferler: response.data,
            clickedseferbul:true
        });
    }
    goBackfuc=(e)=>{
        this.setState({
            clickedseferbul:false
        });
    }
    handleChangeFromCity = (e) => {
        this.setState({
            FromCity:e.target.value
        });
    }
    handleChangeToCity = (e) => {
        this.setState({
            ToCity:e.target.value
        });
    }
    
    handleChangeDate = (e) => {
        this.setState({
            date:e.target.value
        });
        console.log(this.state.date);
    }
    render() {
        const { FromCity, ToCity,date ,clickedseferbul} = this.state;
        return (
            <div>
                <div>
                    {
                        !clickedseferbul?<div>
                        <section className="banner">
                            <fieldset>
                                <form className="searchform col-sm-5" action="" method="get">
                                    <label htmlFor="from" style={{color:"white"}}>Nereden</label>
                                    <select className="form-control" name="class" onChange={this.handleChangeFromCity.bind(this)} value={FromCity}>
                                        <option value="34" selected>Istanbul</option>
                                        <option value="06">Ankara</option>
                                        <option value="20">İzmir</option>
                                    </select>
                                    <label htmlFor="to" style={{color:"white"}}>Nereye</label>
                                    <select className="form-control" name="class" onChange={this.handleChangeToCity.bind(this)} value={ToCity}>
                                        <option value="06" selected>Ankara</option>
                                        <option value="42">Konya</option>
                                        <option value="20" >Denizli</option>
                                    </select>
                                    <br />
                                    <label htmlFor="depart" style={{color:"white"}}>Kalkış Zamanı</label>
			                        <input type="date" className="form-control" id="depart" name="depart" value={date} onChange={this.handleChangeDate.bind(this)}  required/>
                                    <button type="button" className="form-control btn btn-success" onClick={this.onSubmitfuc.bind(this)}>Sefer Bul</button>

                                    <button type="reset" className="form-control btn btn-info" value="Reset">Sıfırla</button>
                                </form>
                            </fieldset>
                        </section>
                    </div>:<h2 style={{color:"white",cursor:"pointer"}} onClick={this.goBackfuc.bind(this)}>Yeni Sefer Aramak için Tıklayınız</h2>
                    }
                </div>
                {
                    this.state.seferler.map((sefer) =>
                        <Seferler
                            key={sefer.id}
                            id={sefer.id}
                            code={sefer.code}
                            companyName={sefer.companyName}
                            day={sefer.day}
                            time={sefer.time}
                            emptySeat={sefer.emptySeat}
                            price={sefer.price}
                        />)
                }
            </div>
        );
    }
}

export default Home;