/* dist/boilerplate.briefcase.widget.js v1.4.1 Mon Jan 17 2022 13:00:51 GMT-0500 (Eastern Standard Time) */
!function(){function t(){var e=new Briefcase,t=e.getBriefcaseIDs(),o=e.data_attr_briefcase,c=e.data_attr_trigger,n=e.getDataObject();this.init=function(){n.then(function(s){s.success&&0!==t.length?(t.forEach(function(e,t){var n,i,r=s.result[t],a=document.querySelector("["+o+'= "'+e+'"]');s.result[t].briefcase_id.hasOwnProperty(e)&&s.result[t][e];if(0<r.record_count&&!0===r.success){if(n=u(r),a.innerHTML+=n,null===(i=document.querySelector("["+c+"='"+e+"']")))return;i.style.display="block"}}),window.setTimeout(function(){void 0!==$.hotlink.bindEvents&&$.hotlink.bindEvents("["+o+"]")})):hideAllBriefcaseTriggers(t)})};var u=function(e){var a="";return e.result.forEach(function(e,t){var n=void 0!==e.presentation_title?e.presentation_title:e.presentation_id,i=e.presentation_media,r=e.presentation_id;a+='<li class="item" data-slide="'+i+'" data-presentation="'+r+'">'+n+"</li>"}),'<ul class="briefcase-list">'+a+"</ul>"}}document.addEventListener("DOMContentLoaded",function(e){(new t).init()})}();