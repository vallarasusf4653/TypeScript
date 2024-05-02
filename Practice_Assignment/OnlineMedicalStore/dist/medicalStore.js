"use strict";
let NewUserMailStatus = false;
let NewUserPasswordStatus = false;
let NewUserConfirmPasswordStatus = false;
let OrderIdAutoIncrement = 1000;
let CurrentUserEmail = "";
let CurrentUserPassword = "";
event === null || event === void 0 ? void 0 : event.preventDefault();
class UserDetails {
    constructor(emailParam, passwordParam, confirmPasswordParam, phoneNumberParam) {
        this.UserEmail = emailParam;
        this.UserPassword = passwordParam;
        this.UserConfirm = confirmPasswordParam;
        this.UserPhoneNumber = phoneNumberParam;
        this.WalletBalance = 0;
    }
    walletRecharge(rechargeAmountParam) {
        this.WalletBalance += rechargeAmountParam;
        return this.WalletBalance;
    }
    deductBalance(deductAmountParam) {
        this.WalletBalance -= deductAmountParam;
        return this.WalletBalance;
    }
}
class MedicineDetails {
    constructor(paramMedicineName, paramMedicineCount, paramMedicinePrice, paramDateOfExpiry) {
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
        this.DateOfExpiry = paramDateOfExpiry;
    }
}
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Purchased"] = 0] = "Purchased";
    OrderStatus[OrderStatus["Cancelled"] = 1] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
