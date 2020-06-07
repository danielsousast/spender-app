import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  background-color: ${Colors.white};
  width: 70%;
  height: 60px;
  border-radius: 8px;
  align-self: center;
  flex-direction: row;
  align-items: center;
`;

export const UnitButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  min-width: 20px;
`;

export const UnitButtonTitle = styled.Text`
  font-size: 28px;
  color: ${Colors.background};
  margin-right: 10px;
`;

export const Input = styled(TextInputMask)`
  flex: 1;
  height: 70px;
  border-radius: 8px;
  color: ${Colors.background};
  margin: 10px 0;
  align-self: center;
  font-size: 28px;
  padding-right: 20px;
  text-align: right;
`;
