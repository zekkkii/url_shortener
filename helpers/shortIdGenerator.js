/* eslint-disable max-len */
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const maxLength = 9;

export default () => {
  let id = '';

  for (let i = 0; i < maxLength; i++) {
    const randomNumber = Math.random() * letters.length;
    // eslint-disable-next-line no-unused-vars
    id += letters.charAt(randomNumber);
  };

  return id;
};

