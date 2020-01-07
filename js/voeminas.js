/* 
    Developed by Arthur Virzin
    Date and time: 2019-02-02 17:28
*/

/*
    Drawing the map of Brazil
*/
var chartBrazil = am4core.create("chartdiv", am4maps.MapChart);
chartBrazil.geodata = am4geodata_brazilHigh;
chartBrazil.projection = new am4maps.projections.Miller();
// Wheel off
chartBrazil.chartContainer.wheelable = false;
// Polygon Series
var polygonSeries = chartBrazil.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;
// Color
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.fill = am4core.color("#d2d5db");

/*
    Setting up the zoom
*/

chartBrazil.homeZoomLevel = 5.024668577570762;
chartBrazil.homeGeoPoint = {
    latitude: -19.4282349067731,
    longitude: -43.47528391978628
}

/*
    Drawing the lines first
*/

var lineSeriesLeft = chartBrazil.series.push(new am4maps.MapArcSeries());
lineSeriesLeft.dataFields.multiGeoLine = "multiGeoLine";

// Setting up the properties
lineSeriesLeft.mapLines.template.line.stroke = am4core.color("#009986");
lineSeriesLeft.mapLines.template.line.strokeOpacity = 0.3;
lineSeriesLeft.mapLines.template.line.strokeWidth = 0.4;
lineSeriesLeft.mapLines.template.line.strokeDasharray = "1,1";
lineSeriesLeft.mapLines.template.shortestDistance = true;
lineSeriesLeft.mapLines.template.line.controlPointDistance = -0.2;

// Adding the lines
lineSeriesLeft.data = [{
  "multiGeoLine": [
    /*[// Araxá
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -19.560149, "longitude": -46.966460 },
    ],
    [
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -21.325265, "longitude": -46.727639 },
    ],
    [
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -20.734021, "longitude": -46.658691 },
    ],*/
    [
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -18.670596, "longitude": -46.491650 },
    ]/*,
    [
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -18.911600, "longitude": -46.985271 },
    ],
    [
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -21.840243, "longitude": -46.565857 },
    ],
    [
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -22.288918, "longitude": -45.920409 },
    ],
    [
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -21.586051, "longitude": -45.473389 },
    ]*/
  ]
}];

var lineSeriesRight = chartBrazil.series.push(new am4maps.MapArcSeries());
lineSeriesRight.dataFields.multiGeoLine = "multiGeoLine";

// Setting up the properties
lineSeriesRight.mapLines.template.line.stroke = am4core.color("#009986");
lineSeriesRight.mapLines.template.line.strokeOpacity = 0.3;
lineSeriesRight.mapLines.template.line.strokeWidth = 0.4;
lineSeriesRight.mapLines.template.line.strokeDasharray = "1,1";
lineSeriesRight.mapLines.template.shortestDistance = true;
lineSeriesRight.mapLines.template.line.controlPointDistance = 0.1;

// Adding the lines
lineSeriesRight.data = [{
  "multiGeoLine": [
    [//Teófilo Otoni
      { "latitude": -19.850635, "longitude": -43.951948 },
      { "latitude": -17.893277, "longitude": -41.514633 },
    ],
    /*[//Almenara
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -16.167003, "longitude": -40.687762 },
    ],*/
    [//Araçuaí
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -16.850790, "longitude": -42.046474 },
    ],
    [//Diamantina
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -18.230582, "longitude": -43.649160 },
    ],
    [// Governador Valadares
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -18.896816, "longitude": -41.986610 },
    ],
    [//Ipatinga
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -19.474207, "longitude": -42.487975 },
    ],
    [// Caratinga
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -19.726921, "longitude": -42.111911 },
    ],
    [//Manhuaçu
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -20.263970, "longitude": -42.182855 },
    ]
    /*[// Viçosa
        { "latitude": -19.850635, "longitude": -43.951948 },
        { "latitude": -20.744607, "longitude": -42.839820 },
    ]*/
  ]
}];



/*
    Setting up the cities
*/

