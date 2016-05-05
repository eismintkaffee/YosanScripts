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
         tipIntro.enabled = true;
         tipBackground.enabled  = true;
         
     }
     else
     {
     	 tipText2.enabled = false;
     	 tipIntro.enabled = false;
         tipBackground.enabled = false;
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
		tipBackground.enabled = false;
		//tipText.enabled = false;

}

function OnTriggerExit ()
{

		triggerEnter = false;
		tipBackground.enabled = false;
		tipText.enabled = false;
		tipText2.enabled = false;
		tipIntro.enabled = false;		
		Time.timeScale = 1.0;
}


function OnGUI () {
	if(triggerEnter == true){
		
    	
		tipText2.enabled = true;
    	//tipText.text = "Portal tutorial";
    	tipIntro.enabled = false;
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
					tipText.text = "Sana:";
					tipText2.text = "Yes?";
					
				}
					else if (count == 2){
					tipText.text = "McGillis:";
					tipText2.text = "Uh...heading out?";
					tipIntro.enabled = false;
				}
					else if (count == 3){
					tipText.text = "Sana:";
					tipText2.text = "yes...*looking puzzled*";
					tipIntro.enabled = false;
				}
					else if (count == 4){
					tipText.text = "McGillis:";
					tipText2.text = "Watch out for monsters...I wouldn't want you to get hurt.";
					tipIntro.enabled = false;
				}	else if (count == 5){
					tipText.text = "Sana:";
					tipText2.text = "*giggles* I'll be fine. Thank you McGillis.";
					tipIntro.enabled = false;
				//}
//					else if (count == 6){
//					tipText2.text = "I hope you saved enough money to get rid of that thing";
//				}
//					else if (count == 7){
//					tipText2.text = "Be careful";
				}
					else if (count >= 5){
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