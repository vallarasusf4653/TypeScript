
let NewUserMailStatus = false;
let NewUserPasswordStatus = false;
let NewUserConfirmPasswordStatus = false;
let NewUserPhoneStatus = false;

let OrderIdAutoIncrement = 1000;
let CurrentUserEmail: string = "";
let CurrentUserPassword: string = "";

event?.preventDefault();
//Interface
interface Wallet {
    WalletBalance: number;
    walletRecharge(rechargeAmountParam: number): number;
    deductBalance(deductAmountParam: number): number;
}

//UserDetails Class
class UserDetails implements Wallet {
    UserEmail: string;
    UserPassword: string;
    UserConfirm: string;
    UserPhoneNumber: string
    WalletBalance: number

    constructor(emailParam: string, passwordParam: string, confirmPasswordParam: string, phoneNumberParam: string) {


        this.UserEmail = emailParam;
        this.UserPassword = passwordParam;
        this.UserConfirm = confirmPasswordParam;
        this.UserPhoneNumber = phoneNumberParam;
        this.WalletBalance = 0;
    }

    walletRecharge(rechargeAmountParam: number): number {
        this.WalletBalance += rechargeAmountParam;
        return this.WalletBalance;
    }
    deductBalance(deductAmountParam: number): number {
        this.WalletBalance -= deductAmountParam;
        return this.WalletBalance;
    }
}

// MedicineDetails class:
class MedicineDetails {

    MedicineName: string
    MedicineCount: number
    MedicinePrice: number
    DateOfExpiry: Date

    constructor(paramMedicineName: string, paramMedicineCount: number, paramMedicinePrice: number, paramDateOfExpiry: Date) {

        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
        this.DateOfExpiry = paramDateOfExpiry
    }

}
enum OrderStatus {
    Purchased,
    Cancelled
}

//OrderDetails
class OrderDetails {

    OrderID: string;
    MedicineName: string;
    MedicineCount: number;
    TotalPrice: number;
    OrderDate: Date;
    OrderStatus: OrderStatus;

    constructor(paramMedicineName: string, paramMedicineCount: number, paramTotalPrice: number, paramOrderDate: Date, paramOderStatus: OrderStatus) {

        OrderIdAutoIncrement++;
        this.OrderID = "OID" + OrderIdAutoIncrement.toString();
        this.MedicineName = paramMedicineName
        this.MedicineCount = paramMedicineCount;
        this.TotalPrice = paramTotalPrice;
        this.OrderDate = paramOrderDate;
        this.OrderStatus = paramOderStatus;
    }

}

let UserArrayList: Array<UserDetails> = new Array<UserDetails>();
UserArrayList.push(new UserDetails("vallarasu@gmail.com", "Vallarasu@2001", "Vallarasu@2001", "9787513804"));
UserArrayList.push(new UserDetails("sureshmaran@gmail.com", "maranS@2024", "maranS@2024", "8944114040"));

let MedicineList: Array<MedicineDetails> = new Array<MedicineDetails>();
MedicineList.push(new MedicineDetails("Paracitamol", 40, 5, new Date(2024, 6, 30)));
MedicineList.push(new MedicineDetails("CalPol", 10, 5, new Date(2024, 5, 30)));
MedicineList.push(new MedicineDetails("Gelucil", 3, 40, new Date(2023, 4, 30)));
MedicineList.push(new MedicineDetails("Metrogel", 5, 50, new Date(2024, 12, 30)));
MedicineList.push(new MedicineDetails("Povidin Lodin", 10, 50, new Date(2024, 10, 30)));

let OrderList: Array<OrderDetails> = new Array<OrderDetails>();
// OrderList.push(new OrderDetails("UID1001","MD101",3,15,new Date(2022,11,13),OrderStatus.Purchased));
// OrderList.push(new OrderDetails("UID1001","MD102",3,15,new Date(2022,11,13),OrderStatus.Purchased));
// OrderList.push(new OrderDetails("UID1002","MD104",3,15,new Date(2022,11,13),OrderStatus.Cancelled));

//newUserPage
function newUserPage(): void {
    let homepage = document.getElementById('homePage') as HTMLDivElement;
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    homepage.style.display = "none";
    newUserPage.style.display = "block";
}

