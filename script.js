const oneKegGraph = document.querySelector(".oneKegGraph");
const beerThingyTop = document.querySelector(".beerThingyTop");
const beerCont = document.querySelector(".beerCont");
const beerLiquid = document.querySelector(".beerLiquid");
const rectBeer = document.querySelector(".rectBeer");
const beerNameTap = document.querySelector(".beerNameTap");

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
  let template = document.querySelector(".beerTemp").content;
  let kegGraphs = document.querySelector(".kegGraphs");
  kegGraphs.innerHTML = "";
  taps.forEach(tap => {
    //tap.level
    console.table(tap);
    let clone = template.cloneNode(true);
    clone.querySelector("h1").textContent = tap.id;

    kegGraphs.appendChild(clone);
  });
}
