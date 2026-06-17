// mdads.js - Modora Official Ads Manager
// Simpan file ini di ROOT direktori website (misal: htdocs/mdads.js)

function renderModoraAd(adId) {
    switch(adId) {
        case 1:
            // --- Iklan 1 - Script Head ---
            document.write('<script src="https://pl29691904.effectivecpmnetwork.com/a0/13/0b/a0130b0465662fe49b41646684cc377f.js"></script>');
            break;
            
        case 2:
            // --- Iklan 2 - ukuran 320x50 ---
            document.write('<script> atOptions = { "key" : "71b6ce9e93e1fc97dcb5d4dba0a995d8", "format" : "iframe", "height" : 50, "width" : 320, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/71b6ce9e93e1fc97dcb5d4dba0a995d8/invoke.js"></script>');
            break;
            
        case 3:
            // --- Iklan 3 - ukuran 468x60 ---
            document.write('<script> atOptions = { "key" : "1fab8d804463024e9956dcff62e2dcf5", "format" : "iframe", "height" : 60, "width" : 468, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/1fab8d804463024e9956dcff62e2dcf5/invoke.js"></script>');
            break;
            
        case 4:
            // --- Iklan 4 - ukuran 728x90 ---
            document.write('<script> atOptions = { "key" : "64de5ec90b53769f0d08246a768daf41", "format" : "iframe", "height" : 90, "width" : 728, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/64de5ec90b53769f0d08246a768daf41/invoke.js"></script>');
            break;
            
        case 5:
            // --- Iklan 5 - Native Async ---
            document.write('<script async="async" data-cfasync="false" src="https://pl29691905.effectivecpmnetwork.com/ed84ce1e1a3585bd590fc6746c9fbeac/invoke.js"></script>');
            document.write('<div id="container-ed84ce1e1a3585bd590fc6746c9fbeac"></div>');
            break;
            
        case 6:
            // --- Iklan 6 - ukuran 300x250 ---
            document.write('<script> atOptions = { "key" : "c2d4ebdf1ad8056e518866927fd80ff2", "format" : "iframe", "height" : 250, "width" : 300, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/c2d4ebdf1ad8056e518866927fd80ff2/invoke.js"></script>');
            break;
            
        case 7:
            // --- Iklan 7 - Script Body ---
            document.write('<script src="https://pl29691906.effectivecpmnetwork.com/39/52/84/395284c5585d8a90e1ab9d3f3da53eb6.js"></script>');
            break;
    }
}