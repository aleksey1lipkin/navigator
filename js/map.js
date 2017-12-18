window.onload = function () {
    // Создает экземпляр карты и привязывает его к созданному контейнеру
        var map = new YMaps.Map(document.getElementById("yandexMap"));
    
        // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
        map.setCenter(new YMaps.GeoPoint(49.31863, 53.54169), 12);
        map.addControl(new YMaps.Zoom());
        // map.enableScrollZoom();

        //change marker style
        var marker =  new YMaps.Style();
        marker.iconStyle = new YMaps.IconStyle();
        marker.iconStyle.href = 'img/marker.png';
        marker.iconStyle.size = new YMaps.Point(30, 45);

        //marker
        var placemark = new YMaps.Placemark(new YMaps.GeoPoint(49.28794550, 53.54785707), {hideIcon: false, style: marker});
        placemark.name = 'Навигатор';
        placemark.description = 'сеть автосервисов Навигатор';
        map.addOverlay(placemark); 
    };
 