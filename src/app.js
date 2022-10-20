/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function excuse() {
  //write your code here
  const excuse = document.querySelectorAll("#excuse");
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  const whoRandom = who[Math.round(Math.random() * (who.length - 1))];
  const whatRandom = what[Math.round(Math.random() * (what.length - 1))];
  const whenRandom = when[Math.round(Math.random() * (when.length - 1))];
  document.getElementById("excuse").innerHTML =
    "<div>My " +
    whoRandom +
    " " +
    whatRandom +
    "<br> my " +
    whenRandom +
    ".</div>";
};
