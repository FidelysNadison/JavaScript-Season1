// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    table.appendChild(thead);
    let tr = document.createElement('tr');
    table.appendChild(tr)

    let td = document.createElement('td');
    table.appendChild(td)
    td.innerHTML = 'Table'
    
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    for (let i = 0; i <= 10; i++){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        
        td.innerHTML = i
        tr.appendChild(td);
        tbody.appendChild(tr);


    }

    document.getElementById('target').appendChild(table)


})();
