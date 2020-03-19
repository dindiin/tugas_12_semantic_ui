import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Form,
  Checkbox,
  Button,
  Grid,
  Image,
  Icon,
  Input,
  Message,
  Segment,
  Header
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
      <Grid centered>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" width={4}>
          <Header as='h3' color='teal' textAlign='center'>
            <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" size="large" verticalAlign="middle" />
              <span> Member Login</span>
          </Header>
          
            <Segment>
              <Form>
                <Form.Field>
                  <Input iconPosition='left' placeholder='E-mail address'>
                    <Icon name='user' />
                    <input />
                  </Input>
                </Form.Field>
                <Form.Field>
                  <Input iconPosition='left' placeholder='Password'>
                    <Icon name='lock' />
                    <input />
                  </Input>
                </Form.Field>
                <Form.Field>
                  <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button fluid color='teal' type='submit'>Login</Button>
              </Form>
            </Segment>
            
            <Message color='teal' attached='bottom' size='small'>
              Tidak Punya Akun? Silakan &nbsp;<a href='#'>Register</a>&nbsp;
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}

export default App;
