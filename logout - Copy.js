 const logoutPrompt=document.querySelector('.logoutPrompt');
 const logFloat=document.querySelector('.float');
 const inputFr=document.querySelector('#input4');

let myYes=document.querySelector('#yes');
let myNo=document.querySelection('#no');

inputFr.addEventListener('click', function(){
logoutPrompt.style.display='flex';
logFloat.style.transform='translateY(0px)';
});

myYes.addEventListener('click', function(){
window.history.back()
window.close()
});

myNo.addEventListener('click', function(){
logoutPrompt.style.display='none';
logFloat.style.transform='translateY(-1000px)';
})