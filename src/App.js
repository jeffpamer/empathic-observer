import React from 'react';
import * as THREE from 'three';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: this.canvas.current });
    renderer.setSize( window.innerWidth, window.innerHeight );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;
    renderer.render(scene, camera);
  }

  render() {
    return (
      <div className="App">
        <canvas ref={this.canvas} width="100%" height="100%"></canvas>
      </div>
    )
  }
}

export default App;
