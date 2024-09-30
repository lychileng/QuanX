// hide-ads.js
var adElements = document.querySelectorAll('.ad-class, #ad-id'); // 替换为页面中实际的广告容器类名或 ID
adElements.forEach(element => {
    element.style.display = 'none';
});
