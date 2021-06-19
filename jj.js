if (document.getElementById("inputGroupSelect01").value == "bhim") {
  document.getElementById("n4").disabled;
} else if (document.getElementById("inputGroupSelect01").value == "visa") {
  document.getElementById("gone1").disabled;
} else if (document.getElementById("inputGroupSelect01").value == "cash") {
  document.getElementById("gone1").style.display = "none";
  document.getElementById("gone2").style.display = "initial";
}

function validate() {
  setTimeout(function () {
    alert("Thanks for visiting! Happy Travelling!");
    location.reload();
  }, 1200);
  return false;
}
