import Chart from "../index";
import layerBase from '../layerBase';
export default class Track extends Chart {
    constructor(props) {
        super();
        Object.assign(this, props);
        this.data = [];
        this.init();
    }
    init() {

    }
    refresh() {
        let data = [];
        this.load(data);
    }
    load(data) {
        this.remove();
        this.data = data || [];

    }
    remove() {
        if(this.layer) {
            layerBase.removeLayer(this.layer.text, this.parent.map);
            this.layer = null;
        }
    }
}
