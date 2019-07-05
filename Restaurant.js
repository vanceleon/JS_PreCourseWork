class User {
    constructor(options) {
      this.username = options.username;
      this.password = options.password;
      this.createdAt = Date.now();
    }
    updatePassword(newPassword) {
      this.password = newPassword;
    } 
  }
  
  class Customer extends User {
    constructor(options) {
      super(options);
      this.allergies = options.allergies;
      this.partySize = options.partySize;
    }
  }
  
  class Employee extends User {
    constructor(options) {
      super(options);
      this.salary = options.salary;
      this.availability = options.availability;
    }
  }
  
  const customer = new Customer({ 
    username: 'testUser', 
    password: 'pass1234', 
    allergies: ['peanuts'], 
    partySize: 6
  });
  const employee = new Employee({
    username: 'testEmp', 
    password: 'pass1235',
    salary: 60000,
    availability: {
      mon: '5-10pm',
      tues: '5-10pm'
    }
  });
  customer.updatePassword('pa1234');
  employee.updatePassword('test1234');
  console.log(customer);
  console.log(employee);