import React from 'react';
import {StyleSheet} from 'react-native';
import users from './assets/data/users';
import CardComponent from './src/components/CardComponent';

const App = () => {
  return (
    <>
      {users.map(user => (
        <CardComponent key={user.id} {...user} />
      ))}
    </>
  );
};

export default App;
const styles = StyleSheet.create({});
