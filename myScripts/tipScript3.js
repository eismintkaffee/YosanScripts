﻿#pragma strict
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
    	tipText.text = "Tutorial Time";
    	Time.timeScale = 0.0;
    	var btn = nextBtn;
    	var myRect2 = new Rect(Screen.width/2+50, Screen.height/2+100, buttonW, buttonH);
    	GUI.skin.button = nextBtnn;
    	if (myRect2.Contains(Event.current.mousePosition)){
    		btn = nextBtnHover;
    	}
    	
    	
		var isButtonCreated2 : boolean = GUI.Button(myRect2, btn);
		if (isButtonCreated2) {
				
				//tipText2.text = "It is easy to sell";
				count = count + 1;
				if(count == 1){
					tipText2.enabled = true;
					tipText2.text = "Today is another great day for selling!";
				}
					else if (count == 2){
					tipText2.text = "You will find someone who wants to make a big purchase!!";
				}
					else if (count == 3){
					tipText2.text = "Pretty exciting right?";
				}
					else if (count == 4){
					tipText2.text = "Also, you will get to preview buying items today";
				}	else if (count == 5){
					tipText2.text = "There will be a merchant who can tell you all about it";
				}
					else if (count == 6){
					tipText2.text = "Once you are done for the day, go to the bed on the second floor to get some rest.";
				}
					else if (count == 7){
					tipText2.text = "Remember today is the last day until the portal opens, so save your money!";
				}
					else if (count >= 8){
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