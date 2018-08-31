//initialization
$(document).ready(function(){
    function fullPageInit() {
      $('#fullpage').fullpage({
        //navigation
        menu: '#icons',
        anchors:['page1'],
        //scrolling
        scrollOverflow: true,
        //design
        controlArrows: false,
      });
    };
    fullPageInit();

});
