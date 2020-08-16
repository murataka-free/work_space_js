
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  var speedtest = function() {
    
  };

  
  function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
// 地図を作成する
var mymap = L.map('map');
 
// タイルレイヤーを作成し、地図にセットする
L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
}).addTo(mymap);
 
// 地図の中心座標とズームレベルを設定する
mymap.setView([crd.latitude, crd.longitude], 13);

var marker = L.marker([crd.latitude, crd.longitude]).addTo(mymap);
 
// クリックした際にポップアップメッセージを表示する
marker.bindPopup("あなたの場所です");
var start = (new Date()).getTime();
jQuery.get('/天使のkao.jpg', function(data) {
  var end = (new Date()).getTime();
  var sec = (end - start) / 1000;
  var bytesPerSec = Math.round(data.length / sec);
  alert((bytesPerSec * 8 / 1000 / 1000) + 'M bps');
});
    
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

  
 
