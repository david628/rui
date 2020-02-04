import Chart from '../index.js';
import MapBase from '../MapBase';
import layerBase from '../layerBase';
export default class TMap extends Chart {
    constructor(props) {
        super();
        Object.assign(this, props);
        this.el = document.getElementById(this.el);
        this.init();
    }
    init() {
        this.map = new MapBase({
            el: this.el,
            mapType: this.mapType
            //mapType: layerBase.mapType.T_MAP
            //mapType: layerBase.mapType.B_MAP
            //mapType: layerBase.mapType.A_MAP
        });
        this.map.setCenter(105.403119, 38.028658, 5);
    }
    // setCenter(lng, lat, zoom) {
    //     if(this.map) {
    //         this.map.setCenter(lng, lat, zoom)
    //     }
    // }
    refresh() {

    }
    load(data) {

    }

}


// var map;
// var zoom = 5;
// function main() {
//     map = new T.Map('id-test', {
//         projection: 'EPSG:4326'
//     });
//     map.centerAndZoom(new T.LngLat(105.403119, 38.028658), zoom);
//
//     var randomCount = 500;
//     var data = [];
//
//     var citys = ["北京","天津","上海","重庆","石家庄","太原","呼和浩特","哈尔滨","长春","沈阳","济南","南京","合肥","杭州","南昌","福州","郑州","武汉","长沙","广州","南宁","西安","银川","兰州","西宁","乌鲁木齐","成都","贵阳","昆明","拉萨","海口"];
//
// // 构造数据
//     while (randomCount--) {
//         var cityCenter = mapv.utilCityCenter.getCenterByCityName(citys[parseInt(Math.random() * citys.length)]);
//         data.push({
//             geometry: {
//                 type: 'Point',
//                 coordinates: [cityCenter.lng - 2 + Math.random() * 4, cityCenter.lat - 2 + Math.random() * 4]
//             },
//             count: 30 * Math.random()
//         });
//     }
//
//     var dataSet = new mapv.DataSet(data);
//
//     var options = {
//         fillStyle: 'rgba(255, 50, 50, 0.6)',
//         maxSize: 20,
//         max: 30,
//         draw: 'bubble'
//     }
//     // var mapvLayer = new mapv.tiandituMapLayer(map, dataSet, options);
//     //
//     // var randomCount = 500;
//     // var data = [];
//     // while (randomCount--) {
//     //     data.push({
//     //         geometry: {
//     //             type: 'Point',
//     //             coordinates: [-125.8 + Math.random() * 50, 30.3 + Math.random() * 20]
//     //         },
//     //         count: 30 * Math.random()
//     //     });
//     // }
//     //
//     // var dataSet = new mapv.DataSet(data);
//     //
//     // var options = {
//     //     fillStyle: 'rgba(255, 250, 50, 0.7)',
//     //     shadowColor: 'rgba(255, 255, 50, 1)',
//     //     shadowBlur: 10,
//     //     size: 3,
//     //     draw: 'simple'
//     // }
//
//
//     var mapvLayer = mapv.tiandituMapLayer(dataSet, options);
//     console.log(mapvLayer);
//     map.addOverLay(mapvLayer);
// }
//
//
//
// main();

