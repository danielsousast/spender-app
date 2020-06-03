import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: [Colors.blue, Colors.turquese],
})`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  color: ${Colors.white};
  font-size: 16px;
`;

export const Balance = styled.Text`
  font-size: 38px;
  color: ${Colors.white};
`;
