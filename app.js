const nums = document.querySelectorAll('.numbers span');
const button = document.querySelector('button');
const front = document.querySelector('.front');
const back = document.querySelector('.back');
const selectedScore = document.querySelector('#selected-num');
let myAlert = document.querySelector('#alert');
let value = '';

nums.forEach(num => {
    num.addEventListener('click', (e) => {
      
    nums.forEach(selectedNum => {
      if(num !== selectedNum){
        selectedNum.classList.remove('active');
      } 
    })  
    num.classList.toggle('active');
    selectNum(e);            
    });
  });  

function selectNum(e){
    const selectedScore = e.target.innerText;    
    value = selectedScore;
}

button.addEventListener('click', submitNum);

function submitNum(e){
    console.log(e, value);

    if(value === ''){
      checkSelection('Please select number', 'warning');
  } else{
    submitReview();
  }
}

function checkSelection(enteredNumber, color){
    myAlert.innerText = enteredNumber;
    myAlert.classList.add('warning');

}

function submitReview(){
  front.classList.add('active');
  back.classList.add('active');
  selectedScore.innerText = `You selected ${value} out of 5`;
}