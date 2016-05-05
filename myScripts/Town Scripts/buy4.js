#pragma strict
public var textHints : UI.Text;
public var sellingBackground : UI.Image;
private var pressedButton : boolean = false;
public static var width : int;
public static var height : int;

//buttons
var buttonW:int = 25;
var buttonH:int = 25;
var myRect5 = new Rect(Screen.width/2-75, Screen.height/2+200, buttonW, buttonH);
var buttonS : String = "Buy!!";
//selling variables
var price: int;
var priceText: UI.Text;
var priceError3: UI.Text;
var sellConfirm: UI.Text;
//var customerReaction: UI.Text;
//add to the HUD
//check if already added to HUD
var stopBuy : boolean;
//sellcount for text above
var sellCount: int;

//item quantity GUI
var itemQ1: UI.Text;
var itemQ2: UI.Text;
var itemQ3: UI.Text;


//item quantity
var item1Count: int = 0;
var item2Count: int = 0;
var item3Count: int = 0;

//buying variables
var totalPurchase: int;
var totalText: UI.Text;
//buying dialogue
var diaText : UI.Text;

//sana dialogue
var sanaDia : UI.Text;
var sanaName : UI.Text;

//button textures
var addButtonTexture : Texture;
var addButtonTextureHover : Texture;

var subButtonTexture: Texture;
var subButtonTextureHover: Texture;

var sellBtn: Texture;
var sellBtnHover: Texture;

var donebtn : Texture;
var donebtnHover : Texture;

var nextBtnn : GUIStyle;

 function Start(){
 
	sellConfirm.enabled = false;
	stopBuy = false;
	priceText.enabled = false;
	priceError3.enabled = false;
	itemQ1.enabled = false;
	itemQ2.enabled = false;
	itemQ3.enabled = false;

	sanaDia.enabled = false;
	sanaName.enabled = false;
	totalText.enabled = false;
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
         itemQ1.enabled = true;
		 itemQ2.enabled = true;
		 itemQ3.enabled = true;
	
	     sanaDia.enabled = true;
	     sanaName.enabled = true;
	     totalText.enabled = true;
         //priceText.text = price + " G";
        
         sellingBackground.enabled = true;
     }
     else 
     {
     	textHints.enabled = false;
        sellingBackground.enabled = false;
        priceText.enabled = false;
        priceError3.enabled = false;
     	sellConfirm.enabled = false;
     		itemQ1.enabled = false;
	itemQ2.enabled = false;
	itemQ3.enabled = false;

	 sanaDia.enabled = false;
	     sanaName.enabled = false;
	totalText.enabled = false;
     }
 }

 //entering selling  
