import { useEffect, useState } from "react";
const Search =() => {
    const [books,book] =useState([])
    useEffect(() => {
        getBooks()
    })
    const getBooks= async() => {
        const res =await fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDYL8yd_1JcXapstxcErV8Rqa9yXXRDmPA')
        const data = await res.json()
        console.log(data.items);

    }
    return (
        <div>

        </div>
    )
}
export default Search;