export default async function createCard(location, data) {
  const card = document.querySelector(".weather-results");
  const table = document.createElement("table");
  const title = document.createElement("tr");
  const tempRow = document.createElement("tr");
  const minRow = document.createElement("tr");
  const maxRow = document.createElement("tr");

  //resets card
  card.textContent = " ";

  table.classList.add("weather-card");
  title.textContent = `${location}, ${data.country}`;
  title.id = "weather-card-title";
  tempRow.textContent = `Current: ${data.temp}`;
  minRow.textContent = `Low: ${data.minTemp}`;
  maxRow.textContent = `High: ${data.maxTemp}`;

  table.append(title);
  table.append(tempRow);
  table.append(minRow);
  table.append(maxRow);
  card.append(table);
}
