import React from "react";

class LoanForm extends React.Component {
  constructor() {
    super();
    this.state = { loanAmount: 1000, rate: 3 }
  }

  render() {
    return(
      <div>test LoanForm</div>
    )
  }
}

export default LoanForm;