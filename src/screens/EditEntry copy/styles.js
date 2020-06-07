import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.background};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 150px;
`;

export const Form = styled.View`
  flex: 1;
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

export const ButtonsBox = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: center;
  align-self: center;
  padding: 10px 0px;
`;

export const ButtonCircle = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #ccc;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const AddButton = styled.TouchableOpacity`
  margin: 10px;
  flex: 1;
  border: 2px solid ${Colors.turquese};
  background-color: ${Colors.turquese};
  padding: 12px 12px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const AddButtonTittle = styled.Text`
  color: ${Colors.white};
  font-size: 16px;
`;

export const CancelButton = styled.TouchableOpacity`
  margin: 10px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CancelButtonTittle = styled.Text`
  color: ${Colors.white};
  font-size: 16px;
`;
