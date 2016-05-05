#pragma strict
public var textHints : UI.Text;
public var sellingBackground : UI.Image;
private var pressedButton : boolean = false;
public static var width : int;
public static var height : int;

//buttons
var buttonW:int = 170;
var buttonH:int = 50;
var myRect5 = new Rect(Screen.width/2-75, Screen.height/2+200, buttonW, buttonH);
var buttonS : String = "Sell!";
//selling variables
var price: int = 100;
var portalKeeper : UI.Text;
//var priceText: UI.Text;
//var priceError: UI.Text;
//var sellConfirm: UI.Text;
//var customerReaction: UI.Text;
//add to the HUD
//check if already added to HUD
var stopSell : boolean;
//sellcount for text above
var sellCount: int;
//check if buy portal
var portalSold : boolean;
var wall : GameObject;

//dialogue
var tipText: UI.Text;
var tipText2: UI.Text;
var intro: UI.Text;

var count: int;
public var tipBackground : UI.Image;
//button textures
var nextBtn : Texture2D;
var nextBtnHover: Texture2D;
var nextBtnn : GUIStyle;
var closeMenu : boolean;

 function Start(){
 
//	sellConfirm.enabled = false;
	stopSell = false;
//	priceText.enabled = false;
//	priceError.enabled = false;
	portalSold = false;
	// Setting the Day2SaleMade variable to 0 otherwise the game will just advance
	// without the sale being made
	//PlayerPrefs.SetInt("Day2SaleMade", 0);
	tipText.enabled = false;
	tipText2.enabled = false;
	tipBackground.enabled = false;
	intro.enabled = false;
	closeMenu = false;
//	portalKeeper.enabled = false;
 	Debug.Log(intro.enabled);
 }
 function OnMouseDown()
 {
	 if(pressedButton == false){
     pressedButton = true;
   	 }
   	 else{
   	 pressedButton = false;
   	 }
     Debug.Log(pressedButton); //check status of pressedButton
 }
 
// function OnMouseExit()
// {
//     pressedButton = false;
// }
 
 function Update()
 {
     if(pressedButton == true)
     {
//         textHints.enabled = true;
//         priceText.enabled = true;
//         priceText.text = price + " G";
        
//         sellingBackground.enabled = true;
         tipText.enabled = true;
		 tipText2.enabled = true;
		 tipBackground.enabled = true;
		 intro.enabled = true;
 		//portalKeeper.enabled = false;
     }
     else 
     {
//     	textHints.enabled = false;
//        sellingBackground.enabled = false;
//        priceText.enabled = false;
//        priceError.enabled = false;
//     	sellConfirm.enabled = false;
     	    tipText.enabled = false;
		 tipText2.enabled = false;
		 tipBackground.enabled = false;
		 intro.enabled = false;
		// portalKeeper.enabled = false;
     }
 }

 //entering selling  
