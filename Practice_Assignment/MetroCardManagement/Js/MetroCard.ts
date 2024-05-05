
var CardNumberAutoIncrement = 1001;
var TravelAutoIncrement = 2001;
var TicketAutoIncrement = 3001;

let CurrentUser: UserDetails;
class PersonalDetails {

    UserName: string;
    UserEmail: string;
    Password: string;
    PhoneNumber: string;

    constructor(paramUserName: string, paramUserEmail: string, paramPassword: string, paramPhoneNumber: string) {
        this.UserName = paramUserName;
        this.UserEmail = paramUserEmail;
        this.Password = paramPassword;
        this.PhoneNumber = paramPhoneNumber;
    }
}

interface IBalance {
    Balance: number;
    WalletRecharge(rechargeAmount: number): number;
    DeductBalnce(rechargeAmount: number): number;
}

class UserDetails extends PersonalDetails implements IBalance {
    CardNumber: string;
    Balance: number;

    constructor(paramUserName: string, paramUserEmail: string, paramPassword: string, paramPhoneNumber: string) {
        super(paramUserName, paramUserEmail, paramPassword, paramPhoneNumber);
        this.Balance = 0
        this.CardNumber = "CMRL" + CardNumberAutoIncrement;
        CardNumberAutoIncrement++;
    }

    WalletRecharge(rechargeAmount: number): number {
        this.Balance += rechargeAmount;
        return this.Balance;
    }
    DeductBalnce(rechargeAmount: number): number {
        this.Balance -= rechargeAmount;
        return this.Balance;
    }
}

class TravelHistoryDetails {
    TravelID: string;
    CardNumber: string;
    FromLocation: string;
    ToLocation: string;
    Date: Date
    TrvelCost: number;

    constructor(paramCardNumber: string, paramFromLocation: string, paramToLocation: string, paramDate: Date, paramTravelCost: number) {
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
    TicketID: string;
    FromLocation: string;
    ToLocation: string;
    TicketPrice: number;

    constructor(paramFromLocation: string, paramToLocation: string, paramTicketPrice: number) {
        this.TicketID = "MR" + TicketAutoIncrement;
        this.FromLocation = paramFromLocation;
        this.ToLocation = paramToLocation;
        this.TicketPrice = paramTicketPrice;

        TicketAutoIncrement++;


    }
}

let UserList: Array<UserDetails> = new Array<UserDetails>();
UserList.push(new UserDetails("Ravi", "ravi@gmail.com", "Ravi@1999", "9848812345"));
UserList.push(new UserDetails("Baskaran", "baskaran@gmail.com", "Baskaran@1998", "9848812345"));

let TravelList: Array<TravelHistoryDetails> = new Array<TravelHistoryDetails>();
TravelList.push(new TravelHistoryDetails("CMRL1001", "Airport", "Egmore", new Date(2023, 10, 10), 55));
TravelList.push(new TravelHistoryDetails("CMRL1001", "Egmore", "Koyambedu", new Date(2023, 10, 10), 32));
TravelList.push(new TravelHistoryDetails("CMRL1002", "Alandur", "Koyambedu", new Date(2023, 11, 10), 25));

let TicketFairList: Array<TicketFairDetails> = new Array<TicketFairDetails>();
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
    var signin =(document.getElementById('signin') as HTMLDivElement);
    signin.style.display = "none";
    var signup=(document.getElementById('signup') as HTMLDivElement);
    signup.style.display = "block";
   
}
function ExistUser() {
    var signin =(document.getElementById('signin') as HTMLDivElement);
    signin.style.display = "block";
    var signup=(document.getElementById('signup') as HTMLDivElement);
    signup.style.display = "none";
}



