class Customer {
    ID: number;
    name: string;
    discount: number;

    constructor(ID: number, name: string, discount: number) {
        this.ID = ID;
        this.name = name;
        this.discount = discount;
    }

    getID(): number {
        return this.ID;
    }
    getName(): string {
        return this.name;
    }
    getDiscount(): number {
        return this.discount;
    }
    setDiscount(discount: number) {
        this.discount = discount;
    }
}

class Invoice {
    ID: number;
    customer: Customer;
    details: string;
    amount: number;

    constructor(id: number, customer: Customer, amount: number, details: string) {
        this.ID = id;
        this.customer = customer;
        this.details = details;
        this.amount = amount;
    }
    getID(): number {
        return this.ID;
    }
    getCustomer(): Customer {
        return this.customer;
    }
    setCustomer(customer: Customer) {
        this.customer = customer;
    }
    getAmount(): number {
        return this.amount;
    }
    setAmount(amount: number) {
        this.amount = amount;
    }
    getCustomerName(): string {
        return this.customer.name;
    }
    getAmountAfterDiscount(): number {
        return +(this.amount - (this.amount * this.customer.getDiscount() / 100)).toFixed(2);
    }
}

class Account {
    ID: number;
    customer: Customer;
    balance: number = 0.0;

    constructor(id: number, customer: Customer, balance?: number) {
        this.ID = id;
        this.customer = customer;
        if (balance !== undefined)
            this.balance = balance;
    }

    getID(): number {
        return this.ID;
    }
    getCustomer(): Customer {
        return this.customer;
    }
    getBalance(): number {
        return this.balance;
    }
    setBalance(balance: number) {
        this.balance = +balance.toFixed(2);
    }
    toString() {
        return `${this.getCustomerName()}(${this.ID}) balance=Rs.${this.balance}`;
    }
    getCustomerName(): string {
        return this.customer.getName();
    }
    deposit(amount: number): Account {
        this.balance += amount;
        
        return this;
    }
    withdraw(amount: number): boolean {
        if (this.balance >= amount) {
            this.balance -= amount;
           
            return true;
        } else {
            
            return false;
        }
    }

    
}



let customerList: Customer[] = [];
let accountList: Account[] = [];
let invoiceList: Invoice[] = [];



(<HTMLButtonElement>document.getElementById('addCustomer-btn')).addEventListener('click',() => {
    let cId = +(<HTMLInputElement>document.getElementById('customerID')).value
    let cName = (<HTMLInputElement>document.getElementById('customerName')).value.trim();
    let discount = +(<HTMLInputElement>document.getElementById('discount')).value;
    
    let newcus=customerList.filter(element=>element.ID==cId)
    
    if(newcus.length>0){
    alert("CustomerId exist kindly change the Id")
        return false
    }
        if(cName !== '' && discount >= 0) {
    let customer = new Customer(cId, cName, discount);
    customerList.push(customer);
    (<HTMLInputElement>document.getElementById('customerName')).value = '';
    (<HTMLInputElement>document.getElementById('discount')).value = '';
    (<HTMLInputElement>document.getElementById('customerID')).value = '';
    
    updateCustomerSelectList();
    
    let cAccount = new Account(cId, customer);
    console.log(customerList,cAccount)
    accountList.push(cAccount);
     
}
});


(<HTMLButtonElement>document.getElementById('deposit-btn')).addEventListener('click',() => {
    
    let customerID = + (<HTMLSelectElement>document.getElementById('walletCustomerList')).value;
    let amount = +(<HTMLInputElement>document.getElementById('walletAmount')).value;
    
    if(customerID !== NaN && amount != 0) {
    let customer: Customer;
    let details = 'Amount Deposit';
    
    
    for (let i in accountList) {
        if (accountList[i].customer.ID == customerID) {
            customer = accountList[i].customer;
            accountList[i].deposit(amount);
            
            alert('Amount Deposited. '+ accountList[i].toString())
        }
    }
    let gCheck = (<HTMLInputElement>document.getElementById('generateInvoice')).checked;
    if (gCheck){ 
        let depositInvoice = new Invoice(invoiceList.length+1,customer,amount,details);
        invoiceList.push(depositInvoice);
        generateInvoice(depositInvoice);  
}
    (<HTMLSelectElement>document.getElementById('walletCustomerList')).options[0].selected = true;
    (<HTMLInputElement>document.getElementById('walletAmount')).value = '';
}
});


