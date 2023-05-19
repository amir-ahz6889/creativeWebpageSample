let btn=document.querySelectorAll('.story-btn')
btn.forEach((btnItem)=>{
    btnItem.addEventListener('click',()=>{
        btnItem.classList.toggle('change')
        btnItem.nextElementSibling.classList.toggle('change')

    })
})
