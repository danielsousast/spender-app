export function getId() {
  const uuidv1 = require('uuid/dist/v1');
  return uuidv1();
}
