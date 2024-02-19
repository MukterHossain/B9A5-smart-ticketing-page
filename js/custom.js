
const allSeat = document.getElementsByClassName('add-bus');

let count = 0;
let cost = 550;
for(const seat of allSeat){
    seat.addEventListener('click', function(event){
        count = count + 1;

        const seatIn = event.target.innerText;


        const seatShortPrice = document.getElementById('seat-short-price');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = seatIn;
        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        const h5 = document.createElement('h5');
        h5.innerText = cost;

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(h5);
     
        seatShortPrice.appendChild(li);

        const seatLeftCount = getSeatLeft('seat-left');
        const seatUpdate = seatLeftCount - 1;

        setSeatLeft('seat-left', seatUpdate);


        
        let getOutSeatText = document.getElementById('seat-count'); 
        let getOutSeat = getOutSeatText.innerText;
        let getOut = parseInt(getOutSeat)

        if(getOut > 3){
            alert('you are not get More seat')
            
        }
        

        
        setBackgroundColor(event)
        totalCost('total-price', cost )
        grandTotalCost('grand-total', cost );        
       setInnerText('seat-count', count);   
    //    setBackgroundColor(allSeat) 
    showSuccessSection('success-hidden', event)
      
    });
    
}

function totalCost(id, value){
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum = convertedTotalPrice + value;
    setInnerText(id, sum); 
}

function grandTotalCost(id, value){
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum2 = convertedTotalPrice + value;
    setInnerText(id, sum2); 
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;     
}

function setBackgroundColor(event){
    const setBackgroundColor = event.target;
    setBackgroundColor.style.backgroundColor = '#1dd100';
    setBackgroundColor.classList.add('text-white');
}

function getSeatLeft(event){
    const seatLeftNumber = document.getElementById(event);
    const leftSeatText = seatLeftNumber.innerText; 
        const seatLeft = parseInt(leftSeatText);
        return seatLeft;
}
function setSeatLeft(event, value){
    const seatNumberLeft = document.getElementById(event);
    seatNumberLeft.innerText = value;
        
}

const nextButton = document.getElementById('next-success');
const successButton = document.getElementById('success-hidden');

nextButton.addEventListener('click', function(){
    successButton.classList.remove('hidden')
})






// Coupon Section

document.getElementById('text-show').addEventListener('keyup', 
function(event){
const text = event.target.value;


const deleteButton = document.getElementById('apply-show');
if(text === 'NEW15' || text === 'Couple 20'){
deleteButton.removeAttribute('disabled');
}
else{
deleteButton.setAttribute('disabled', true);
}
})
document.getElementById('apply-show').addEventListener('click', function(){
// console.log('First comment delete')
const getHideButton = document.getElementById('hide-button');
 getHideButton.classList.add('hidden');
})











