
const deleteBtns = document.querySelectorAll(".delete-button");
const unorderedList = document.querySelector("#list");

const text = document.querySelector("#text");
const amount = document.querySelector("#amount");
const All_TransactionBtn = document.querySelector("#all-transaction");

let totalincome = 0;
let totalexpense = 0;
 let yourBalance = document.querySelector('.your-balance');





deleteBtns.forEach(button => {
    button.addEventListener('click', function () {

        this.parentElement.remove();
    });


});


All_TransactionBtn.addEventListener('click', () => {

    const list = document.createElement("li");
    list.textContent = text.value;
    unorderedList.appendChild(list);

    const span = document.createElement("span");
    span.innerText = `$${amount.value}`;
    list.appendChild(span);

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    deletebtn.classList.add("delete-button");
    list.appendChild(deletebtn);

    deletebtn.addEventListener('click', function () {
        list.remove();
    });

    if (amount.value < 0) {
        list.classList.add("list-minus");
    } else {
        list.classList.add("list-plus");
    }

    let income = document.querySelector(".income p");
    let expense = document.querySelector(".expense p");

    let value = Number(amount.value);//because amount.value is string so we have to convert it into number
    if (value > 0) {
        totalincome += value;
        income.textContent = `$${totalincome}`;
    }
    else {
        totalexpense += value;
        expense.textContent = `$${Math.abs(totalexpense)}`;
    }

   
    yourBalance.textContent= `$${totalincome + totalexpense}`;

    text.value = "";
    amount.value = "";



});