
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    //saves the input value once website lead was entered
    inputEl.value= ""

    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        //turns a lead into a hyperlink once the input is saved
    //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a>"
      listItems += `
          <li>
             <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
          </li>
    `
    }
        ulEl.innerHTML = listItems
}
