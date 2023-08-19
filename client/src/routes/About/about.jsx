import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Book() {
    const baseUrl = "http://localhost:8000/api/books";
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("");




    useEffect(() => {
        const fetchData = async() => {
            try {
                
                let url = baseUrl;
                if(selectedCategory) {
                url += `?category=${selectedCategory}`
                }

                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error("Try Again Failed to fetch Data");
                }

                const jsonData= await response.json();
                setData(jsonData);
                setIsLoading(false);


            } catch (error) {
                console.log(error);
                setError("Error fecthing Data lol");
                setIsLoading(false);
            }
        }
        fetchData();
    }, [selectedCategory])


  return (
    <div>
        <h1>Anime</h1>
        <p style={{color:"cyan"}}>Trial</p>

        <Link to="/createanime">+ Add New Anime</Link>

        <h2>My Anime List</h2>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}


        <div className="filters">
            <label style={{color:"cyan"}}>Sort by: </label>
                <select onChange={(e)=> setSelectedCategory(e.target.value)}>
                <option value="">All</option>
                <option value="romance">Romance</option>
                <option value="science">Science</option>
                <option value="crime">Crime</option>
                <option value="food">Food</option>
                <option value="adventure">Adventure</option>
                <option value="thriller">Thriller</option>
                <option value="anime">anime</option>
                <option value="other">other</option>
                </select>
      </div>


        {isLoading ? (
            <p>Loading....</p>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <ul className="books">
            {data.map((item) => (
                <li key={item._id}>
                <Link to={`/about/${item.slug}`}>
                    <img
                    src={`http://localhost:8000/uploads/${item.thumbnail}`}
                    alt={item.title}
                    />
                    <h3>{item.title}</h3>
                </Link>
                </li>
            ))}
            </ul> 
        )}


    </div>
  )
}

export default Book