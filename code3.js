const prompt=require("prompt-sync")();
let m=[12, 3, 4, 1, 6, 9];
var sum=prompt("enter a number");
let length=m.length
function triplets(m,sum,length)
{
    for(var i=1;i<=length-2;i++)
    {
     for(var j=0;j<length-1;j++)
     {
        for(var k=j+1;k<length;k++)
        {
            var s= m[i]+m[j]+m[k];
            if(s==sum)
            {
             return true;
                
            }
            
        }
     }
}
return false;
}
console.log(triplets(m,sum,length));
 
       
          
        