
for(i=1; i<=100; i=i+1){

    if(i %3==0 ){

        document.writeln(i+ "= fizz" +"<br>" );
       
    }

    else if(i %5==0){
        document.writeln(i +"Buzz" );
        
    }

    else if(i %5==0  &&  i %3==0){

        document.writeln(i + "fizzBuzz" + "<br>");
    }
else{
    document.writeln(i +"<br>");
}
//document.writeln(i + "Fizz");

}
