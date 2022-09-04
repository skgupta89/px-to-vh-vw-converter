import React,{useState,useEffect} from 'react';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const Input = (props) => {

  return (
    <>
   <div className="row">
            <div className="col-xl-12 d-flex justify-content-center">
              <div
                className="mx-2 d-flex flex-direction-column"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span className="fw-bold">{props.from}</span> <br />
                <input
                  className="datadiv"
                  type="text"
                  onChange={props.pxtovh}
                />
              </div>

              {/* <div className='' style={{margin:'70px 10px 0 10px'}}>
                < CompareArrowsIcon  />
              </div> */}

              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span className="fw-bold">{props.to}</span> <br />
                <input type="text" value={props.Value} />
              </div>
            </div>
          </div>

    </>
  )
}

export default Input;