let NewUserName = "";
function validateUserName(paramusername: string) {
    var username = (document.getElementById(paramusername) as HTMLInputElement).value;
    var usernamemessage = document.getElementById(paramusername + "message") as HTMLSpanElement;
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
function validateUserEmail(paramuseremail: string) {
    var useremail = (document.getElementById(paramuseremail) as HTMLInputElement).value;
    var useremailmessage = document.getElementById(paramuseremail + "message") as HTMLSpanElement;
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
function validatePassword(paramuserpassword: string) {
    var password = (document.getElementById(paramuserpassword) as HTMLInputElement).value;
    var passwordmessage = document.getElementById(paramuserpassword + "message") as HTMLSpanElement;
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

function validateConfirmPassword(paramuserconfirmpassword: string) {
    var confirmpassword = (document.getElementById(paramuserconfirmpassword) as HTMLInputElement).value;
    var confirmpasswordmessage = document.getElementById(paramuserconfirmpassword + "message") as HTMLSpanElement;
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
function validatePhoneNumber(paramuserphonenumber: string) {
    let userphone = (document.getElementById(paramuserphonenumber) as HTMLInputElement).value;
    let userphonemessage = document.getElementById(paramuserphonenumber + "message") as HTMLSpanElement;

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

function signout()
{
    (document.getElementById('dashboard') as HTMLDivElement).style.display = "none";
    (document.getElementById('homebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('travelbutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('ticketbutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('rechargebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('showbalancebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('signout') as HTMLDivElement).style.display = "none";
    (document.getElementById('signin') as HTMLDivElement).style.display = "block";
    (document.getElementById('signup') as HTMLDivElement).style.display = "none";
    (document.getElementById('header') as HTMLDivElement).style.display = "block";
}

let CurrentUserEmail = "";
function verifyUserEmail(paramuseremail: string) {
    var useremail = (document.getElementById(paramuseremail) as HTMLInputElement).value;
    var useremailmessage = document.getElementById(paramuseremail + "message") as HTMLSpanElement;
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
function verifyUserPassword(paramuserpassword: string) {
    var password = (document.getElementById(paramuserpassword) as HTMLInputElement).value;
    var passwordmessage = document.getElementById(paramuserpassword + "message") as HTMLSpanElement;
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
    
    var signin =(document.getElementById('signin') as HTMLDivElement);
    signin.style.display = "none";
    var signup =(document.getElementById('signup') as HTMLDivElement);
    signup.style.display = "none";
    var header=(document.getElementById('header') as HTMLDivElement);
    header.style.display = "none";
    var nav=(document.getElementById('dashboard') as HTMLDivElement);
    nav.style.display = "block";
   
    homebutton();

}

function homebutton() {
    (document.getElementById('dashboard') as HTMLDivElement).style.display = "block";
    (document.getElementById('homebutton') as HTMLDivElement).style.display = "block";
    (document.getElementById('travelbutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('ticketbutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('rechargebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('showbalancebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('signout') as HTMLDivElement).style.display = "none";
    (document.getElementById('signin') as HTMLDivElement).style.display = "none";
    (document.getElementById('signup') as HTMLDivElement).style.display = "none";
    (document.getElementById('header') as HTMLDivElement).style.display = "none";
    

}

function travelbutton()
{

    (document.getElementById('dashboard') as HTMLDivElement).style.display = "block";
    (document.getElementById('homebutton') as HTMLDivElement).style.display = "none";

    
    (document.getElementById('rechargebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('showbalancebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('signout') as HTMLDivElement).style.display = "none";
    (document.getElementById('signin') as HTMLDivElement).style.display = "none";
    (document.getElementById('signup') as HTMLDivElement).style.display = "none";
    (document.getElementById('header') as HTMLDivElement).style.display = "none";
    (document.getElementById('travelbutton') as HTMLDivElement).style.display = "block";
    (document.getElementById('ticketbutton') as HTMLDivElement).style.display = "none";
    

    var table = document.querySelector("#travel tbody") as HTMLTableSectionElement;
    table.innerHTML="";
    TravelList.forEach(travel => {
        if(travel.CardNumber==CurrentUser.CardNumber)
            {
                  var row = document.createElement("tr");
                  row.innerHTML=`<td>${travel.TravelID}</td><td>${travel.FromLocation}</td><td>${travel.ToLocation}</td><td>${travel.Date.toLocaleDateString()}</td><td>${travel.TrvelCost}</td>`;
                  table.appendChild(row);
            }
        
    });
}
function rechargebutton()
{
    (document.getElementById('dashboard') as HTMLDivElement).style.display = "block";
    (document.getElementById('homebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('ticketbutton') as HTMLDivElement).style.display = "none";
    
    (document.getElementById('rechargebutton') as HTMLDivElement).style.display = "block";
    (document.getElementById('showbalancebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('signout') as HTMLDivElement).style.display = "none";
    (document.getElementById('signin') as HTMLDivElement).style.display = "none";
    (document.getElementById('signup') as HTMLDivElement).style.display = "none";
    (document.getElementById('header') as HTMLDivElement).style.display = "none";
    (document.getElementById('travelbutton') as HTMLDivElement).style.display = "none";
}
function rechargemessage()
{
   var rechargeAmount = parseInt((document.getElementById("rechargeamount")as HTMLInputElement).value);
   var rechargemessage = document.getElementById("amountmessage")as HTMLSpanElement;
   if(rechargeAmount>0)
    {
        CurrentUser.WalletRecharge(rechargeAmount);
        rechargemessage.innerHTML="Recharged Successfully";
        alert("recharged");

    }
    else{
        alert("Unable to Recharge");
    }
   

}

function showbalancebutton()
{
    (document.getElementById('dashboard') as HTMLDivElement).style.display = "block";
    (document.getElementById('homebutton') as HTMLDivElement).style.display = "none";

    (document.getElementById('ticketbutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('rechargebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('showbalancebutton') as HTMLDivElement).style.display = "block";
    (document.getElementById('signout') as HTMLDivElement).style.display = "none";
    (document.getElementById('signin') as HTMLDivElement).style.display = "none";
    (document.getElementById('signup') as HTMLDivElement).style.display = "none";
    (document.getElementById('header') as HTMLDivElement).style.display = "none";
    (document.getElementById('travelbutton') as HTMLDivElement).style.display = "none";
   var balance = document.getElementById("balance") as HTMLSpanElement;
   balance.innerHTML= CurrentUser.Balance.toString();
}

function Bookticket()
{
    (document.getElementById('dashboard') as HTMLDivElement).style.display = "block";
    (document.getElementById('ticketbutton') as HTMLDivElement).style.display = "block";
    (document.getElementById('homebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('rechargebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('showbalancebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('signout') as HTMLDivElement).style.display = "none";
    (document.getElementById('signin') as HTMLDivElement).style.display = "none";
    (document.getElementById('signup') as HTMLDivElement).style.display = "none";
    (document.getElementById('header') as HTMLDivElement).style.display = "none";
    (document.getElementById('travelbutton') as HTMLDivElement).style.display = "none";

    var table = document.querySelector("#ticket tbody") as HTMLTableSectionElement;
    table.innerHTML="";
    var count=1;
    TicketFairList.forEach(travelticket => {

                   var row = document.createElement("tr");
                  row.innerHTML=`<td>${count}</td><td>${travelticket.FromLocation}</td><td>${travelticket.ToLocation}</td><td>${travelticket.TicketPrice}</td><td> <button type="button" onclick="Book('${travelticket.TicketID}')">Book</button></td>`;
                  table.appendChild(row);
                  count++;
         
        
    });
}

function Book(ticketID:string)
{
    var flag=true;
    TicketFairList.forEach(ticket => {
        if(ticket.TicketID==ticketID)
            {
                
                UserList.forEach(user => {
                    if(ticket.TicketPrice<=user.Balance)
                        {
                           flag=false;
                           user.DeductBalnce(ticket.TicketPrice);
                           TravelList.push(new TravelHistoryDetails(user.CardNumber,ticket.FromLocation,ticket.ToLocation,new Date(),ticket.TicketPrice));
                           alert("Ticket Booked Successfully");
                        }

                });
            }
    });
    if(flag)
        {
            alert("Insufficient Balance!!")
        }
}

