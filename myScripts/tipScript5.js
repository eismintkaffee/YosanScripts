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
		Time.timeScale = 1.0;
}


function OnGUI () {
	if(triggerEnter == true){
		
    	
		tipText2.enabled = true;
    	tipText.text = "Thanks for playing!!!";
    	Time.timeScale = 0.0;
    	var myRect2 = new Rect(Screen.width/2+50, Screen.height/2+100, buttonW, buttonH);
		var isButtonCreated2 : boolean = GUI.Button(myRect2, "next");
		if (isButtonCreated2) {
				
				//tipText2.text = "It is easy to sell";
				count = count + 1;
				if(count == 1){
					tipText2.enabled = true;
					tipText2.text = "I hope you guys enjoyed our game";
				}
					else if (count == 2){
					tipText2.text = "As you can see there are still plenty of things that need to be done";
				}
					else if (count == 3){
					tipText2.text = "Like this level, where if the player has earned enough money, they can have fun and fight monsters";
				}
					else if (count == 4){
					tipText2.text = "Feel free to walk around or quit the game by pressing 'ESC'";
				}	else if (count == 5){
					tipText2.text = "Thank You!";
				}
					
					else if (count >= 6){
					tipBackground.enabled  = false;
					tipText.enabled = false;
					tipText2.enabled = false;
					triggerEnter = false;
					Time.timeScale = 1.0;
					Destroy(this.gameObject);	
				}
				}
	 }
		    
    		
		
		
	}
//end of on GUI