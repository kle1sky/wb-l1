//Разработайте страницу, отображающую таблицу с данными

let currentPage = 1;
const itemsPerPage = 50;
let data = [];

window.onload = function () {
    fetchData();
};

function fetchData() {
    fetch('http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true')
        .then(response => response.json())
        .then(json => {
            data = json;
            renderTable();
        });
}

// Отрисовка таблицы данных
function renderTable() {
    const tableBody = document.getElementById('data-body');
    tableBody.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = data.slice(startIndex, endIndex);

    currentPageData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${item.fname}</td>
      <td>${item.lname}</td>
      <td>${item.tel}</td>
      <td>${item.address}</td>
      <td>${item.city}</td>
      <td>${item.state}</td>
      <td>${item.zip}</td>
    `;
        tableBody.appendChild(row);
    });
}

// Сортировка таблицы
function sortTable(columnIndex) {
    data.sort((a, b) => {
        const columnA = a[Object.keys(a)[columnIndex]];
        const columnB = b[Object.keys(b)[columnIndex]];

        if (columnA < columnB) {
            return -1;
        }
        if (columnA > columnB) {
            return 1;
        }
        return 0;
    });

    renderTable();
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
}

// Переключение на следующую страницу
function nextPage() {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderTable();
    }
}