class OrderDetails {
    constructor(paramMedicineName, paramMedicineCount, paramTotalPrice, paramOrderDate, paramOderStatus) {
        OrderIdAutoIncrement++;
        this.OrderID = "OID" + OrderIdAutoIncrement.toString();
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.TotalPrice = paramTotalPrice;
        this.OrderDate = paramOrderDate;
        this.OrderStatus = paramOderStatus;
    }
}
let UserArrayList = new Array();
UserArrayList.push(new UserDetails("vallarasu@gmail.com", "Vallarasu@2001", "Vallarasu@2001", "9787513804"));
UserArrayList.push(new UserDetails("sureshmaran@gmail.com", "maranS@2024", "maranS@2024", "8944114040"));
let MedicineList = new Array();
MedicineList.push(new MedicineDetails("Paracitamol", 40, 5, new Date(2024, 6, 30)));
MedicineList.push(new MedicineDetails("CalPol", 10, 5, new Date(2024, 5, 30)));
MedicineList.push(new MedicineDetails("Gelucil", 3, 40, new Date(2023, 4, 30)));
MedicineList.push(new MedicineDetails("Metrogel", 5, 50, new Date(2024, 12, 30)));
MedicineList.push(new MedicineDetails("Povidin Lodin", 10, 50, new Date(2024, 10, 30)));
let OrderList = new Array();
function newUserPage() {
    let homepage = document.getElementById('homePage');
    let newUserPage = document.getElementById('newUserPage');
    homepage.style.display = "none";
    newUserPage.style.display = "block";
}
function checkNewUserEmail(paramNewUserEmail) {
    let newUserMail = document.getElementById(paramNewUserEmail).value;
    let newUserMailMessage = document.getElementById(paramNewUserEmail + "Message");
    let newUserMailRegex = /^([a-z0-9]+)@([a-z]+).([a-z]{2,20})$/;
    if (newUserMailRegex.test(newUserMail)) {
        NewUserMailStatus = true;
        newUserMailMessage.style.visibility = "hidden";
    }
    else {
        NewUserMailStatus = false;
        newUserMailMessage.innerHTML = "Please enter valid name";
        newUserMailMessage.style.visibility = "visible";
        newUserMailMessage.style.color = "tomato";
        newUserMailMessage.style.marginLeft = "10px";
    }
}
function checkNewUserPassword(paramNewUserPassword) {
    let newUserPassword = document.getElementById(paramNewUserPassword).value;
    let newUserPasswordMessage = document.getElementById(paramNewUserPassword + "message");
    let newUserPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/;
    if (newUserPasswordRegex.test(newUserPassword)) {
        NewUserPasswordStatus = true;
        newUserPasswordMessage.style.visibility = "hidden";
    }
    else {
        NewUserPasswordStatus = false;
        newUserPasswordMessage.innerHTML = "Password is too short";
        newUserPasswordMessage.style.visibility = "visible";
        newUserPasswordMessage.style.color = "tomato";
        newUserPasswordMessage.style.marginLeft = "10px";
    }
}
function checkNewUserConfirmPassword(paramNewUserConfirmPassword) {
    let newUserConfirmPassword = document.getElementById(paramNewUserConfirmPassword).value;
    let newUserConfirmPasswordMessage = document.getElementById(paramNewUserConfirmPassword + "message");
    let newUserConfirmPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/;
    if (newUserConfirmPasswordRegex.test(newUserConfirmPassword)) {
        NewUserConfirmPasswordStatus = true;
        newUserConfirmPasswordMessage.style.visibility = "hidden";
    }
    else {
        NewUserPasswordStatus = false;
        newUserConfirmPasswordMessage.innerHTML = "Password is too short";
        newUserConfirmPasswordMessage.style.visibility = "visible";
        newUserConfirmPasswordMessage.style.color = "tomato";
        newUserConfirmPasswordMessage.style.marginLeft = "10px";
    }
}
function SignUp() {
    let homepage = document.getElementById('homePage');
    let newUserPage = document.getElementById('newUserPage');
    homepage.style.display = "block";
    newUserPage.style.display = "none";
}
function existingUserPage() {
    let homepage = document.getElementById('homePage');
    let ExistPage = document.getElementById('existingUserPage');
    homepage.style.display = "none";
    ExistPage.style.display = "block";
}
function checkExistUserEmail(paramExitUserEmail) {
    let ExistUserMail = document.getElementById(paramExitUserEmail).value;
    let ExistUserMailMessage = document.getElementById(paramExitUserEmail + "Message");
    let ExistUserMailRegex = /^([a-z0-9]+)@([a-z]+).([a-z]{2,20})$/;
    if (ExistUserMailRegex.test(ExistUserMail)) {
        CurrentUserEmail = ExistUserMail;
        ExistUserMailMessage.style.visibility = "hidden";
    }
    else {
        ExistUserMailMessage.innerHTML = "Please enter valid name";
        ExistUserMailMessage.style.visibility = "visible";
        ExistUserMailMessage.style.color = "tomato";
        ExistUserMailMessage.style.marginLeft = "10px";
    }
}
function checkExistUserPassword(paramExistUserPassword) {
    let ExistUserPassword = document.getElementById(paramExistUserPassword).value;
    let ExistUserPasswordMessage = document.getElementById(paramExistUserPassword + "Message");
    let ExistUserPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/;
    if (ExistUserPasswordRegex.test(ExistUserPassword)) {
        CurrentUserPassword = ExistUserPassword;
        ExistUserPasswordMessage.style.visibility = "hidden";
    }
    else {
        ExistUserPasswordMessage.innerHTML = "Password is too short";
        ExistUserPasswordMessage.style.visibility = "visible";
        ExistUserPasswordMessage.style.color = "tomato";
        ExistUserPasswordMessage.style.marginLeft = "10px";
    }
}
function SignIn() {
    var noExistingUserIdChecker = false;
    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].UserEmail == CurrentUserEmail && UserArrayList[i].UserPassword == CurrentUserPassword) {
            DashBoard();
            return;
        }
        else {
            noExistingUserIdChecker = true;
        }
    }
    if (noExistingUserIdChecker) {
        alert("Enter Valid User Id");
    }
}
function DashBoard() {
    let homepage = document.getElementById('homePage');
    let newUserPage = document.getElementById('newUserPage');
    let ExistUser = document.getElementById('existingUserPage');
    let DashBoard = document.getElementById('dashBoard');
    homepage.style.display = "none";
    newUserPage.style.display = "none";
    ExistUser.style.display = "none";
    DashBoard.style.display = "block";
}
function Medicinenavbar() {
    let count = 0;
    let home1 = document.getElementById('home1');
    let medicine1 = document.getElementById('medicine-details1');
    home1.style.display = "none";
    medicine1.style.display = "block";
    let table = document.getElementById("medicineData");
    if (count < MedicineList.length) {
        MedicineList.forEach(element => {
            count++;
            table.innerHTML += `<tr><td>${element.MedicineName}</td><td>${element.MedicineCount}</td><td>${element.MedicinePrice}</td><td>${element.DateOfExpiry.toDateString()}</td></tr>`;
        });
    }
}
function ShowBalance() {
    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].UserEmail == CurrentUserEmail) {
            var currentbalance = UserArrayList[i].WalletBalance;
            var balance1 = "Current Balance";
            document.write("<table>");
            document.write("<tr>");
            document.write("<td>" + balance1 + "</td>");
            document.write("<td>" + currentbalance + "</td>");
            document.write("</tr>");
            document.write("</table>");
        }
    }
}
function RechargeAmount() {
    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].UserEmail == CurrentUserEmail) {
            document.write("<h3>Enter Amount To Recharge</h3>");
            `<input type="number" id="rechargeAmount" placeholder="Amount">`;
            var rechargeAmount = document.getElementById("rechargeAmount");
            var currentbalance = UserArrayList[i].walletRecharge();
            document.write("<H2>currentbalance : </H2>");
            document.write("<H2>" + currentbalance + "</H2>");
        }
    }
}
function PurchaseItem() {
    let home1 = document.getElementById('purchase');
    let medicine1 = document.getElementById('medicine-details1');
    home1.style.display = "block";
    medicine1.style.display = "none";
    let count = 0;
    let table = document.getElementById("medicineData1");
    if (count < 1) {
        MedicineList.forEach(element => {
            count++;
            table.innerHTML += `<tr><td>${element.MedicineName}</td><td>${element.MedicineCount}</td><td>${element.MedicinePrice}</td><td>${element.DateOfExpiry.toDateString()}</td></tr>`;
        });
    }
}
