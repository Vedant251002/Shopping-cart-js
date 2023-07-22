let name = document.getElementById("name")
let mail = document.getElementById("mail")
let address = document.getElementById("address")
let mobNumber = document.getElementById("mobNumber")
let custInfo =  document.getElementById("custInfoShow"); 
let allCustDetails = document.getElementById("allCustdata");
let allInfo = []
let count = 0;


function placeOrder (){
    let total = 0
    let cartdata = cartItems.map((item) => {
        total += item.total
        return `
        Item Name : ${item.name}
        Item Price : ${item.price}
        Item Quantity : ${item.quantity}
        Item Total Price : ${item.total}\n`;
    });
    
    let custObj = {
        name : name.value,
        mail : mail.value,
        address : address.value,
        mobNumber : mobNumber.value,
        cartItems : cartItems,
        total : total
    }
    custInfo.value = `
    Name : ${name.value}
    Email : ${mail.value}
    Address : ${address.value}
    Mobile Number : ${mobNumber.value}
    
    [[
        ${cartdata}
    ]]
    
    [[Total Cart Price : ${total}]]
    ` 
    allInfo.push(custObj)
    
    if(allInfo.length == 1){
        allCustDetails.innerHTML =  showFullData(0)
    }
    reset();
}
function conditionApply(){
    event.preventDefault();
    let compare = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let validNumber = /^\d{10}$/
    if( mail.value.match(compare) &&  mobNumber.value.match(validNumber) ){
        placeOrder()
    }else{
        alert("Check mail or phone number")
    }
}
function reset(){
    name.value = ""
    mail.value = ""
    address.value = ""
    mobNumber.value = ""
    cartItems = []
    document.getElementById("cartShow").value = ""
}

function showFullData(count){
    let cartdata = allInfo[count].cartItems.map((item) => {
        return `<br/><br/>
        Item Name : ${item.name}<br/>
        Item Price : ${item.price}<br/>
        Item Quantity : ${item.quantity}<br/>
        Item Total Price : ${item.total}<br/>
        <br/>`;
      });
      
      let data = 
    `Customer Name : ${allInfo[count].name}<br/>
    Mail : ${allInfo[count].mail}<br/>
    Address : ${allInfo[count].address}<br/>
    Mobile Number : ${allInfo[count].mobNumber}<br/>
    [[  ${cartdata}  ]]
    
    [[ total cart price : ${allInfo[count].total}]]`
    return data
}

function firstbtn(){
    count = 0;
    allCustDetails.innerHTML = showFullData(count);
}

function lastbtn(){
    count = allInfo.length-1;
    allCustDetails.innerHTML = showFullData(count);
}

function nextbtn(){
    if( count != allInfo.length-1){

        count += 1;
        allCustDetails.innerHTML = showFullData(count);
    }else{
        alert("you are on last info")
    }
}

function previousbtn(){
    if( count != 0){

        count -= 1;
        allCustDetails.innerHTML = showFullData(count);
    }else{
        alert("you are on first info")
    }
}
function gotoOrder(){
    let gotoValue = document.getElementById("gotoValue").value - 1;
    console.log(gotoValue);
    if( gotoValue > allInfo.length-1 ){
        alert("no data found , last order is on " + (allInfo.length))
    }else if( gotoValue < 0){
        alert("enter value above 0")
    }
    else{
        count = gotoValue
        allCustDetails.innerHTML = showFullData(gotoValue);
    }

}
