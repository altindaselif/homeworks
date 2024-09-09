import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "./index.css";
import Searchbar from "./Components/Searchbar";
import Shipcard from "./Components/Shipcard";
import ShipInfo from "./Components/ShipInfo";

function App() {
    const [ships, setShips] = useState([]);
    const [filteredShips, setFilteredShips] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchShips();
    }, [page]);

    const fetchShips = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://swapi.dev/api/starships/?page=${page}&format=json`);
            const data = await response.json();
            setShips((prevShips) => [...prevShips, ...data.results]);
            setFilteredShips((prevShips) => [...prevShips, ...data.results]);
            if (!data.next) setHasMore(false);
        } catch (error) {
            console.error("Failed to fetch ships", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = ships.filter(
            (ship) =>
                ship.name.toLowerCase().includes(lowerCaseQuery) ||
                ship.model.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredShips(filtered);
    };

    return (
        <Router>
            {isLoading && <div className="loading-bar"></div>}
            <div className="bodybg">
                <img src="./Images/space.webp" alt="" />
            </div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="container">
                                <img src="./Images/logo.png" alt="Star Wars" />
                            </div>
                            <div className="container">
                                <Searchbar onSearch={handleSearch} />
                            </div>
                            <div className="container">
                                <div className="cards-container">
                                    {filteredShips.map((ship, index) => (
                                        <Shipcard key={index} ship={ship} />
                                    ))}
                                </div>
                            </div>
                            {hasMore && (
                                <div className="container">
                                    <button
                                        className="load-button"
                                        onClick={() => setPage((prevPage) => prevPage + 1)}
                                    >
                                        Load More
                                    </button>
                                </div>
                            )}
                        </>
                    }
                />
                <Route path="/ship/:id" element={<ShipInfo ships={ships} />} />
            </Routes>
        </Router>
    );
}

export default App;
