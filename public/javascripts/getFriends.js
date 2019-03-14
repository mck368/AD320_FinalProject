$(document).ready(function(){
  $.getJSON("http://localhost:3000/friends/api/all", (result)=>{
    $.each(result, (i, field) => {
      var title = "<div class='film'><h3 film_id="
        +field.userName
        +" style='cursor: pointer'>"+field.userName+"</h3>"
        +"<div class='info' hidden='true'>" + field.Email
        +"<br />Favorite Movie: "
        + field.FavoriteMovie
        +"<br />Favorite Genre: "
        + field.FavoriteGenre
        + "</div></div>";
      $("#list").append(title);
    });
    $('.film').on('click', function(){
      if ($(this).children('.info').is(':hidden')){
        $('.info').hide();
        $(this).children('.info').show();
      } else {
        $(this).children('.info').hide();
      }
    });
  });
});
