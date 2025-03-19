import Contacts  from "./Contacts/Contact";
import Home from "./Home/Home"

function App() {
  const data = {
    firstName: "Neel",
    lastName: "Kumar",
    dob:"2/30/2002"
  }
  return (
    <div className="App">
<Home data={data}/>
<Contacts />
</div>
    
  );
}

export default App;
