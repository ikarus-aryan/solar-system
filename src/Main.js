import { Suspense } from 'react';
import { useThree } from '@react-three/fiber';
import { CameraControls} from '@react-three/drei';
import Sphere from './components/sphere';
import Lights from './components/Lights';
import Sun from './components/sun';
import mercury from './images/mercury.jpg'; 
import venus from './images/venus.jpg';
import earth from './images/earth.jpg';
import mars from './images/mars.jpg';
import jupiter from './images/jupiter.jpg';
import saturn from './images/saturn.jpg';
import uranus from './images/uranus.jpg';
import neptune from './images/neptune.jpg';
import AnimateStars from './components/AnimateStars';
import moon from './images/moon.jpg';
import Asteroid from './components/Asteroid';
import AsteroidImage from './images/asteriod.jpg';
import { CubeTextureLoader } from 'three';
export default function Main({makeCall, AsteroidPoints}){
    const {scene} = useThree();
    const loader = new CubeTextureLoader();
    const texture = loader.load([
      './images/galaxy.jpeg',
      './images/galaxy.jpeg',
      './images/galaxy.jpeg',
      './images/galaxy.jpeg',
      './images/galaxy.jpeg',
      './images/galaxy.jpeg',
    ]);
    scene.background = texture;
    const toggleChange = ({name}) => {
      makeCall(name);
    }
    return (
      <Suspense fallback={null} >
              <AnimateStars/>
              <Sun/>
              <Sphere name={'Mercury'} position={[60,0,0]} args={[2,32,32]} img={mercury} xradius={60} zradius={35} xradius1={70} zradius1={45} speed={0.37} isMoon={false} moonImg={moon} makeCall={toggleChange} /> 
              <Sphere name={'Venus'} position={[95,0,0]} args={[4.8,32,32]} img={venus} xradius={95} zradius={55} xradius1={105} zradius1={65} speed={0.25} isMoon={false} moonImg={moon} makeCall={toggleChange}/>
              <Sphere name={'Earth'} position={[130,0,0]} args={[5.3,32,32]} img={earth} xradius={130} zradius={80} xradius1={150} zradius1={90} speed={0.19} isMoon={true} moonImg={moon} moonDistance={10} moonRadius={1.2} makeCall={toggleChange} mapping={true}/>
              <Sphere name={'Mars'} position={[165,0,0]} args={[3.5,32,32]} img={mars} xradius={165} zradius={105} xradius1={180} zradius1={110} speed={0.14} isMoon={true} moonImg={moon} moonSpeed={1} moonDistance={8} moonRadius={0.6} makeCall={toggleChange}/>
              {AsteroidPoints.map((data)=>{
                return(<Asteroid position={data.position} key={data.id} img={AsteroidImage} x={data.asteroidX} y={data.asteroidY} z={data.asteroidZ}/>)
              })}
              <Sphere name={'Jupiter'} position={[250,0,0]} args={[13,32,32]} img={jupiter} xradius={250} zradius={160} xradius1={290} zradius1={180} speed={0.10} isMoon={true} moonImg={moon} moonDistance={24} moonRadius={2.5} makeCall={toggleChange}/>
              <Sphere name={'Saturn'} position={[300,0,0]} args={[9,32,32]} img={saturn} xradius={300} zradius={200} xradius1={330} zradius1={225} speed={0.090} isMoon={true} moonImg={moon} moonDistance={20} moonRadius={1.5} isTorus={true} makeCall={toggleChange}/>
              <Sphere name={'Uranus'} position={[350,0,0]} args={[7.5,32,32]} img={uranus} xradius={350} zradius={240} xradius1={375} zradius1={260} speed={0.068} isMoon={true} moonImg={moon} moonDistance={14} moonRadius={1.3} makeCall={toggleChange}/>
              <Sphere name={'Neptune'} position={[400,0,0]} args={[6,32,32]} img={neptune} xradius={400} zradius={280} xradius1={425} zradius1={300} speed={0.054} isMoon={true} moonImg={moon} moonDistance={10} moonRadius={1.3} makeCall={toggleChange}/>
              <Lights />
              <CameraControls maxDistance={500} minDistance={50} />
      </Suspense>
    );
  }