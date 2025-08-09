// Create Toaster

function createToaster(time){
   return function(text){

            const p = document.createElement('p');
            p.textContent = text;
            p.className = "py-2 px-4 bg-green-500 text-white rounded fixed top-5 right-5 lg:top-20 lg:right-10";
            document.body.appendChild(p);

            // Optional: remove toast after some seconds
            setTimeout(() => {
                p.remove();
            }, 1000 * time);
    }
}

// Date and Time Set
  function showDateTime(){
    todayDate = new Date();
    const date = document.querySelector('#date');
    const time = document.querySelector('#time');
    date.textContent = `${todayDate.toLocaleDateString()}`;
    time.textContent = `${todayDate.toLocaleTimeString()}`;
}

document.addEventListener('DOMContentLoaded', function(){
setInterval(() => {
    showDateTime()
}, 1000);
})




// Log Your Study Session Form

const studyForm = document.querySelector('#study-form');
studyForm.addEventListener('submit', function(e){
    e.preventDefault();
    let dataArray = JSON.parse(localStorage.getItem('userData')) || [];

    const studyFormData ={
        subject: studyForm[0].value,
        Date: studyForm[1].value,
        StudyDuration: studyForm[2].value,
        Note: studyForm[3].value,
    }
    dataArray.push(studyFormData);
    localStorage.setItem('userData', JSON.stringify(dataArray));

    const toaster = createToaster(3);
    toaster('Your Study Session Saved Successfully')

    studyForm.reset()

})


