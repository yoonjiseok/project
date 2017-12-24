import React from 'react';
import './Company.css';

import Card from '../components/Card';
import axios from 'axios';

class Company extends React.Component {
	
	constructor(){
		super();
		
		this.state = {
			companyArray : []
            
		}
        this.handleClick=this.handleClick.bind(this)
	}
	
	componentDidMount(){
		
		axios.get('http://localhost:4000/company')
			.then((response)=>{
			
				const data = this.state.companyArray.concat(response.data.company);
			
				this.setState({ 
					companyArray : data
				});
			});
    
	}
    handleClick(company_id){
        console.log(company_id)
        this.props.history.push(`/company/${company_id}`)
        
    }
    
    render(){
		
		const { companyArray } = this.state;
		
		const list = companyArray.map((v)=>{
			
			return (
				<Card 
                    cardLink={this.handleClick}
					key={v.id}
					company={v.name} 
					company_id={v.name} 
					recruit={v.recruit}
					rebate={v.rebate}
					recom={v.recommendation}
					favorite={v.favorite}
				/>
			)
		});
		
        return(
            <div>
				<div className="list">
					
				</div>
			</div>
        )
    }
}

export default Company;