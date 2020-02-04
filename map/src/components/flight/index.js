import Chart from "../index";
import layerBase from '../layerBase';
export default class Flight extends Chart {
    constructor(props) {
        super();
        Object.assign(this, props);
        this.data = [];
        this.init();
    }
    init() {

    }
    refresh() {
        let data = [
            {
                "from": "116.85059,31.69078",
                "to": "118.69629,36.20882",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "120.89355,37.09024",
                "to": "116.93848,31.61597",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "121.28906,29.34388",
                "to": "117.20215,31.12820",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "118.16895,31.57854",
                "to": "119.79492,32.47270",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "116.76270,33.35806",
                "to": "116.49902,38.95941",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "116.41113,30.93992",
                "to": "114.78516,26.58853",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "115.83984,32.13841",
                "to": "97.47070,37.54458",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "116.27930,32.36140",
                "to": "114.08203,36.27971",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "103.66699,25.79989",
                "to": "116.05957,31.54109",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "112.14844,24.40714",
                "to": "116.71875,33.21112",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "116.93848,31.65338",
                "to": "118.34473,26.62782",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "90.70313,42.26105",
                "to": "116.23535,32.32428",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "116.41113,30.82678",
                "to": "114.87305,36.94989",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "116.45508,30.78904",
                "to": "118.91602,28.57487",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "116.01562,40.07807",
                "to": "116.71875,31.69078",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "116.71875,31.72817",
                "to": "108.45703,40.24599",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "117.99316,40.84706",
                "to": "116.85059,31.69078",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "118.30078,36.56260",
                "to": "117.24609,40.97990",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "119.35547,26.86328",
                "to": "120.41016,32.28713",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "113.07129,31.42866",
                "to": "106.04004,31.31610",
                "name": "飞线",
                "value": 100
            },
            {
                "from": "116.85059,31.31610",
                "to": "110.43457,32.76880",
                "name": "飞线",
                "value": 100
            }
        ];
        this.options = {
            textOptions: {
                draw: 'text',
                font: '14px Arial',
                fillStyle: 'white',
                shadowColor: 'yellow',
                shadowBlue: 10,
                zIndex: 11,
                shadowBlur: 10
            },
            lineOptions: {
                strokeStyle: 'rgba(255, 250, 50, 0.8)',
                shadowColor: 'rgba(255, 250, 50, 1)',
                shadowBlur: 20,
                lineWidth: 2,
                zIndex: 100,
                draw: 'simple'
            },
            pointOptions: {
                fillStyle: 'rgba(254,175,3,0.7)',
                shadowColor: 'rgba(55, 50, 250, 0.5)',
                shadowBlur: 10,
                size: 5,
                zIndex: 10,
                draw: 'simple'
            },
            timeOptions: {
                fillStyle: 'rgba(255, 250, 250, 0.5)',
                zIndex: 200,
                size: 2.5,
                animation: {
                    type: 'time',
                    stepsRange: {
                        start: 0,
                        end: 50
                    },
                    trails: 10,
                    duration: 2,
                },
                draw: 'simple'
            }
        };
        this.load(data);
    }
    load(data) {
        this.remove();
        this.data = data || [];
        let {
            textDataSet,
            lineDataSet,
            pointDataSet,
            timeDataSet
        } = layerBase.getDataSet(this.data, 'flight')
        let text = layerBase.getLayer(this.parent.map, textDataSet, this.options.textOptions);
        let line = layerBase.getLayer(this.parent.map, lineDataSet, this.options.lineOptions);
        let point = layerBase.getLayer(this.parent.map, pointDataSet, this.options.pointOptions);
        let time = layerBase.getLayer(this.parent.map, timeDataSet, this.options.timeOptions);
        this.layer = {
            text,
            line,
            point,
            time
        };
    }
    remove() {
        if(this.layer) {
            layerBase.removeLayer(this.layer.text, this.parent.map);
            layerBase.removeLayer(this.layer.line, this.parent.map);
            layerBase.removeLayer(this.layer.point, this.parent.map);
            layerBase.removeLayer(this.layer.time, this.parent.map);
            this.layer = null;
        }
    }
}
