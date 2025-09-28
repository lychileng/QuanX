// 调用原官方解析器
const origin = "https://cdn.jsdelivr.net/gh/KOP-XIAO/QuantumultX@master/Scripts/resource-parser.js";
$.import(origin);

// 再加上你的过滤函数
function filter(nodes) {
  const names = nodes.names;
  const iplc = $.filter(names, /IPLC|IEPL/i);
  return iplc;
}
