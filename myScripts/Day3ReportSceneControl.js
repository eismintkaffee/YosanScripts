#pragma strict

var cam1 : Camera;
var cam2 : Camera; 
var cam3 : Camera;
var overviewPanel : GameObject;
var girlPanel : GameObject;
var powersellPanel : GameObject;
var girlDialog1 : GameObject;
var girlDialog2Positive : GameObject;
var girlDialog2Negative : GameObject;
var girlDialog2Neutral : GameObject;
var powersellDialog1 : GameObject;
var powersellDialog2Positive : GameObject;
var powersellDialog2Negative : GameObject;
var powersellDialog2Neutral : GameObject;
var powersellDialog1Gold : UI.Text;
var powersellDialogProfit : GameObject;
var overviewDialog1 : GameObject;
var okbutton1 : GameObject;
var okbutton2 : GameObject;
var okbutton3 : GameObject;

var dialogState = 0;

var goldStar1 : GameObject;
var goldStar2 : GameObject;
var goldStar3 : GameObject;
var starBG : GameObject;
//var whiteStar1 : GameObject;
//var whiteStar2 : GameObject;
//var whiteStar3 : GameObject;

var stars = 1;
var todaysProfit = 0;

function Start () 
{
    overviewPanel.SetActive(true);
    girlPanel.SetActive(false);
    powersellPanel.SetActive(false); 
    CalculateStars();
}

function Update () 
{
    if(dialogState == 0)
    {
        cam1.enabled = true;
        cam2.enabled = false;
        cam3.enabled = false;
        overviewPanel.SetActive(true);
        girlPanel.SetActive(false);
        powersellPanel.SetActive(false);
    }
    if(dialogState == 1)
    {
        cam1.enabled = false;
        cam2.enabled = true;
        cam3.enabled = false;

        overviewPanel.SetActive(false);
        girlPanel.SetActive(true);
        powersellPanel.SetActive(false);
        girlDialog1.SetActive(true);
        girlDialog2Negative.SetActive(false);
        girlDialog2Positive.SetActive(false);
        girlDialog2Neutral.SetActive(false);
    }
    if(dialogState == 2)
    {
        cam1.enabled = false;
        cam2.enabled = false;
        cam3.enabled = true;

        overviewPanel.SetActive(false);
        girlPanel.SetActive(false);
        powersellPanel.SetActive(true);
        powersellDialog1Gold.text = todaysProfit.ToString() + "G";
        powersellDialog1.SetActive(true);
        powersellDialog2Positive.SetActive(false);
        powersellDialog2Negative.SetActive(false);
         powersellDialog2Neutral.SetActive(false);
        powersellDialog1Gold.enabled = true;
        if(stars == 1)
        {
            goldStar1.SetActive(true);
            goldStar2.SetActive(false);
            goldStar3.SetActive(false);
//            whiteStar1.SetActive(false);
//            whiteStar2.SetActive(true);
//            whiteStar3.SetActive(true);
        }
        else if(stars == 2)
        {
            goldStar1.SetActive(true);
            goldStar2.SetActive(true);
            goldStar3.SetActive(false);
//            whiteStar1.SetActive(false);
//            whiteStar2.SetActive(false);
//            whiteStar3.SetActive(true);
        }
        else if(stars == 3)
        {
            goldStar1.SetActive(true);
            goldStar2.SetActive(true);
            goldStar3.SetActive(true);
//            whiteStar1.SetActive(false);
//            whiteStar2.SetActive(false);
//            whiteStar3.SetActive(false);
        }
    }
    if(dialogState == 3)
    {
        cam1.enabled = false;
        cam2.enabled = true;
        cam3.enabled = false;

        overviewPanel.SetActive(false);
        girlPanel.SetActive(true);
        powersellPanel.SetActive(false);

        girlDialog1.SetActive(false);
        girlDialog2Positive.SetActive(true);
        if(stars == 3)
        {
        	girlDialog2Positive.SetActive(true);
        	girlDialog2Negative.SetActive(false);
        	girlDialog2Neutral.SetActive(false);
        }
        else if (stars == 2){
        	girlDialog2Positive.SetActive(false);
        	girlDialog2Negative.SetActive(false);
        	girlDialog2Neutral.SetActive(true);
        
        }
        else
        {
        	girlDialog2Positive.SetActive(false);
        	girlDialog2Neutral.SetActive(false);
        	girlDialog2Negative.SetActive(true);
        }
    }
    if(dialogState == 4)
    {
        cam1.enabled = false;
        cam2.enabled = false;
        cam3.enabled = true;

        overviewPanel.SetActive(false);
        girlPanel.SetActive(false);
        powersellPanel.SetActive(true);
		powersellDialogProfit.SetActive(false);
		powersellDialog1.SetActive(false);
		powersellDialog1Gold.enabled = false;
        goldStar1.SetActive(false);
        goldStar2.SetActive(false);
        goldStar3.SetActive(false);
        starBG.SetActive(false);
//        whiteStar1.SetActive(false);
//        whiteStar2.SetActive(false);
//        whiteStar3.SetActive(false);
        
		if(stars == 3)
		{
			powersellDialog2Positive.SetActive(true);
			powersellDialog2Negative.SetActive(false);
			powersellDialog2Neutral.SetActive(false);
		}
		else if (stars == 2){
			powersellDialog2Positive.SetActive(false);
			powersellDialog2Negative.SetActive(false);
			powersellDialog2Neutral.SetActive(true);
		}
		else
		{
			powersellDialog2Positive.SetActive(false);
			powersellDialog2Negative.SetActive(true);
			powersellDialog2Neutral.SetActive(false);		
		}
    }
    if(dialogState == 5)
    {
        Application.LoadLevel("Day4");
    }
}
function AdvanceDialog()
{
    dialogState++;
}

function CalculateStars()
{
    var profit = PlayerPrefs.GetInt("Day3Profit");
    todaysProfit = profit;
    if(profit > 3000)
    {
        stars = 3;
    }
    else if(profit >= 1800)
    {
        stars = 2;
    }
    else
    {
        stars = 1;
    }
}