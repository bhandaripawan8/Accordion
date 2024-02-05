import Data from './Data';
import './Accordion.css'
import { useState } from 'react';

export default function Accordion(){
    const [selectedid, setselectedid] = useState(null);
    function expandHeader(getselectedId){
        console.log(getselectedId);
        setselectedid(getselectedId === selectedid ? null: getselectedId);
    }
 return(
    <>
    { Data.length > 0 ? 
    <div className="Accordion-container">
        <button>Select multiple</button>
            {Data.map((item) =>(
                <div className='contents' key={item.id}>
                    <div className="question" onClick={()=>expandHeader(item.id)}>
                        <h3>{item.question}</h3>
                        <span>+</span>
                    </div>
                    <div className="answer">
                       {selectedid === item.id ? <div>{item.answer}</div>: null}
                    </div>
                </div>
            ))}
    </div> : <div><h2>No Data found...</h2></div>}
    </>
 )
}