
let formOne=document.getElementById('formOne');
const login=document.getElementById('login')
const container_fluid=document.getElementById('container-fluid')


formOne.addEventListener('submit',(e)=>{
    e.preventDefault()
    // container_fluid.style.display="none"
    // form_holder.style.display='block'
    container_fluid.classList.add('d-none')
    form_holder.classList.remove("d-none")


})
