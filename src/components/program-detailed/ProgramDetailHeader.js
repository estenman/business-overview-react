import React, { Component } from 'react';

class ProgramDetailHeader extends Component {

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
				const { ProgramID, Name} = program;
				
				if (ProgramID === this.props.prgid) {
					return (
						<div key={program.ProgramID} className="program-header-container">
							<h2 className="header-prog-name">{Name}</h2>
							<div className="pencil-image-container">
							</div>
						</div>
					);
				};
			})

			) : (<p>Loading</p>)
		}
		</React.Fragment>
		)
	}
}

export default ProgramDetailHeader;