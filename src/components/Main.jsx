import React, {useState, useEffect} from 'react'
import '../styles/main.css'
import axios from 'axios'
import Overview from './Overview'
import Userdetail from './Userdetail'
import { getData } from "../action/dataAction";
import { useDispatch, useSelector } from "react-redux";


function Main() {

const dispatch = useDispatch();

const [userDetails, setuserDetails] = useState('')
const [userId, setuserId] = useState('')

    useEffect(() => {
        dispatch(getData());
        
        userId != '' && axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res)=> setuserDetails(res.data))
    }, [dispatch,userId])

    let getUserDetails = (id) => {
        setuserId(id)
    }

    const apiData = useSelector((state) => state.user);
    const userData = apiData.find(item => item.id == userId)

    return (
        <div className = 'main'>
            <Overview 
                apiData = {apiData}
                getUserDetails = {getUserDetails}
            />
            <Userdetail 
                userData = {userData}
                userId = {userId}
                userDetails = {userDetails}
            />
        </div>
    )
}

export default Main
