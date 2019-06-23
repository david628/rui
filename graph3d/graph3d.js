class Graph3d {
  constructor(props) {
    this.globalColor = [
      'red',
      'green',
      'gold',
      'blue'
    ];
    this.globalColorNum = 0;
    this.color = {};
    this.size = {};
    this.defaultSize = 6;
    Object.assign(this, props);
    this.init();
  }
  init() {
    this.chart = ForceGraph3D()(this.el);
    this.camera = this.chart.camera();
    //this.el.addEventListener('mousedown', () => {})
    this.selectNodes = [];
    this.selectLinks = [];
    this.selectGroup = '';
    this.activeNodes = [];
    var g3d = this.chart;
    g3d.linkThreeObjectExtend(true);
    g3d.linkThreeObject(link => {
      const sprite = new SpriteText('contain');
      if(!this.selectLinks.length) {
        if(!this.activeNodes.length) {
          sprite.material.opacity = 1;
        } else {
          sprite.material.opacity = 0.1;
        }
      } else {
        if(this.selectLinks.indexOf(link) === -1) {
          sprite.material.opacity = 0.1;
        } else {
          sprite.material.opacity = 1;
        }
      }
      sprite.color = 'lightgrey';
      sprite.textHeight = 3;
      sprite.scale.z = 1;
      return sprite;
    });
    g3d.nodeThreeObjectExtend(true);
    g3d.nodeThreeObject((node, a) => {
      const sprite = new SpriteText(`${node.label}--${node.id}`);
      // if(node.data === undefined) {
      //   node.data = (t) => {
      //     return node[t];
      //   }
      // }
      // if(node.style === undefined) {
      //   node.style = (t) => {
      //     // if(!node.css) {
      //     //   node.css = {};
      //     // }
      //     // Object.assign(node.css, t);
      //     console.log(this);
      //     return this;
      //   }
      // }
      // sprite.color = this.getColor(node);
      if(!this.selectNodes.length) {
        sprite.material.opacity = 1;
        //sprite.color = 'lightgrey';
      } else {
        if(this.selectNodes.indexOf(node) === -1) {
          sprite.material.opacity = 0.1;
          //sprite.color = 'lightgrey';
        } else {
          sprite.material.opacity = 1;
          //sprite.color = this.getColor(node);
        }
      }
      sprite.color = 'lightgrey';
      sprite.textHeight = 4;
      sprite.position.y = -8;
      sprite.scale.z = 1;
      return sprite;
    });
    g3d.linkPositionUpdate((sprite, { start, end }) => {
      const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
        [c]: start[c] + (end[c] - start[c]) / 2
      })));
      Object.assign(sprite.position, middlePos);
    });
    g3d.cooldownTicks((node) => {
      console.log(node);
    });
    g3d.linkDirectionalArrowLength(3.5);
    g3d.linkDirectionalArrowRelPos(1);
    g3d.nodeResolution(20);
    //g3d.nodeAutoColorBy('id');
    g3d.showNavInfo(false);
    g3d.nodeRelSize(2);
    //g3d.enablePointerInteraction(false);
    //g3d.nodeOpacity(1);
    //g3d.linkOpacity(0.1);
    g3d.nodeOpacity(1);
    g3d.nodeVal(node => {
      return this.getSize(node);
    });
    g3d.nodeColor(node => {
      if(!this.selectNodes || !this.selectNodes.length) {
        return this.getColor(node);
      } else {
        return this.selectNodes.indexOf(node) === -1 ? 'rgba(255,255,255,0.4)' : this.getColor(node);
      }
    });
    g3d.linkColor(node => {
      if(!this.selectLinks || !this.selectLinks.length) {
        return 'lightgrey';
      } else {
        return this.selectLinks.indexOf(node) === -1 ? 'rgba(255,255,255,0.4)' : 'lightgrey';
      }
    });
    g3d.linkWidth(link => {
      return this.selectLinks.indexOf(link) === -1 ? 0 : 0;
    });
    g3d.linkDirectionalParticles(link => {
      return this.selectLinks.indexOf(link) === -1 ? 0 : 4;
    });
    // g3d.linkVisibility(link => {
    //   return this.selectLinks.indexOf(link) === -1 ? false : true;
    // });
    // g3d.linkMaterial((link) => {
    //   console.log(link);
    //   if(link.__lineObj) {
    //     if(!link.__lineObj.material.needsUpdate) {
    //       link.__lineObj.material.needsUpdate = true;
    //     }
    //     if(this.selectLinks.indexOf(link)) {
    //       link.__lineObj.material.color = 1;
    //     } else {
    //       link.__lineObj.material.opacity = 0;
    //     }
    //   }
    // });
    g3d.onNodeClick(node => {
      let sd = this.getFilterData(node.id, this.data);
      this.selectNodes = sd.nodes;
      this.selectLinks = sd.links;
      this.activeNodes = []
      this.update();
    });
    g3d.onLinkClick(link => {
      this.selectLinks = [link];
      this.selectNodes = [link.source, link.target];
      this.activeNodes = []
      this.update();
    });
    g3d.linkDirectionalParticleWidth(1);
    // g3d.onNodeHover(node => {
    //   // if ((!node && !this.selectNodes.length) || (this.selectNodes.length === 1 && this.selectNodes[0] === node)) return;
    //   // this.selectNodes = node ? [node] : [];
    //   this.update();
    // });
    // g3d.onLinkHover(link => {
    //   // if (this.selectLink === link) return;
    //   // this.selectLink = link;
    //   // this.selectNodes = link ? [link.source, link.target] : [];
    //   this.update();
    // });
  }
  getSize(node) {
    if(!this.size[node.label]) {
      this.size[node.label] = this.defaultSize;
    }
    return this.size[node.label];
  }
  getColor(node) {
    if(!this.color[node.label]) {
      this.color[node.label] = this.globalColor[this.globalColorNum];
      if(this.globalColorNum >= this.globalColor.length - 1) {
        this.globalColorNum = 0;
      } else {
        this.globalColorNum++;
      }
    }
    return this.color[node.label];
  }
  elements() {// 清空画布数据 cy.elements().remove();

  }
  edges() {// 更改默认边宽度为6 $scope.cy.edges().style('width', KSHORTEDGEDEFAULT);

  }
  style(style) {// 设置样式 cy.style(style);
    if(style['background-color']) {
      for(let i = 0; i < this.selectNodes.length; i++) {
        this.color[this.selectNodes[i].label] = style['background-color'];
      }
    } else if(style['width'] || style['height']) {
      for(let i = 0; i < this.selectNodes.length; i++) {
        if(style['width'] == '12px') {
          this.size[this.selectNodes[i].label] = 6;
        } else if(style['width'] == '14px') {
          this.size[this.selectNodes[i].label] = 18;
        } else if(style['width'] == '16px') {
          this.size[this.selectNodes[i].label] = 42;
        } else if(style['width'] == '18px') {
          this.size[this.selectNodes[i].label] = 78;
        } else if(style['width'] == '20px') {
          this.size[this.selectNodes[i].label] = 122;
        }
      }
    }
    this.update();
    return this;
  }
  zoom(z) {// 放大，缩小
    // cy.zoom({
    //   level: zoom + 0.2, //the zoom level
    //   position: { x: pos[0], y: pos[1] }
    // });
    var zIndex = parseFloat(z.level, 10);
    if(zIndex == 0.2) {
      this.camera.position.z = this.z;
    } else if(zIndex == 1.2) {
      this.camera.position.z -= 20;
    } else if(zIndex == -0.8) {
      this.camera.position.z += 20;
    }
  }
  add(data) {// 添加节点数据  cy.add(graphDeepData);
    this.data = data || [];
    this.chart.graphData(this.data);
    this.chart.d3Force('charge').strength(-150);
    setTimeout(() => {
      this.z = this.camera.position.z;
    }, 3000);
  }
  trigger() {// cy.trigger('pan zoom viewport');

  }
  notify() {
    // cy.notify({ // notify the renderer that the viewport changed
    //   type: 'viewport'
    // });
  }
  nodes() {
    return this;
  }
  getFilterData(nodeID, data) {
    let searchData = {
      links: [],
      nodes: []
    };
    let ids = [];
    for(let link of data.links) {
      let source = link.source.id != undefined ? link.source.id : link.source,
      target = link.target.id != undefined ? link.target.id : link.target;
      if(source == nodeID || target == nodeID) {
        searchData.links.push(link);
        if(ids.find(id => id === source) == undefined) {
          ids.push(source);
        }
        if(ids.find(id => id === target) == undefined) {
          ids.push(target);
        }
      }
    }
    for(let node of data.nodes) {
      if(ids.find(id => id === node.id) != undefined) {
        searchData.nodes.push(node);
      }
    }
    return searchData;
  }
  filter(selector) {// 点击图例选中节点 $scope.cy.filter("[" + $scope.labelcolorFlag + "='" + label + "']").select();
    // 改变节点颜色
    // $scope.cy.nodes().filter(function(node) {
    //   return (node.data('label') === $scope.currentSettingLabel);
    // }).style({
    //   'background-color': selectedColor
    // });
    // 更改画布上对应点大小
    // $scope.cy.nodes().filter(function(node) {
    //   return (node.data('label') === $scope.currentSettingLabel);
    // }).style({
    //   'width': size + 'px',
    //   'height': size + 'px'
    // });
    if(typeof selector === 'function') {

    } else {
      let str = selector.replace(/(^\[)|(\]$)/g, "");
      console.log(str);
      //eval(str);
      let arr = str.split("=");
      this.selectGroup = arr[1].replace(/(^\')|(\'$)/g, "");
      this.selectNodes = [];
      this.selectLinks = [];
      this.activeNodes = []
      //var ids = [];
      for(let i = 0; i < this.data.nodes.length; i++) {
        if(this.data.nodes[i].label == this.selectGroup) {
          this.selectNodes.push(this.data.nodes[i]);
          this.activeNodes.push(this.data.nodes[i]);
        }
      }
      // for(let link of this.data.links) {
      //   let source = link.source.id != undefined ? link.source.id : link.source,
      //   target = link.target.id != undefined ? link.target.id : link.target;
      //   if(ids.find(id => id === source) == undefined || ids.find(id => id === target) == undefined) {
      //     this.selectLinks.push(link);
      //   }
      // }
    }
    // if(style) {
    //   this.selectGroup = style;
    //   this.update();
    // }
    return this;
  }
  animate() {
    // cy.animate({
    //   zoom: zoom,
    //   pan: position
    // }, _.extend({}, GES_ANIMATION, {
    //   queue: false
    // }));
  }
  select() {
    this.update();
  }
  update() {
    this.chart.nodeOpacity(1);
  }
}