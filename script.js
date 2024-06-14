let ul=document.getElementById('todo-item-container');
let btn=document.getElementById('btn');


let add=function(){

        let input=document.getElementById('input-value').value;

        if(input.length==0){
            alert("Enter todo item")
            }           
        else{
            let li=document.createElement('li');
            let check=document.createElement('input');
            check.type="checkbox"
            check.setAttribute("class",'dlt-btn')
            li.appendChild(check);

            li.textContent=input;
            li.classList.add("li-items")
            ul.appendChild(li)
            let dlt=document.createElement('button');
            dlt.textContent="Delete";
            li.appendChild(check);


            li.appendChild(dlt);
            dlt.classList.add('dlt-btn')
            }


           
            
    
}



btn.setAttribute("onclick",'add()')


