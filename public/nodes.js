import * as THREE from "./three.module.js";

let canvas
let camera, scene, renderer;
let geometry, material, mesh;

init();

function init() {
    canvas = document.querySelector('#threejs-nodes');
	renderer = new THREE.WebGLRenderer( {canvas: canvas, alpha: true, antialias: true} );
	renderer.setSize(window.innerWidth, 400);
    renderer.setAnimationLoop(animation);

    // Creating the camera
    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 5;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    // Create a scene
    scene = new THREE.Scene();

    // Making a box geometry
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    // Declaring a material
    material = new THREE.MeshNormalMaterial();

    // Making a mesh
    mesh = new THREE.Mesh(geometry, material);

    // Add it to the scene
    scene.add(mesh);
}

function animation(time) {
	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

    renderer.setSize(window.innerWidth, 400);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    
	renderer.render(scene, camera);
}