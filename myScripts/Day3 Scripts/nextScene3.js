﻿#pragma strict

var loadlevel: String;
private var triggerEnter: boolean = false;
var nextText: UI.Text;


var buttonW:int = 120;
var buttonH:int = 50;
public var nextBackground : UI.Image;

//button textures
var YesTexture : Texture;
var YesTextureHover : Texture;

var NoTexture: Texture;
var NoTextureHover: Texture;

var CloseTexture: Texture;
var CloseTextureHover: Texture;

 function Update()
 {
     if(triggerEnter == true)
     {
         nextText.enabled = true;
         nextBackground.enabled  = true;
         
     }
     else
     {
     	 nextText.enabled = false;
         nextBackground.enabled = false;
    }
 }

function OnTriggerEnter ()
{
	if(triggerEnter == false){
		triggerEnter = true;
		nextBackground.enabled = true;
		nextText.enabled = true;
	}else
		triggerEnter = false;
		nextBackground.enabled = false;
		nextText.enabled = false;

}

function OnTriggerExit ()
{

		triggerEnter = false;
		nextBackground.enabled = false;
		nextText.enabled = false;

}


function OnGUI () {
	var cbtn = CloseTexture;
	if(triggerEnter == true){
		var sale = PlayerPrefs.GetInt("Day3SaleMade");
    	if(sale == 0)
    	{
    	nextText.text = '"I think I should go sell something"';
    	var myRect2 = new Rect(Screen.width/2+50, Screen.height/2+100, buttonW, buttonH);
		if ( myRect2.Contains(Event.current.mousePosition)) 
		{
			cbtn = CloseTextureHover;
		}
    	
    	
		var isButtonCreated2 : boolean = GUI.Button(myRect2, cbtn);
			if (isButtonCreated2) {
					triggerEnter = false;
		    		}
    	nextBackground.enabled  = true;
        //AdvanceScene();
    	}
		else{
		nextText.text = "Take a rest and end the day?";
		//Create a new button to decrease price
		var myRect3 = new Rect(Screen.width/2-175, Screen.height/2+100, buttonW, buttonH);
		var ybtn = YesTexture;
		if ( myRect3.Contains(Event.current.mousePosition)) 
		{
			ybtn = YesTextureHover;
		}
		var isButtonCreated3 : boolean = GUI.Button(myRect3, ybtn);
			if (isButtonCreated3) {
					Application.LoadLevel(loadlevel);
		    		}
	
		//Create a new button to increase Price
		var myRect4 = new Rect(Screen.width/2+50, Screen.height/2+100, buttonW, buttonH);
		var nbtn = NoTexture;
		if ( myRect4.Contains(Event.current.mousePosition)) 
		{
			nbtn = NoTextureHover;
		}
		var isButtonCreated4 : boolean = GUI.Button(myRect4, nbtn);
			if (isButtonCreated4) {
					triggerEnter =false;
		    		}
	    		
		}
		}
	}
