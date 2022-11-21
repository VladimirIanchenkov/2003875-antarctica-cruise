const NUMBER_LENGTH = 11;

const inputsTel = document.querySelectorAll('input[type="tel"]');

const prefixNumber = (str) => {
  if (str === '7') {
    return '8';
  }
  return '8';
};

const checkFirstNumber = () => {
  Array.prototype.slice.call(inputsTel).forEach((el) => {
    el.addEventListener('input', () => {
      const value = el.value.replace(/\D+/g, '');
      let result;

      if (el.value.includes('+8')) {
        result = '8';
      } else {
        result = '';
      }

      for (let i = 0; i < value.length && i < NUMBER_LENGTH; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          default:
            break;
        }
        result += value[i];
      }

      el.value = result;
    });
  });
};

export {checkFirstNumber};
