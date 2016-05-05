#pragma strict

var target : Transform; //the enemy's target
var moveSpeed = 3; //move speed
var rotationSpeed = 3; //speed of turning
var maxDistance = 3;
var myTransform : Transform; //current transform data of this enemy


var maxUpAndDown  : float = 1;            // amount of meters going up and down
var speed         : float = 50;            // up and down speed
 
protected var angle       : float = 90;             // angle to determine the height by using the sinus
protected var toDegrees   : float = Mathf.PI/180;    // radians to degrees
protected var startHeight : float;  

function Awake()
{
    myTransform = transform; //cache transform data for easy access/preformance
}

function Start()
{
    target = GameObject.FindWithTag("Player").transform; //target the player
    startHeight = transform.localPosition.y;
}

function Update () {

    if(Vector3.Distance(myTransform.position, target.position) > maxDistance)
    {
        //rotate to look at the player
        myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
        Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed * Time.deltaTime);
        //move towards the player
        myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
    }
    else
    {
        myTransform.position = myTransform.position;
        angle += speed * Time.deltaTime;
        if (angle > 270) angle -= 360;
        Debug.Log(maxUpAndDown * Mathf.Sin(angle * toDegrees));
        transform.localPosition.y = startHeight + maxUpAndDown * (1 + Mathf.Sin(angle * toDegrees)) / 2;
    }
}
