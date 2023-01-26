// Import
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

// State

const FetchForHomepage = () => {
    // Establish new state;
    const [inventory, setInventory] = useState([]);
    const [bentley, setBentley] = useState([]);
    const [bugatti, setBugatti] = useState([]);
    const [ferrari, setFerrari] = useState([]);
    const [koenigsegg, setKoenigsegg] = useState([]);
    const [lamborghini, setLamborhgini] = useState([]);
    const [mclaren, setMclaren] = useState([]);
    const [porsche, setPorsche] = useState([]);
    const [rollsRoyce, setRollsRoyce] = useState([]);

    const contextObject = {
        inventoryState: [inventory, setInventory],
        bentleyState: [bentley, setBentley],
        bugattiState: [bugatti, setBugatti],
        ferrariState: [ferrari, setFerrari],
        koenigseggState: [koenigsegg, setKoenigsegg],
        lamborghiniState: [lamborghini, setLamborhgini],
        mclarenState: [mclaren, setMclaren],
        porscheState: [porsche, setPorsche],
        rollsRoyceState: [rollsRoyce, setRollsRoyce]
    }

// useEffects
    // fetchManufacturer
    useEffect(() => {
        async function fetchManufacturer () {
            try {
                const response = await fetch ("https://car-haven-back.onrender.com/api/manufacturer", {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // console.log("Response", response)
                const manufacturerData = await response.json();
                console.log("Translated Manufacturer Data:", manufacturerData);
                setInventory(manufacturerData);
            } catch (error) {
                console.log ("Error manufacturer Data!")
                console.log(error)
            }
        }
        fetchManufacturer();
    }, [])

    // fetchManufacturer
    useEffect(() => {
        async function fetchBentley () {
            try {
                const response = await fetch ("https://car-haven-back.onrender.com/api/bentley", {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // console.log("Response", response)
                const bentleyData = await response.json();
                console.log("Translated Bentley Data:", bentleyData);
                setBentley(bentleyData);
            } catch (error) {
                console.log ("Error bentley Data!")
                console.log(error)
            }
        }
        fetchBentley();
    }, [])

    // fetchBugatti
    useEffect(() => {
        async function fetchBugatti () {
            try {
                const response = await fetch ("https://car-haven-back.onrender.com/api/bugatti", {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // console.log("Response", response)
                const bugattiData = await response.json();
                console.log("Translated Bugatti Data:", bugattiData);
                setBugatti(bugattiData);
            } catch (error) {
                console.log ("Error bugatti Data!")
                console.log(error)
            }
        }
        fetchBugatti();
    }, [])

    // fetchFerrari
    useEffect(() => {
        async function fetchFerrari () {
            try {
                const response = await fetch ("https://car-haven-back.onrender.com/api/ferrari", {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // console.log("Response", response)
                const ferrariData = await response.json();
                console.log("Translated Ferrari Data:", ferrariData);
                setInventory(ferrariData);
            } catch (error) {
                console.log ("Error ferari Data!")
                console.log(error)
            }
        }
        fetchFerrari();
    }, [])

    // fetchKoenigsegg
    useEffect(() => {
        async function fetchKoenigsegg () {
            try {
                const response = await fetch ("https://car-haven-back.onrender.com/api/koenigsegg", {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // console.log("Response", response)
                const koenigseggData = await response.json();
                console.log("Translated Koenigsegg Data:", koenigseggData);
                setInventory(koenigseggData);
            } catch (error) {
                console.log ("Error koenigsegg Data!")
                console.log(error)
            }
        }
        fetchKoenigsegg();
    }, [])

    // fetchLamborghini
    useEffect(() => {
        async function fetchLamborghini () {
            try {
                const response = await fetch ("https://car-haven-back.onrender.com/api/lamborghini", {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // console.log("Response", response)
                const lamborghiniData = await response.json();
                console.log("Translated Lamborghini Data:", lamborghiniData);
                setLamborhgini(lamborghiniData);
            } catch (error) {
                console.log ("Error lambo Data!")
                console.log(error)
            }
        }
        fetchLamborghini();
    }, [])

    // fetchMcLaren
    useEffect(() => {
        async function fetchMcLaren () {
            try {
                const response = await fetch ("https://car-haven-back.onrender.com/api/mclaren", {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // console.log("Response", response)
                const mcLarenData = await response.json();
                console.log("Translated McLaren Data:", mcLarenData);
                setMclaren(mcLarenData);
            } catch (error) {
                console.log ("Error mclaren Data!")
                console.log(error)
            }
        }
        fetchMcLaren();
    }, [])

    // fetchPorsche
    useEffect(() => {
        async function fetchPorsche () {
            try {
                const response = await fetch ("https://car-haven-back.onrender.com/api/porsche", {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // console.log("Response", response)
                const porscheData = await response.json();
                console.log("Translated Porsche Data:", porscheData);
                setMclaren(porscheData);
            } catch (error) {
                console.log ("Error Porsche Data!")
                console.log(error)
            }
        }
        fetchPorsche();
    }, [])

    // fetchRollsRoyce
    useEffect(() => {
        async function fetchRollsRoyce () {
            try {
                const response = await fetch ("https://car-haven-back.onrender.com/api/rollsroyce", {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // console.log("Response", response)
                const rollsRoyceData = await response.json();
                console.log("Translated Rolls Data:", rollsRoyceData);
                setMclaren(rollsRoyceData);
            } catch (error) {
                console.log ("Error Rolls Data!")
                console.log(error)
            }
        }
        fetchRollsRoyce();
    }, [])

    // Functional Component
    return (
        <div>
            <div>
                <Navbar context={contextObject}/>
            </div>
            <Outlet context={contextObject} />
        </div>
    )
};
export default FetchForHomepage;