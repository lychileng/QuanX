(async () => {
  let proxies = $config.getProxies();
  let proxyLatencies = await Promise.all(proxies.map(async proxy => {
    let latency = await $http.ping(proxy.server, { timeout: 5000 });
    return { proxy, latency };
  }));

  proxyLatencies.sort((a, b) => a.latency - b.latency);
  
  let bestProxy = proxyLatencies[0].proxy;
  $done({ action: "select", node: bestProxy.name });
})();