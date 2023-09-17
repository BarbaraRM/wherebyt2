import logo from './logo.svg';
import './App.css';
function App() {
  function getMeetings(){
    let data ={
        endDate: "2023-010-20T14:23:00.000Z",
        isLocked: true,
        fields: ["hostRoomUrl"],
    }
    const optioans = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      };
      fetch("https://api.whereby.dev/v1/meetings", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json())
        .then((res) => {
          console.log("get meetings response:",res)
        })
        .catch((err) => {
          console.log(err);
        });
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={getMeetings}>Get</button>
      </header>
    </div>
  );
}

export default App;
