using UnityEngine;
using System.Collections;

public class CameraFollowMine : MonoBehaviour {

	public Transform target; //target for the camera to follow
	public float smoothing = 5f; // give camera lack to make it smooth

	Vector3 offset;

	void Start(){
		offset = transform.position - target.position;
	}

	void FixedUpdate(){
		Vector3 targetCamPos = target.position + offset;
		transform.position = Vector3.Lerp (transform.position, targetCamPos, smoothing * Time.deltaTime);
	}

}//end of class
