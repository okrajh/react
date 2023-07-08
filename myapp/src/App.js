import Video from './components/Video';
import './App.css';
export const user = {
    name:'Himanshu Raj',
    age:'20',
    imageSize: 200,
}
function App(params) {
    return <>
                <h2 style={{textAlign:'center'}}>User's Detials</h2>
                <Video></Video>
                <Video></Video>
            </>
}
export default App;
