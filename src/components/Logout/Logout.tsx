import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../models";
import { resetUser, userKey } from "../../redux/state/user";
import { clearLocalStorage } from "../../utilities";

function Logout(){
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const logOut = () =>{
        clearLocalStorage(userKey);   
        dispatch(resetUser());
        navigate(`/${PublicRoutes.LOGIN}`,{replace:true});
   
    }
    return <button onClick={logOut}>Log Out</button>
};

export default Logout;