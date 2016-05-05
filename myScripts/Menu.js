#pragma strict

//var target: Selling;
var keyMenu : UI.Text;
var background : UI.Image;
var paused : boolean;
var buttonW:int = 200;
var buttonH:int = 96;

var historyText : UI.Text;
var openMenuText : UI.Text;
var gamePauseText : UI.Text;
//var percentText : UI.Text;

var target : Selling;
var target2 : sellingc2;
//day two customers
var targetDay2 :Selling2Day2;
var targetDay22 :Selling22Day2;
var targetDay23 :Selling1Day2;

//day three customers
var targetDay3 : Selling1Day3;
//ArrayList<string> historyText;
//var music : AudioSource = GetComponent.<AudioSource>();
//var exitSelling : boolean;

//button textures
var btnTextureQuit : Texture;
var btnTextureHoverQuit: Texture;
var btnTextureInventory : Texture;
var btnTextureHoverInventory: Texture;
var btnTextureReturn : Texture;
var btnTextureHoverReturn: Texture;
var btnTextureHistory : Texture;
var btnTextureHoverHistory: Texture;
var btnTextureCalen : Texture;
var btnTextureHoverCalen: Texture;
//sound

var buttonSound : AudioSource;


function Start() {
    keyMenu.enabled = false;
    background.enabled = false;
    paused = false;
    openMenuText.text = "Press 'Esc' to open menu";
    gamePauseText.enabled = false;
   	
   // music.Play();
}
 
//function Update() {
 
//    if (Input.GetKeyDown(KeyCode.Escape)) 
//    {
//    	if (paused)
//    	{
//            keyMenu.enabled = !keyMenu.enabled;
//            background.enabled = true;
//            Time.timeScale = 0.0;
//            //music.Stop();
//            paused = false;
//        }//end true statement
//    	else
//    	{
//            keyMenu.enabled = false;
//            background.enabled = false;
//            Time.timeScale = 1.0;
//            paused = true;
//         // music.Play();
//    	}
//    }
        
