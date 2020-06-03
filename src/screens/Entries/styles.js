import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background};
`;

export const PickerBox = styled.View`
  flex-direction: row;
`;

export const Picker = styled.Picker`
  flex: 1;
  border: 1px solid #000;
`;

export const CloseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CloseButtonTittle = styled.Text``;
