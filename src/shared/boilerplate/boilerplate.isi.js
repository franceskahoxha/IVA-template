/* dist/boilerplate.isi.js v1.0.2 Mon Jan 17 2022 10:44:30 GMT-0500 (Eastern Standard Time) */
var iva_isi=function(o){function i(){t&&(console.log("ISI iScroll object deleted"),t.destroy())}var t,n=function(i){o(this).addClass("active"),setTimeout(function(){(t=new IScroll(".isi-content",{scrollX:!0,scrollbars:"custom",resizeScrollbars:!1})).refresh(),t.scrollTo(0,0,0)},500)},e=function(){o(".isi-link").removeClass("active"),o(".img--isi-full").attr("style",""),i()},r={};return r.init=function(){o(".isi-link").hammer().on("tap",n),o(".modal-overlay, .isi-container .modal-button-close, [data-modal-trigger-open]").hammer().on("tap",e)},r.destroyISIObject=function(){i()},r}(jQuery);!function(i){i(document).ready(function(){iva_isi.init(i)})}(jQuery);