(<HTMLButtonElement>document.getElementById('withdraw-btn')).addEventListener('click',() => {
    let customerID = + (<HTMLSelectElement>document.getElementById('walletCustomerList')).value;
    let amount = +(<HTMLInputElement>document.getElementById('walletAmount')).value;
    if(customerID !== NaN && amount != 0) {
    
    let customer: Customer;
    let details = 'Amount withdrawed'
    
    
    let wCheck:boolean;
    
    for (let i in accountList) {
        if (accountList[i].customer.ID == customerID) {
            customer = accountList[i].customer;
            wCheck = accountList[i].withdraw(amount);
            if(wCheck){
                
                alert('Amount withdrawed. ' + accountList[i].toString())
            }
            else{
                alert('Withdrawl amount Exceeds balance. Try again!');
            }
        }
    }
    let gCheck = (<HTMLInputElement>document.getElementById('generateInvoice')).checked;
    if(gCheck && wCheck){
        let withdrawlInvoice = new Invoice(invoiceList.length+1,customer,amount,details);
        invoiceList.push(withdrawlInvoice);
        generateInvoice(withdrawlInvoice);  
    }
    (<HTMLSelectElement>document.getElementById('walletCustomerList')).options[0].selected = true;
    (<HTMLInputElement>document.getElementById('walletAmount')).value = '';
}
});


(<HTMLButtonElement>document.getElementById('displayModal-btn')).addEventListener('click',() => {

    let customerID = + (<HTMLSelectElement>document.getElementById('purchaseCustomerList')).value;
    let amount = +(<HTMLInputElement>document.getElementById('purchaseAmount')).value;
    if(customerID === NaN || amount == 0) {
    (<HTMLDivElement>document.getElementById('purchaseConfirm')).innerText = 'Invalid Data'
    return;
}
    
    let customerAccount:Account;
    console.log(customerAccount)
    let details = 'Purchase';
    for (let i in accountList) {
        if (accountList[i].customer.ID == customerID) {
            customerAccount = accountList[i];
        }
    }
    let discountAmount = +(customerAccount.getCustomer().getDiscount() * amount / 100).toFixed(2);
    let afterDiscount = amount-discountAmount;
    
    (<HTMLDivElement>document.getElementById('purchaseConfirm')).innerText = 
        `Amount : ${amount}
         Discount : ${discountAmount}
         Amount after Discount : ${afterDiscount} `;
    
});

(<HTMLButtonElement>document.getElementById('purchase-btn')).addEventListener('click',() => {
    let customerID = + (<HTMLSelectElement>document.getElementById('purchaseCustomerList')).value;
    let amount = +(<HTMLInputElement>document.getElementById('purchaseAmount')).value;
    
    if(customerID===NaN || amount == 0) return;
    
    let customerAccount:Account;
    let details = 'Purchase';
    for (let i in accountList) {
        if (accountList[i].customer.ID == customerID) {
            customerAccount = accountList[i];
        }
    }
    let invoice = new Invoice(invoiceList.length+1,customerAccount.getCustomer(),amount,details);
    

    if(customerAccount.getBalance() >= invoice.getAmountAfterDiscount()){
        customerAccount.setBalance(customerAccount.getBalance()-invoice.getAmountAfterDiscount());
        invoiceList.push(invoice);
        generateInvoice(invoice);
        alert("Purchase Successful!!");
    }else{
        alert('Balance is low. Deposit Amount to make purchase.');
    }
    (<HTMLSelectElement>document.getElementById('purchaseCustomerList')).options[0].selected = true;
    (<HTMLInputElement>document.getElementById('purchaseAmount')).value = '';
});

