import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Restreview({reviews}) {
    const [open, setOpen] = useState(false);
    console.log(reviews);
  return (
    

     <><Button variant="info"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
              >
                Costomer reviews
              </Button><Collapse in={open}>
                      <div id="example-collapse-text">
                        {
                            reviews.map(item=>(
                                <div style={{margin:10}}>
                                    <h5>{item.name}<br/> <span>{item.date}</span></h5>
                                    <h5>Rating:{item.rating}</h5>
                                    <p>Comments : {item.comments}</p>
                                    </div>
                            ))
                        }
                      </div>
                  </Collapse></>

    
  )
}

export default Restreview