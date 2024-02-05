import Data from './Data';
import './Accordion.css';
import { useState } from 'react';

export default function Accordion() {
  const [selectedId, setSelectedId] = useState(null);
  const [enableMultiselection, setEnableMultiselection] = useState(false);
  const [multiselection, setMultiselection] = useState([]);

  function singleSelection(getSelectedId) {
    console.log(getSelectedId);
    setSelectedId(getSelectedId === selectedId ? null : getSelectedId);
  }

  function handleMultiselection(itemId) {
    setMultiselection((prevMultiselection) => {
      const isSelected = prevMultiselection.includes(itemId);

      if (isSelected) {
        return prevMultiselection.filter((id) => id !== itemId);
      } else {
        return [...prevMultiselection, itemId];
      }
    });
  }

  return (
    <>
      {Data.length > 0 ? (
        <div className="Accordion-container">
          <button onClick={() => setEnableMultiselection(!enableMultiselection)}>
            Select multiple
          </button>
          {Data.map((item) => (
            <div className='contents' key={item.id}>
              <div
                className="question"
                onClick={
                  enableMultiselection
                    ? () => handleMultiselection(item.id)
                    : () => singleSelection(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>{multiselection.includes(item.id) ? '-' : '+'}</span>
              </div>
              <div className="answer">
                {(selectedId === item.id || multiselection.includes(item.id)) && (
                  <div>{item.answer}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>No Data found...</h2>
        </div>
      )}
    </>
  );
}
