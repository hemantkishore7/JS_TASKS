 let resume = {
    "FirstName":"Hemant Kishore",
    "LastName":"Pichandi",
    "Dob":"23rd July",
    "Email": "hemantkishore98@gmail.com",
    "Mobile":"8248474589",
    education: {
        "pg": "MCA",
        "ug": "BCA"
    },
    "Skill":["Html","Css","javaScript","Node.js","Mysql"],
    "Project":"Bus reservation-mini project",
    "Experience":"Fresher",
    "Language":["English","Tamil"],
    "Hobby":["Cricket","Gym"]

 }
for(var n in resume){
 console.log(n+": "+resume[n]);}