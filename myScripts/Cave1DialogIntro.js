#pragma strict


var loadlevel: String;
private var triggerEnter: boolean = false;
var tipText: UI.Text;
var tipText2: UI.Text;
var tipIntro: UI.Text;
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



function Start(){
	tipText.enabled = false;
	tipText2.enabled = false;
	tipIntro.enabled = false;
	tipBackground.enabled = true;
	//tipText3.enabled = false;
	//tipText4.enabled = false;
	count = 0;
}

function Update()
 {
     if(triggerEnter == true)
     {
         tipText.enabled = true;
         tipText2.enabled = true;
         tipIntro.enabled = true;
         tipBackground.enabled  = true;
         
     }
     else
     {
     	 tipText2.enabled = false;
     	 tipIntro.enabled = false;
         tipBackground.enabled = true;
    }
 }

function OnTriggerEnter ()
{
	if(triggerEnter == false){
		triggerEnter = true;
		tipBackground.enabled = true;
		tipText2.enabled = true;
	}else
		triggerEnter = false;
		tipBackground.enabled = true;
		//tipText.enabled = false;

}

function OnTriggerExit ()
{

		triggerEnter = false;
		tipBackground.enabled = true;
		tipText.enabled = false;
		tipText2.enabled = false;
		tipIntro.enabled = false;		
		Time.timeScale = 1.0;
}


function OnGUI () {
	if(triggerEnter == true){
		
    	tipBackground.enabled = true;
		tipText2.enabled = true;
    	//tipText.text = "Portal tutorial";
    	//tipIntro.enabled = false;
    	Time.timeScale = 0.0;
    	var btn = nextBtn;
    	var myRect2 = new Rect(Screen.width/2+300, Screen.height/2+300, buttonW, buttonH);
    	GUI.skin.button = nextBtnn;
    	if (myRect2.Contains(Event.current.mousePosition)){
    		btn = nextBtnHover;
    	}
    	
    	
		var isButtonCreated2 : boolean = GUI.Button(myRect2, btn);
		if (isButtonCreated2) {
				tipIntro.enabled = false;
				//tipText2.text = "It is easy to sell";
				count = count + 1;
				if(count == 1){
					tipText2.enabled = true;
					tipIntro.text = " ";
					tipText.text = "PowerSell:";
					tipText2.text = "(*So this is what's inside the Portal.*)";
					
				}
					else if (count == 2){
					tipText2.enabled = true;
					tipText.text = "Sana:";
					tipText2.text = "Hey, I thought the portal would just disappear.";
					tipIntro.enabled = false;
				}
					else if (count == 3){
					tipText2.enabled = true;
					tipText.text = "Sana:";
					tipText2.text = "She tricked us!";
					tipIntro.enabled = false;
				}
					else if (count == 4){
					tipText.text = "PowerSell:";
					tipText2.text = "Looks like we have to find a way out.";
					tipIntro.enabled = false;
				}	else if (count == 5){
					tipText.text = "Sana:";
					tipText2.text = "You mean I have to walk through here?!";
					tipIntro.enabled = false;
				}	else if (count == 6){
					tipText.text = "PowerSell:";
					tipText2.text = "Looks like there's not other way. Do you still have that wand that your mother gave you?";
					tipIntro.enabled = false;
				}	else if (count == 7){
					tipText.text = "Sana:";
					tipText2.text = "Of course! I have it just in case I get into trouble.";
					tipIntro.enabled = false;
				}	else if (count == 8){
					tipText.text = "PowerSell:";
					tipText2.text = "This may be the time to use it.";
					tipIntro.enabled = false;
				}	else if (count == 9){
					tipText.text = "Goal: ";
					tipText2.text = "Find you way out of the portal. Use the left mouse button to shoot enemies.";
					tipIntro.enabled = false;
				}
					else if (count >= 9){
					tipBackground.enabled  = false;
					tipText.enabled = false;
					tipText2.enabled = false;
					tipIntro.enabled = false;
					triggerEnter = false;
					Time.timeScale = 1.0;
					Destroy(this.gameObject);	
				}
				}
	 }
		    
    		
		
		
	}
//end of on GUI