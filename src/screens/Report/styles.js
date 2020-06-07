import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.champagne};
`;

export const PickerBox = styled.View`
  flex-direction: row;
  background-color: ${Colors.turquese};
  padding-left: 10px;
`;

export const Picker = styled.Picker`
  flex: 1;
  border: 1px solid #000;
  color: #fff;
`;

export const CloseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CloseButtonTittle = styled.Text``;
