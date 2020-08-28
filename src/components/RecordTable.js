import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Filter from "./Filter";
class RecordTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateFilter: "2019-11-29",
      txns: this.props.txns
    };

    this.filter = this.filter.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.sort = this.sort.bind(this);
    this.thisTxns = this.props.txns;
  }
  filter(filterDate) {
    console.log('filterDate', filterDate.text);
    this.setState({dateFilter: filterDate});
  }
  handleDateChange = event => {

    let dateVal = document.getElementById('date').value;
    this.setState(this.thisTxns = this.props.txns.filter(txn => txn.date === dateVal));
    console.log(this.thisTxns);    
  };

  sort() {}
  render() {
    
    return (
      <div>
        <Filter handleDateChange={this.handleDateChange} filter={this.filter} />
        <br />
        <br />
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "darkgray" }}>
              <TableCell className="table-header">Date</TableCell>
              <TableCell className="table-header">Description</TableCell>
              <TableCell className="table-header">Type</TableCell>
              <TableCell className="table-header">
                <span id="amount" onClick={this.sort}>
                  Amount ($)
                </span>
              </TableCell>
              <TableCell className="table-header">Available Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.thisTxns.map(txn => {
                const {date, description, type, amount, balance} = txn;
                return (
                  <TableRow>
                    <TableCell>{date}</TableCell>
                    <TableCell>{description}</TableCell>
                    <TableCell>{type === 1 ? "Debit" : "Credit"}</TableCell>
                    <TableCell>{amount}</TableCell>
                    <TableCell>{balance}</TableCell>
                  </TableRow>
                );
              })
            }
            
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default RecordTable;
