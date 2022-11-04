'use strict';
overrideCSS();
document.addEventListener('load', overrideCSS);
document.addEventListener('DOMContentLoaded', overrideCSS);

function overrideCSS() {
  const style = document.createElement('style');
  style.innerHTML = `
@media only screen and (max-width: 2105px) {
  .ad-active,
  .ha__ribbon,
  #ad-container,
  .js_header,
  #header-wrap,
  .media__video--thumbnail-wrapper,
  .advert_container,
  .jppanel,
  .adContainer,
  .GoogleActiveViewElement,
  .ad,
    #ad,
    .GoogleCreativeContainerClass,
   div[class^='google_ads_iframe'],
  div[class*=' google_ads_iframe'],
  div[id^='google_ads_iframe'],
  div[id*=' google_ads_iframe'],
   div[class^='scrollover-ad-wrap'],
  div[class*=' scrollover-ad-wrap'],
  div[id^='scrollover-ad-wrap'],
  div[id*=' scrollover-ad-wrap'],
  div[class^='pogo'],
  div[class*=' pogo'],
  div[id^='pogo'],
  div[id*=' pogo'],
    div[class^="ad-"],
  div[id^="ad"],
  div[class^='google'],
  div[class*=' google'],
  div[id^='google'],
  div[id*=' google'],
  div[class^='videoAdUi'],
  div[class*=' videoAdUi'],
  div[id^='videoAdUi'],
  div[id*=' videoAdUi'],
  #bg_clicked,
  div[class^='trueview'],
  div[class*=' trueview'],
  div[id^='trueview'],
  div[id*=' trueview'],
  div[class^='Sekindo'],
  div[class*=' Sekindo'],
  div[id^='Sekindo'],
  div[id*=' Sekindo'],
  .videoAdUi,
  .ima-sdk-frame,
  .adBanner,
  .adchoices-container,
  .adContainerDiv,
  #adContainerDiv,
  #imaSlotContainer,
  #videoContainerDiv,
  div[class^='primis'],
  div[class*=' primis'],
  div[id^='primis'],
  div[id*=' primis'],
  .theiaStickySidebar,
  div[class^='AdBundle'],
  div[class*=' AdBundle'],
  div[id^='AdBundle'],
  div[id*=' AdBundle'],
  div[class^='unit'],
  div[class*=' unit'],
  div[id^='unit'],
  div[id*=' unit'],
  .dom_annotate_ad_video_ad,
  .dom_annotate_ad_promoted_answer,
  #unit-container,
  .OUTBRAIN,
  div[class^='ob'],
  div[class*=' ob'],
  div[id^='ob'],
  div[id*=' ob'],
  .ob-widget,
  #stickyadcontainer
  {
    display:none!important;
    visibility:hidden!important;
    width:0!important;
    height:0!important;
    opacity:0!important;
    filter:opacity(0)!important;
    background:transparent!important;
  }
}
    `;
  document.head.appendChild(style);
  var link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);

  window.console && console.log('ezmode');


}
