const N = 10;
const data = {
  nodes: [...Array(N).keys()].map(i => ({ id: i, label: i + 'admin' })),
  links: [...Array(N).keys()]
.filter(id => id)
  .map(id => ({
    source: id,
    target: Math.round(Math.random() * (id-1))
  }))
}
const Graph = ForceGraph3D()(document.getElementById('id-test'))
//.jsonUrl('miserables.json')
.nodeLabel('id')
//.nodeVal(20)
.linkDirectionalArrowLength(3.5)
.linkDirectionalArrowRelPos(1)
//.linkCurvature(0.25)
.nodeResolution(20)
.nodeAutoColorBy('id')
.showNavInfo(false)
.nodeThreeObjectExtend(true)
.nodeThreeObject(node => {
  // use a sphere as a drag handle
  const obj = new THREE.Mesh(
    new THREE.SphereGeometry(10),
    new THREE.MeshBasicMaterial({ depthWrite: false, transparent: true, opacity: 0 })
  );
  // add text sprite as child
  const sprite = new SpriteText(node.label);
  sprite.color = node.color;
  //sprite.position.y = -10;
  sprite.textHeight = 6;
  obj.add(sprite);
  return obj;
})
.linkThreeObjectExtend(true)
.linkThreeObject(link => {
  // extend link with text sprite
  const sprite = new SpriteText(`contain`);
  sprite.color = 'lightgrey';
  sprite.textHeight = 3;
  return sprite;
})
.linkPositionUpdate((sprite, { start, end }) => {
  const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
    [c]: start[c] + (end[c] - start[c]) / 2 // calc middle point
  })));
  // Position sprite
  Object.assign(sprite.position, middlePos);
});
Graph.graphData(data);
// Spread nodes a little wider
Graph.d3Force('charge').strength(-150);