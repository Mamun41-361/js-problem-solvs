
for(i=1; i<=100; i=i+1){

    if(i %3==0 ){

        document.writeln(i+ "= fizz" +"<br>" );
       
    }

    else if(i %5==0){
        document.writeln(i +"Buzz" );
        
    }

    else if(i %3==0  &&  i %5==0){

        document.writeln(i + "fizz" + "Buzz");
    }
else{
    document.writeln(i);
}
//document.writeln(i + "Fizz");

}
