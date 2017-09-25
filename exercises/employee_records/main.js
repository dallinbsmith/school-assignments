var employees = [];


function Employee(name, jobTitle, salary, status){
    this.Name = name;
    this.Job_Title = jobTitle;
    this.Salary = salary;
    this.Status = status || "Full-Time";
    this.printEmployeeForm = function(){
        employees.push({Name : name,Job_Title : jobTitle, Salary : salary, Status : status});
    }
    
}

var butthead = new Employee("butthead", "dumb", 100);
var dumbbutt = new Employee("dumbbutt", "dontcare", 500, "single");
var idiot = new Employee("poohead", "meh", 800, "single");

dumbbutt.Name = "canttakeit";

butthead.printEmployeeForm();
butthead.printEmployeeForm();
console.log(employees);