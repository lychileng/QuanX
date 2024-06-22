const proxies = $config.getProxies();
const proxyLatencies = proxies.map(proxy => {
  const latency = $http.ping(proxy.server, { timeout: 5000 });
  return { proxy, latency };
});

proxyLatencies.sort((a, b) => a.latency - b.latency);

const bestProxy = proxyLatencies[0].proxy;
$done({ action: "select", node: bestProxy.name });