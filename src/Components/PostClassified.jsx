import { useState } from "react";
import '../Components/Style/postClassified.css';

export default function PostClassified() {
    const [data, setData] = useState({
        "name": "",
        "description": "",
        "category": "",
        "image": "",
        "location": "",
		"postedAt": "",
		"price": ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/productData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
        .then((data) => {
        
            alert("Data Added successfully", data)
            setData({
                "name": "",
                "description": "",
                "category": "",
                "image": "",
                "location": "",
                "postedAt": "",
                "price": ""
            })
        }
            
        )
        .catch((err) => console.log(err))
    }

    const handleChange = (e) => {
        const {id, value} = e.target;
        setData({...data, [id]: value})
    }


    return (
        <>
            <h4 className="heading">Post Data</h4>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" className="formInput"
                 id='name'
                 value={data.name}
                 placeholder="Enter Name"
                 onChange={handleChange} 
                 />
                 <label>Description</label>
                <input type="text" className="formInput"
                 id='description'
                 value={data.description}
                 placeholder="Enter Description"
                 onChange={handleChange}
                 />
                 <label>Category</label>
                 <select id="category" onChange={handleChange} value={data.category} className="category">
                    <option value="">--</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Automobile">Automobile</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Other">Other</option>
                 </select>
                 <label>Image</label>
                 <input type="text" className="formInput"
                 id="image"
                 value={data.image}
                 placeholder="Enter image"
                 onChange={handleChange}
                 />
                 <label>Location</label>
                 <input type="text" className="formInput" 
                 id="location"
                 value={data.location}
                 placeholder="Enter Location"
                 onChange={handleChange}/>
                 <label>Posted At</label>
                 <input type="date" className="formInput" 
                 id="postedAt"
                 placeholder="Enter Date"
                 value={data.postedAt}
                 onChange={handleChange}/>
                 <label>Price</label>
                 <input type="number" className="formInput"
                 id="price"
                 value={data.price}
                 placeholder="Enter Price"
                 onChange={handleChange}/>
                 <input type="submit"/>
            </form>
        </>
    )
}