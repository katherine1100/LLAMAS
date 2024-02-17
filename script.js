let mapa = L.map('mapa').setView([-1.63,-78.78],6);
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapa);
$.getJSON("https://katherine1100.github.io/LLAMAS/Tesis_2012.geojson",function(data){
var clusteredPoints = L.markerClusterGroup();
var marker = L.geoJson(data,{
  onEachFeature: function (feature, layer){
layer.bindPopup('<b>Titulo: </b>' + feature.properties.TITULO_TESIS_O_INVESTIGACION+'<br>\<b>Autor(es): </b>' + feature.properties.AUTOR_O_AUTORES+'<br>\<b>Tutor(es): </b>' + feature.properties.TUTOR_DE_TESIS+'<br>\<i>Tutor(es): </i>' + feature.properties.TUTOR_DE_TESIS)
  }
    }, 
     );
  clusteredPoints.addLayer(marker);
  mapa.addLayer(clusteredPoints)
});