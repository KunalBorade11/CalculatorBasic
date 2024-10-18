let btn=document.querySelectorAll("button");
let screen=document.querySelector(".scrn");
let w="";
let flag=false;
let b=true;
let o1=0;
let o2=0;

function def(){
    flag=false;
    b=true;
    o1=0;
    o2=0;
}
let p="";
function calci(o1, o2, p){
    if(p=="+") return o1+=o2;
    else if(p=="-") return o1-=o2;
    else if(p=="x") return o1*=o2;
    else if(p=="/") return o1/=o2;
}

btn.forEach((button) => {
button.addEventListener("click",()=>{
    if(button.textContent=="CLR") {w="";
        def();
        w="0";
    }
    else if(button.textContent=="="){
        w=(calci(o1,o2,p)).toString();
        o1=calci(o1,o2,p);
        o2=0;
        flag=false;
    }
    else if(button.textContent=="+"||(button.textContent=="-"||(button.textContent=="x"||button.textContent=="/"))){
        if(flag==true){
            w=(calci(o1,o2,p)).toString();
            o1=calci(o1,o2,p);
            o2=0;
        }
        b=false;
        flag=true;
        p=button.textContent;
        w+=button.textContent;
    }
    else{
        if(b){
            o1*=10;
            o1+=parseInt(button.textContent);
        }
        else{
            o2*=10;
            o2+=parseInt(button.textContent);
        }
        w+=button.textContent;
    }  
        screen.textContent=w;
});
});
