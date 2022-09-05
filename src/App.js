import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./Component/Input";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function App() {
  const [pxValue, setpxValue] = useState("");
  const [vhValue, setvhValue] = useState('');

  const [px, setpx] = useState('');
  const [vw, setvw] = useState('');

  const [pxRem, setpxRem] = useState('');
  const [rem, setrem] = useState('')

  const [pxper, setpxper] = useState('');
  const [per, setper] = useState('');

  // toggle useState



  useEffect(() => {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight;

    var result = (100 * pxValue) / y;
    setvhValue(result);
  }, [pxValue]);

  useEffect(()=>{
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName("body")[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;

  var result = (100 * px) / x;
  setvw(result);
  },[px])

  useEffect(()=>{
setrem((pxRem*0.0625))
  },[pxRem])

  useEffect(()=>{
setper(pxper * 6.25)
  },[pxper])


  


  return (
    <>
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a className="nav-link active" aria-current="page" href="#">
  <span className="navbar-brand mb-0 fw-bold ms-4">
              SK<span className="text-info">Calc</span>
            </span>
            </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto d-flex">
        <li className="nav-item">
          <a className="nav-link" href="https://myportfolio-skgupta89.vercel.app/" target='blank'><i class="fa-regular fa-user fa-2x"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/skgupta89?tab=repositories" target='blank'><i class="fa-brands fa-square-github fa-2x"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.facebook.com/profile.php?id=100003236430949" target='blank'><i class="fa-brands fa-facebook fa-2x"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="www.linkedin.com/in/sandeep-gupta-a4a45b209" target='blank'><i class="fa-brands fa-linkedin fa-2x"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.instagram.com/_sandeepgupta_0/" target='blank'><i class="fa-brands fa-instagram fa-2x"></i></a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>


        </header>

        <div className="container-fluid main-div">
          <div>
          <div className="row">
            <h1 className="mx-auto fw-bold text-center">Unit Converter</h1>
          </div>

          <Input
          from='PX'
          to='VH'
          pxtovh={(event)=> setpxValue(Number(event.target.value))}
                Value = {vhValue}
          />

          <br />

          <Input
          from='PX'
          to='VW'
          pxtovh={(e)=> setpx(Number(e.target.value))}
                Value = {vw}
          />

        
<br />
            <Input
            from='PX'
            to='REM'
            pxtovh={(event)=> setpxRem(Number(event.target.value))}
                  Value = {rem}
            />

         <br />

            <Input
            from='PX'
            to='%'
            pxtovh={(event)=> setpxper(Number(event.target.value))}
                  Value = {per}
            />

        </div>

        <div className="icon">
      
        </div>
        </div>
      </div>

      {/* <Home /> */}
    </>
  );
}

export default App;
