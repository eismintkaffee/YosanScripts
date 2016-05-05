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

//selling variables

//var portalKeeper : UI.Text;
//var priceText: UI.Text;
//var priceError: UI.Text;
//var sellConfirm: UI.Text;
//var customerReaction: UI.Text;
//add to the HUD
//check if already added to HUD

//sellcount for text above

//check if buy portal



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

//	priceText.enabled = false;
//	priceError.enabled = false;

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
	//	portalKeeper.enabled = false;
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
					tipText.text = "Sunny:";
					tipText2.text = "Time to make some sales!";
					
				}
					else if (count == 2){
					tipText.text = "Sunny:";
					tipText2.text = "Click on the character if their text is green. This means they want to buy something";
					intro.enabled = false;
					
				}
					else if (count >= 2) {
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