const list = document.querySelector('#results');

const insertUnis = (data) => {
  data.slice(0, 12).forEach((result) => {
    const uniTag = `
    <div class="card" style="width: 28rem;">
  <div class="card-body">
    <h5 class="card-title">${result.name}</h5>
    <p class="card-text">${result.country}</p>
    <a href="${result.web_pages}" class="btn btn-primary">Explore!</a>
  </div>
</div>
    `;
    list.insertAdjacentHTML('beforeend', uniTag);
  });
};

const fetchUnis = (query) => {
  fetch(`http://universities.hipolabs.com/search?country=${query}`)
    .then(response => response.json())
    .then(insertUnis);
};

fetchUnis("United States");

const form = document.querySelector('#search-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchUnis(input.value);
});