// Redid the Update() function to make the in game menu spawn and despawn when the Escape 
// button is pressed.
function Update() 
{
    if (Input.GetKeyDown(KeyCode.Escape)) 
    {
        if(paused == true)
        {
            paused = false;
            background.enabled = false;
            Time.timeScale = 1.0;
            historyText.enabled = false;
            AudioListener.volume = 1.0;
            gamePauseText.enabled = false;
            openMenuText.text = "Press 'Esc' to open menu";
        }
        else if(paused == false)
        {
            paused = true;
            Time.timeScale = 0.0;
            background.enabled = true;
            historyText.enabled = true;
            AudioListener.volume = 0.2;
            gamePauseText.enabled = true;
            openMenuText.text = "Press 'Esc' to close menu";
        }
    }       
       
// 	//if player is talking to a customer
// 	if(Input.GetKeyDown(KeyCode.E)){
// 		
// 		 target.textHints.enabled = false;
//         target.sellingBackground.enabled = false;
// 	
//
// 
//    }
   }
   
 
   
  function OnGUI () {
  //if (Input.GetKeyDown(KeyCode.Escape)) {
    if(paused){
    
    
          //Create a new button for inventory
        var bti = btnTextureInventory;							//store button texture so it can toggle when it hovers
       
		var myRect3 = new Rect(Screen.width/2-25, Screen.height/2, buttonW, buttonH);
		 if ( myRect3.Contains(Event.current.mousePosition)) 
		{
			bti = btnTextureHoverInventory;
		
			
		}
		var isButtonCreated3 : boolean = GUI.Button(myRect3, bti);
			if (isButtonCreated3){
				historyText.text = "Inventory coming soon";
			buttonSound = GetComponent.<AudioSource>();
			buttonSound.Play();
				
			}
			
		var bth = btnTextureHistory;
        
			
		//Create a new button for Sale log
		var myRect4 = new Rect(Screen.width/2-25, Screen.height/2+70, buttonW, buttonH);
		if ( myRect4.Contains(Event.current.mousePosition)) 
		{
			bth = btnTextureHoverHistory;
			
		}
		var isButtonCreated4 : boolean = GUI.Button(myRect4, bth);
			if (isButtonCreated4){
			buttonSound = GetComponent.<AudioSource>();
				buttonSound.Play();
				var Gold = PlayerPrefs.GetInt("Gold");
				if(Application.loadedLevelName == "Day1"){
				var targetPrice = target.price;
				var target2Price = target2.price;
				//var percent: float;
				//var 
				//(target.price / Gold) * 10.0;
				//percent = targetPrice / Gold * 10.0;
				historyText.text = "Current " + Gold + " G\n" + "Earned " + targetPrice + "G\n" + "Earned " + target2Price + "G\n";  //+ percent + " %";
				}
				else if(Application.loadedLevelName == "Day2"){
   					var targetDay2Price = targetDay2.price;
   					var targetDay22Price = targetDay22.price;
   					var targetDay23Price = targetDay23.price;
   					historyText.text = "Current " + Gold + " G\n" + "Earned " + targetDay2Price + "G\n" + "Earned " + targetDay23Price + "G\n" + "Earned " + targetDay22Price + "G\n";  //+ percent + " %";
   				}
   				else if (Application.loadedLevelName == "Day3"){
   					var targetDay3Price = targetDay3.price;
   				
   					historyText.text = "Current " + Gold + " G\n" + "Earned " + targetDay3Price;
   				}  
				
				
				
			}
	    //Create a new button for Calendar
	    var btc = btnTextureCalen;
        
	    
	    
		var myRect5 = new Rect(Screen.width/2-25, Screen.height/2+140, buttonW, buttonH);
		
		if ( myRect5.Contains(Event.current.mousePosition)) 
		{
			btc = btnTextureHoverCalen;
			
		}
		var isButtonCreated5 : boolean = GUI.Button(myRect5, btc);		
			if (isButtonCreated5){
			buttonSound = GetComponent.<AudioSource>();
				buttonSound.Play();
				if(Application.loadedLevelName == "Day1"){
				historyText.text = "Days until portal appears:3";
				}
				if(Application.loadedLevelName == "Day2"){
				historyText.text = "Days until portal appears:2";
				}
				if(Application.loadedLevelName == "Day3"){
				historyText.text = "Days until portal appears:1";
				}
			}
		//Create a new button for Sale log
		var bT = btnTextureQuit;
		var myRect6 = new Rect(Screen.width/2-25, Screen.height/2+210,buttonW, buttonH);
		
		if ( myRect6.Contains(Event.current.mousePosition)) 
		{
			bT = btnTextureHoverQuit;
		
		}
		var isButtonCreated6 : boolean = GUI.Button(myRect6, bT);
		
		
 

        if (isButtonCreated6) {
        buttonSound = GetComponent.<AudioSource>();
				buttonSound.Play();
				Application.Quit();
        }
        
        
        //Create a new button for Return to main menu
        var btr = btnTextureReturn;
		var myRect7 = new Rect(Screen.width/2-25, Screen.height/2+280, buttonW, buttonH);
		
		if ( myRect7.Contains(Event.current.mousePosition)) 
		{
			btr = btnTextureHoverReturn;
			
		}
		var isButtonCreated7 : boolean = GUI.Button(myRect7, btr);
		if (isButtonCreated7) {
		buttonSound = GetComponent.<AudioSource>();
				buttonSound.Play();
				  paused = false;
            background.enabled = false;
            Time.timeScale = 1.0;
            historyText.enabled = false;
            AudioListener.volume = 1.0;
            gamePauseText.enabled = false;
            openMenuText.text = "Press 'Esc' to open menu";
        }
	  
	}//end if paused
//}
}
   


