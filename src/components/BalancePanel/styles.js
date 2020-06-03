import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';

export const Container = styled(LinearGradient).attrs({
  colors: [Colors.blue, Colors.turquese],
})`
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #ccc;
  margin-bottom: 5px;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const Balance = styled.Text`
  font-size: 38px;
  color: #fff;
`;

export const Chart = styled.View``;
