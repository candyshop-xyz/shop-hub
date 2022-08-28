// getTraits();

if (typeof window !== "undefined") {
  var selectionWrap = document.getElementsByClassName("selectionWrap")[0];
}

export default async function getTraits() {
  const traitsJson = [
    "background",
    "type",
    "smoke",
    "eyes",
    "mouth",
    "chain",
    "shirt",
    "shorthair",
    "longhair",
    "hatunderheadphones",
    "beard",
    "headphones",
    "hatoverheadphones",
    "watch",

  ];

  for (var i = 0; i < traitsJson.length; i++) {
    var response = await fetch(`./traits/${traitsJson[i]}.json`);
    var mytrait = await response.json();

    var optionsWrap = document.createElement("DIV");
    // optionsWrap.className =
    //   "optionsWrap origin-top-right  right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
    optionsWrap.className = "optionsWrap";
    selectionWrap.appendChild(optionsWrap);

    var myLabel = document.createElement("LABEL");
    myLabel.setAttribute("for", traitsJson[i].name);
    myLabel.innerText = traitsJson[i];
    optionsWrap.appendChild(myLabel);

    var mySelector = document.createElement("select");
    mySelector.onchange = pickTrait;
    mySelector.setAttribute("data-option", traitsJson[i]);
    mySelector.className =
      "optionsWrap origin-top-right text-sm right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
    // mySelector.className = "mySelector";
    mySelector.setAttribute("name", traitsJson[i].name);
    optionsWrap.appendChild(mySelector);

    var myoption = document.createElement("option");
    myoption.value = "none";
    myoption.setAttribute("data-option", traitsJson[i]);
    myoption.innerText = "none";
    mySelector.appendChild(myoption);

    for (var m = 0; m < mytrait.length; m++) {
      var myoption = document.createElement("option");
      myoption.value = mytrait[m].fileId;
      myoption.innerText = mytrait[m].fileId;
      mySelector.appendChild(myoption);
    }
  }
}

function pickTrait() {
  var theoption = this.getAttribute("data-option");

  if (this.value !== "none") {
    var mysrc = `/traits/${theoption}/${this.value}.png`;
    layersArray[theoption] = mysrc;
    console.log(theoption);
  } else {
    console.log("select an option");
    console.log(theoption);
    layersArray[theoption] = "";
  }
  drawMfer();
}

var canvasSize = 1000;

var layersArray = {
  background: "", 
  type: "", 
  smoke: "", 
  eyes: "", 
  mouth: "", 
  chain: "",  
  shirt: "", 
  shorthair: "", 
  longhair: "", 
  hatunderheadphones: "", 
  beard: "", 
  headphones: "", 
  hatoverheadphones: "", 
  watch: "", 
};

async function drawMfer(mysrc) {
  var mycanvas = document.getElementById("canvas");
  mycanvas.width = mycanvas.height = canvasSize;
  var context = mycanvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (var key in layersArray) {
    if (layersArray[key] !== "") {
      let myimg = layersArray[key];
      myimg = new Image();
      myimg.src = layersArray[key];
      myimg.className = "traitImg";
      await myimg.decode();
      context.drawImage(myimg, 0, 0, canvasSize, canvasSize);
    }
  }
}

export function downloadMfer() {
  let downloadLink = document.createElement("a");
  downloadLink.setAttribute("download", "MyNewMfer.png");
  let canvas = document.getElementById("canvas");
  canvas.toBlob(function (blob) {
    let url = URL.createObjectURL(blob);
    downloadLink.setAttribute("href", url);
    downloadLink.click();
  });
}
