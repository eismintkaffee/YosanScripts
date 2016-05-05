#pragma strict

var cam1 : Camera;
var cam2 : Camera;
var cam3 : Camera;
var overviewPanel : GameObject;
var girlPanel : GameObject;
var powersellPanel : GameObject;
var girlDialog1 : GameObject;
var girlDialog2 : GameObject;
var powersellDialog1 : GameObject;
var powersellDialog2 : GameObject;
var overviewDialog1 : GameObject;
var okbutton1 : GameObject;
var okbutton2 : GameObject;
var okbutton3 : GameObject;

var dialogState = 0;

var goldStar1 : GameObject;
var goldStar2 : GameObject;
var goldStar3 : GameObject;
var whiteStar1 : GameObject;
var whiteStar2 : GameObject;
var whiteStar3 : GameObject;

function Start () 
{
    overviewPanel.SetActive(true);
    girlPanel.SetActive(false);
    powersellPanel.SetActive(false); 
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
        girlDialog2.SetActive(false);
    }
    if(dialogState == 2)
    {
        cam1.enabled = false;
        cam2.enabled = false;
        cam3.enabled = true;

        overviewPanel.SetActive(false);
        girlPanel.SetActive(false);
        powersellPanel.SetActive(true);

        powersellDialog1.SetActive(true);
        powersellDialog2.SetActive(false);
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
        girlDialog2.SetActive(true);
    }
    if(dialogState == 4)
    {
        cam1.enabled = false;
        cam2.enabled = false;
        cam3.enabled = true;

        overviewPanel.SetActive(false);
        girlPanel.SetActive(false);
        powersellPanel.SetActive(true);

        powersellDialog1.SetActive(false);
        powersellDialog2.SetActive(true);
    }
    if(dialogState == 5)
    {
        Application.LoadLevel("Day1");
    }
}
function AdvanceDialog()
{
    dialogState++;
}
