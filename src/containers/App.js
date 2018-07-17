/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { addTodoAction, resetTodoAction } from '../redux/store/actions/todos';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myTodos: [],
      text: ''
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const newTodosState = store.getState().todos;

      this.setState({
        myTodos: newTodosState.todosList
      });
    });
  }

  addTodo() {
    store.dispatch(addTodoAction(
      this.state.text
    ));

    this.setState({text: ''});
  }

  resetTodo() {
    store.dispatch(resetTodoAction());
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1, marginTop: 20}}>
          <View>
            {this.state.myTodos.map(todo => (
              <View><Text>{todo}</Text></View>
            ))}
          </View>

          <View>
            <TextInput
              onChangeText={(value => { this.setState({ text: value }) })}
              value={this.state.text}
            />
            <Button title='Add' onPress={() => this.addTodo()} />
            <Button title='Reset' onPress={() => this.resetTodo()} />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
