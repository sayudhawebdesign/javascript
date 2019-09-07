// notification lib
var myNotification;
// ready
$(function() {
  // UI Interaction
  var myUI = new MyNamespace.UIComponents();
  // notification lib
  myNotification = new Lib.PopupNotification();
  // initialize ui component
  myUI.init();
});
