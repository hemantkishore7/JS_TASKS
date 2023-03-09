const url = "https://api-thirukkural.vercel.app/api?num=";
let num = 1;

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const heading = document.getElementById("sub-head");
const kuralNum = document.getElementById("kural-num");
const expl = document.getElementById('expl')

async function fetchData(id = 1, cb = () => {}) {
  try {
    let res = await fetch(url + id);
    let data = await res.json();
    
    console.log(data);
    if (data) {
      cb(data);
    }
  } catch (error) {
    console.log(error);
  }
}

function fetchKural(id) {
  if (id) {
    fetchData(id, updateApp);
  } else {
    fetchData(num, updateApp);
  }
}
fetchKural();

function updateApp(data = {}) {
    console.log(data);
  heading.innerText = data.sect_tam || "NA";
  kuralNum.innerText = "குறள் யென் : " + data.number || "NA";
  line1.innerText = data.line1 || "NA";
  line2.innerText = data.line2 || "NA"; 
  expl.innerText = data.tam_exp || 'NA';
  num++;
}
