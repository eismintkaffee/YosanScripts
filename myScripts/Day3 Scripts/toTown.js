#pragma strict
var loadlevel: String;
private var triggerEnter: boolean = false;



function OnTriggerEnter ()
{
	if(triggerEnter == false){
		triggerEnter = true;
		Application.LoadLevel(loadlevel);
		
	}else
		triggerEnter = false;
		
		

}

function OnTriggerExit ()
{

		triggerEnter = false;
	

}