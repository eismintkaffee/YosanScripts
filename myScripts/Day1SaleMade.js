#pragma strict

//var waitTime = 20;
var sellDone : UI.Text;
var sellDoneBackground : UI.Image;


function Start () 
{
	sellDone.enabled = false;
    sellDoneBackground.enabled = false;
}

function Update () 
{
    var sale = PlayerPrefs.GetInt("Day1SaleMade");
    
    if(sale == 2)
    {
    	sellDone.enabled = true;
    	sellDoneBackground.enabled = true;
        //AdvanceScene();
    }
}
//function AdvanceScene()
//{
//    yield WaitForSeconds(waitTime);
//    Application.LoadLevel("Day1Report");
//}