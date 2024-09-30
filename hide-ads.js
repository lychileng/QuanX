// hide-ads.js
/* 
var adElements = document.querySelectorAll('.o-ads, #ad-id');
adElements.forEach(element => {
    element.style.display = 'none';
});
*/

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        var style = document.createElement('style');
        style.innerHTML = '.o-ads { display: none !important; }';
        document.head.appendChild(style);
    });
});

observer.observe(document.body, { childList: true, subtree: true });
