import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


//functional components do not have access to lifecycle methods--eg didmount
//to handle lifecyle methods in functional components we use useEffect function ---takes two parameters-callback function and dependency array-----use to make api calls and asynchronous functions

function FuncApi() {
    const [books,setBooks]=useState(null);
    const [isLoading, setLoading] = useState(true);

    async function captureBooks(){
        let response= await axios.get("https://openlibrary.org/subjects/mystery.json?limit=50");
        console.log(response);
        setBooks(response.data.works);
        setLoading(false);
    }

    useEffect(()=>{captureBooks()},[]);

    if(isLoading)
    {
        return <div>Loading....</div>
    }

  return (
    <div>
        <hr/>
      <h1>Api call in function</h1>
      <h1 className="bg-warning text-white p-3 text-center">My Books</h1>
      <div className="container">
        <div className="row">
          {books.map((book) => {
            console.log(book);
            return (
              <div className="col-md-4" key={book._id}>
                <div className="card m-2" style={{ width: "18rem" ,height:"28rem"}}>
                  <img
                    className="card-img-top"
                    src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                    alt="Card image cap"
                    style={{height:"50%",objectFit:"cover"}}
                  />
                  <div className="card-body" style={{height:"50%"}}>
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">
                      Written by {book.authors[0].name}
                    </p>
                    <button className='btn btn-primary'>Read Book</button>
                    <button classNme="btn btn-success m-2">View Summary</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FuncApi
