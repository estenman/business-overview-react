import React, { Component } from 'react';

class ProgramShortItem extends Component {

	state ={
		programs:[],
		isLoading: true,
		errors: null
	};

	fetchPrograms() {
		fetch('https://api.myjson.com/bins/5bdb3')
			.then(response => response.json())
			.then(data =>
				this.setState({
					programs: data,
					isLoading:false,
				})
			)

			.catch(error => this.setState({ error, isLoading: false }));
	}

	componentDidMount() {
		this.fetchPrograms();
	}

	render(){
		const { isLoading, programs, error } = this.state;

		return(
			<React.Fragment>
				{error ? <p>{error.message }</p> : null}
							
				{!isLoading ? (
					programs.map(program => {
						const { ProgramID, Name, TotalMonthlySales, MonthlyAttendance } = program;
						
						if (ProgramID === 103 || ProgramID === 104) {
							let descriptor= (ProgramID === 103) ? " visits" : " views";
							return (
								<tr key={program.ProgramID} className="program-short-item">
									<td>{Name}<br /><span className="program-short-expand">more</span></td>
									<td>{TotalMonthlySales.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
									<td>{MonthlyAttendance}{descriptor}</td>
								</tr>
							);
						};
					})

					) : (<tr><td>Loading</td></tr>)
				}
			</React.Fragment>			
		);
	}
}

export default ProgramShortItem;