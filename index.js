
  let print = function (name1 , name2) {
     this.firstName = name1;
     this.lastName = name2;
    
    /*firstName ='Hemant';
    lastName ='Kishore';
    console.log(firstName+' '+lastName);*/

    //alert("Welcome");
    this.name = function () {
      return 'My name is '+this.firstName +' '+this.lastName;
    }
  }

  class mobile{
    OS;
    model;
    constructor(OS,model){
      this.OS= OS; 
    this.model = model;   }
    name() {
      return 'OS Brand name is '+this.OS +' and '+this.model;
    }
  }

  class android extends mobile{
    constructor(OS,companyName,model){
      super(OS,model);
      this.companyName = companyName;
    }
    name() {
      return super.name()+", Mobile brand "+this.companyName + " model " + this.model ;
    }
  }
  
  const test =new android('ios','Apple','iphone 13');

  console.log(test.name());



 
