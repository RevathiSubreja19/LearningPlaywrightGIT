function character(str,char){

var count =0;
for(var i=0;i<str.length;i++)
  {
    str = str.toLowerCase();
    i = str.indexOf(char,i);
    if(i!=-1)
    count++;
    else
      break;
  }
return count;
}

console.log(character("tesdfghrrrrr","r"));
            
            