function OnGUI () {
	if(pressedButton == true){
		portalKeeper.enabled = false;
		//tipText2.enabled = true;
    	//tipText.text = "Portal tutorial";
    	intro.enabled = false;
    	//tipText.enabled = true;
    	//tipBackground.enabled = true;
    	//Time.timeScale = 0.0;
    	var btn = nextBtn;
    	var myRect2 = new Rect(Screen.width/2+300, Screen.height/2+300, buttonW, buttonH);
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
					intro.text = " ";
					tipText.text = "Girl:";
					tipText2.text = "AHAHAHAHA your shop is MINE!!!";
					
				}
					else if (count == 2){
					tipText.text = "Sana:";
					tipText2.text = "What are your talking about, this my shop!";
					intro.enabled = false;
					
				}
					else if (count == 3){
					tipText.text = "Girl:";
					tipText2.text = "See that portal? Soon this place will disappear.";
					intro.enabled = false;
				
				}
					else if (count == 4){
					tipText.text = "Sunny:";
					tipText2.text = "No";
					intro.enabled = false;
				
				}	else if (count == 5){
					tipText.text = "Girl:";
					tipText2.text = "Indeed...Unless you pay for it to go away.";
					intro.enabled = false;
					
				}
					else if (count == 6){
					tipText.text = "Sana:";
					tipText2.text = "How much do you want?";
					intro.enabled = false;
				}
					else if (count == 7){
					tipText.text = "Sunny:";
					tipText2.text = "Sana, you don't have to do this.";
					intro.enabled = false;
				}
					else if (count == 8){
					tipText.text = "Sana:";
					tipText2.text = "I have to. I need to protect the shop. So how much?";
					intro.enabled = false;
				}
					else if (count == 9){
					tipText.text = "Girl:";
					tipText2.text = "Hmm...taxes are getting high lately...how about 2000g?";
					intro.enabled = false;
				}
					else if (count == 10){
					intro.enabled = false;
					if(PlayerPrefs.GetInt("Gold") > 2000){
						tipText.text = " ";
						tipText2.text = "Pay 2000g?";
	  				}else{
	  					if(portalSold == false){
			  			tipText.text = "Girl: ";
						tipText2.text = "Looks like you don't have enough money. Too bad you have to start over three days from today.";
	       				 	}
	   					}
				}
					else if (count == 11){
				
					intro.enabled = false;
					
					if(PlayerPrefs.GetInt("Gold") > 2000){
						tipText.text = "Girl:";
						tipText2.text = "Looks like you have saved enough money. Alright go on in the portal.";
						if(portalSold == false){
						//Create a new button to decrease price
//						var myRect3 = new Rect(Screen.width/2-75, Screen.height/2+100, buttonW, buttonH);
//						var isButtonCreated3 : boolean = GUI.Button(myRect3, "Access Portal");
							if (isButtonCreated2) {
					
							price = 2000;
							var tempGold = PlayerPrefs.GetInt("Gold");
							tempGold = tempGold - 2000;
					        PlayerPrefs.SetInt("Gold", tempGold);
					        Destroy(wall.gameObject);
					        //pressedButton = false;
					        portalSold = true;
							}
		
						}else{
	  				tipText2.text = "You have Paid";
	  				}
	  				}else{
	  					if(portalSold == false){
			  			tipText.text = "Girl: ";
						tipText2.text = "See ya later...ahahaha!";
			  
//						myRect5 = new Rect(Screen.width/2-50, Screen.height/2+170, 300, buttonH);
//						var isButtonCreated5 : boolean = GUI.Button(myRect5, "Return three days before");
						if (isButtonCreated2) {
							PlayerPrefs.SetInt("Gold", 500);
							Application.LoadLevel(3);
			        		}
	       			 	}else{
	        			tipText2.text = "Return Three Days";
	  			//priceText.enabled = false;
	       				 	}
	   					}
	  				}
	  			//end of else if 10
					else if (count == 12 && portalSold == true){
					tipText.text = "Girl:";
					tipText2.text = "Go on.";
					intro.enabled = false;
				}
					else if (count >= 12) {
					tipBackground.enabled  = false;
					tipText.enabled = false;
					tipText2.enabled = false;
					closeMenu = true;
				}
		}//end of button
		if(closeMenu == true){
			tipBackground.enabled  = false;
			tipText.enabled = false;
			tipText2.enabled = false;
			
		
		}
		
		
		
		
		
		
		
		
		
		
		//**************************************************
//		if(PlayerPrefs.GetInt("Gold") > 2000){
//			if(portalSold == false){
//			//Create a new button to decrease price
//			var myRect3 = new Rect(Screen.width/2-75, Screen.height/2+100, buttonW, buttonH);
//			var isButtonCreated3 : boolean = GUI.Button(myRect3, "Access Portal");
//				if (isButtonCreated3) {
//					
//					price = 2000;
//					var tempGold = PlayerPrefs.GetInt("Gold");
//					tempGold = tempGold - 2000;
//			        PlayerPrefs.SetInt("Gold", tempGold);
//			        Destroy(wall.gameObject);
//			        pressedButton = false;
//			        portalSold = true;
//			    	}
//		
//			}else{
//	  			textHints.text = "Thank you! Miss";
////	  			priceText.enabled = false;
//	  		}
//	  }else{
//	  		if(portalSold == false){
//			  textHints.text = "You don't have enough money";
//			  //Create a new button to confirm transaction
//				myRect5 = new Rect(Screen.width/2-50, Screen.height/2+170, 300, buttonH);
//				var isButtonCreated5 : boolean = GUI.Button(myRect5, "Return three days before");
//					if (isButtonCreated5) {
//							PlayerPrefs.SetInt("Gold", 500);
//							Application.LoadLevel(2);
//			        		}
//	        }else{
//	        	textHints.text = "Thank you! Miss";
//	  			//priceText.enabled = false;
//	        }
//	   }
  	}
 }// end of OnGUI


function OnTriggerExit(col : Collider) {
	if(col.gameObject.tag == "Player") {
	
	pressedButton = false;
	}
}