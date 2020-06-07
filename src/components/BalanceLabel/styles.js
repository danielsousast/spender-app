import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: ${Colors.white};
`;

export const BalanceBox = styled.View`
  width: 50%;
  background-color: ${Colors.turquese};
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  align-self: center;
`;

export const Label = styled.Text`
  color: ${Colors.background};
  font-size: 16px;
  margin-top: 20px;
`;

export const Balance = styled.Text`
  font-size: 38px;
  color: ${Colors.white};
`;
