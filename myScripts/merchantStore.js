#pragma strict
#pragma strict

var loadlevel: String;
private var triggerEnter: boolean = false;
var merchText: UI.Text;
var merchText2: UI.Text;
//var merchText3: UI.Text;
//var merchText4: UI.Text;
var count: int;

var buttonW:int = 120;
var buttonH:int = 50;
public var merchBackground : UI.Image;

//button textures
var nextBtn : Texture2D;
var nextBtnHover: Texture2D;
var nextBtnn : GUIStyle;

function Start(){
	merchText.enabled = false;
	merchText2.enabled = false;
	//merchText3.enabled = false;
	//merchText4.enabled = false;
	count =0;
}

function Update()
 {
     if(triggerEnter == true)
     {
         merchText.enabled = true;
         merchText2.enabled = true;
         merchBackground.enabled  = true;
         
     }
     else
     {
     	 merchText2.enabled = false;
         merchBackground.enabled = false;
    }
 }

function OnTriggerEnter ()
{
	if(triggerEnter == false){
		triggerEnter = true;
		merchBackground.enabled = true;
		merchText2.enabled = true;
	}else
		triggerEnter = false;
		merchBackground.enabled = false;
		//merchText.enabled = false;

}

function OnTriggerExit ()
{

		triggerEnter = false;
		merchBackground.enabled = false;
		merchText.enabled = false;
		merchText2.enabled = false;
		Time.timeScale = 1.0;
}


function OnGUI () {
	if(triggerEnter == true){
		
    	
		merchText2.enabled = true;
    	merchText.text = "Buying Items (future implementation)";
    	Time.timeScale = 0.0;
    	var btn = nextBtn;
    	var myRect2 = new Rect(Screen.width/2+50, Screen.height/2+100, buttonW, buttonH);
    	GUI.skin.button = nextBtnn;
    	if (myRect2.Contains(Event.current.mousePosition)){
    		btn = nextBtnHover;
    	}
    	
    	
		var isButtonCreated2 : boolean = GUI.Button(myRect2, btn);
		if (isButtonCreated2) {
				
				//merchText2.text = "It is easy to sell";
				count = count + 1;
				if(count == 1){
					merchText2.enabled = true;
					merchText2.text = "I am a merchant that comes from a town nearby.";
				}
					else if (count == 2){
					merchText2.text = "I sell items that you can purchase so you can sell them in your store.";
				}
					else if (count == 3){
					merchText2.text = "Unfortunately, you will need to save money at start to buy items.";
				}
					else if (count == 4){
					merchText2.text = "You wouldn't want to spend money like crazy if you haven't saved well.";
				}	else if (count == 5){
					merchText2.text = "Once you do, you will be able to buy some things from me or even buy items in town!";
				}
					else if (count == 6){
					merchText2.text = "It gets pretty exciting once you get to choose the stuff you can sell at your store";
				}
					else if (count == 7){
					merchText2.text = "Think about all that money you can save....or spend *chuckle*!!!";
				}
					else if (count == 8){
					merchText2.text = "Anyways, that's all I have to say for now. Feel free to look around!";
				}
					else if (count >= 9){
					merchBackground.enabled  = false;
					merchText.enabled = false;
					merchText2.enabled = false;
					triggerEnter = false;
					Time.timeScale = 1.0;
					Destroy(this.gameObject);	
				}
				}
	 }
		    
    		
		
		
	}
//end of on GUI