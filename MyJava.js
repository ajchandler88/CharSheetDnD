$('#absOpen').click(function () {
  $('#DropUp #tabsDashboard #proFull, #DropUp #tabsDashboard #skillsFull, #DropUp #tabsDashboard #inventoryFull, #DropUp #tabsDashboard #spellsFull').css("display", "none");
    $('#DropUp #tabsDashboard #absFull').slideToggle({
      direction: "up"
    }, 300);
    $(this).toggleClass('absClose');
  }); // end click

  $('#proOpen').click(function () {
    $('#DropUp #tabsDashboard #absFull, #DropUp #tabsDashboard #skillsFull, #DropUp #tabsDashboard #inventoryFull, #DropUp #tabsDashboard #spellsFull').css("display", "none");
    $('#DropUp #tabsDashboard #proFull').slideToggle({
      direction: "up"
    }, 300);
    $(this).toggleClass('proClose');
  }); // end click

  $('#skillsOpen').click(function () {
    $('#DropUp #tabsDashboard #absFull, #DropUp #tabsDashboard #proFull, #DropUp #tabsDashboard #inventoryFull, #DropUp #tabsDashboard #spellsFull').css("display", "none");
    $('#DropUp #tabsDashboard #skillsFull').slideToggle({
      direction: "up"
    }, 300);
  }); // end click

  $('#inventoryOpen').click(function () {
    $('#DropUp #tabsDashboard #absFull, #DropUp #tabsDashboard #proFull, #DropUp #tabsDashboard #skillsFull, #DropUp #tabsDashboard #spellsFull').css("display", "none");
    $('#DropUp #tabsDashboard #inventoryFull').slideToggle({
      direction: "up"
    }, 300);
    $(this).toggleClass('inventoryClose');
  }); // end click

  $('#spellsOpen').click(function () {
    $('#DropUp #tabsDashboard #absFull, #DropUp #tabsDashboard #proFull, #DropUp #tabsDashboard #skillsFull, #DropUp #tabsDashboard #inventoryFull').css("display", "none");
    $('#DropUp #tabsDashboard #spellsFull').slideToggle({
      direction: "up"
    }, 10000);
    $(this).toggleClass('spellsClose');
  }); // end click



//

var header = document.getElementById("tabsDashboard");
var tab = header.getElementsByClassName("tab");
for (var i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

// 
//var dropdownContent=header.getElementsByClassName("dropdown-content");
//$( "#target" ).click(function() {
//  $( ".dropdown-content" ).toggle();
//});