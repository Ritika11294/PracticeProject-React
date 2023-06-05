import { useEffect, useState } from "react";
import axios from "axios";
import "./Style/browseClassified.css";
import DisplayCards from "./DisplayCards";

export default function BrowseClassified() {
    const [product, setProduct] = useState([])
    const [filtCategory, setFiltCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [sortedBy, setSortedBy] = useState();
    const [search, setSearch] = useState("");
    const [deleted, setDeleted] = useState("")


    useEffect(() => {
        fetchedData(currentPage)
    }, [currentPage, deleted])

    // function fetchedData() {
    //     fetch('http://localhost:3000/productData').then((res) => res.json())
    //         .then((data) => {
    //             setProduct(data)
    //         })
    //         .catch((err) => console.log(err))
    // }

    async function fetchedData(currentPage) {
        const res = await fetch(`http://localhost:3000/productData?_page=${currentPage}&_limit=4`)
        const data = await res.json();
        // console.log(data);
        setProduct(data);

    }

    const filterChange = (e) => {
        setFiltCategory(e.target.value)
        // console.log(e.target.value)
    }

    const handleSort = (el) => {
        setSortedBy(el.target.value);

    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/productData/${id}`, {
            method: 'DELETE',
        }).then((res) => res.json()).then(() => {
            setDeleted(!deleted);
        }).catch((err) => console.error(err));
    }

    let arr;
    if (sortedBy === 'Asc') {

        arr = product.sort((a, b) => { return new Date(a.postedAt).getTime() - new Date(b.postedAt).getTime() })

    }
    else if (sortedBy === 'Desc') {
        arr = product.sort((a, b) => { return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime() })

    }
    const filteredProducts = (product.filter((ele) => ele.category === filtCategory))
    const filtPro = filtCategory ? filteredProducts : sortedBy ? arr : product
    



    const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };
    return (
        <>
            <div>
                <select onChange={filterChange} className="filterSelect">
                    <option value="">Filter by Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Automobile">Automobile</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Other">Other</option>
                </select>

                <input type="text" className="search"
                    placeholder="search..."
                    value={search}
                    onInput={handleSearch} />
                <select onChange={handleSort} className="filterSelect">
                    <option value="">Sort by Date</option>
                    <option value="Asc">Asc</option>
                    <option value="Desc">Desc</option>
                </select>
                <DisplayCards cards={filtPro} handleDelete={handleDelete} search={search} />

                <button onClick={goToPreviousPage} disabled={currentPage === 1} className="paginate">
                    Previous
                </button>
                <button onClick={goToNextPage} className="paginate">
                    Next
                </button>
            </div>
        </>
    )
}