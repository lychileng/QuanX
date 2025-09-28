function filter(nodes) {
  const names = nodes.names;
  const types = $.filter(nodes.types, /shadowsocks|vmess/);
  const iplc = $.filter(names, /IPLC|IEPL/i);
  return AND(types,iplc);
}
