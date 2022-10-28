'use strict';
document.addEventListener('load', overrideCSS);
document.addEventListener('DOM', overrideCSS);
overrideCSS();
function overrideCSS() {
  const style = document.createElement('style');
  style.innerHTML = `
@media only screen and (max-width: 2500px) {
  .ha__ribbon,
  .js_header,
  #header-wrap,
  .media__video--thumbnail-wrapper,
  .advert_container,
  .jppanel,
  .adContainer,
  .GoogleActiveViewElement,
  div[class^='pogo'],
  div[class*=' pogo'],
  div[id^='pogo'],
  div[id*=' pogo'],
  div[class^='google'],
  div[class*=' google'],
  div[id^='google'],
  div[id*=' google'],
  div[class^='goog'],
  div[class*=' goog'],
  div[id^='goog'],
  div[id*=' goog'],
  div[class^='videoAdUi'],
  div[class*=' videoAdUi'],
  div[id^='videoAdUi'],
  div[id*=' videoAdUi'],
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
    margin:0!important;
    display:none!important;
    visibility:hidden!important;
    width:0!important;
    height:0!important;
    padding:0!important;
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
}

