import React from "react";

class LoanDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currBal: this.props.info.currentBalance,
      rate: this.props.info.interestRate,
      minPmt: this.props.info.currentBalance * 0.1,
      paymentVal: this.props.info.currentBalance * 0.1,
      paymentsLeft: this.props.info.currentBalance / (this.props.info.currentBalance * 0.01) + 1, //includes last payment when $100 or less is left
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.info.currentBalance !== this.props.info.currentBalance || prevProps.info.interestRate !== this.props.info.interestRate) {
      this.setState({
        currBal: this.props.info.currentBalance,
        rate: this.props.info.interestRate,
        minPmt: this.props.info.currentBalance * 0.1,
        paymentVal: this.props.info.currentBalance * 0.1,
        paymentsLeft: this.props.info.currentBalance / (this.props.info.currentBalance * 0.01) + 1,
      })
    }
  }

  updatePaymentVal = ({target: {value}}) => this.setState({payment: value});

  updatePaymentsLeft() {
    const newPaymentsLeft = this.currBal / (this.currBal * 0.1) + 1;
    this.setState({paymentsLeft: newPaymentsLeft});
  }

  makePayment() {
    const interestPmt = (this.state.rate / 12) * this.state.currBal;
    const principalPmt = (this.state.currBal > 100) ? this.state.currBal * 0.1 : this.state.currBal;
    const totalPmt = interestPmt + principalPmt;
    const newCurrBal = this.state.currBal - totalPmt;
    this.setState({currBal: newCurrBal});

    const newPaymentVal = this.state.currBal * 0.1;
    this.setState({paymentVal: newPaymentVal});

    const newMin = (this.state.currBal > 100) ? this.state.currBal * 0.1 : this.state.currBal;
    this.setState({minPmt: newMin});

    this.updatePaymentsLeft();
  }

  render() {
    return (
      <div>
        <h2>Loan Display</h2>
        <div>Current Balance: {this.state.currBal}</div>
        <div>Current Interest Rate: {this.state.rate}</div>
        <div>Normal Payments Left: {this.state.paymentsLeft}</div>
        <form onSubmit={this.makePayment}>
          <input 
            onChange={this.updatePaymentVal}
            type="number"
            min={this.state.minPmt} 
            max={this.state.currBal}
            step="10"
            value={this.state.paymentVal} 
          />
          <button>Make Payment</button>
        </form>
      </div>
    )
  }
}

export default LoanDisplay;