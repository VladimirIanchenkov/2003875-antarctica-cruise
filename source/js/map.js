setTimeout(function() {
	let elem = document.createElement('script');
  elem.type = 'text/javascript';
	elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=aa2e24c8-e05f-4356-8994-4b3c5d7c4590&load=package.standard&lang=ru_RU';
  elem.onload = function() {
    ymaps.ready(getYaMap);
  };
	document.querySelector('body').appendChild(elem);
}, 2000);

function getYaMap() {
  let myMap;
  myMap = new ymaps.Map('map', {
      center: [59.93955, 30.32358],
      zoom: 15.5
  }, {
      searchControlProvider: 'yandex#search'
  }),

  myPlacemark = new ymaps.Placemark([59.938635, 30.323118],{
  }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/icon-pin.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [-9, -22]
  }),

  myMap.geoObjects.add(myPlacemark);
}
