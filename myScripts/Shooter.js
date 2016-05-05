#pragma strict
var bullet : Rigidbody;

var power : float = 1500;

var moveSpeed : float = 5;

function Start (){
Cursor.visible = false;

}

function Update () {

 var h : float = Input.GetAxis("Mouse X") * Time.deltaTime * moveSpeed;

 var v : float = Input.GetAxis("Mouse Y") * Time.deltaTime * moveSpeed;
//
 transform.Translate(h, v, 0);
	
 if(Input.GetButtonUp("Fire1")) {

  var audio: AudioSource = GetComponent.<AudioSource>();
  
  
  var instance: Rigidbody = Instantiate(bullet, transform.position, transform.rotation);
  
  var fwd: Vector3 = transform.TransformDirection(Vector3.forward);

  instance.AddForce(fwd * power);
  audio.Play(); 
  
  }
 

}
//var speed = 50;
//var bullet: Rigidbody;
//var power : float = 2000;
//var camera : Camera;
//var moveSpeed : float = 5;
//function start (){
//
//}
//
//
//function Update () {
//
//var hit : RaycastHit;
//
//if(Input.GetButtonDown("Fire1")){
//    var ray = Camera.main.ScreenPointToRay (Input.mousePosition); //ray from
//    // through the mousePosition.
//
//
//
//    if(Physics.Raycast(ray, hit, 1000)) { //does the ray collide with 
//    // anything.
//
//        //add stuff here for finding type of object and such.
//        Debug.Log("Hit Something at mouse position");
//        Debug.DrawRay (ray.origin, ray.direction * 10, Color.yellow);
//        //Display the ray.
//        var projectile:Rigidbody = Instantiate(bullet,transform.position,transform.rotation);
//
//        var fwd: Vector3 = transform.TransformDirection(Vector3.forward);
//
//  		projectile.AddForce(fwd * power);
//    	}
//	}
//}
