document.addEventListener('DOMContentLoaded', function() {
  setTimeout(initYandexMap, 5000);
});

document.addEventListener('scroll', initYandexMapOnEvent);
document.addEventListener('mousemove', initYandexMapOnEvent);
document.addEventListener('touchstart', initYandexMapOnEvent);

function initYandexMapOnEvent (evt) {
  initYandexMap();
  evt.currentTarget.removeEventListener(evt.type, initYandexMapOnEvent);
}

function initYandexMap () {
  if (window.yandexMapDidInit) {
    return false;
  }
  window.yandexMapDidInit = true;

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://api-maps.yandex.ru/2.1/?apikey=aa2e24c8-e05f-4356-8994-4b3c5d7c4590&load=package.standard&lang=ru_RU';
  script.onload = function () {
    ymaps.ready(getYaMap);
  };
  document.querySelector('body').appendChild(script);
}

function getYaMap () {
  let myMap;
  myMap = new ymaps.Map('map', {
      center: [59.93955, 30.32358],
      zoom: 15.5,
      controls: ['zoomControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
  }, {
      searchControlProvider: 'yandex#search'
  }),

  myMap.tabIndex = 0;

  myPlacemark = new ymaps.Placemark([59.938635, 30.323118],{
  }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/icon-pin.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [-9, -22]
  }),

  myMap.geoObjects.add(myPlacemark);
}
