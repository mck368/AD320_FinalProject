$(document).ready(function(){
  $.getJSON("http://localhost:3000/movies/api/all", (result)=>{
    $.each(result, (i, field) => {
      var title = "<div class='film'><h3 film_id="
        +field.MovieID
        +" style='cursor: pointer'>"+field.Title+"</h3>"
        +"<div class='info' hidden='true'>" + field.Genre
        +"<br />Rating: "
        + field.Rating
        +"<br />Release Year: "
        + field.ReleaseDate
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
