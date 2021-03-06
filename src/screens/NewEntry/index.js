import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {saveEntry, removeEntry} from '../../services/Entries';
import EntryInput from '../../components/EntryInput';
import CategoryModal from '../../components/CategoryModal';
import {
  Container,
  Content,
  ButtonsBox,
  ButtonCircle,
  AddButton,
  AddButtonTittle,
  CancelButton,
  CancelButtonTittle,
  InputBox,
  CategoryButton,
  CategoryButtonTitle,
  HeaderMenu,
  MenuItem,
  MenuItemLabel,
} from './styles';

export default function NewEntry({navigation, route}) {
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isDebit, setIsDebit] = useState(false);
  const [activeTab, setActivetab] = useState(1);

  function isValid() {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  }

  function handleSave() {
    let amountData = activeTab === 1 ? amount * -1 : amount;
    const data = {
      amount: amountData,
      category,
    };
    saveEntry(data);
    goBack();
  }

  function goBack() {
    navigation.goBack();
  }

  function changeCategory(param) {
    setCategory(param);
    setModalVisible(false);
  }

  function changeDebit(param) {
    setIsDebit(param);
    console.log(isDebit);
  }

  return (
    <Container>
      <HeaderMenu>
        <MenuItem active={activeTab} onPress={() => setActivetab(1)}>
          <MenuItemLabel boldText={activeTab === 1 ? 'bold' : 'normal'}>
            Despesa
          </MenuItemLabel>
        </MenuItem>
        <MenuItem active={activeTab} onPress={() => setActivetab(2)}>
          <MenuItemLabel boldText={activeTab === 2 ? 'bold' : 'normal'}>
            Receita
          </MenuItemLabel>
        </MenuItem>
      </HeaderMenu>
      <Content>
        <InputBox>
          <EntryInput
            value={amount}
            onChangeText={(e) => setAmount(e)}
            changeDebit={changeDebit}
          />
          <CategoryButton onPress={() => setModalVisible(true)}>
            <CategoryButtonTitle>
              {category.name || 'Categoria'}
            </CategoryButtonTitle>
          </CategoryButton>
        </InputBox>
        <ButtonsBox>
          <ButtonCircle>
            <Icon name="enviromento" color="#151515" size={32} />
          </ButtonCircle>
          <ButtonCircle>
            <Icon name="camerao" color="#151515" size={32} />
          </ButtonCircle>
        </ButtonsBox>
        <ButtonsBox>
          <AddButton onPress={handleSave} active={activeTab}>
            <AddButtonTittle>Adicionar</AddButtonTittle>
          </AddButton>
          <CancelButton onPress={goBack}>
            <CancelButtonTittle active={activeTab}>Cancelar</CancelButtonTittle>
          </CancelButton>
        </ButtonsBox>
      </Content>

      <CategoryModal
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
        onCategoryPress={changeCategory}
        isDebit={activeTab === 1}
      />
    </Container>
  );
}
