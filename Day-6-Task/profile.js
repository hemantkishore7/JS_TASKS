  class Profile{
      constructor(firstname='',lastname='',age='',email=''){
          this.firstname = firstname;
          this.lastname = lastname;
          this.age = age;
          this.email = email;
      }
      getFullName(){
        return `${this.firstname} ${this.lastname}`
      }
  }

  const person1 = new Profile('Hemant Kishore', 'Pichandi', '24', 'hemantkishore98@gmail.com');
  const person2 = new Profile('Joseph Vijay', 'SAC', '49', 'vijay@gmail.com')
  console.log(person2.getFullName())

