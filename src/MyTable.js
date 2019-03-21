import React, { Component } from "react";
import { Header, Table } from "semantic-ui-react";

/**
 * Table Component to populate table content
 */
class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: []
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      tableData: nextProps.tableData
    });
  }
  render() {
    let tableData = this.state.tableData;
    return (
      <div>
        <Table celled={false}>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Table color="blue">
                  <Table.Body>
                    <Table.Row textAlign="center">
                      <Table.Cell width={1}>
                        <Header>S.No.</Header>
                      </Table.Cell>
                      <Table.Cell width={1}>
                        <Header>IssueID</Header>
                      </Table.Cell>
                      <Table.Cell width={5}>
                        <Header> Issue Title</Header>
                      </Table.Cell>
                      <Table.Cell width={3}>
                        <Header> Created</Header>
                      </Table.Cell>
                      <Table.Cell width={3}>
                        <Header> Last Updated</Header>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div style={{ height: "280px", overflow: "auto" }}>
                  <Table striped selectable>
                    <Table.Body>
                      {tableData && Object.keys(tableData).length > 0 ? (
                        tableData.map((data, index) => (
                          <Table.Row textAlign="center">
                            <Table.Cell width={1}>{index + 1}</Table.Cell>
                            <Table.Cell width={1}>{data.number}</Table.Cell>
                            <Table.Cell width={5}>
                              <a
                                href={data.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {data.title}
                              </a>
                            </Table.Cell>
                            <Table.Cell width={3}>{data.created_at}</Table.Cell>
                            <Table.Cell width={3}>{data.updated_at}</Table.Cell>
                          </Table.Row>
                        ))
                      ) : (
                        <Table.Cell textAlign="center" colSpan="10">
                          No Record Found
                        </Table.Cell>
                      )}
                    </Table.Body>
                  </Table>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default MyTable;
