const graph = require('./graph');
const dikstra = require('./dijkstra');

const map = new graph.Graph();

const daejeon = new graph.Node("대전", 0);
const seoul = new graph.Node("서울", null);
const daegu = new graph.Node("대구", null);
const chonan = new graph.Node("천안", null);
const busan = new graph.Node("부산", null);
const gangju = new graph.Node("광주", null);
const nonsan = new graph.Node("논산", null);

daejeon.makeLink(seoul, 300);
daejeon.makeLink(daegu, 250);
daejeon.makeLink(chonan, 20);
daejeon.makeLink(busan, 320);
daejeon.makeLink(gangju, 40);
daejeon.makeLink(nonsan, 10);

seoul.makeLink(daejeon, 280);
seoul.makeLink(daegu, 600);
seoul.makeLink(chonan, 120);
seoul.makeLink(busan, 620);
seoul.makeLink(gangju, 610);
seoul.makeLink(nonsan, 300);

daegu.makeLink(seoul, 140);
daegu.makeLink(daejeon, 50);
daegu.makeLink(chonan, 830);
daegu.makeLink(busan, 30);
daegu.makeLink(gangju, 430);
daegu.makeLink(nonsan, 100);

chonan.makeLink(seoul, 310);
chonan.makeLink(daegu, 150);
chonan.makeLink(daejeon, 220);
chonan.makeLink(busan, 20);
chonan.makeLink(gangju, 140);
chonan.makeLink(nonsan, 10);

busan.makeLink(seoul, 10);
busan.makeLink(daegu, 20);
busan.makeLink(daejeon, 120);
busan.makeLink(chonan, 30);
busan.makeLink(gangju, 140);
busan.makeLink(nonsan, 30);

gangju.makeLink(seoul, 510);
gangju.makeLink(daegu, 230);
gangju.makeLink(daejeon, 20);
gangju.makeLink(chonan, 320);
gangju.makeLink(busan, 10);
gangju.makeLink(nonsan, 10);

nonsan.makeLink(seoul, 10);
nonsan.makeLink(daegu, 30);
nonsan.makeLink(daejeon, 20);
nonsan.makeLink(chonan, 20);
nonsan.makeLink(busan, 10);
nonsan.makeLink(gangju, 10);

map.addNode(daejeon);
map.addNode(seoul);
map.addNode(nonsan);
map.addNode(chonan);
map.addNode(busan);
map.addNode(nonsan);
map.addNode(gangju);

dikstra(map);
map.printGraph();