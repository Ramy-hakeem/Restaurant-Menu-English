import React, { useContext, useEffect, useState } from 'react'
import Data from "../data"

const states = React.createContext()


export function StatesProvider({ children }) {
    const [data, setdata] = useState(Data)
    const [currentCate, setcurrentcate] = useState("All")
    const [searchData, setsearchdata] = useState("")
    useEffect(() => {
        setdata(Data)
    }, [Data])

    const setData = (e) => {
        setdata(e)
    }
    const setSearchData = (e) => {
        setsearchdata(e)
    }
    const setCurrentCate = (e) => {
        setcurrentcate(e)
    }
    return (
        <states.Provider value={{ data, currentCate, searchData, setSearchData, setCurrentCate, setData }}>
            {children}
        </states.Provider>
    )
}

const AllStates = () => {
    return (
        useContext(states)
    )
}
export default AllStates