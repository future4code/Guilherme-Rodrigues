import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../parameters/URL";
import DataContext from "./DataContext";

export const Data = (props) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getData()
    },[])

    const getData = async() =>{

        try{
            const response = await axios
                .get(`${URL}/user/data`)
                setUsers(response.data.allData)
            }
            catch (error) {
                console.log(error)
        }
    }


    const info = {
        users,
        setUsers,
        getData
    }


    return(
        <DataContext.Provider value={info}>
            {props.children}
        </DataContext.Provider>
    )
}