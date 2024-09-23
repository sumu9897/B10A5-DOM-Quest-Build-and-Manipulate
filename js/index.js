// Input Value
function inputValue(id) {
    const values = document.getElementById(id).value;
    const number = parseFloat(values);
    if (isNaN(number) || number <= 0) {
      alert("⚠️ Please enter a valid amount.");
      return null;
    } else {
      return number;
    }
  }
  
  function MainCommonFunction(inputId, donateId, location) {
    const inputNum = inputValue(inputId);
  
    if (inputNum === null) {
      return;
    }
  
    const mainAmount = document.getElementById("balance").innerText;
    let mainNum = parseFloat(mainAmount);
  
    if (inputNum > mainNum) {
      alert("⚠️ Donation amount exceeds the available balance.");
      return;
    }
  
    let currentMain = mainNum - inputNum;
    document.getElementById("balance").innerText = currentMain.toFixed(2);
  
    const donateAmount = document.getElementById(donateId).innerText;
    let donateNum = parseFloat(donateAmount);
    let currentDonate = donateNum + inputNum;
    document.getElementById(donateId).innerText = currentDonate.toFixed(2);
  
    if (inputNum > 0 && currentMain >= 0) {
      my_modal_1.showModal();
    }
  
    const currentTime = new Date();
    const time = currentTime.toString();
  
    const div = document.createElement("div");
    div.classList.add("p-6", "border", "border-solid", "border-[#1111111a]", "w-10/12", "m-auto", "rounded-2xl", "mt-8");
  
    div.innerHTML = `
      <h2 class="text-black text-xl font-bold">${inputNum} Taka is Donated for ${location}</h2>
      <p class="text-gray-600 font-medium">Date : ${time}</p>
      `;
    const historyContainer = document.getElementById("history-fields");
  
    if (historyContainer.firstChild) {
      historyContainer.insertBefore(div, historyContainer.firstChild);
    } else {
      historyContainer.appendChild(div);
    }  
  }
  

const donateBtn = document.getElementById("donate");
const historyBtn = document.getElementById("history");
const donateAllEl = document.getElementById("donate-fields");
const historyAllEl = document.getElementById("history-fields");

// Donation Btn Function
donateBtn.addEventListener("click", function () {
  donateBtn.classList.add("bg-primary",  "text-black");

  donateBtn.classList.remove("border-2", "border-solid", "text-gray-600");

  historyBtn.classList.add("border-2", "border-solid","text-gray-600");

  historyBtn.classList.remove("bg-primary",  "text-black");

  donateAllEl.classList.remove("hidden");

  historyAllEl.classList.add("hidden");
});
// History Button Function
historyBtn.addEventListener("click", function () {
  donateBtn.classList.remove("bg-primary", "text-black");

  donateBtn.classList.add("border-2", "border-solid", "text-gray-600");

  historyBtn.classList.remove("border-2", "border-solid", "text-gray-600");

  historyBtn.classList.add("bg-primary",  "text-black");

  donateAllEl.classList.add("hidden");

  historyAllEl.classList.remove("hidden");
});


// Noakhali Donate done 
document.getElementById("btn-noakhali").addEventListener("click", function (event) {
  event.preventDefault;

  MainCommonFunction("input-noakhali", 'noakhali', 'Flood at Noakhali, Bangladesh');

  document.getElementById("input-noakhali").value = "";
});

// Feni Donate done 
document.getElementById("btn-feni").addEventListener("click", function (event) {
  event.preventDefault;

  MainCommonFunction("input-feni", 'feni' , 'Flood Relief in Feni,Bangladesh');

  document.getElementById("input-fani").value = "";
});

// Quota Movement donate done
document.getElementById("btn-quota").addEventListener("click", function (event) {
  event.preventDefault;

  MainCommonFunction("input-quota", 'quota', 'Aid for Injured in the Quota Movement, Bangladesh');

  document.getElementById("input-quota").value = "";
});

// Blog Button 

const blogBtn = document.getElementById("blog");

blogBtn.addEventListener('click',function(){
  window.location.href = `B10A5-DOM-Quest-Build-and-Manipulate/../blog.html`
});

