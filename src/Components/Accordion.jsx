import Data from './Data';
import './Accordion.css'

export default function Accordion(){

 return(
    <>
    <div className="Accordion-container">
        <button>Select multiple</button>
            {Data.map((item) =>(
                <div className='contents' key={item.id}>
                    <div className="question">
                        <h3>{item.question}</h3>
                    </div>
                    <div className="answer">
                        {item.answer}
                    </div>
                </div>
            ))}
    </div>
    </>
 )
}