let updateCustomerSelectList = () => {
    let purchaseSelect = <HTMLInputElement>document.getElementById('purchaseCustomerList');
    purchaseSelect.innerHTML = '';
    let walletSelect = <HTMLInputElement>document.getElementById('walletCustomerList');
    walletSelect.innerHTML = '';
    let selectedOption = document.createElement('option');
    selectedOption.selected = true;
    selectedOption.innerHTML = 'Select...';
    walletSelect.append(selectedOption);
    selectedOption = document.createElement('option');
    selectedOption.selected = true;
    selectedOption.innerHTML = 'Select...';
    purchaseSelect.append(selectedOption);

    for (let i in customerList) {
        let option = document.createElement('option');
        option.value = customerList[i].getID().toString();
        option.innerHTML = customerList[i].getName();
        option.selected = false;
        purchaseSelect.append(option);
        option = document.createElement('option');
        option.value = customerList[i].getID().toString();
        option.innerHTML = customerList[i].getName();
        option.selected = false;
        walletSelect.append(option);
    }

}



let generateInvoice = (invoice:Invoice) => {

    
    let tableContainer = <HTMLDivElement>document.getElementById('invoiceTable');
    if (tableContainer.childElementCount == 0) {
        
        var table = <HTMLTableElement>document.createElement('table');
        table.setAttribute('class', 'table table-hover');
        var tableCaption = <HTMLTableCaptionElement>document.createElement('caption');
        tableCaption.id='tableCaption';
        tableCaption.innerHTML = `Total Invoices ${invoiceList.length}`;
        var tableHead = <HTMLTableHeaderCellElement><unknown>document.createElement('thead');
        tableHead.setAttribute('class', 'thead-dark');
        var tableBody = <HTMLTableElement><unknown>document.createElement('tbody');
        tableBody.id = 'tableBody';
        var tr = <HTMLTableRowElement>document.createElement('tr');
        var th = <HTMLTableHeaderCellElement>document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerHTML = 'Invoice no.';
        tr.append(th);
        var th = <HTMLTableHeaderCellElement>document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerHTML = 'Customer ID';
        tr.append(th);
        var th = <HTMLTableHeaderCellElement>document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerHTML = 'Customer Name';
        tr.append(th);
        var th = <HTMLTableHeaderCellElement>document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerHTML = 'Details';
        tr.append(th);
        var th = <HTMLTableHeaderCellElement>document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerHTML = 'Amount';
        tr.append(th);
        var th = <HTMLTableHeaderCellElement>document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerHTML = 'After Discount';
        tr.append(th);
        tableHead.append(tr);
        table.append(tableCaption, tableHead, tableBody);
        tableContainer.append(table);
    }
    console.log(invoice.customer.ID)
    var ouputTableBody = <HTMLTableElement>document.getElementById('tableBody');
    var tCaption = <HTMLTableCaptionElement>document.getElementById('tableCaption');
    tCaption.innerHTML = `Total Invoices ${invoiceList.length}`;
    var tr = <HTMLTableRowElement>document.createElement('tr');
    var td = <HTMLTableHeaderCellElement>document.createElement('th');
    td.setAttribute('scope', 'row');
    td.innerHTML = (invoiceList.length).toString();
    tr.append(td);
    var td = <HTMLTableDataCellElement>document.createElement('td');
    td.innerHTML = `${invoice.customer.ID}`;
    tr.append(td);
    td = <HTMLTableDataCellElement>document.createElement('td');
    td.innerHTML = invoice.getCustomerName();
    tr.append(td);
    td = <HTMLTableDataCellElement>document.createElement('td');
    td.innerHTML = invoice.details;
    tr.append(td);
    td = <HTMLTableDataCellElement>document.createElement('td');
    td.innerHTML = `Rs.${invoice.getAmount()}`;
    tr.append(td);
    td = <HTMLTableDataCellElement>document.createElement('td');
    if(invoice.details === 'Purchase')
    td.innerHTML = `Rs.${invoice.getAmountAfterDiscount()}`;
    else
    td.innerHTML = '-';
    tr.append(td);
    ouputTableBody.append(tr);
    

}


