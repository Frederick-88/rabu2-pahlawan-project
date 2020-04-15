import React from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

import Isi from "./Isi"
import "./index.css";

class GetData extends React.Component{
    state = {
        data:[]
    }

    componentDidMount(){
        axios.get('http://localhost:8000/dataJSON')
        .then(response => {
            console.log(response);
            this.setState({ data:response.data });
            
            console.log(this.state.data);
            
        })
    }

    render(){
        let dataPahlawan = this.state.data.map((item, index)=>{
            return <Col><Isi key={index} data={item}></Isi></Col>
        })

        return(
            <div>
                <h1 className="h1-fx">INDONESIAN NATIONAL HEROES LIST</h1>
                <div>
                
                <Row>
                    {dataPahlawan}
                    </Row>
                
                </div>
            </div>
        )
    }

}
export default GetData;