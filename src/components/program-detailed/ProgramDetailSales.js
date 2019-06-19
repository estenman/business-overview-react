import React, {Component} from 'react';

class ProgramDetailSales extends Component {

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
			
			<div className="sales-container">
				<h3 className="sales-header">Total&nbsp;Monthly Sales</h3>
				<div className="sales-num-container">		
					{!isLoading ? (
						programs.map(program => {
							const { ProgramID, TotalMonthlySales} = program;
							
							if (ProgramID === this.props.prgid) {
								return (
									<div key={program.ProgramID} className="sales-num-current">
										<h4 className="sales-num-headers">Current</h4>
										<p>${TotalMonthlySales.toLocaleString()}</p>
									</div>
								);
							};
						})

						) : (<p>Loading</p>)
					}
					<div className="sales-num-graph">
						<h4 className="sales-num-headers">1- Year</h4>
						<img src="./assets/spark_line.png" alt="line chart showing sales" />
					</div>
				</div>
			</div>

		</React.Fragment>
		)

	}
}

export default ProgramDetailSales;