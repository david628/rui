import Chart from "../index";
import layerBase from '../layerBase';
export default class HeatMap extends Chart {
    constructor(props) {
        super();
        Object.assign(this, props);
        this.data = [];
        this.init();
    }
    init() {

    }
    refresh() {
        var data = [
            {
                "name": "海南",
                "lon": 109.512,
                "id": "1",
                "value": 300,
                "lat": 18.2528
            },
            {
                "name": "北京",
                "lon": 116.46,
                "id": "2",
                "value": 160,
                "lat": 39.92
            },
            {
                "name": "杭州",
                "lon": 120.19,
                "id": "3",
                "value": 35,
                "lat": 30.26
            },
            {
                "name": "厦门",
                "lon": 118.169,
                "id": "4",
                "value": 200,
                "lat": 24.6478
            },
            {
                "name": "太原",
                "lon": 112.335,
                "id": "5",
                "value": 90,
                "lat": 37.9413
            },
            {
                "name": "长沙",
                "lon": 113.082,
                "id": "6",
                "value": 45,
                "lat": 28.2568
            },
            {
                "name": "重庆",
                "lon": 107.754,
                "id": "7",
                "value": 300,
                "lat": 30.1904
            }
        ];
        this.options = {
            size: 13,
            gradient: { 0.25: "rgb(0,0,255)", 0.55: "rgb(0,255,0)", 0.85: "yellow", 1.0: "rgb(255,0,0)"},
            max: 100,
            // range: [0, 100], // 过滤显示数据范围
            draw: 'heatmap'
        };
        //if(this.layer) {
            //this.layer.onRemove();
        //}
        //let dataSet = this.getDataSet([]);
        //this.layer = this.getLayer(dataSet, this.options);
        this.load(data);
    }
    load(data) {
        this.remove();
        this.data = data || [];
        let dataSet = layerBase.getDataSet(this.data, 'heatmap')
        this.layer = layerBase.getLayer(this.parent.map, dataSet, this.options);
        //console.log(this.layer);
    }
    remove() {
        if(this.layer) {
            layerBase.removeLayer(this.layer, this.parent.map);
            this.layer = null;
        }
    }
}
