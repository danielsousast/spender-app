import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  padding: 15px;
  border-radius: 4px;
  margin: 5px 15px 15px 15px;
  align-self: center;
  width: 95%;
  background-color: ${Colors.white};
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${Colors.dark};
  margin-bottom: 10px;
`;

export const List = styled.FlatList``;

export const ItemList = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 10px;
`;

export const PointBox = styled.View`
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const ItemListBox = styled.View`
  padding-left: 20px;
  justify-content: center;
  flex: 1;
`;

export const ItemListLabel = styled.Text`
  color: ${Colors.dark};
`;

export const ItemListBotton = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemListBottonLabel = styled.Text`
  margin-left: 8px;
  margin-right: 10px;
  color: ${Colors.metal};
`;

export const ItemListValueBox = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ItemListValue = styled.Text`
  font-size: 18px;
  color: ${Colors.background};
  font-weight: bold;
`;

export const Botton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ButtonBotton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${Colors.background};
  margin-left: 5px;
`;
