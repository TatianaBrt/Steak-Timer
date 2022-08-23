const button = document.querySelector('#btn');
const btnSt=document.querySelector('#btnSt');
const btnI=document.querySelector('#btnI');
const audio=document.querySelector("#myAudio");

button.addEventListener('click', function(){
    timer()
  button.style.display="none";
  btnSt.style.display="block";

  function sound(){
    audio.play()
   
}
setTimeout(sound,70000)

})

function timer(){

    const timer = 2;
    const secondTime=20
    let amountTime=timer*60+secondTime;
    
    function calculateTime(){
        const countdown=document.querySelector("#countdown");
    
        let minutes = Math.floor(amountTime/60);
        let seconds =amountTime%60;
    
        amountTime--;
        
if(minutes===1 && seconds===10){
    Swal.fire('Turn over the steak')
}

   
        if (seconds<10) {
            seconds = "0"+seconds;
        }
        console.log(amountTime);

        if(minutes<10){
            minutes="0"+minutes;
        }
        
        countdown.textContent = `${minutes} : ${seconds}`;
     
        if (amountTime<0) {
            stopTimer();
            amountTime=0;
            audio.play()
            Swal.fire({
                title: 'READY!',
                text: 'BON APPETIT!',
                imageUrl: 'https://images.unsplash.com/photo-1624234734133-7f1342047e30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                             })
            }
        function stopTimer(){
            clearInterval(window.timerID);
        }
    }
   window.timerID =window.setInterval(calculateTime,1000);
}
   
btnSt.addEventListener("click",function(){

Swal.fire({
      title: 'Are you sure?',
  text: "Do you want to stop timer?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes'
  
})
.then((result) => {
    if (result.isConfirmed) {
        timerStop()
        function timerStop(){
        window.clearInterval(window.timerID)  
        }}
        
      
})

}) 

btnI.addEventListener("click",function(){
   
    Swal.fire({
        imageUrl: 'https://images.unsplash.com/photo-1579636858731-24857b3f4305?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        text: "Heat up the pan.Put the steak in the pan. Click Start.",
        padding: '3em',
        showCancelButton: true,
        confirmButtonColor: '#3CCF4E',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Next',
        background:'#FFFDDE'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(  
        'Turn over the steak after sound signal',
       )}
        
      })

})