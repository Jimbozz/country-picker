const url = "https://countriesnow.space/api/v0.1/countries";
const countryContainer = document.querySelector(".country");
const countryButton = document.querySelector(".button");

async function getCountries() {
  try {
    const response = await fetch(url);
    const getResponse = await response.json();

    console.log(getResponse.data.length);

    countryButton.onclick = function () {
      var country =
        getResponse.data[Math.floor(Math.random() * getResponse.data.length)];
      if (getResponse) {
        countryContainer.innerHTML = `<h3><span>&#128293</span>${country.country}<span>&#128293</span></h3>`;
      } else {
        countryContainer.innerHTML = `<p>Please reload the page</p>`;
      }
    };
  } catch (error) {
    console.log("Looks like something went wrong");
  }
}

getCountries();
