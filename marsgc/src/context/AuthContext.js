import { createContext,useEffect,useState } from 'react'
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

export default AuthContext

export const AuthProvider = ({children}) => {
    
    let [user,setUser] = useState( () => localStorage.getItem('authtokens') ? jwt_decode(localStorage.getItem('authtokens')) : null);
    let [rooms,setRooms] = useState([]);
    let [topics,setTopics] = useState([]);
    let [users,setUsers] = useState([]);
    let [authtoken,setAuthtoken] = useState( () => localStorage.getItem('authtokens') ? JSON.parse(localStorage.getItem('authtokens')) : null);
    let [loading,setLoading] = useState(true);
    let history = useNavigate();

    async function loginUser(e){
        e.preventDefault();
        let response = await fetch(`http://localhost:8000/token/`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({"username":e.target.username.value,"password":e.target.password.value})
        })
        let data = await response.json();
        if(response.status===200){
            setAuthtoken(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authtokens',JSON.stringify(data))
            history('/')
        }
        else{
            alert("can't process the request")
        }
    }

    let logoutUser = () => {
        setAuthtoken(null)
        setUser(null)
        localStorage.removeItem('authtokens')
    }
    let updateToken = async () => {
        let response = await fetch(`http://localhost:8000/token/refresh/`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({"refresh":authtoken?.refresh})
        })
        let data = await response.json();
        if(response.status===200){
            setUser(jwt_decode(data.access))
            setAuthtoken(data)
            localStorage.setItem('authtokens',JSON.stringify(data))
        }
        else{
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    let contextData = {
        topics:topics,
        rooms:rooms,
        users:users,
        user:user,
        authtoken:authtoken,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }

    useEffect(() => {

        if(loading){
            updateToken()
        }

        let refresh_time = 4*60*1000;

        let interval = setInterval(()=>{
            if(authtoken){
                updateToken()
            }
        },refresh_time)
        return () => clearInterval(interval)
    },[authtoken,loading])

    return(
        <AuthContext.Provider value={contextData}>
            { loading? null:children}
        </AuthContext.Provider>
    )
}