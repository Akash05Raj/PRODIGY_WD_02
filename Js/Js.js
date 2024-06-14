const btn = document.querySelectorAll('.btn_type');
btn[2].classList.add('icons');

let timedisp = document.querySelector('.display_time');
timedisp.innerText = "00:00:00:0";
let timemanage = 0;
let h =0;
let m =0;
let s =0;
let ms =0;
function reset(){
    const litag = document.querySelectorAll('li');
    litag.forEach(e =>{
        e.remove();
    })
}
function myfun(){

    let hour = 0;
    let minutes = 0;
    let seconds = 0;
    if(h < 23){
        if(m < 59){
            if(s < 59){
                if(ms < 999){
                    hour = (h <10)? hour = '0'+h : hour = h;
                    minutes = (m <10)? minutes = '0'+m : minutes = m;
                    seconds = (s <10)? seconds = '0'+s : seconds = s;
                    timedisp.innerText = hour+':'+minutes+':'+seconds+':'+ms.toFixed(0); 
                    ms = ms * 1.011;
                    ms++;

                }
                else{
                    s++;
                    ms = 0;
                    
                }
            }
            else{
                m++;
                s = 0;
                ms = 0;
            }
        }
        else{
            h++;
            m = 0;
            s = 0;
            ms = 0;
        }
        
    }
}

// star stopwatch
btn[1].addEventListener('click',startfun);
function startfun(){

    btn[2].classList.remove('icons');
    btn[1].classList.add('icons');
    const timedate = setInterval(myfun, 1);
    btn[2].addEventListener('click', pausefun);
    btn[0].addEventListener('click', pausefun);
    function pausefun() {
        btn[2].classList.add('icons');
        btn[1].classList.remove('icons');
        clearInterval(timedate);
    }
}

// Stop stopwatch
btn[0].addEventListener('click',stopfun);
function stopfun(){

    timedisp.innerText = "00:00:00:0";
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    reset();
    list.splice(0, list.length);
    
}

// laps function
const list = [];
btn[3].addEventListener('click',()=>{
    if(ms !=0){
    
        list.push(h+':'+m+':'+s+':'+ms.toFixed(0));
        reset();
        console.log(list);
        const listadd = document.querySelector('ul');
        list.forEach(mydata);
        function mydata(value,index){
            if(value !="0:0:0:0"){
                const tag = document.createElement("li");
                const datavalue = document.createTextNode(index+' : '+value);
                tag.appendChild(datavalue);
                listadd.appendChild(tag);
            }
        }
    }
})
    