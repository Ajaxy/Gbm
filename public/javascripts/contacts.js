ymaps.ready(function () {
    var map = new ymaps.Map('map', {
        center: [55.75, 37.664],
        zoom: 15
    });

    map.controls
        .add('mapTools')
        .add('smallZoomControl');

    map.geoObjects.add(new ymaps.Placemark(map.getCenter(), {
        iconContent: 'GingerBrandMan',
        balloonContent: '121099, Россия, Москва, ул. Нижний Сусальный переулок, д. 5, строение 18'
    }, {
        preset: 'twirl#blueStretchyIcon'
    }));
});