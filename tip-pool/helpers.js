
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);

};





function appendDeleteBtn(tr, type) {
  let delBtn = document.createElement("td");
  delBtn.classList.add("deleteBtn");

  delBtn.textContent = "x";

  delBtn.addEventListener("click", function (e) {

    e.path[1].remove();
    delete allServers[e.target.closest('tr').id];
    updateServerTable();


    delete allPayments[e.target.closest('tr').id];
    updateSummary();

  })

  tr.append(delBtn);


}
