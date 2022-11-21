var myMap;
ymaps.ready(init);

function init () {
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
