import { user } from "../App";
function Video(){
    return <div>
        <h3>{user.name}</h3>
        <h4>{user.age}</h4>

        <img src="https://www.pngitem.com/pimgs/m/272-2720656_user-profile-dummy-hd-png-download.png" width={user.imageSize} />
        <div>Hellow</div>
    </div>
}
export default Video;

