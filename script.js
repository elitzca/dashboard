const oneKegGraph = document.querySelector(".oneKegGraph");
const beerThingyTop = document.querySelector(".beerThingyTop");
const beerCont = document.querySelector(".beerCont");
const beerLiquid = document.querySelector(".beerLiquid");
const rectBeer = document.querySelector(".rectBeer");
const beerNameTap = document.querySelector(".beerNameTap");
let template = document.querySelector(".beerTemp").content;

document.addEventListener("DOMContentLoaded", init);
//const data = FooBar.getData();
// const newData = JSON.parse(FooBar.getData());

function init() {
  //little man animation

  setInterval(update, 5000); //   <------
}

update();

function update() {
  const data = JSON.parse(FooBar.getData());

  console.log(data);
  handleBartenders(data);
  handleQueue(data.queue);
  bartenders(data.bartenders);
  stateBartenders(data.bartenders);
  taskBartenders(data.bartenders);

  createTapGraphContainers(data.taps);
}

function handleQueue(queue) {
  document.querySelector(" #queue h2").textContent = queue.length;
  document.querySelector("#queue #qv").style.width = 56 * queue.length + "px";
}

function handleBartenders(taps) {
  //console.log(taps);
}

//get  jonas

function bartenders(bartenders) {
  // get bartenders names
  const all = document.querySelectorAll(".bartender");
  all.forEach((div, index) => {
    div.querySelector("h1").textContent = bartenders[index].name;
    div.querySelector(".state").textContent = bartenders[index].status;
  });
}

function stateBartenders(bartenders) {
  //document.querySelector(".stateJ").textContent = bartenders[1].status;
}

function taskBartenders(bartenders) {
  const all = document.querySelectorAll(".bartender");
  all.forEach((div, index) => {
    if (bartenders[index].statusDetail === "pourBeer") {
      div.querySelector("img").src = "svg/beer.svg";
    } else if (bartenders[index].statusDetail === "startServing") {
      div.querySelector("img").src = "svg/serving.svg";
    }
  });
}

function createTapGraphContainers(taps) {
  let kegGraphs = document.querySelector(".kegGraphs");
  kegGraphs.innerHTML = "";
  taps.forEach(tap => {
    //tap.level
    let clone = template.cloneNode(true);
    let newHeight = (tap.level * 200) / tap.capacity + "px";

    clone.querySelector("h1").textContent = tap.id;
    clone.querySelector(".beerCont").style.height = "200px";
    clone.querySelector(".beerLiquid").style.height = newHeight;
    clone.querySelector(
      ".thingyTop"
    ).innerHTML = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 28">
    <defs>
        <style>
            .cls-1 {
                fill: #999;
            }
        </style>
    </defs>
    <title>tap-upper</title>
    <g id="upperPartTap">
        <rect class="cls-1" y="14" width="59" height="14" rx="2.4175" ry="2.4175" />
        <rect class="cls-1" x="25" y="6" width="10" height="8" />
        <rect class="cls-1" x="12" width="35" height="6" rx="1.5882" ry="1.5882" />
    </g>
</svg>`;

    //console.log(newHeight);
    kegGraphs.appendChild(clone);
  });
}
