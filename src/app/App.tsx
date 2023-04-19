import {Header} from "/src/widgets/Header";
import {useEffect} from "react";
import axios from "axios";

function App() {

    async function getUserLocations() {
        fetch('https://api.ipregistry.co/?key=tryout')
            .then(function (response) {
                return response.json();
            })
            .then(function (payload) {
                console.log(payload.location.country.name + ', ' + payload.location.city);
            });
    }

    useEffect(() => {
        getUserLocations()
    }, [])

    return (
        <div>
            <Header/>
        </div>
    )
}

export default App
