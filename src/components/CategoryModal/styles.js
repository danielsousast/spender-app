import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.Modal`
  flex: 1;
  background-color: ${Colors.champagne};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${Colors.champagne};
  padding-top: 20px;
`;

export const List = styled.FlatList``;

export const CategoryTouch = styled.TouchableOpacity`
  width: 80%;
  align-self: center;
  height: 70px;
  background-color: ${Colors.white};
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-radius: 8px;
`;

export const CategoryName = styled.Text`
  color: ${(props) => props.color || Colors.white};
  font-size: 18px;
  font-weight: bold;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: center;
  width: 100%;
  padding: 20px;
  height: 80px;
  background-color: ${Colors.champagne};
  justify-content: center;
  align-items: center;
`;
export const CloseButtonTitle = styled.Text`
  font-size: 16px;
`;
