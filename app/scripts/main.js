$(function(){
    var bodyDims = getViewport();
    $('#world-map').css("width",bodyDims[0]+"px");
    $('#world-map').css("height",bodyDims[1]+"px");
    $("#lightbox").on("click",onClickLightbox);
    // var map = $('#world-map').vectorMap({
    //     map: 'world_mill',
    //     //backgroundColor: '#ffffff',
    //     onRegionClick:function(event, code, e){   
    //         var name = (code);                          
    //         $("#lightbox").toggleClass("visible-partial");
    //         $("#floatyInfo").toggleClass("visible");
    //         $("#name").text(name);
    //         debugger;
    //         //window.location.replace("http://your url address/"+code+"");
    //    },
    //    zoomStep: 1.6
    // });
    window.currentMap = new jvm.Map({
        container: jQuery('#world-map'),
        map: "world_mill",
        onRegionClick:openDataView,
       series: {
         regions: [{
           values: popData,
           scale: ['#C8EEFF', '#0071A4'],
           normalizeFunction: 'polynomial'
         }]
       },
       zoomStep: 1.6
    });
})
function onClickLightbox(){
    $("#lightbox").toggleClass("visible-partial");
    $("#floatyInfo").toggleClass("visible");
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function openDataView(event, code, e){   
    $("#lightbox").toggleClass("visible-partial");
    $("#floatyInfo").toggleClass("visible");

    var name = (code);                          
    var size = window.currentMap.getRegionName(code);
    var gdp = popData[code]
    if (gdp==undefined){
        gdp="0.00";
    }
    $("#name").text(name+" "+size);
    $("#pop").text(numberWithCommas(gdp));
}
function getViewport() {

 var viewPortWidth;
 var viewPortHeight;

 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
 if (typeof window.innerWidth != 'undefined') {
   viewPortWidth = window.innerWidth,
   viewPortHeight = window.innerHeight
 }

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
 else if (typeof document.documentElement != 'undefined'
 && typeof document.documentElement.clientWidth !=
 'undefined' && document.documentElement.clientWidth != 0) {
    viewPortWidth = document.documentElement.clientWidth,
    viewPortHeight = document.documentElement.clientHeight
 }

 // older versions of IE
 else {
   viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
   viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
 }
 return [viewPortWidth, viewPortHeight];
}