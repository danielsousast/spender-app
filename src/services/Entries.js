import {getRealm} from './Realm';
import {Alert} from 'react-native';

export async function getEntries() {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  return entries;
}

export async function saveEntry(value, entry = {}) {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(function () {
      data = {
        id: value.id || entry.id || String(Math.random()),
        amount: value.amount || entry.amount,
        entryAt: value.entryAt || entry.entryAt,
        isInit: false,
      };

      realm.create('Entry', data, true);
    });

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    Alert.alert('Erro', 'Verifique seus dados');
  }
}

export async function removeEntry(entry) {
  const realm = await getRealm();

  try {
    realm.write(function () {
      realm.delete(entry);
    });
  } catch (error) {
    Alert.alert('Ocorreu um erro ao remover');
  }
}
