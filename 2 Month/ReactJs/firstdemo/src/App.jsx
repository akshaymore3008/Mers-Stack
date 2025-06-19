

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {
  const [name, setName] = useState(""); // 1 hook
  const [showName, setShowName] = useState(false);

  console.log(name);

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = () => {
    setShowName(true);
  };

  return (
    <div>
      <input
        name="name"
        placeholder="Enter Your Name"
        onChange={handleOnChange}
      />
      <button onClick={handleSubmit}>Submit</button>

      {showName && <h1>{name}</h1>}

      <div className="card" >
      
          <div className="card-body">
            <h5 className="card-title">Card title 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
      </div>
       <div className="card" >
      
          <div className="card-body">
            <h5 className="card-title">Card title 2</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
      </div>
    </div>
  );
   <div className="card" >
      
          <div className="card-body">
            <h5 className="card-title">Card title 3</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
      </div>
    </div>
  );
   <div className="card" >
      
          <div className="card-body">
            <h5 className="card-title">Card title 4</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
      </div>
    </div>
  );
   <div className="card" >
      
          <div className="card-body">
            <h5 className="card-title">Card title 5</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
      </div>
    </div>
  );
    </div>
    
  );
}

export default App;