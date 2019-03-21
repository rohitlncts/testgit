import React, { Component } from "react";
import {
  Grid,
  Segment,
  Label,
  Button,
  Input,
  Container,
  Header,
  Form
} from "semantic-ui-react";
import MyTable from "./MyTable";

/**
 * Main page
 */
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      data24hrs: [],
      data7days: [],
      databeyond7days: [],
      errorMessage: "",
      isDataFound: false,
      tableData: [],
      selectedLabel: ""
    };
    /**
     * Method to fetch json data from gethub repository
     */
    this.applysearch = () => {
      this.setState({
        isDataFound: false
      });
      let URL = document.getElementById("repo-url").value;
      let message = "";
      if (URL) {
        if (URL.indexOf("https://github.com/") === 0) {
          URL = URL.replace(
            "https://github.com/",
            "https://api.github.com/repos/"
          );
          if (URL.charAt(URL.length - 1) === "/") {
            URL = URL.substring(0, URL.length - 1);
            document.getElementById("repo-url").value = URL;
          }
          URL = URL + "/issues";
        } else {
          this.setState({
            errorMessage: "Incorrect URL "
          });
          return;
        }

        fetch(URL, {
          Method: "GET"
        })
          .then(data => {
            return data.json();
          })
          .catch(function() {
            message = "Incorrect URL or response XML";
          })
          .then(response => {
            let now = new Date().getTime();
            const oneDay = 1000 * 60 * 60 * 24;
            const sevenDay = 1000 * 60 * 60 * 24 * 7;
            let db7 = [];
            let d7 = [];
            let d24 = [];
            for (var key in response) {
              if (response.hasOwnProperty(key)) {
                var val = response[key];
                let d = new Date(val.created_at);
                if (val.state === "open") {
                  if (now - d.getTime() > sevenDay) {
                    db7.push(val);
                  } else if (now - d.getTime() > oneDay) {
                    d7.push(val);
                  } else {
                    d24.push(val);
                  }
                }
              }
            }
            this.setState({
              isDataFound: true,
              response,
              databeyond7days: db7,
              data7days: d7,
              data24hrs: d24,
              errorMessage: message,
              tableData: []
            });
          });
      }
    };

    /**
     * JS Method for label click action, will populate table data
     */
    this.onClickLabel = (e, data) => {
      let tableData = [];
      let selectedLabel = "";
      switch (data.id) {
        case "total":
          tableData = this.state.response;
          selectedLabel = "Total Open Issues";
          break;
        case "b7d":
          tableData = this.state.databeyond7days;
          selectedLabel = "Open Issues Beyond 7 Days";
          break;
        case "d7":
          tableData = this.state.data7days;
          selectedLabel = "Open Issues In Last 7 Days";
          break;
        case "d24":
          tableData = this.state.data24hrs;
          selectedLabel = "Open Issues In Last 24 Hrs";
          break;
        default:
          tableData = [];
          selectedLabel = "";
      }
      this.setState({
        tableData,
        selectedLabel
      });
    };
  }
  render() {
    return (
      <div>
        <Header as="h1" textAlign="center" style={{ paddingTop: "10px" }}>
          Github Open Issue Dashboard
        </Header>
        <Header as="h5" textAlign="center">
          Please enter your github repository URL and click on submit button
        </Header>
        <Container>
          <Form size="tiny">
            <Input
              fluid
              id="repo-url"
              placeholder="Repository URL"
              label={
                <Button type="submit" onClick={this.applysearch} primary>
                  Submit
                </Button>
              }
              labelPosition="right"
            />
            {this.state.errorMessage && (
              <Label>{this.state.errorMessage}</Label>
            )}
          </Form>
        </Container>
        {this.state.isDataFound && (
          <Container centered>
            <Grid
              fluid
              columns={4}
              centered
              textAlign="center"
              style={{ paddingTop: "20px" }}
            >
              <Grid.Row container centered>
                <Grid.Column textAlign="center">Total Issues</Grid.Column>
                <Grid.Column textAlign="center">Beyond Last 7 Days</Grid.Column>
                <Grid.Column textAlign="center">In Last 7 Days</Grid.Column>
                <Grid.Column textAlign="center">In Last 24 hrs</Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column centered textAlign="center">
                  <Label
                    id="total"
                    circular
                    size="massive"
                    color="blue"
                    as="a"
                    onClick={this.onClickLabel}
                  >
                    {this.state.response.length}
                  </Label>
                </Grid.Column>
                <Grid.Column centered textAlign="center">
                  <Label
                    id="b7d"
                    circular
                    size="massive"
                    color="red"
                    as="a"
                    onClick={this.onClickLabel}
                  >
                    {this.state.databeyond7days.length}
                  </Label>
                </Grid.Column>
                <Grid.Column centered textAlign="center">
                  <Label
                    id="d7"
                    circular
                    size="massive"
                    color="orange"
                    as="a"
                    onClick={this.onClickLabel}
                  >
                    {this.state.data7days.length}
                  </Label>
                </Grid.Column>
                <Grid.Column centered textAlign="center">
                  <Label
                    id="d24"
                    circular
                    size="massive"
                    color="yellow"
                    as="a"
                    onClick={this.onClickLabel}
                  >
                    {this.state.data24hrs.length}
                  </Label>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Segment>
              <Header textAlign="center">{this.state.selectedLabel}</Header>
              <MyTable tableData={this.state.tableData} />
            </Segment>
          </Container>
        )}
      </div>
    );
  }
}

export default MainPage;
