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
    //showing stuff

    $("#windowBlogHomeLink").click(function(){
      $("#windowBlogPosts").css('display','none');
      $("#windowBlogHome").show();
  });

    $(".windowBlogLink1").click(function(){
      $("#windowBlogPosts").css('display','block');
      $("#windowBlogPost1").css('display','block');
      $("#windowBlogHome").hide();
  });

    $(".windowBlogLink2").click(function(){
      $("#windowBlogPosts").css('display','block');
      $("#windowBlogPost2").css('display','block');
      $("#windowBlogHome").hide();
  });

    $(".windowBlogLink3").click(function(){
      $("#windowBlogPosts").css('display','block');
      $("#windowBlogPost3").css('display','block');
      $("#windowBlogHome").hide();
    });

});
