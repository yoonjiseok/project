import React from 'react';
import './Detail.css';
import axios from 'axios';

class Details extends React.Component {
    
    
        constructor(){
            super();
            
            this.state= {
                details : null,
            }
        }
    
        
    
    
        componentDidMount(){
            console.log('a')
        const company_id = this.props.match.params.id;
            axios.get(`http://locallhost:4000/company/${company_id}`)
                .then((response)=>{
                this.setState({details : response.data});
            });
        }
    
    
    
    render(){
    
        const {details} = this.state;
        
        return(
            
            <div className="details">
                <div className="photo"></div>
                <div className="desc">
                    <div className="desc_info">
                        <h2>{ details && details.recruit}</h2>
                        <div>{details && details.name}</div>
                    </div>
                    <div className="desc_body">채용상세내용</div>    
                </div>
                <div className="right">추천수</div>
            </div>
        
        
        )
        
        
        
    }
    
    
    
    
}
export default Details;