function checkNewUserEmail(paramNewUserEmail: string): void {
    let newUserMail = (document.getElementById(paramNewUserEmail) as HTMLInputElement).value;
    let newUserMailMessage = document.getElementById(paramNewUserEmail + "Message") as HTMLSpanElement;
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
let NewUserPassword="";
function checkNewUserPassword(paramNewUserPassword: string): void {
    let newUserPassword = (document.getElementById(paramNewUserPassword) as HTMLInputElement).value;
    let newUserPasswordMessage = document.getElementById(paramNewUserPassword + "Message") as HTMLSpanElement;
    let newUserPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/;
    if (newUserPasswordRegex.test(newUserPassword)) {
        NewUserPassword=newUserPassword;
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

function checkNewUserConfirmPassword(paramNewUserConfirmPassword: string): void {
    let newUserConfirmPassword = (document.getElementById(paramNewUserConfirmPassword) as HTMLInputElement).value;
    let newUserConfirmPasswordMessage = document.getElementById(paramNewUserConfirmPassword + "Message") as HTMLSpanElement;
   

    if (NewUserPassword ==(newUserConfirmPassword)) {

        NewUserConfirmPasswordStatus = true;
        newUserConfirmPasswordMessage.style.visibility = "hidden";
    }
    else {
        NewUserPasswordStatus = false;
        newUserConfirmPasswordMessage.innerHTML = "Didn't match";
        newUserConfirmPasswordMessage.style.visibility = "visible";
        newUserConfirmPasswordMessage.style.color = "tomato";
        newUserConfirmPasswordMessage.style.marginLeft = "10px";
    }
}
 function checkNewUserPhone(paramNewUserPhone:string):void
 {
    let newUserPhone = (document.getElementById(paramNewUserPhone) as HTMLInputElement).value;
    let newUserPhoneMessage = document.getElementById(paramNewUserPhone+"Message") as HTMLSpanElement;
    let newUserPhoneRegex=/\d{10}/;
    if(newUserPhoneRegex.test(newUserPhone))
        {
            NewUserPhoneStatus = true;
            newUserPhoneMessage.style.visibility = "hidden";
        }
        else{
            NewUserPasswordStatus = false;
            newUserPhoneMessage.innerHTML = "Invalid Number";
            newUserPhoneMessage.style.color = "tomato";
            newUserPhoneMessage.style.visibility = "visible";
        newUserPhoneMessage.style.marginLeft = "10px";
        }
 }

function SignUp() {

    if(NewUserMailStatus ==true && NewUserPasswordStatus == true && NewUserConfirmPasswordStatus==true && NewUserPhoneStatus ==true )
    let homepage = document.getElementById('homePage') as HTMLDivElement;
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    homepage.style.display = "block";
    newUserPage.style.display = "none";

    
}

function existingUserPage(): void {
    let homepage = document.getElementById('homePage') as HTMLDivElement;
    let ExistPage = document.getElementById('existingUserPage') as HTMLDivElement;
    homepage.style.display = "none";
    ExistPage.style.display = "block";
}

function checkExistUserEmail(paramExitUserEmail: string): void {
    let ExistUserMail = (document.getElementById(paramExitUserEmail) as HTMLInputElement).value;
    let ExistUserMailMessage = document.getElementById(paramExitUserEmail + "Message") as HTMLSpanElement;
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

function checkExistUserPassword(paramExistUserPassword: string): void {
    let ExistUserPassword = (document.getElementById(paramExistUserPassword) as HTMLInputElement).value;
    let ExistUserPasswordMessage = document.getElementById(paramExistUserPassword + "Message") as HTMLSpanElement;
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
    var noExistingUserIdChecker: boolean = false;

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
    let homepage = document.getElementById('homePage') as HTMLDivElement;
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    let ExistUser = document.getElementById('existingUserPage') as HTMLDivElement;
    let DashBoard = document.getElementById('dashBoard') as HTMLDivElement;
    homepage.style.display = "none";
    newUserPage.style.display = "none";
    ExistUser.style.display = "none";
    DashBoard.style.display = "block";
}

function Medicinenavbar() {
    let count = 0;
    let home1 = document.getElementById('home1') as HTMLDivElement;
    let medicine1 = document.getElementById('medicine-details1') as HTMLDivElement;
    home1.style.display = "none";
    medicine1.style.display = "block";
    let table = document.getElementById("medicineData") as HTMLTableElement;
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
            document.write("<table>")
            document.write("<tr>")
            document.write("<td>" + balance1 + "</td>");
            document.write("<td>" + currentbalance + "</td>");
            document.write("</tr>")
            document.write("</table>")
        }
    }
}

function RechargeAmount() {

    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].UserEmail == CurrentUserEmail) {
            document.write("<h3>Enter Amount To Recharge</h3>");
            `<input type="number" id="rechargeAmount" placeholder="Amount">`
            var rechargeAmount  = document.getElementById("rechargeAmount");
            //var currentbalance = UserArrayList[i].walletRecharge();
            document.write("<H2>currentbalance : </H2>");
           // document.write("<H2>" + currentbalance + "</H2>");
        }
    }
}

function PurchaseItem() {
    let home1 = document.getElementById('purchase') as HTMLDivElement;
    let medicine1 = document.getElementById('medicine-details1') as HTMLDivElement;
    home1.style.display = "block";
    medicine1.style.display = "none";
    let count = 0;
    let table = document.getElementById("medicineData1") as HTMLTableElement;
    if (count < 1) {
        MedicineList.forEach(element => {
            count++;
            table.innerHTML += `<tr><td>${element.MedicineName}</td><td>${element.MedicineCount}</td><td>${element.MedicinePrice}</td><td>${element.DateOfExpiry.toDateString()}</td></tr>`;
        });
    }
}