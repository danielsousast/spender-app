import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.champagne};
`;

export const AddButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  align-self: center;
  width: 100px;
  height: 45px;
  background-color: ${Colors.turquese};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
