/* eslint-disable no-sparse-arrays */
import {getRealm} from './Realm';

export function getDefaultCategories() {
  return [
    {
      id: '1',
      name: 'Alimentação',
      color: '#1abc9c',
      isDebit: true,
      order: 0,
    },
    {
      id: '2',
      name: 'Restaurantes e Bares',
      color: '#2ecc71',
      isDebit: true,
      order: 1,
    },
    {
      id: '3',
      name: 'Casa',
      color: '#3498db',
      isDebit: true,
      order: 2,
    },
    {
      id: '4',
      name: 'Compras',
      color: '#9b59b6',
      isDebit: true,
      order: 3,
    },
    {
      id: '5',
      name: 'Cuidados Pessoais',
      color: '#f1c40f',
      isDebit: true,
      order: 4,
    },
    {
      id: '6',
      name: 'Dívidas e Empréstimos',
      color: '#f39c12',
      isDebit: true,
      order: 5,
    },
    {
      id: '7',
      name: 'Educação',
      color: '#e67e22',
      isDebit: true,
      order: 6,
    },
    {
      id: '8',
      name: 'Família e Filhos',
      color: '#d35400',
      isDebit: true,
      order: 7,
    },
    {
      id: '9',
      name: 'Impostos e Taxas',
      color: '#e74c3c',
      isDebit: true,
      order: 8,
    },
    {
      id: '10',
      name: 'Investimentos',
      color: '#c0392b',
      isDebit: true,
      order: 9,
    },
    {
      id: '11',
      name: 'Lazer',
      color: '#ecf0f1',
      isDebit: true,
      order: 10,
    },
    {
      id: '12',
      name: 'Mercado',
      color: '#bdc3c7',
      isDebit: true,
      order: 11,
    },
    {
      id: '13',
      name: 'Outras Despesas',
      color: '#95a5a6',
      isDebit: true,
      order: 12,
    },

    {
      id: '14',
      name: 'Empréstimos',
      color: '#273c75',
      isCredit: true,
      order: 1,
    },
    {
      id: '15',
      name: 'Investimentos',
      color: '#4cd137',
      isCredit: true,
      order: 2,
    },
    {
      id: '16',
      name: 'Salário',
      color: '#487eb0',
      isCredit: true,
      order: 3,
    },
    {
      id: '17',
      name: 'Outras Receitas',
      color: '#8c7ae6',
      isCredit: true,
      order: 4,
    },
    {
      id: '18',
      name: 'Saldo Inicial',
      color: '#27ae60',
      isInit: true,
      order: 5,
    },
  ];
}

export async function getAllCategories() {
  const realm = await getRealm();

  const categories = realm.objects('Category').sorted('order');

  return categories;
}

export async function getDebitCategories() {
  const realm = await getRealm();

  const categories = realm
    .objects('Category')
    .filtered('isDebit = true AND isInit = false')
    .sorted('order');

  return categories;
}

export async function getCreditCategories() {
  const realm = await getRealm();

  const categories = realm
    .objects('Category')
    .filtered('isDebit = false AND isInit = false')
    .sorted('order');

  return categories;
}

export async function getInitCategories() {
  const realm = await getRealm();

  const categories = realm
    .objects('Category')
    .filtered('isInit = true')
    .sorted('order');

  return categories;
}
