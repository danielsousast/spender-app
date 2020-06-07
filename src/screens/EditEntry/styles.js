import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding-bottom: 20px;
  background-color: ${Colors.champagne};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const HeaderMenu = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
`;

export const MenuItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.active === 1 ? '#f37272' : '#1abc9c')};
`;

export const MenuItemLabel = styled.Text`
  color: ${Colors.white};
  font-size: 16px;
  font-weight: ${(props) => props.boldText || 'normal'};
`;

export const InputBox = styled.View``;

export const Input = styled.TextInput`
  width: 80%;
  height: 70px;
  border-radius: 8px;
  background-color: #ccc;
  margin: 10px 0;
  align-self: center;
  font-size: 22px;
  padding: 0 12px;
  text-align: center;
`;

export const CategoryButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 60px;
  align-self: center;
  background-color: ${Colors.white};
  margin-top: 10px;
  border-radius: 8px;
`;

export const CategoryButtonTitle = styled.Text`
  font-size: 22px;
`;

export const ButtonsBox = styled.View`
  flex-direction: row;
  width: 70%;
  justify-content: center;
  align-self: center;
  margin-top: 15px;
`;

export const ButtonCircle = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const AddButton = styled.TouchableOpacity`
  margin: 0 10px;
  flex: 1;
  background-color: ${(props) => (props.active === 1 ? '#f37272' : '#1abc9c')};
  padding: 12px 12px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const AddButtonTittle = styled.Text`
  color: ${Colors.white};
  font-size: 16px;
  font-weight: bold;
`;

export const CancelButton = styled.TouchableOpacity`
  margin: 10px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CancelButtonTittle = styled.Text`
  color: ${(props) => (props.active === 1 ? '#f37272' : '#1abc9c')};
  font-size: 16px;
  font-weight: bold;
`;
