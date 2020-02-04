import TMap from './components/tmap';
import Point from './components/point';
import HeatMap from './components/heatmap';
import Flight from './components/flight';
import Polygon from './components/polygon';
import layerBase from "./components/layerBase";
var tmap = new TMap({
    el: 'id-tmap',
    mapType: layerBase.mapType.T_MAP
});
var bmap = new TMap({
    el: 'id-bmap',
    mapType: layerBase.mapType.B_MAP
});
var amap = new TMap({
    el: 'id-amap',
    mapType: layerBase.mapType.A_MAP
});

var data = [
    {
        "lat": 31.8998,
        "lon": 102.2212,
        "value": 300
    },
    {
        "lat": 28.6542,
        "lon": 120.079,
        "value": 300
    },
    {
        "lat": 24.0554,
        "lon": 114.207,
        "value": 300
    },
    {
        "lat": 33.5807,
        "lon": 119.0305,
        "value": 300
    },
    {
        "lat": 39.563,
        "lon": 118.1108,
        "value": 300
    },
    {
        "lat": 41.8993,
        "lon": 114.0101,
        "value": 300
    },
    {
        "lat": 30.3096,
        "lon": 114.0812,
        "value": 300
    },
    {
        "lat": 40.0905,
        "lon": 113.3014,
        "value": 300
    },
    {
        "lat": 28.6396,
        "lon": 102.5089,
        "value": 300
    },
    {
        "lat": 29.6045,
        "lon": 114.4932,
        "value": 300
    },
    {
        "lat": 29.4145,
        "lon": 112.1723,
        "value": 300
    },
    {
        "lat": 21.2749,
        "lon": 110.365,
        "value": 300
    },
    {
        "lat": 24.7743,
        "lon": 115.0327,
        "value": 300
    },
    {
        "lat": 47.2529,
        "lon": 130.2362,
        "value": 300
    },
    {
        "lat": 36.0634,
        "lon": 113.8238,
        "value": 300
    },
    {
        "lat": 31.3431,
        "lon": 104.2002,
        "value": 300
    },
    {
        "lat": 40.4375,
        "lon": 113.1635,
        "value": 300
    },
    {
        "lat": 42.5421,
        "lon": 124.0456,
        "value": 300
    },
    {
        "lat": 26.7025,
        "lon": 107.5135,
        "value": 300
    },
    {
        "lat": 26.2233,
        "lon": 111.6263,
        "value": 300
    },
    {
        "lat": 32.3932,
        "lon": 119.421,
        "value": 300
    },
    {
        "lat": 38.7257,
        "lon": 113.259
    },
    {
        "lat": 24.041,
        "lon": 104.1944,
        "value": 300
    },
    {
        "lat": 37.13,
        "lon": 114.6845,
        "value": 300
    },
    {
        "lat": 35.6638,
        "lon": 103.3896,
        "value": 300
    },
    {
        "lat": 36.146,
        "lon": 112.2514,
        "value": 300
    },
    {
        "lat": 47.413,
        "lon": 129.4359,
        "value": 300
    }
];

var sub = document.getElementById('id-sub-com');
document.getElementById('id-com').onclick = () => {
    let tLine = new Flight();
    tLine.parent = tmap;
    tmap.children.push(tLine);
    tLine.refresh();

    let tPoint = new Point();
    tPoint.parent = tmap;
    tmap.children.push(tPoint);
    tPoint.refresh();

    let tHeatMap = new HeatMap();
    tHeatMap.parent = tmap;
    tmap.children.push(tHeatMap);
    tHeatMap.refresh();

    let tPolygon = new Polygon();
    tPolygon.parent = tmap;
    tmap.children.push(tPolygon);
    tPolygon.refresh();



    let bLine = new Flight();
    bLine.parent = bmap;
    bmap.children.push(bLine);
    bLine.refresh();

    let bPoint = new Point();
    bPoint.parent = bmap;
    bmap.children.push(bPoint);
    bPoint.refresh();

    let bHeatMap = new HeatMap();
    bHeatMap.parent = bmap;
    bmap.children.push(bHeatMap);
    bHeatMap.refresh();

    let bPolygon = new Polygon();
    bPolygon.parent = bmap;
    bmap.children.push(bPolygon);
    bPolygon.refresh();




    let aLine = new Flight();
    aLine.parent = amap;
    amap.children.push(aLine);
    aLine.refresh();

    let aPoint = new Point();
    aPoint.parent = amap;
    amap.children.push(aPoint);
    aPoint.refresh();

    let aHeatMap = new HeatMap();
    aHeatMap.parent = amap;
    amap.children.push(aHeatMap);
    aHeatMap.refresh();

    let aPolygon = new Polygon();
    aPolygon.parent = amap;
    amap.children.push(aPolygon);
    aPolygon.refresh();

    let dom = document.createElement('div');
    dom.innerHTML = '<button>子组件<em>X</em></button>';
    sub.appendChild(dom);
    dom.onclick = (e) => {
        if(e.target.tagName === 'EM') {
            sub.removeChild(dom);
            tLine.remove();
            tPoint.remove();
            tHeatMap.remove();
            tPolygon.remove();

            bLine.remove();
            bPoint.remove();
            bHeatMap.remove();
            bPolygon.remove();

            aLine.remove();
            aPoint.remove();
            aHeatMap.remove();
            aPolygon.remove();
        } else {
            tLine.load();
            tPoint.load(data);
            tHeatMap.load(data);
            tPolygon.load();

            bLine.load();
            bPoint.load(data);
            bHeatMap.load(data);
            bPolygon.load();

            aLine.load();
            aPoint.load(data);
            aHeatMap.load(data);
            aPolygon.load();
        }
    }
}

// document.querySelector('.cls-oper').querySelectorAll('button').forEach(btn => {
//     btn.onclick = (e) => {
//         let target = e.target;
//         let type = target.getAttribute('value');
//         if(type === 'point') {
//             var pt = new Point();
//             pt.parent = tmap;
//             tmap.children.push(pt);
//             pt.refresh();
//         }
//         //tmap.refresh();
//     }
// });


// import * as mapv from '../node_modules/mapv/index.js';
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
//
