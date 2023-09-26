let a=parseInt(prompt("enter the start value"))


for(i=1;i<=a;i++){
	document.write("*&nbsp")
}
document.write("<br>")

for(i=1;i<a-1;i++){
for(j=1;j<=a;j++){
	if(j==1 || j==a){
		document.write("*&nbsp")
	}

	else{
		document.write("&nbsp&nbsp&nbsp")
	}
}
document.write("<br>")
	
}


for(i=1;i<=a;i++){
	document.write("*&nbsp")
}