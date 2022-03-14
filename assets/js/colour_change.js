var a = document.getElementsByClassName("bttn");
var count = a.length;
 var colours = ["red", "#11576c", "green","violet","orange"];
   for (let i = 0,j=0;i<colours.length&&j<count;i++,j++){
      
     a[j].style.backgroundColor = colours[i];
     console.log(colours[i]);
      if(i==4)
      {
          i=-1;
      }
    }

  