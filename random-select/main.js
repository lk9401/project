$(document).ready(function()
{
   $("input").click(function()
    {
      let numberOfListItem = $("li").length - 6;
      let randomChildNumber=Math.floor(Math.random()*numberOfListItem);
      $("H1").text($("li").eq(randomChildNumber + 6).text());
      $("img").attr("src", pictures[randomChildNumber]);
    });
});