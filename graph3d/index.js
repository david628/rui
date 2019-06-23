var cy, $scope = {
  labelcolorFlag: 'labelcolorFlag'
};
function main() {
  cy = new Graph3d({
    el: document.getElementById('id-test')
  });
  cy.add(getData());
  $scope.cy = cy;
}
function getData() {
  const N = 10;
  const label = ['AAA', 'BBB', 'CCC', 'DDD'];
  const gData = {
    nodes: [{
      id: 0,
      label: 'AAA'
    }, {
      id: 1,
      label: 'AAA'
    }, {
      id: 2,
      label: 'BBB'
    }, {
      id: 3,
      label: 'BBB'
    }, {
      id: 4,
      label: 'BBB'
    }, {
      id: 5,
      label: 'CCC'
    }, {
      id: 6,
      label: 'CCC'
    }, {
      id: 7,
      label: 'BBB'
    }, {
      id: 8,
      label: 'AAA'
    }, {
      id: 9,
      label: 'DDD'
    }],
    links: [{
      source: 0,
      target: 1
    }, {
      source: 0,
      target: 5
    }, {
      source: 0,
      target: 9
    }, {
      source: 1,
      target: 2
    }, {
      source: 2,
      target: 3
    }, {
      source: 0,
      target: 7
    }, {
      source: 5,
      target: 8
    }, {
      source: 6,
      target: 1
    }, {
      source: 4,
      target: 6
    }]
  };
  return gData;
}
function legend_handle(select) {
  let label = select.value;
  //cy.filter(label);
  $scope.currentSettingLabel = label;
  document.getElementById('id-label-title').innerHTML = `<div>${label}</div>`;
  $scope.cy.filter("[" + $scope.labelcolorFlag + "='" + label + "']").select();
}
function changeColor(selectedColor) {
  $scope.cy.nodes().filter(function(node) {
    return (node.data('label') === $scope.currentSettingLabel);
  }).style({
    'background-color': selectedColor
  });
}
function changeSize(size) {
  $scope.cy.nodes().filter(function(node) {
    return (node.data('label') === $scope.currentSettingLabel);
  }).style({
    'width': size + 'px',
    'height': size + 'px'
  });
}
function changeZoom(zoom) {
  var pos = [0, 0];
  cy.zoom({
    level: zoom + 0.2, //the zoom level
    position: { x: pos[0], y: pos[1] }
  });
}
main();