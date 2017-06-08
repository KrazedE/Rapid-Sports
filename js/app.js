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
      var url = article.urlToImage;
      var title = article.title;
      var image = "<section class='top-stories'>" + "<img src=" + url + ">" + "<h3 class='title'>" + title + "</h3>"  + "</section>" ;
      $(".latest").append(image);


      // console.log(ele);
    })
  });
  $.getJSON(state.url2,function(data){
    // console.log(data);
    data.articles.forEach(function(ele){
      // console.log(ele);
    })
  });
}

getApi();
});