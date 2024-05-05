"use strict";
var CardNumberAutoIncrement = 1001;
var TravelAutoIncrement = 2001;
var TicketAutoIncrement = 3001;
let CurrentUser;
class PersonalDetails {
    constructor(paramUserName, paramUserEmail, paramPassword, paramPhoneNumber) {
        this.UserName = paramUserName;
        this.UserEmail = paramUserEmail;
        this.Password = paramPassword;
        this.PhoneNumber = paramPhoneNumber;
    }
}
class UserDetails extends PersonalDetails {
    constructor(paramUserName, paramUserEmail, paramPassword, paramPhoneNumber) {
        super(paramUserName, paramUserEmail, paramPassword, paramPhoneNumber);
        this.Balance = 0;
        this.CardNumber = "CMRL" + CardNumberAutoIncrement;
        CardNumberAutoIncrement++;
    }
    WalletRecharge(rechargeAmount) {
        this.Balance += rechargeAmount;
        return this.Balance;
    }
    DeductBalnce(rechargeAmount) {
        this.Balance -= rechargeAmount;
        return this.Balance;
    }
}
class TravelHistoryDetails {
    constructor(paramCardNumber, paramFromLocation, paramToLocation, paramDate, paramTravelCost) {
        this.TravelID = "TID" + TravelAutoIncrement;
        this.CardNumber = paramCardNumber;
        this.FromLocation = paramFromLocation;
        this.ToLocation = paramToLocation;
        this.Date = paramDate;
        this.TrvelCost = paramTravelCost;
        TravelAutoIncrement++;
    }
}
class TicketFairDetails {
    constructor(paramFromLocation, paramToLocation, paramTicketPrice) {
        this.TicketID = "MR" + TicketAutoIncrement;
        this.FromLocation = paramFromLocation;
        this.ToLocation = paramToLocation;
        this.TicketPrice = paramTicketPrice;
        TicketAutoIncrement++;
    }
}
let UserList = new Array();
UserList.push(new UserDetails("Ravi", "ravi@gmail.com", "Ravi@1999", "9848812345"));
UserList.push(new UserDetails("Baskaran", "baskaran@gmail.com", "Baskaran@1998", "9848812345"));
let TravelList = new Array();
TravelList.push(new TravelHistoryDetails("CMRL1001", "Airport", "Egmore", new Date(2023, 10, 10), 55));
TravelList.push(new TravelHistoryDetails("CMRL1001", "Egmore", "Koyambedu", new Date(2023, 10, 10), 32));
TravelList.push(new TravelHistoryDetails("CMRL1002", "Alandur", "Koyambedu", new Date(2023, 11, 10), 25));
let TicketFairList = new Array();
TicketFairList.push(new TicketFairDetails("Airport", "Egmore", 55));
TicketFairList.push(new TicketFairDetails("Airport", "Koyambedu", 25));
TicketFairList.push(new TicketFairDetails("Alandur", "Koyambedu", 55));
TicketFairList.push(new TicketFairDetails("Koyambedu", "Egmore", 32));
TicketFairList.push(new TicketFairDetails("Vadapalani", "Egmore", 45));
TicketFairList.push(new TicketFairDetails("Arumbakkam", "Egmore", 25));
TicketFairList.push(new TicketFairDetails("Vadapalani", "Koyambedu", 25));
TicketFairList.push(new TicketFairDetails("Arumbakkam", "Koyambedu", 16));
let isValidUserName = false;
let isValidUserEmail = false;
let isValidUserPhoneNumber = false;
function NewUser() {
    var signin = document.getElementById('signin');
    signin.style.display = "none";
    var signup = document.getElementById('signup');
    signup.style.display = "block";
}
function ExistUser() {
    var signin = document.getElementById('signin');
    signin.style.display = "block";
    var signup = document.getElementById('signup');
    signup.style.display = "none";
}
let NewUserName = "";
function validateUserName(paramusername) {
    var username = document.getElementById(paramusername).value;
    var usernamemessage = document.getElementById(paramusername + "message");
    if (username != "" && /\w{2,20}/.test(username) && username.length > 2) {
        isValidUserName = true;
        NewUserName = username;
        usernamemessage.style.visibility = "hidden";
    }
    else {
        usernamemessage.innerHTML = "Please enter valid name";
        usernamemessage.style.visibility = "visible";
        usernamemessage.style.color = "tomato";
        usernamemessage.style.marginLeft = "10px";
    }
}
let NewUserEmail = "";
function validateUserEmail(paramuseremail) {
    var useremail = document.getElementById(paramuseremail).value;
    var useremailmessage = document.getElementById(paramuseremail + "message");
    if (/^([a-z0-9]+)@([a-z]+).([a-z]{2,20})$/.test(useremail)) {
        isValidUserEmail = true;
        NewUserEmail = useremail;
        useremailmessage.style.visibility = "hidden";
    }
    else {
        useremailmessage.innerHTML = "Please enter valid name";
        useremailmessage.style.visibility = "visible";
        useremailmessage.style.color = "tomato";
        useremailmessage.style.marginLeft = "10px";
    }
}
let NewUserpassword = "";
function validatePassword(paramuserpassword) {
    var password = document.getElementById(paramuserpassword).value;
    var passwordmessage = document.getElementById(paramuserpassword + "message");
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/.test(password) && password.length > 8) {
        NewUserpassword = password;
        passwordmessage.style.visibility = "hidden";
    }
    else {
        passwordmessage.innerHTML = "Please enter valid name";
        passwordmessage.style.visibility = "visible";
        passwordmessage.style.color = "tomato";
        passwordmessage.style.marginLeft = "10px";
    }
}
function validateConfirmPassword(paramuserconfirmpassword) {
    var confirmpassword = document.getElementById(paramuserconfirmpassword).value;
    var confirmpasswordmessage = document.getElementById(paramuserconfirmpassword + "message");
    if (NewUserpassword == confirmpassword) {
        isValidUserEmail = true;
        confirmpasswordmessage.style.visibility = "hidden";
    }
    else {
        confirmpasswordmessage.innerHTML = "Please enter valid name";
        confirmpasswordmessage.style.visibility = "visible";
        confirmpasswordmessage.style.color = "tomato";
        confirmpasswordmessage.style.marginLeft = "10px";
    }
}
let NewUserPhoneNumber = "";
function validatePhoneNumber(paramuserphonenumber) {
    let userphone = document.getElementById(paramuserphonenumber).value;
    let userphonemessage = document.getElementById(paramuserphonenumber + "message");
    if (/\d{10}/.test(userphone)) {
        NewUserPhoneNumber = userphone;
        isValidUserPhoneNumber = true;
        userphonemessage.style.visibility = "hidden";
    }
    else {
        userphonemessage.innerHTML = "Please enter valid name";
        userphonemessage.style.visibility = "visible";
        userphonemessage.style.color = "tomato";
        userphonemessage.style.marginLeft = "10px";
    }
}
function SignUp() {
    if (isValidUserName == true && isValidUserEmail == true && isValidUserPhoneNumber == true) {
        UserList.push(new UserDetails(NewUserName, NewUserEmail, NewUserpassword, NewUserPhoneNumber));
        alert("Account Created Successfully");
        ExistUser();
    }
    else {
        alert("Try again!");
    }
}
function signout() {
    document.getElementById('dashboard').style.display = "none";
    document.getElementById('homebutton').style.display = "none";
    document.getElementById('travelbutton').style.display = "none";
    document.getElementById('ticketbutton').style.display = "none";
    document.getElementById('rechargebutton').style.display = "none";
    document.getElementById('showbalancebutton').style.display = "none";
    document.getElementById('signout').style.display = "none";
    document.getElementById('signin').style.display = "block";
    document.getElementById('signup').style.display = "none";
    document.getElementById('header').style.display = "block";
}
let CurrentUserEmail = "";
function verifyUserEmail(paramuseremail) {
    var useremail = document.getElementById(paramuseremail).value;
    var useremailmessage = document.getElementById(paramuseremail + "message");
    if (/^([a-z0-9]+)@([a-z]+).([a-z]{2,20})$/.test(useremail)) {
        CurrentUserEmail = useremail;
        useremailmessage.style.visibility = "hidden";
    }
    else {
        useremailmessage.innerHTML = "Please enter valid name";
        useremailmessage.style.visibility = "visible";
        useremailmessage.style.color = "tomato";
        useremailmessage.style.marginLeft = "10px";
    }
}
let CurrentUserPassword = "";
function verifyUserPassword(paramuserpassword) {
    var password = document.getElementById(paramuserpassword).value;
    var passwordmessage = document.getElementById(paramuserpassword + "message");
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/.test(password) && password.length > 8) {
        CurrentUserPassword = password;
        passwordmessage.style.visibility = "hidden";
    }
    else {
        passwordmessage.innerHTML = "Please enter valid name";
        passwordmessage.style.visibility = "visible";
        passwordmessage.style.color = "tomato";
        passwordmessage.style.marginLeft = "10px";
    }
}
function SignIn() {
    let flag = true;
    UserList.forEach(user => {
        if (user.UserEmail == CurrentUserEmail && user.Password == CurrentUserPassword) {
            flag = false;
            CurrentUser = user;
            alert("sign");
            DashBoard();
        }
    });
    if (flag) {
        alert("Invalid Email & Password");
    }
}
function DashBoard() {
    var signin = document.getElementById('signin');
    signin.style.display = "none";
    var signup = document.getElementById('signup');
    signup.style.display = "none";
    var header = document.getElementById('header');
    header.style.display = "none";
    var nav = document.getElementById('dashboard');
    nav.style.display = "block";
    homebutton();
}
function homebutton() {
    document.getElementById('dashboard').style.display = "block";
    document.getElementById('homebutton').style.display = "block";
    document.getElementById('travelbutton').style.display = "none";
    document.getElementById('ticketbutton').style.display = "none";
    document.getElementById('rechargebutton').style.display = "none";
    document.getElementById('showbalancebutton').style.display = "none";
    document.getElementById('signout').style.display = "none";
    document.getElementById('signin').style.display = "none";
    document.getElementById('signup').style.display = "none";
    document.getElementById('header').style.display = "none";
}
function travelbutton() {
    document.getElementById('dashboard').style.display = "block";
    document.getElementById('homebutton').style.display = "none";
    document.getElementById('rechargebutton').style.display = "none";
    document.getElementById('showbalancebutton').style.display = "none";
    document.getElementById('signout').style.display = "none";
    document.getElementById('signin').style.display = "none";
    document.getElementById('signup').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('travelbutton').style.display = "block";
    document.getElementById('ticketbutton').style.display = "none";
    var table = document.querySelector("#travel tbody");
    table.innerHTML = "";
    TravelList.forEach(travel => {
        if (travel.CardNumber == CurrentUser.CardNumber) {
            var row = document.createElement("tr");
            row.innerHTML = `<td>${travel.TravelID}</td><td>${travel.FromLocation}</td><td>${travel.ToLocation}</td><td>${travel.Date.toLocaleDateString()}</td><td>${travel.TrvelCost}</td>`;
            table.appendChild(row);
        }
    });
}
function rechargebutton() {
    document.getElementById('dashboard').style.display = "block";
    document.getElementById('homebutton').style.display = "none";
    document.getElementById('ticketbutton').style.display = "none";
    document.getElementById('rechargebutton').style.display = "block";
    document.getElementById('showbalancebutton').style.display = "none";
    document.getElementById('signout').style.display = "none";
    document.getElementById('signin').style.display = "none";
    document.getElementById('signup').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('travelbutton').style.display = "none";
}
function rechargemessage() {
    var rechargeAmount = parseInt(document.getElementById("rechargeamount").value);
    var rechargemessage = document.getElementById("amountmessage");
    if (rechargeAmount > 0) {
        CurrentUser.WalletRecharge(rechargeAmount);
        rechargemessage.innerHTML = "Recharged Successfully";
        alert("recharged");
    }
    else {
        alert("Unable to Recharge");
    }
}
function showbalancebutton() {
    document.getElementById('dashboard').style.display = "block";
    document.getElementById('homebutton').style.display = "none";
    document.getElementById('ticketbutton').style.display = "none";
    document.getElementById('rechargebutton').style.display = "none";
    document.getElementById('showbalancebutton').style.display = "block";
    document.getElementById('signout').style.display = "none";
    document.getElementById('signin').style.display = "none";
    document.getElementById('signup').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('travelbutton').style.display = "none";
    var balance = document.getElementById("balance");
    balance.innerHTML = CurrentUser.Balance.toString();
}
function Bookticket() {
    document.getElementById('dashboard').style.display = "block";
    document.getElementById('ticketbutton').style.display = "block";
    document.getElementById('homebutton').style.display = "none";
    document.getElementById('rechargebutton').style.display = "none";
    document.getElementById('showbalancebutton').style.display = "none";
    document.getElementById('signout').style.display = "none";
    document.getElementById('signin').style.display = "none";
    document.getElementById('signup').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('travelbutton').style.display = "none";
    var table = document.querySelector("#ticket tbody");
    table.innerHTML = "";
    var count = 1;
    TicketFairList.forEach(travelticket => {
        var row = document.createElement("tr");
        row.innerHTML = `<td>${count}</td><td>${travelticket.FromLocation}</td><td>${travelticket.ToLocation}</td><td>${travelticket.TicketPrice}</td><td> <button type="button" onclick="Book('${travelticket.TicketID}')">Book</button></td>`;
        table.appendChild(row);
        count++;
    });
}
function Book(ticketID) {
    var flag = true;
    TicketFairList.forEach(ticket => {
        if (ticket.TicketID == ticketID) {
            UserList.forEach(user => {
                if (ticket.TicketPrice <= user.Balance) {
                    flag = false;
                    user.DeductBalnce(ticket.TicketPrice);
                    TravelList.push(new TravelHistoryDetails(user.CardNumber, ticket.FromLocation, ticket.ToLocation, new Date(), ticket.TicketPrice));
                    alert("Ticket Booked Successfully");
                }
            });
        }
    });
    if (flag) {
        alert("Insufficient Balance!!");
    }
}
