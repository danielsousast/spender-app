import React from 'react';
import {Container} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../styles/Colors';

export default function AddButton(props) {
  return (
    <Container onPress={props.onPress}>
      <Icon name="plus" size={26} color={Colors.white} />
    </Container>
  );
}
