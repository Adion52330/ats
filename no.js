d = new Date();
hours = d.getHours();
minutes = d.getMinutes();
year = d.getFullYear() + 1;
month = d.getMonth();
day = d.getDate();
document.getElementById("tm").innerHTML =
  day + "/" + month + "/" + year + " at " + hours + ":" + "00";
