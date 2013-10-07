ymaps.ready(function () {
    var map = new ymaps.Map('map', {
        center: [55.75, 37.587],
        zoom: 15
    });

    map.controls
        .add('mapTools')
        .add('smallZoomControl');

    map.geoObjects.add(new ymaps.Placemark(map.getCenter(), {
        iconContent: 'GingerBrandMan',
        balloonContent: '121099, Россия, Москва, Спасопесковский пер-к, 7/1'
    }, {
        preset: 'twirl#blueStretchyIcon'
    }));
});