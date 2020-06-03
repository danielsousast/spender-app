import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background};
`;

export const AddButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  align-self: center;
  width: 60px;
  height: 60px;
  background-color: ${Colors.turquese};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
