const appId = "de0e378e47b8a72587fe49c0c3feb7f1";
const units = "metric";
const lang = "tr";

const input = document.getElementById("cityInput");

document.querySelector("button").onclick = () => {
  verGetir();
};

const verGetir = () => {
  let cityName = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appId}&units=${units}&lang=${lang}`;
  //   console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      ekranaBastir(data);
    });
};

const ekranaBastir = (veri) => {
  const { name, main, weather } = veri;
  const { temp } = main;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  document.querySelector("section").innerHTML += `
  <div class=" col-md-3 card-body border-2 ms-5 mt-3 d-inline-block bg-white  ">
    <h5 class="cityName fs-2">${name}   </h5>
 
    <div class="group-item text-center mt-3 fs-3">${temp}</div>
    <img src="${iconUrl}" alt="Weather Icon" class="group-item mt-4 ">
 
   
    <div class="group-item mt-3 text-center fs-3">
${veri.weather[0].description}
    </div>
   
   
 
 
</div>

`;
};
