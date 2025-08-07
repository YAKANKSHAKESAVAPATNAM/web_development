
function createTable(rows, cols) {
    let newElement = document.createElement("table");  
    let column = document.createElement("tr");
    column.innerText = `${input} ${input2}`;
    table1.appendChild(column);
    let row = document.createElement("tr");
    row.innerText = `${input} ${input2}`;
    table.appendChild(newElement);
    table.appendChild(row);
    table1.appendChild(column);
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement("td");
            cell.innerText = `${input} ${input2} (${i}, ${j})`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    table1.appendChild(column);
    
}