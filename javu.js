x=1;
if(x==1){cd=10; 
cp=10;
ch=10;}

x=x+1;


 function consola() {


    b=(producto.value)
	y=Number(midinero.value)
	a=Number(cantidad.value)


	if(b=="papitas")
 {
	if(a<cp)
	{ if(y>3500){
		to=a*3500;
		de=y-to;
		resu.innerHTML="compraste "+b+" cantidad "+a+" devuelta "+de;
		cp=cp-a;

               }

	}

 }



if(b=="chocolatina")
 {
	
if(a<ch)
	{ if (y>2500) { to=a*2500;
		de=y-to;
		resu.innerHTML="compraste "+b+" cantidad "+a+" devuelta "+de;
     ch=ch-a;
}

	}
}



if(b=="doritos")
{
	if(a<cd)
	{ if (y>1500) { to= a*1500;
		de=y-to;
		resu.innerHTML="compraste "+b+" cantidad "+a+" devuelta "+de;
		cd=cd-a;
	} }}










	if(b=="papitas"){
if(y<3500){
	resu.innerHTML="Erro el dinero no le alcanza para";


}}


	if(b=="chocolatina"){
if(y<2500){
	resu.innerHTML="Erro el dinero no le alcanza para";


}}

if(b=="doritos"){
if(y<1500){
	resu.innerHTML="Erro el dinero no le alcanza para";


}}




	


	
if (b=="papitas") {
		if (a>cp) {

			resu.innerHTML="Error la cantidad es demasiada ";
		}}

		if (b=="chocolatina") {
		if (a>ch) {

			resu.innerHTML="Error la cantidad es demasiada ";
		}}


		if (b=="doritos") {
		if (a>cd) {

			resu.innerHTML="Error la cantidad es demasiada ";
		}}

	
	
















}







function bebe(){

	

resu2.innerHTML="Papitas "+cp+" doritos "+cd+" chocolatina "+ch;


}