function success_close_btn(){
    var close_btn=document.getElementById('success-box');
    close_btn.style.display='none'
    setTimeout(()=>{
        close_btn.style.display=''
    },2000)
}