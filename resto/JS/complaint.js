function enableTest(i){

    complaintForm.hidden = !complaintForm.hidden

    if (i === 1) {
      
        btnPincipal.innerHTML=""
        btnOn = document.createElement('button')
        btnOn.textContent = 'cliquer pour entrer une plainte'
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


let btnFormComplaint = document.getElementById('btnFormComplaint')
let complaintForm = document.getElementById('complaintForm')
let btnPincipal = document.getElementById('btnPincipal')
let user = document.getElementById('user')
let userComment = document.getElementById('userComment')

let mode = 1
let btnMode

btnFormComplaint.addEventListener('click', (e)=>{
    mode++
    btnMode = mode%2
   enableTest(btnMode)

})


complaintForm.addEventListener('submit', (e)=>{
    e.preventDefault()



    console.log(suggestion);
})







