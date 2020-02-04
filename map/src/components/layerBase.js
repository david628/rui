import * as mapv from '../../node_modules/mapv/index.js';

let layerBase = {
    mapType: {
        T_MAP: 'tMap',
        B_MAP: 'bMap',
        A_MAP: 'aMap'
    },
    removeLayer(layer, obj) {
        const { map, mapType } = obj;
        if(mapType === this.mapType.T_MAP) {
            map.getPanes().overlayPane.removeChild(layer.container);
        } else if(mapType === this.mapType.B_MAP) {
            layer.hide();
        } else if(mapType === this.mapType.A_MAP) {
            map.remove(layer.layer_);
        }
    },
    getLayer(obj, dataSet, options) {
        const { map, mapType } = obj;
        let mapvLayer;
        if(mapType === this.mapType.T_MAP) {
            mapvLayer = mapv.tiandituMapLayer(dataSet, options);
            map.addOverLay(mapvLayer);
        } else if(mapType === this.mapType.B_MAP) {
            mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);
        } else if(mapType === this.mapType.A_MAP) {
            mapvLayer = new mapv.AMapLayer(map, dataSet, options);
        }
        return mapvLayer;
    },
    getDataSet(ds, type) {
        let data = ds || [], dataSet;
        if(type === 'point') {
            dataSet = this.getPoint(data);
        } else if(type === 'flight') {
            dataSet = this.getFlight(data);
        } else if(type === 'track') {
            dataSet = this.getTrack(data);
        } else if(type === 'heatmap') {
            dataSet = this.getHeatmap(data);
        } else if(type === 'polygon') {
            dataSet = this.getPolygon(data);
        }
        return dataSet;
    },
    getPolygon(ds) {
        let rs = [];
        ds.forEach(function (polygon) {
            rs.push({
                geometry: {
                    type: 'Polygon',
                    coordinates:[polygon.geo]
                },
                count: ds.count
            });
        })
        return new mapv.DataSet(rs);
    },
    getHeatmap(ds) {
        let data = ds || [];
        let rs = [];
        for(let i = 0; i < data.length; i++) {
            rs.push({
                geometry: {
                    type: 'Point',
                    coordinates: [data[i].lon, data[i].lat]
                },
                count: data[i].value
            });

        }
        return new mapv.DataSet(rs);
    },
    getTrack(ds) {

    },
    getPoint(ds) {
        let data = ds || [];
        let rs = [];
        for(let i = 0; i < data.length; i++) {
            rs.push({
                geometry: {
                    type: 'Point',
                    coordinates: [data[i].lon, data[i].lat]
                },
                count: data[i].value
            });

        }
        return new mapv.DataSet(rs);
    },
    getFlight(ds) {
        let data = ds || [];
        let lineData = [],
            pointData = [],
            textData = [],
            timeData = [],
            citys = {};
        for(let i = 0; i < data.length; i++) {
            let fromCenter = data[i].from.split(',');
            fromCenter = {
                lng: Number(fromCenter[0]),
                lat: Number(fromCenter[1])
            };
            let toCenter = data[i].to.split(',');
            toCenter = {
                lng: Number(toCenter[0]),
                lat: Number(toCenter[1])
            };
            if (!fromCenter || !toCenter) {
                continue;
            }
            citys[data[i].from] = data[i].value;
            citys[data[i].to] = 100;
            pointData.push({
                geometry: {
                    type: 'Point',
                    coordinates: [fromCenter.lng, fromCenter.lat]
                }
            });
            pointData.push(
                {
                    geometry: {
                        type: 'Point',
                        coordinates: [toCenter.lng, toCenter.lat]
                    }
                }
            );
            textData.push(
                {
                    geometry: {
                        type: 'Point',
                        coordinates: [fromCenter.lng, fromCenter.lat]
                    },
                    text: data[i].name !== undefined && data[i].name !== null ? data[i].name : ''
                }
            );
            textData.push(
                {
                    geometry: {
                        type: 'Point',
                        coordinates: [toCenter.lng, toCenter.lat]
                    },
                    text: data[i].name !== undefined && data[i].name !== null ? data[i].name : ''
                }
            );
            let curve = mapv.utilCurve.getPoints([fromCenter, toCenter]);
            for (let j = 0; j < curve.length; j++) {
                timeData.push({
                    geometry: {
                        type: 'Point',
                        coordinates: curve[j]
                    },
                    count: 1,
                    time: j
                });
            }
            lineData.push({
                geometry: {
                    type: 'LineString',
                    coordinates: curve
                },
                count: 30 * Math.random()
            });
        }
        // let rData = geojsonDataSet.get({
        //     filter: function (item) {
        //         if (!citys[item.name]) {
        //             return false;
        //         }
        //         item.count = citys[item.name];
        //         return true;
        //     }
        // });
        // let geojsonDataSet = new mapv.DataSet(rData);
//let mapvLayer = new mapv.baiduMapLayer(map, geojsonDataSet, geojsonOptions);
        let textDataSet = new mapv.DataSet(textData);
        // let textOptions = {
        //     draw: 'text',
        //     font: '14px Arial',
        //     fillStyle: 'white',
        //     shadowColor: 'yellow',
        //     shadowBlue: 10,
        //     zIndex: 11,
        //     shadowBlur: 10
        // }
//let textMapvLayer = new mapv.baiduMapLayer(map, textDataSet, textOptions);
        let lineDataSet = new mapv.DataSet(lineData);
        // let lineOptions = {
        //     strokeStyle: 'rgba(255, 250, 50, 0.8)',
        //     shadowColor: 'rgba(255, 250, 50, 1)',
        //     shadowBlur: 20,
        //     lineWidth: 2,
        //     zIndex: 100,
        //     draw: 'simple'
        // }
//let lineLayer = new mapv.baiduMapLayer(map, lineDataSet, lineOptions);
//         let pointOptions = {
//             fillStyle: 'rgba(254,175,3,0.7)',
//             shadowColor: 'rgba(55, 50, 250, 0.5)',
//             shadowBlur: 10,
//             size: 5,
//             zIndex: 10,
//             draw: 'simple'
//         }
        let pointDataSet = new mapv.DataSet(pointData);
//let pointLayer = new mapv.baiduMapLayer(map, pointDataSet, pointOptions);
        let timeDataSet = new mapv.DataSet(timeData);
        // let timeOptions = {
        //     fillStyle: 'rgba(255, 250, 250, 0.5)',
        //     zIndex: 200,
        //     size: 2.5,
        //     animation: {
        //         type: 'time',
        //         stepsRange: {
        //             start: 0,
        //             end: 50
        //         },
        //         trails: 10,
        //         duration: 2,
        //     },
        //     draw: 'simple'
        // }
//let timeMapvLayer = new mapv.baiduMapLayer(map, timeDataSet, timeOptions);
        return {
            textDataSet,
            lineDataSet,
            pointDataSet,
            timeDataSet
        };
    }
};
export default layerBase;
