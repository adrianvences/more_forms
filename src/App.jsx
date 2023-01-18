import './App.css';
import './adrian.css'
import NameForm from './components/NameForm';

function App() {
  return (
    
      <div className="container mt-3 shadow">
        <div className="card bg-danger">
          <div className="card-body ">
      <h2>Fill out form!</h2>
      <NameForm />
          </div>

        </div>

      </div>
  );
}




export default App;
