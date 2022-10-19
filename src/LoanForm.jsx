import React from "react";

class LoanForm extends React.Component {
  constructor() {
    super();
    this.state = { loanAmount: 1000, rate: 3.0 }
  }

  updateLoan = ({target: {value}}) => this.setState({loanAmount: value})
  updateRate = ({target: {value}}) => this.setState({rate: value})

  render() {
    return(
      <div>
        <label htmlFor="loanAmount">Loan Amount</label>
        <input 
          onChange={this.updateLoan}
          type="number"
          min="1000" 
          step="100"
          value={this.state.loanAmount} 
        />
        <label htmlFor="interestRate">Interest Rate (Annual)</label>
        <input 
          onChange={this.updateRate}
          type="number"
          min="0.1"
          max="100" 
          step="0.1"
          value={this.state.rate} 
        />
      </div>
    )
  }
}

export default LoanForm;