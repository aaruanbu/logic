
find maximum number
a=12,b=8,c=-5

if ((a>b)&&(a>c){
console.log(a,"is greater")
}
else if((b>a)&&(b>c){
console.log(b,"is greater")
} 
else if((c>a)&&(c>b){
console.log(c,"is greater")
}








 Assending order
 
let assend=[5,3,2,1,4]
for(i=0;i<assend.length;i++){
 for(j=i+1;j<assend.length;j++){
    if(assend[i]>assend[j]){
        let s
        s=assend[i];
        assend[i]=assend[j]
        assend[j]=s
    }
 }
}
console.log(assend)