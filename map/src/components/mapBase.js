import layerBase from './layerBase';
export default class MapBase {
    constructor(props) {
        this.zoom = 5;
        Object.assign(this, props);
        //this.el = document.getElementById(this.el);
        this.init();
    }
    init() {
        this.renderTo = document.createElement('div');
        this.renderTo.className = 'cls-map';
        this.el.appendChild(this.renderTo);
        if(this.mapType === layerBase.mapType.T_MAP) {
            this.map = new T.Map(this.renderTo, {
                projection: 'EPSG:4326'
            });
        } else if(this.mapType === layerBase.mapType.B_MAP) {
            this.map = new BMap.Map(this.renderTo, {
                enableMapClick: false
            });
            this.map.enableScrollWheelZoom(true);
            this.map.setMapStyle({
                style: 'midnight'
            });
        } else if(this.mapType === layerBase.mapType.A_MAP) {
            this.map = new AMap.Map(this.renderTo, {
                resizeEnable: true,
                zoom: this.zoom,
                mapStyle: 'amap://styles/dark'
            });
        }
    }
    setCenter(lng, lat, zoom) {
        if(this.mapType === layerBase.mapType.T_MAP) {
            this.map.centerAndZoom(new T.LngLat(lng, lat), zoom || this.zoom);
        } else if(this.mapType === layerBase.mapType.B_MAP) {
            this.map.centerAndZoom(new BMap.Point(lng, lat), zoom || this.zoom);
        } else if(this.mapType === layerBase.mapType.A_MAP) {

        }
    }
    refresh() {
        //this.children.forEach(child => {
        //if(this.map.addOverLay) {
        //this.map.addOverLay(child.layer);
        //}
        //});
    }
    load(data) {

    }
}