function OnGUI () {
	if(pressedButton == true){
	diaText.enabled = false;
	GUI.skin.button = nextBtnn;
	//*****Enable all qty text
	itemQ1.enabled = true;
	itemQ2.enabled = true;
	itemQ3.enabled = true;

	 sanaDia.enabled = true;
	 sanaName.enabled = true;
	 
	 totalText.enabled = true;
	
//**************************************************************1
	//Create a new button to decrease price
	var bT = subButtonTexture;				//store buttontexture to toggle between textures
	var myRect3 = new Rect(Screen.width/2-85, Screen.height/2-160, buttonW, buttonH);
	if ( myRect3.Contains(Event.current.mousePosition)) 
		{
			bT = subButtonTextureHover;
		}
	var isButtonCreated3 : boolean = GUI.Button(myRect3, bT);
		if (isButtonCreated3) {
			if(stopBuy==false){
				priceError3.enabled = false;
				//price -= 50;
	    		//priceText.text = price + " G";
	    		item1Count -= 1;
	    		if(item1Count < 0){
	    			item1Count = 0;
	    			itemQ1.text = item1Count.ToString();
	    		}
	    		
	    		else{
	    			itemQ1.text = item1Count.ToString();
	    	}
		}
	}
	//Create a new button to increase Price
var bta = addButtonTexture;
	var myRect4 = new Rect(Screen.width/2-25, Screen.height/2-160, buttonW, buttonH);
	if ( myRect4.Contains(Event.current.mousePosition)) 
		{
			bta = addButtonTextureHover;
		}
	var isButtonCreated4 : boolean = GUI.Button(myRect4, bta);
		if (isButtonCreated4) {
			if(stopBuy==false){
				//priceError3.enabled = false;
	    		//price += 50;
	    		//priceText.text = price + " G";
	    		item1Count += 1;
	    		sanaDia.text = '"I can sell these too."';
	    		if(item1Count > 2){
	    			item1Count = 2;
	    			itemQ1.text = item1Count.ToString();
	    		}
	    	
	    		else{
	    			itemQ1.text = item1Count.ToString();
	    		}
	    		
		}
	}
	
//**************************************************************2
		//Create a new button to decrease price
	var bT2 = subButtonTexture;				//store buttontexture to toggle between textures
	var myRect17 = new Rect(Screen.width/2-85, Screen.height/2-100, buttonW, buttonH);
	if ( myRect17.Contains(Event.current.mousePosition)) 
		{
			bT = subButtonTextureHover;
		}
	var isButtonCreated17 : boolean = GUI.Button(myRect17, bT2);
		if (isButtonCreated17) {
			if(stopBuy==false){
				//priceError3.enabled = false;
				//price -= 50;
	    		//priceText.text = price + " G";
	    			item2Count -= 1;
	    		if(item2Count < 0){
	    			item2Count = 0;
	    			itemQ2.text = item2Count.ToString();
	    		}
	    		
	    		else{
	    			itemQ2.text = item2Count.ToString();
	    	}
	    	}
		}
	
	//Create a new button to increase Price
var bta2 = addButtonTexture;
	var myRect6 = new Rect(Screen.width/2-25, Screen.height/2-100, buttonW, buttonH);
	if ( myRect6.Contains(Event.current.mousePosition)) 
		{
			bta = addButtonTextureHover;
		}
	var isButtonCreated6 : boolean = GUI.Button(myRect6, bta2);
		if (isButtonCreated6) {
			if(stopBuy==false){
				//priceError3.enabled = false;
	    		//price += 50;
	    		//priceText.text = price + " G";
	    			item2Count += 1;
	    			sanaDia.text = '"Hmm I can sell these for twice as much"';
	    		if(item2Count > 2){
	    			item2Count = 2;
	    			itemQ2.text = item2Count.ToString();
	    		}
	    		
	    		else{
	    			itemQ2.text = item2Count.ToString();
	    	}
	    		}
	    		
		}
	
	
//**************************************************************3
	//Create a new button to decrease price
	var bT3 = subButtonTexture;				//store buttontexture to toggle between textures
	var myRect7 = new Rect(Screen.width/2-85, Screen.height/2-30, buttonW, buttonH);
	if ( myRect7.Contains(Event.current.mousePosition)) 
		{
			bT = subButtonTextureHover;
		}
	var isButtonCreated7 : boolean = GUI.Button(myRect7, bT3);
		if (isButtonCreated7) {
			if(stopBuy==false){
				item3Count -= 1;
	    		if(item3Count < 0){
	    			item3Count = 0;
	    			itemQ3.text = item3Count.ToString();
	    		}
	    		
	    		else{
	    			itemQ3.text = item3Count.ToString();
	    	}
	    	}
		}
	
	//Create a new button to increase Price
var bta3 = addButtonTexture;
	var myRect8 = new Rect(Screen.width/2-25, Screen.height/2-30, buttonW, buttonH);
	if ( myRect8.Contains(Event.current.mousePosition)) 
		{
			bta = addButtonTextureHover;
		}
	var isButtonCreated8 : boolean = GUI.Button(myRect8, bta3);
		if (isButtonCreated8) {
			if(stopBuy==false){
				item3Count += 1;
				sanaDia.text = '"This looks tasty"';
	    		if(item3Count > 2){
	    			item3Count = 2;
	    			itemQ3.text = item3Count.ToString();
	    		}
	    		
	    		else{
	    			itemQ3.text = item3Count.ToString();
	    	}
	    		
		}
	}
	

	
//**************************************************************sell
	
	
	
	
	//Create a new button to confirm transaction
	var bts = sellBtn;
	myRect5 = new Rect(Screen.width/2+50, Screen.height/2+170, 120, 50);
	if ( myRect5.Contains(Event.current.mousePosition)) 
		{
			bts = sellBtnHover;
		}
	var isButtonCreated5 : boolean = GUI.Button(myRect5,bts);
	if(stopBuy == false){
		//add 
		var iceCreamPrice = item1Count * 150;	
		var cakePrice = item2Count * 80;
		var bagelPrice = item3Count * 200;
		
		
		totalPurchase = iceCreamPrice + cakePrice + bagelPrice;
		totalText.text = totalPurchase.ToString();
		var tempGold = PlayerPrefs.GetInt("Gold");
		
		if (isButtonCreated5) {		//if button5 is clicked
			if(tempGold == 0 || tempGold < totalPurchase ){
				priceError3.enabled = true;
				priceError3.text = "You don't have enough money";
			}
        	else{	//exit.enabled = true;
        		priceError3.enabled = true;
        		textHints.text = "Welcome and Thank you so much!!";
        		priceError3.text = "Buy Success!";
        		sellConfirm.enabled = true;
        		//if (stopBuy == false){
	        		//priceText.text =  price + " G";
	        		//target.gold = target.gold + price;
	        	//	stopBuy = true;
                    // Storing the Day1SaleMade value so we know that the sale was made and we can advance the scene.
                    //sellCount = sellCount + 1;
                   //	PlayerPrefs.SetInt("Day3SaleMade", sellCount);
	        		//PlayerPrefs.SetInt("Day3Profit", price);
	        		tempGold = PlayerPrefs.GetInt("Gold") - totalPurchase;
	        		PlayerPrefs.SetInt("Gold", tempGold);  
        		//}//end stopbuy
        		
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