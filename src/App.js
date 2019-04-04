import React, { Component } from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {linkPost} from "./store/actions/linksSyncActions";
import {connect} from "react-redux";

class App extends Component {

  state = {
    originalUrl: ''
  };

  componentDidMount() {
      this.props.linksUrl()
  }

  urlOnChange = event => {
    const name = event.target.name;
    this.setState({[name]: event.target.value})
  };

  render() {

    return (
      <div className="App">
          <Container style={{textAlign: 'center'}}>
              <Form>
                  <FormGroup>
                      <Label for="originalUrl">Shorter your link!</Label>
                      <Input className="inputUrl" value={this.state.originalUrl} onChange={this.urlOnChange}
                             type="email" name="originalUrl" id="originalUrl" placeholder="Enter a originalUrl" />
                  </FormGroup>
                  <Button onClick={() => this.props.linksUrl(this.state)} color="primary">Send</Button>{' '}
              </Form>

              <div style={{marginTop: '50px'}}>
                  Your link new looks like this: <hr/>
                  <a href={"http://localhost:6500/links/" + this.props.links.shortUrl}>{this.props.links.shortUrl}</a>
              </div>
          </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        links: state.linksReducer.links
    }
};

const mapDispatchToProps = dispatch => {
    return {
        linksUrl: (url) => dispatch(linkPost(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
