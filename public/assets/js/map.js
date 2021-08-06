ymaps.ready(geo);

var suggestView1 = false;
var data;
var searchAdress;
var statusS;

function geo(){
    var geolocation = ymaps.geolocation;
    geolocation.get({
        provider: 'browser',
        //mapStateAutoApply: true
    }).then(function (result) {
        // Синим цветом пометим положение, полученное через браузер.
        // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        data = result.geoObjects.position;
        init(data);
        ymaps.geocode(data).then(function (res) {
            var firstGeo = res.geoObjects.get(0);
            searchAdress = firstGeo.getCountry() + ", " + firstGeo.getAdministrativeAreas();
            console.log(searchAdress);
        });
        //myMap.geoObjects.add(result.geoObjects);
    });
};

function init() {
    var myPlacemark;
    
        myMap = new ymaps.Map('map', {
            center: data,
            zoom: 14,
            controls:[]
        }, {
            searchControlProvider: 'yandex#search'
        });
        myMap.behaviors.disable([
            'scrollZoom'
        ]);

        zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: 'small',
                float: 'right',
                position: {
                    bottom: 300,
                    right: 10
                }
            }
        });
        myMap.controls.add(zoomControl);

        if (!myPlacemark) {
            myPlacemark = createPlacemark(data);
            getAddress(data);
            myMap.geoObjects.add(myPlacemark);
            myPlacemark.events.add('dragend', function () {
                getAddress(myPlacemark.geometry.getCoordinates());
                myMap.panTo(myPlacemark.geometry.getCoordinates(), {duration: 700});
            });
        }

        if(suggestView1 === false){
            suggestView1 = new ymaps.SuggestView('location', {
            provider: {
              suggest: (function(request, options) {
                // console.log('remove');
                return ymaps.suggest(searchAdress + ", " + request)
                })
              }});
            };
              

        myMap.events.add('click', function (e) {
            var coords = e.get('coords');
            move(coords);
        });

        suggestView1.events.add('select', function (event) {
            var code = [];  
            ymaps.geocode(event.get('item').value)
            .then(function(res){
                code.push(res.geoObjects.properties._data.metaDataProperty.GeocoderResponseMetaData.Point.coordinates[1]);
                code.push(res.geoObjects.properties._data.metaDataProperty.GeocoderResponseMetaData.Point.coordinates[0]);
                move(code);
            });
            });

            function move(coords) {
                var coords = coords;
                if (myPlacemark) {
                    myPlacemark.geometry.setCoordinates(coords);
                }
                getAddress(coords);
                myMap.panTo(coords, {duration: 700});
                if(statusS === 1) {
                    addSuggestView();
                }
            };

function addSuggestView() {
                statusS = 0;
                suggestView1.destroy();
                suggestView1 = new ymaps.SuggestView('location', {
                    provider: {
                    suggest: (function(request, options) {
                        return ymaps.suggest(searchAdress + ", " + request);
                    })
                }});
                
                suggestView1.events.add('select', function (event) {
                    var code = []; 
                    ymaps.geocode(event.get('item').value)
                    .then(function(res){
                        code.push(res.geoObjects.properties._data.metaDataProperty.GeocoderResponseMetaData.Point.coordinates[1]);
                        code.push(res.geoObjects.properties._data.metaDataProperty.GeocoderResponseMetaData.Point.coordinates[0]);
                        move(code);
                    });
                });
            };
        
    // Создание метки.
    function createPlacemark(coords) {
        return new ymaps.Placemark(coords, {
            iconCaption: 'поиск...'
        }, {
            preset: 'islands#violetDotIconWithCaption',
            draggable: true,
            // iconLayout: 'default#image',
            // iconImageHref: 'img/location.png',
            // iconImageSize: [50, 50],
            // iconImageOffset: [-25, -50]
        });
    }

    // Определяем адрес по координатам (обратное геокодирование).
    function getAddress(coords) {
        myPlacemark.properties.set('iconCaption', 'поиск...');
        var adress;
        ymaps.geocode(coords).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);
            // console.log(res.geoObjects);
            document.getElementById("location").value = firstGeoObject.getAddressLine();
            myPlacemark.properties
                .set({
                    // Формируем строку с данными об объекте.
                    iconCaption: [
                        // Название населенного пункта или вышестоящее административно-территориальное образование.
                        firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                        // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                    ].filter(Boolean).join(', '),
                    // В качестве контента балуна задаем строку с адресом объекта.
                    balloonContent: firstGeoObject.getAddressLine(),
                });
        });  
    }

}

function status() {
    statusS = 1;
}