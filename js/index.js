let selectFrom = document.querySelector(".lang1");
let selectTo = document.querySelector(".lang2");
let textarea1 = document.querySelector(".textarea1");
let textarea2 = document.querySelector(".textarea2");
let button = document.querySelector("button");

let countriesKeys = Object.keys(countries);
// console.log(countriesKeys);

countriesKeys.map((key) => {
  //   console.log(countries[key]);
  let countryName = `<option value=${key}>${countries[key]}</option>`;
  selectFrom.innerHTML += countryName;
  selectTo.innerHTML += countryName;
});

button.addEventListener("click", () => {
  fetch(
    `https://api.mymemory.translated.net/get?q=${textarea1.value}&langpair=${selectFrom.value}|${selectTo.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      textarea2.innerHTML = data.responseData.translatedText;
    });
});