// Create image series
var imageSeries = chartBrazil.series.push(new am4maps.MapImageSeries());

// Create a circle image in image series template so it gets replicated to all new images
var imageSeriesTemplate = imageSeries.mapImages.template;
var circle = imageSeriesTemplate.createChild(am4core.Circle);
circle.radius = 6;
circle.fill = am4core.color("#009986");
circle.stroke = am4core.color("#FFFFFF");
circle.strokeWidth = 2;
circle.nonScaling = true;
//circle.tooltipText = "{title}";

var label = imageSeriesTemplate.createChild(am4core.Label);
label.text = "{title}";
label.horizontalCenter = "left";
label.verticalCenter = "top";
label.fontSize = 3;
label.paddingTop = "1";
label.fill = am4core.color("#006d60");
//label.dy = 20;

// Set property fields
imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";

// Add data for the three cities
imageSeries.data = [{
    "latitude": -17.893277,
    "longitude": -41.514633,
    "title": "Teófilo Otoni (TFL)"
},/* {
"latitude": -19.560149,
"longitude": -46.966460,
"title": "Araxá (AAX)"
}, {
    "latitude": -16.167003,
    "longitude": -40.687762,
    "title": "Almenara (AMJ)"
}, */{
    "latitude": -16.850790,
    "longitude": -42.046474,
    "title": "Araçuaí (IUN)"
}, {
    "latitude": -19.726921,
    "longitude": -42.111911,
    "title": "Caratinga (NCT)"
}, {
    "latitude": -18.230582,
    "longitude": -43.649160,
    "title": "Diamantina (DTI)"
}, {
    "latitude": -18.896816,
    "longitude": -41.986610,
    "title": "Governador Valadares (GVR)"
}, /*{
    "latitude": -21.325265,
    "longitude": -46.727639,
    "title": "Guaxupé (NGX)"
},*/ {
    "latitude": -19.474207,
    "longitude": -42.487975,
    "title": "Ipatinga (IPN)"
}, {
    "latitude": -20.263970,
    "longitude": -42.182855,
    "title": "Manhuaçu (NJM)"
}, /*{
    "latitude": -20.734021,
    "longitude": -46.658691,
    "title": "Passos (PSW)"
},*/ {
    "latitude": -18.670596,
    "longitude": -46.491650,
    "title": "Patos de Minas (POJ)"
} /*,{
    "latitude": -18.911600,
    "longitude": -46.985271,
    "title": "Patrocínio (NPJ)"
}, {
    "latitude": -21.840243,
    "longitude": -46.565857,
    "title": "Poços de Caldas (POO)"
}, {
    "latitude": -22.288918,
    "longitude": -45.920409,
    "title": "Pouso Alegre (PPY)"
}, {
    "latitude": -21.586051,
    "longitude": -45.473389,
    "title": "Varginha (VAG)"
}, {
    "latitude": -20.744607,
    "longitude": -42.839820,
    "title": "Viçosa (NVC)"
}*/];

var imageHome = chartBrazil.series.push(new am4maps.MapImageSeries());
var imageHomeTemplate = imageHome.mapImages.template;
var circle = imageHomeTemplate.createChild(am4core.Circle);
circle.radius = 10;
circle.fill = am4core.color("#630c8e");
circle.stroke = am4core.color("#FFFFFF");
circle.strokeWidth = 2;
circle.nonScaling = true;
//circle.tooltipText = "{title}";

var label = imageHomeTemplate.createChild(am4core.Label);
label.text = "{title}";
label.paddingTop = "2";
label.horizontalCenter = "middle";
label.verticalCenter = "top";
label.fontSize = 3;
label.fill = am4core.color("#630c8e");
//label.dy = 20;


// Set property fields
imageHomeTemplate.propertyFields.latitude = "latitude";
imageHomeTemplate.propertyFields.longitude = "longitude";
imageHome.data=[{
    "latitude": -19.850635,
    "longitude": -43.951948,
    "title": "Belo Horizonte (PLU)"
  } ];