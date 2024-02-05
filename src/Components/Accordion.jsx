import Data from './Data';

export default function Accordion(){

 return(
    <>
    <div className="Accordion-container">
            {Data.map((item) =>(
                <div key={item.id}>
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