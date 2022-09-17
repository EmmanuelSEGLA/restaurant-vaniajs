function enableTest(i){

    pageForm.hidden = !pageForm.hidden

    if (i === 1) {
      
        btnPincipal.innerHTML=""
        btnOn = document.createElement('button')
        btnOn.textContent = 'cliquer pour remplir le formulaire'
        btnOn.classList = 'btnOn'
        
        btnPincipal.appendChild(btnOn)

        btnOn.addEventListener('click', (e)=>{
            mode++
            btnMode = mode%2
           enableTest(btnMode)
        
        })
       

    }
    if (i === 0) {
       
        btnPincipal.innerHTML=""
        btnOff = document.createElement('button')
        btnOff.textContent = 'cliquer pour Cacher le Formulaire'
        btnOff.classList = 'btnOff'
        btnPincipal.appendChild(btnOff)
        
        btnOff.addEventListener('click', (e)=>{
            mode++
            btnMode = mode%2
           enableTest(btnMode)
        
        })

    }

}

let btnPrintForm = document.getElementById('btnPrintForm')
let pageForm = document.getElementById('pageForm')
let btnPincipal = document.getElementById('btnPincipal')


let mode = 1
let btnMode

btnPrintForm.addEventListener('click', (e)=>{
    mode++
    btnMode = mode%2
   enableTest(btnMode)

})