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

//sound
var sellSound : AudioSource;
var buttonSound : AudioSource;

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
{sellSound = GetComponent.<AudioSource>();
					sellSound.Play();
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
				buttonSound = GetComponent.<AudioSource>();
					buttonSound.Play();
				//tipText2.text = "It is easy to sell";
				count = count + 1;
				if(count == 1){
					tipText2.enabled = true;
					tipText2.text = "Just walk around with W,A,S,D Keys and click on the character if their text is GREEN or there is an item floating on their head";
				}
					else if (count == 2){
					tipText2.text = "This means they want to buy something. You can adjust the price of the item to any price you want.";
				}
					else if (count == 3){
					tipText2.text = "Be careful though, some customers might not want to buy if your set the price too high.";
				}
					else if (count == 4){
					tipText2.text = "Likewise, if you set it too low, you won't be able to earn money.";
				}
					else if (count == 5){
					tipText2.text = "Don't worry you will get use to it and soon you will be selling like crazy!!!";
				}
					else if (count == 6){
					tipText2.text = "Once you are done for the day, go to the bed on the second floor to get some rest.";
				}
					else if (count == 7){
					tipText2.text = "Have fun selling!!";
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