#pragma strict
public var textHints : UI.Text;
public var sellingBackground : UI.Image;
private var pressedButton : boolean = false;
public static var width : int;
public static var height : int;

//buttons
var buttonW:int = 120;
var buttonH:int = 50;
var myRect5 = new Rect(Screen.width/2-75, Screen.height/2+200, buttonW, buttonH);
var buttonS : String = "Sell!";
//selling variables
var price: int = 2500;
var priceText: UI.Text;
var priceError3: UI.Text;
var sellConfirm: UI.Text;
//var customerReaction: UI.Text;
//add to the HUD
//check if already added to HUD
var stopSell : boolean;
//sellcount for text above
var sellCount: int;

//button textures
var addButtonTexture : Texture;
var addButtonTextureHover : Texture;

var subButtonTexture: Texture;
var subButtonTextureHover: Texture;

var sellBtn: Texture;
var sellBtnHover: Texture;

var donebtn : Texture;
var donebtnHover : Texture;

 function Start(){
 
	sellConfirm.enabled = false;
	stopSell = false;
	priceText.enabled = false;
	priceError3.enabled = false;
	// Setting the Day2SaleMade variable to 0 otherwise the game will just advance
	// without the sale being made
	//PlayerPrefs.SetInt("Day2SaleMade", 0);
 	PlayerPrefs.SetInt("Day3SaleMade", sellCount);
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
         textHints.enabled = true;
         priceText.enabled = true;
         priceText.text = price + " G";
        
         sellingBackground.enabled = true;
     }
     else 
     {
     	textHints.enabled = false;
        sellingBackground.enabled = false;
        priceText.enabled = false;
        priceError3.enabled = false;
     	sellConfirm.enabled = false;
     }
 }

 //entering selling  
function OnGUI () {
	if(pressedButton == true){
	
	
	//Create a new button to decrease price
	var bT = subButtonTexture;				//store buttontexture to toggle between textures
	var myRect3 = new Rect(Screen.width/2-100, Screen.height/2+100, buttonW, buttonH);
	if ( myRect3.Contains(Event.current.mousePosition)) 
		{
			bT = subButtonTextureHover;
		}
	var isButtonCreated3 : boolean = GUI.Button(myRect3, bT);
		if (isButtonCreated3) {
			if(stopSell==false){
				priceError3.enabled = false;
				price -= 50;
	    		priceText.text = price + " G";
	    		if(price < 0){
	    			price = 0;
	    			priceError3.enabled = true;
	    			priceError3.text = "Please increase the price, we have bills to pay";
	    		}
	    		else if (price > 3600){
	    			textHints.text = "hmmm still too much";
	    		}
	    		else
	    		textHints.text = "~Customer is thinking";
	    	}
		}
	
	//Create a new button to increase Price
var bta = addButtonTexture;
	var myRect4 = new Rect(Screen.width/2+50, Screen.height/2+100, buttonW, buttonH);
	if ( myRect4.Contains(Event.current.mousePosition)) 
		{
			bta = addButtonTextureHover;
		}
	var isButtonCreated4 : boolean = GUI.Button(myRect4, bta);
		if (isButtonCreated4) {
			if(stopSell==false){
				priceError3.enabled = false;
	    		price += 50;
	    		priceText.text = price + " G";
	    		if(price > 6000){
	    			price = 6000;
	    			priceError3.enabled = true;
	    			priceError3.text = "Maybe you should lower the price, customer is getting concerned";
	    		}
	    		else if (price > 4050){
	    			textHints.text = "Hmm can I get it at a lower price";
	    		}
	    		else
	    			textHints.text = "~Customer is contemplating";
	    		}
	    		
		}
	
	//Create a new button to confirm transaction
	var bts = sellBtn;
	myRect5 = new Rect(Screen.width/2-65, Screen.height/2+170, buttonW, buttonH);
	if ( myRect5.Contains(Event.current.mousePosition)) 
		{
			bts = sellBtnHover;
		}
	var isButtonCreated5 : boolean = GUI.Button(myRect5,bts);
	if(stopSell == false){	
		if (isButtonCreated5) {
			if(price == 0){
				priceError3.enabled = true;
				priceError3.text = "Mom would not want us to give it out for free.";
			}
			else if (price >= 3800)
			{
				priceError3.enabled = true;
				textHints.text = "I'm sorry. I can't afford that";
				priceError3.text = "No sale has been made";
				buttonS = "Exit";
				stopSell = true;
				price = 0;
				sellCount = sellCount + 1;
//	        	PlayerPrefs.SetInt("Day2SaleMade", sellCount);
//				PlayerPrefs.SetInt("Day2Profit", price);
//				var tempGoldNo = PlayerPrefs.GetInt("Gold") + price;
//	        	PlayerPrefs.SetInt("Gold", tempGoldNo); 
			}
        	else{	//exit.enabled = true;
        		priceError3.enabled = true;
        		textHints.text = "Thank you so much!! I can help my brothers now ";
        		priceError3.text = "Sale Success!";
        		sellConfirm.enabled = true;
        		if (stopSell == false){
	        		priceText.text =  price + " G";
	        		//target.gold = target.gold + price;
	        		stopSell = true;
                    // Storing the Day1SaleMade value so we know that the sale was made and we can advance the scene.
                    sellCount = sellCount + 1;
                   	PlayerPrefs.SetInt("Day3SaleMade", sellCount);
	        		PlayerPrefs.SetInt("Day3Profit", price);
	        		var tempGold = PlayerPrefs.GetInt("Gold") + price;
	        		PlayerPrefs.SetInt("Gold", tempGold);  
        		}
        		bts = donebtn;
        		priceError3.enabled = true;
        	}
        		
	    }	//end of pressed button
	 }
	 else{
     	if(isButtonCreated5){
        			pressedButton = false;
     		}
		}
	}// end of pressedbutton
}//end of OnGUI

function OnTriggerExit(col : Collider) {
	if(col.gameObject.tag == "Player") {
	
	pressedButton = false;
	}
}