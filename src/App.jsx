import { useState } from "react";
import "./App.css";

function App() {
  const [isLoding, setIsLoding] = useState(true);
  setTimeout(() => {
    setIsLoding(false);
  }, 3000);
  return (
    <div className="App">
      {isLoding?<div className="loader">
        <div className="loading_main">
          <div className="sandesh_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon"
              style={{width:"120px",verticalAlign: "middle",fill: "rgba(245, 245, 245, 0.485)",overflow: "hidden"}}
              viewBox="0 0 1071 1024"
              version="1.1"
            >
              <path d="M395.701 434.549c0 25.716-18.369 47.759-47.759 47.759-25.716 0-47.759-22.043-47.759-47.759s22.042-47.759 47.759-47.759c29.391 0 47.759 22.043 47.759 47.759z m547.394-25.716c0-198.385-183.69-360.032-411.465-360.032-231.449 0-415.138 161.647-415.138 360.032 0 117.562 66.129 227.775 176.341 293.903v113.888c0 11.021 7.348 18.369 14.694 22.042h7.348c7.348 0 11.021 0 14.694-3.674l51.434-33.065 3.674-3.674 58.78-36.739c29.391 3.674 58.78 7.348 88.171 7.348 227.775 0 411.465-161.647 411.465-360.032zM325.898 673.346c-102.865-58.78-165.321-157.972-165.321-264.513 0-172.669 165.321-315.946 371.053-315.946 202.058 0 367.379 143.278 367.379 315.946 0 172.669-165.321 315.946-367.379 315.946-29.391 0-58.78-3.674-88.171-7.348-7.348-3.674-14.694 0-18.369 0l-69.801 47.759-18.369 11.021v-84.497c0-7.348-3.674-14.694-11.021-18.369zM586.737 423.53c0 25.716-22.042 47.759-47.759 47.759s-47.759-22.042-47.759-47.759c0-29.391 22.042-47.759 47.759-47.759 25.716 0 47.759 18.369 47.759 47.759z m183.691 0c0 25.716-18.369 47.759-47.759 47.759-25.716 0-47.759-22.042-47.759-47.759 0-29.391 22.042-47.759 47.759-47.759 29.391 0 47.759 18.369 47.759 47.759z" />
            </svg>
          </div>
          <div className="card loading">
            <div className="content">
              <div className="cont"></div>
            </div>
          </div>
          <div className="dots-container">
            <div>Connecting</div>
            <div className="pulse-dot pulse-dot-1">.</div>
            <div className="pulse-dot pulse-dot-2">.</div>
            <div className="pulse-dot pulse-dot-3">.</div>
          </div>
        </div>
      </div>:""}
    </div>
  );
}

export default App;
