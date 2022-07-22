
const scene = new THREE.Scene();

//red cube 
const boxGeom = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 'red'});
const mesh1 = new THREE.Mesh(boxGeom, material);
scene.add(mesh1); 
// camera from isPerspectiveCamera
// sizes the camera 
const sizes1 = {
    width: 800,
    height: 600
};
const camera1 = new THREE.PerspectiveCamera(75,(sizes1.width/sizes1.height));
camera1.position.z = 3;
camera1.position.y = 1;
camera1.position.x = -1;


scene.add(camera1);

// we will make a canvas in the html file and let webgl render it in the canvas
//Renderer 
const canvas1 = document.querySelector('.webgl');

const renderer1 = new THREE.WebGLRenderer({
    canvas: canvas1 

});
renderer1.setSize(sizes1.width, sizes1.height);
renderer1.render(scene, camera1);
