document.querySelectorAll('.number').forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelectorAll('.number').forEach((btn) => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

document.getElementById('submit').addEventListener('click', ()=>{
    let number =  document.querySelector('.active').innerText
    if(number !== undefined){
        document.getElementById("div1").classList.add('hide')
        document.getElementById("div2").classList.remove('hide')
        document.getElementById('nota').innerText = number
    }
   
})