import {getRealm} from './Realm';
import {Alert} from 'react-native';

export async function getEntries() {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  return entries;
}

export async function saveEntry(value) {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(function () {
      data = {
        id: value.id || String(Math.random()),
        amount: value.amount,
        entryAt: value.entryAt || new Date(),
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

export async function updateEntry(entry) {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(function () {
      data = {
        id: entry.id,
        amount: entry.amount,
        entryAt: entry.entryAt,
        isInit: false,
      };

      realm.create('Entry', data, true);
    });

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
