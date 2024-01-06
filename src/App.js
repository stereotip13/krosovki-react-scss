import './index.scss';
function App() {
  return (
    <div className="wrapper">
      <header align-center>
        <div className="headerLeft">
          <img width={40} height={40} alt="mainLogo" src="./img/mainLogo.svg" />
          <div className="headerInfo">
            <h3> react snikers</h3>
            <p>магазин залютейших кросовок</p>
          </div>
        </div>
        <ul>
          <li>
            <img
              width={20}
              height={20}
              alt="make order"
              src="./img/busket.svg"
            />
            <span>1205 ₽</span>
          </li>
          <li>
            <img width={20} height={20} alt="users" src="./img/users.svg" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>все игрушки</h1>
        <div className="d-flex">
          <div className="card">
            <img width={133} height={122} src="./img/shoes1.png" alt="shoes1" />
            <p>гавнокросовки анончика</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12400 p</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="./img/plus.svg " alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={122} src="./img/shoes2.png" alt="shoes1" />
            <p>гавнокросовки анончика</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12400 p</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="./img/plus.svg " alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={122} src="./img/shoes3.png" alt="shoes1" />
            <p>гавнокросовки анончика</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12400 p</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="./img/plus.svg " alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={122} src="./img/shoes1.png" alt="shoes1" />
            <p>гавнокросовки анончика</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12400 p</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="./img/plus.svg " alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
