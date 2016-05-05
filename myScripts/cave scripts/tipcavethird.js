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

//var Timer : double;
//follow enemy
var target : Transform; //the enemy's target
var moveSpeed = 3; //move speed
var rotationSpeed = 3; //speed of turning

var myTransform : Transform; //current transform data of this enemy


function Start(){
	tipText.enabled = false;
	tipText2.enabled = false;
	
	//tipText3.enabled = false;
	//tipText4.enabled = false;
	count = 0;
}

function Update()
 {
     if(triggerEnter == true)
     {
         tipText.enabled = true;
         tipText2.enabled = true;
       
         tipBackground.enabled  = true;
          //rotate to look at the player
   	 	 myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
    	Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);


 //move towards the player
 myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
     }
     else
     {
     	 tipText2.enabled = false;
     
         tipBackground.enabled = false;
    }
 }

function OnTriggerEnter ()
{
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
		//Time.timeScale = 1.0;
					
		Destroy(this.gameObject);
}


function OnGUI () {
	if(triggerEnter == true){
		tipText2.enabled = true;
		tipText.text = "Sana:";
		tipText2.text = "This one is coming towards us!";}
		 target = GameObject.FindWithTag("Player").transform; //target the player
	}
//end of on GUI