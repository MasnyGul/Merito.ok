const start=document.querySelector('.start');
const snake=document.querySelector('.snake');
const apple=document.querySelector('.apple');
const siata=document.querySelector('.grid');
const score=document.querySelector('.score')
const pad=document.querySelector('.pad')
const g=document.querySelector('.g')
const p=document.querySelector('.p')
const s=document.querySelector('.s')
const l=document.querySelector('.l')

var wynik=0;
var kierunek=2;

l.addEventListener("click",function(){
    kierunek=3;
});
p.addEventListener("click",function(){
    kierunek=4;

});
s.addEventListener("click",function(){
    kierunek=1;

});
g.addEventListener("click",function(){
    kierunek=2;

});

for(i=0;i<81;i++){
    siata.appendChild(document.createElement("div"));
}




const appl=[];
appl[0]=[3,5];
const snak=[];
snak[0]=[5,5];
console.log(snak);



start.addEventListener("click",function(){
    console.log("start");
    start.style.display='none';
    const gra=setInterval(function Gra(){

        
        
        switch (kierunek){
            case 1: //S
                snak.unshift([snak[0][0]+1,snak[0][1]]);
                break;
            case 2:  //N
                snak.unshift([snak[0][0]-1,snak[0][1]]);           
                break;
            case 3:  //W
                snak.unshift([snak[0][0],snak[0][1]-1]);       
                break;
            case 4:  //E
                snak.unshift([snak[0][0],snak[0][1]+1]);       
                break;
        };
    
        console.log(snak);


        if(snak[0][0]<1||snak[0][0]>9||snak[0][1]<1||snak[0][1]>9){
                    console.log("Przegrales");
                    clearInterval(gra);
                    return
                }



        
           
        
        

        
        


        if(snak[0][0]==appl[0][0]&&snak[0][1]==appl[0][1]){
            wynik++;
            score.innerHTML=wynik;
           
           const div=document.createElement("div");
           div.classList.add("snaks")
            siata.appendChild(div);


            appl[0][0]=Math.floor((Math.random() * 8)+1);
            appl[0][1]=Math.floor((Math.random() * 8)+1);

                for(i=0;i<(wynik+1);i++)
                {
                    while(snak[i][0]==appl[0][0]&&snak[i][1]==appl[0][1])
                    {
                        appl[0][0]=Math.floor((Math.random() * 8)+1);
                        appl[0][1]=Math.floor((Math.random() * 8)+1);
                        i=0;
                    }
                }
            apple.style.gridArea=appl[0][0]+"/"+appl[0][1];
            }
       

            
            
            var b=84      
            for(i=0;i<wynik;i++)
            {
                
                console.log(wynik);
                console.log(i);
                document.querySelector('.grid :nth-child('+b+')').style.gridArea=snak[1+i][0]+"/"+snak[1+i][1];
                b++;
            }
                     
            
        snake.style.gridArea=snak[0][0]+"/"+snak[0][1];

        console.log("koniec");
    },1000)  
});

