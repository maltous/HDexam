function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6O3Unk9zLOg":
        Script1();
        break;
      case "5kjuYXwgSlg":
        Script2();
        break;
      case "5osnjifnj1G":
        Script3();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script3()
{
  $("#tab-customlink").show();
}

