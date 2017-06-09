$(document).ready(function(){
  var state = {
    url: "https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=7d0ae5aa0b5d49ff9a0470e03d42275d",
    url2: "https://newsapi.org/v1/articles?source=talksport&sortBy=latest&apiKey=7d0ae5aa0b5d49ff9a0470e03d42275d"
};


function getApi(){
  $.getJSON(state.url,function(data){
    // console.log(data);
    data.articles.forEach(function(ele){
      var article = ele;
      var imageUrl = article.urlToImage;
      var articleUrl = article.url;
      var title = article.title;
      var image = "<section class='top-stories'>" + "<a href=' " + articleUrl + "' target='_blank'>"  + "<img src=" + imageUrl + ">" + "<h3 class='title'>" + title + "</h3>"  + "</a>" + "</section>" ;
      $(".latest").append(image);
      // console.log(article.url);
    })
  });
  $.getJSON(state.url2,function(data){
    // console.log(data);
    data.articles.forEach(function(ele){
      var article2 = ele;
      var titleUrl = article2.url;
      var title = article2.title;
      var sideStories =   "<p class='side-stories-title'>" +  "<a href=' " + titleUrl + "' target='_blank'>" + title  + "<hr />" + "</a>" + "</p>";
      $(".right-sidebar").append(sideStories);
    })
  });
}

getApi();
});
