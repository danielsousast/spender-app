import Realm from 'realm';
import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';

export async function getRealm() {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 1,
  });

  return realm;
}
