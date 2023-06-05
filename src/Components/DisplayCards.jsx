import "./Style/browseClassified.css"

export default function DisplayCards({cards, handleDelete, search}) {
    
    let searchArr = cards.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
    search ? (cards = searchArr) : cards;
    return (
        <div className="container">
            {cards.map((e) => {
                return (<div key={e.id} className="card">
                    <img src={e.image} alt="" />
                    <h3>{e.name}</h3>
                    <p>{e.description}</p>
                    <p>{e.category}</p>
                    <p>Location: {e.location}</p>
                    <p>Posted At: {e.postedAt}</p>
                    <h5>Rs.{e.price}/-</h5>
                    <button onClick={() => handleDelete(e.id)} className="buyButton">Buy</button>
                </div>)

            })}
        </div>
    )
}