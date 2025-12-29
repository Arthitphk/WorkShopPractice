const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');



const datatransaction = [
    {id:1,text:"snack",amount:-100},
    {id:2,text:"room tax",amount:-2200},
    {id:3,text:"salary",amount:+22000}
]

const transaction = datatransaction;

function init() {
   transaction.forEach(addDataToList)
    
}


function addDataToList (transaction) {
    const symbol = transaction.amount < 0 ? '-': '+';
    const status = transaction.amount < 0 ? 'minus':'plus';
    const item = document.createElement('li');
    item.classList.add(status);
    item.innerHTML =  `${transaction.text}<span>${symbol}${Math.abs(transaction.amount)}</span><button class="delete-btn">x</button>`;
    list.appendChild(item)
    
};

init();
