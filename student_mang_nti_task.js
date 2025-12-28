let students=["Ahmed","Mohammed","Aya","Hager","Heba"]
let marks=[90,40,96,33,88]
let again;
do{
let operation = Number(prompt(
    "enter operation you need\n" +
    "1 : show students and marks\n" +
    "2 : calculate average\n" +
    "3 : show maximum degree and minimum degree\n" +
    "4 : search"
  ));

switch(operation){
    case 1:
        for(let i=0;i<students.length;i++){
            console.log("Name of student is : "+students[i]+" and his mark is "+marks[i])
            if(marks[i]>=50){
            console.log(" and he is succeeded ")
            }
            else{
              console.log(" and he is failed ")
            }
        }
        break;
    case 2:
        let sum=0
        for(let i=0;i<marks.length;i++){
            sum+=marks[i]
        }
        let average=sum/students.length
        console.log("average is : "+average)
        break;
    case 3:
        let maxx = Math.max(...marks);
        let minn = Math.min(...marks);
        console.log("The maximum degree is : "+ maxx)
        console.log("The minimum degree is : "+ minn)
        break;
    case 4:
        let name=prompt("enter name you want to search : ")
        let found=false
        for(let i=0;i<students.length;i++){
            if(students[i]==name){
                 found=true
                 console.log("The student "+students[i]+" is found "+" and his degree is "+marks[i])
                 break;
            }
        }
        if(found==false){
            console.log("The student "+name+" doesn't found")
        }
        break;
    default:
      console.log("Invalid operation");
}
again = prompt("Do you want to do another operation? (yes / no)");
}
while (again.toLowerCase() === "yes")
console.log("Program ended")