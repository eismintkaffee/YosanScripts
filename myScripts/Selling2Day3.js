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
var price: int = 500;
var priceText: UI.Text;
var priceError: UI.Text;
var sellConfirm: UI.Text;
//var customerReaction: UI.Text;
//add to the HUD
//check if already added to HUD
var stopSell : boolean;

 function Start(){
 
	sellConfirm.enabled = false;
	stopSell = false;
	priceText.enabled = false;
 	PlayerPrefs.SetInt("Day3SaleMade", 0);
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
        priceError.enabled = false;
     	sellConfirm.enabled = false;
     }
 }

 //entering selling  
function OnGUI () {
	if(pressedButton == true){
	
	
	//Create a new button to decrease price
	var myRect3 = new Rect(Screen.width/2-175, Screen.height/2+100, buttonW, buttonH);
	var isButtonCreated3 : boolean = GUI.Button(myRect3, "Decrease Price");
		if (isButtonCreated3) {
				priceError.enabled = false;
				price -= 25;
	    		priceText.text = price + " G";
	    		if(price < 0){
	    			price = 0;
	    			priceError.enabled = true;
	    			priceError.text = "Please increase the price, we have bills to pay";
	    		}
	    		
		}
	
	//Create a new button to increase Price
	var myRect4 = new Rect(Screen.width/2+50, Screen.height/2+100, buttonW, buttonH);
	var isButtonCreated4 : boolean = GUI.Button(myRect4, "Increase Price");
		if (isButtonCreated4) {
				priceError.enabled = false;
	    		price += 25;
	    		priceText.text = price + " G";
	    		if(price > 1000){
	    			priceError.text = "Maybe you should lower the price, customer might get scared";
	    		}
	    		else if (price > 600){
	    			textHints.text = "Hmm can you lower it more";
	    		}
	    		else {
	    			textHints.text = "~Customer is contemplating";
	    		}
	    		
		}
	
	//Create a new button to confirm transaction
	myRect5 = new Rect(Screen.width/2-75, Screen.height/2+200, buttonW, buttonH);
	var isButtonCreated5 : boolean = GUI.Button(myRect5, buttonS);
		if (isButtonCreated5) {
			if(price == 0){
				priceError.enabled = true;
				priceError.text = "Mom would not want us to give it out for free.";
			}
			else if (price > 700)
			{
				priceError.enabled = true;
				textHints.text = "I'm sorry. I but I can't buy that right now";
				priceError.text = "No sale has been made";
				buttonS = "Exit";
			}
        	else{	//exit.enabled = true;
        		textHints.text = "Thank you! I'll definitely come back! ";
        		sellConfirm.enabled = true;
        		if (stopSell == false){
	        		priceText.text =  price + " G";
	        		//target.gold = target.gold + price;
	        		//stopSell = true;
                    // Storing the Day1SaleMade value so we know that the sale was made and we can advance the scene.
	        		PlayerPrefs.SetInt("Day3SaleMade", 1);
	        		PlayerPrefs.SetInt("Day3Profit", price);
	        		var tempGold = PlayerPrefs.GetInt("Gold") + price;
	        		PlayerPrefs.SetInt("Gold", tempGold); 
        		}
        		buttonS = "Exit";
        	}
        		
	    }
	}//end of pressed button
	

}// end of OnGUI