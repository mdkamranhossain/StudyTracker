let saveData = JSON.parse(localStorage.getItem('userData')) || [];
const historyTable = document.getElementById('historyTable');

// Clear old rows (optional, so it doesn't duplicate when running multiple times)
function history(){
    historyTable.innerHTML = "";

if (saveData.length > 0) {
    saveData.forEach((data, index) => {
        const tr = document.createElement('tr');
        // Create and append each cell
        const tdDate = document.createElement('td');
        tdDate.textContent = data.Date;
        tdDate.className = "px-4 py-2 border text-center";

        const tdSubject = document.createElement('td');
        tdSubject.textContent = data.subject;
        tdSubject.className = "px-4 py-2 border text-center";

        const tdDuration = document.createElement('td');
        tdDuration.textContent = data.StudyDuration;
        tdDuration.className = "px-4 py-2 border text-center";

        const tdNote = document.createElement('td');
        tdNote.textContent = data.Note;
        tdNote.className = "px-4 py-2 border text-center";

        const tdRemove = document.createElement('td');
        tdRemove.textContent = 'Remove';
        tdRemove.className = "px-4 py-2 border text-center bg-red-500 font-bold cursor-pointer";
        tdRemove.addEventListener('click', function(e){
        saveData.splice(index, 1);
        localStorage.setItem('userData', JSON.stringify(saveData));
        history();
        })

        // Append all cells to row
        tr.appendChild(tdDate);
        tr.appendChild(tdSubject);
        tr.appendChild(tdDuration);
        tr.appendChild(tdNote);
        tr.appendChild(tdRemove);

        // Append row to table body
        historyTable.appendChild(tr);
    });
} else {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = 'No data found';
    td.classList.add('text-center');
    td.classList.add('font-2xl');
    td.colSpan = 5; 
    tr.appendChild(td);
    historyTable.appendChild(tr);

}

}

history()