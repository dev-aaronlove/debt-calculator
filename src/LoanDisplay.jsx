import React from "react";

class LoanDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currBal: this.props.info.currentBalance,
      rate: this.props.info.interestRate
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.info.currentBalance !== this.props.info.currentBalance || prevProps.info.interestRate !== this.props.info.interestRate) {
      this.setState({
        currBal: this.props.info.currentBalance,
        rate: this.props.info.interestRate
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Loan Display</h2>
        <div>Current Balance: {this.state.currBal}</div>
        <div>Current Interest Rate: {this.state.rate}</div>
      </div>
    )
  }
}

export default LoanDisplay;