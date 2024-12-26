
import readline from "readline"

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todo=[];

const show=()=>{
    console.log("\n1.Add TODO:");
    console.log("2: View TODO List:");
    console.log("3.Exit The Cli");
    rl.question("choose the option:", (option)=>{
        if(option==="1"){
            rl.question("Enter TODO Task:", (task)=>{
                todo.push(task);
                console.log(`New  Added Task :${task}`);
                show();
            })
            
        }else if(option==="2"){
           console.log("TODO List : ");
           todo.forEach((item,index)=>{
             console.log(` ${index+1}:${item}`);
             
           })
           show()
        }
        else if(option==="3"){
            rl.close();
            console.log("GOOD Bay");
        }else{
            console.log("Invalid Entry ");
            
        }
    } )
    
    
}

show();