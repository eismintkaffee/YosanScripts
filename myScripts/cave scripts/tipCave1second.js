#pragma strict




var loadlevel: String;
private var triggerEnter: boolean = false;
var tipText: UI.Text;
var tipText2: UI.Text;

//var tipText3: UI.Text;
//var tipText4: UI.Text;
var count: int;

var buttonW:int = 120;
var buttonH:int = 50;
public var tipBackground : UI.Image;

//button textures
var nextBtn : Texture2D;
var nextBtnHover: Texture2D;
var nextBtnn : GUIStyle;

var Timer : double;



function Start(){
	tipText.enabled = false;
	tipText2.enabled = false;

	//tipText3.enabled = false;
	//tipText4.enabled = false;
	count =0;
}

function Update()
 {
     if(triggerEnter == true)
     {
         tipText.enabled = true;
         tipText2.enabled = true;
       
         tipBackground.enabled  = true;
         
     }
     else
     {
     	 tipText2.enabled = false;
     
         tipBackground.enabled = false;
    }
 }

function OnTriggerEnter ()
{
	if(triggerEnter == false){
		triggerEnter = true;
		tipBackground.enabled = true;
		tipText2.enabled = true;
		Timer = Time.time;
	}else
		triggerEnter = false;
		tipBackground.enabled = false;
		//tipText.enabled = false;

}

function OnTriggerExit ()
{

		triggerEnter = false;
		tipBackground.enabled = false;
		tipText.enabled = false;
		tipText2.enabled = false;	
		//Time.timeScale = 1.0;
				Destroy(this.gameObject);
}


function OnGUI () {
	if(triggerEnter == true){
		
    	
	
					tipText2.enabled = true;
					
					tipText.text = "PowerSell:";
					tipText2.text = "Watch out! There's Three!!";
				
				}
	 
		    
    		
		
		
	}
//end of on GUI