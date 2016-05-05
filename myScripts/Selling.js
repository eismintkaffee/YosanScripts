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
var price: int = 100;
var priceText: UI.Text;
var priceError: UI.Text;
var sellConfirm: UI.Text;
//add to the HUD
var target : gold;
//check if already added to HUD
var stopSell : boolean;
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

//sounds
var sellSound : AudioSource;


function Start(){
 
	sellConfirm.enabled = false;
 	stopSell = false;
 	priceText.enabled = false;
 	//var sellCount: int;
 	//sellCount = PlayerPrefs.GetInt("Day1SaleMade");
 	//check to see if a sale has been made
 	PlayerPrefs.SetInt("Day1SaleMade",sellCount);
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
	var bT = subButtonTexture;				//store buttontexture to toggle between textures
	var myRect3 = new Rect(Screen.width/2-100, Screen.height/2+100, buttonW, buttonH);
	if ( myRect3.Contains(Event.current.mousePosition)) 
		{
			bT = subButtonTextureHover;
		}
	var isButtonCreated3 : boolean = GUI.Button(myRect3, bT);
		if (isButtonCreated3) {
			if(stopSell==false){
				priceError.enabled = false;
				Debug.Log("False");
				price -= 25;
	    		priceText.text = price + " G";
	    		if(price <= 0){
	    			price = 0;
	    			priceError.enabled = true;
	    			Debug.Log("true");
	    			priceError.text = "Please increase the price, we have bills to pay";
	    		}
	    	else{
	    		price += 0;	
	    		}
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
				Debug.Log("False");
				priceError.enabled = false;
	    		price += 25;
	    		priceText.text = price + " G";
	    		if(price >= 150){
	    			price = 150;
	    			priceError.enabled = true;
	    			Debug.Log("true");
	    			priceError.text = "Maybe you should lower the price, customer might get scared";
	    			}
	    		}
	    	else{
	    		price += 0;
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
				priceError.enabled = true;
				priceError.text = "Mom would not want us to give it out for free.";
			}
			else if (price == 150)
			{
				priceError.enabled = true;
				priceError.text = "Customer is hesitant, please adjust the price";
			}
        	else{	//exit.enabled = true;
        	sellSound = GetComponent.<AudioSource>();
					sellSound.Play();
        		textHints.text = "Thank you! Miss";
        		
        		sellConfirm.enabled = true;
        		if (stopSell == false){
	        		priceText.text =  price + " G";
	        		target.gold = target.gold + price;
	        		stopSell = true;
	        		//sellCount++;
	        		//sellCount = sellCount + 1;
	        		sellCount = sellCount + 1;
	        		PlayerPrefs.SetInt("Day1SaleMade",sellCount);
	        		PlayerPrefs.SetInt("Day1Profit",price);
	        		var tempGold = PlayerPrefs.GetInt("Gold") + price;
	        		PlayerPrefs.SetInt("Gold", tempGold);
        		}
        	
        		bts = donebtn;
        		
        		}
        	}
        }
     else{
     	if(isButtonCreated5){
        			pressedButton = false;
     	}
	 }
	   
	}//end of pressed button
	

}// end of OnGUI


function OnTriggerExit(col : Collider) {
	if(col.gameObject.tag == "Player") {
	
	pressedButton = false;
	}
}