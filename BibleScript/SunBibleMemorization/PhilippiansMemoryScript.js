// Java Script for SUNBIBLE Memorization Guide
$(document).ready(function(){
    var words = $( "#Philippians1" ).text().split( /\s+/ );
    var text = words.join( "</span> <span>" );
    $( "#Philippians1" ).html( "<span>" + text + "</span>" );
    $("span").click(function () { $(this).css("background-color", "black"); });
    var words = $( "#Philippians2" ).text().split( /\s+/ );
    var text = words.join( "</span> <span>" );
    $( "#Philippians2" ).html( "<span>" + text + "</span>" );
    $("span").click(function () { $(this).css("background-color", "black"); });
    var words = $( "#Philippians3" ).text().split( /\s+/ );
    var text = words.join( "</span> <span>" );
    $( "#Philippians3" ).html( "<span>" + text + "</span>" );
    $("span").click(function () { $(this).css("background-color", "black"); });
    var words = $( "#Philippians4" ).text().split( /\s+/ );
    var text = words.join( "</span> <span>" );
    $( "#Philippians4" ).html( "<span>" + text + "</span>" );
    $("span").click(function () { $(this).css("background-color", "black"); });
});