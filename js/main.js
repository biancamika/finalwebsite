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
    //showing stuff BLOG

    $("#windowBlogHomeLink").click(function(){
      $("#windowBlogPost1").addClass("hidden");
      $("#windowBlogPost2").addClass("hidden");
      $("#windowBlogPost3").addClass("hidden");
      $("#windowBlogPost4").addClass("hidden");
      $("#windowBlogHome").removeClass("hidden")
  });

    $(".windowBlogLink1").click(function(){
      $("#windowBlogPost1").removeClass("hidden")
      $("#windowBlogHome").addClass("hidden");
  });

    $(".windowBlogLink2").click(function(){
      $("#windowBlogPost2").removeClass("hidden")
      $("#windowBlogHome").addClass("hidden");
  });

    $(".windowBlogLink3").click(function(){
     $("#windowBlogPost3").removeClass('hidden');
     $("#windowBlogHome").addClass('hidden');
    });

    $(".windowBlogLink4").click(function(){
      $("#windowBlogPost4").removeClass('hidden');
      $("#windowBlogHome").addClass('hidden');
    });

    //showing stuff PORTFOLIO
    $("#windowPortfolioHomeLink").click(function(){
      $("#windowPortfolioArt").addClass("hidden");
      $("#windowPortfolioDesign").addClass("hidden");
      $("#windowPortfolioPhotography").addClass("hidden");
      $("#windowPortfolioHome").removeClass("hidden")
  });
    
    $(".windowPortfolioLink1").click(function(){
      $("#windowPortfolioArt").removeClass('hidden');
      $("#windowPortfolioHome").addClass('hidden');
    });

    $(".windowPortfolioLink2").click(function(){
      $("#windowPortfolioDesign").removeClass('hidden');
      $("#windowPortfolioHome").addClass('hidden');
    });

    $(".windowPortfolioLink3").click(function(){
      $("#windowPortfolioPhotography").removeClass('hidden');
      $("#windowPortfolioHome").addClass('hidden');
    });

});
