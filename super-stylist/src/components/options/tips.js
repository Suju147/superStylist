import React from 'react';
import MainPage from '../Main/mainpage';
import './tips.css';
class FashionTips extends React.Component {
    render ()
    {
        return<>
        <MainPage/>
        
        <div className="collection">
        <h2>Fashion Tips </h2>
          <div className="cardCollection">
            <div className="card"> 
                <img className="image" src="https://i.pinimg.com/236x/03/4f/d0/034fd06dd5257e495f40f48135d696fe.jpg" alt="Denim Jeans"></img>
                <h1>Style Skinny Girls</h1>
                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                <p><button className="tips">Tips</button></p>
            </div>
            <div className="card1"> 
                <img className="image" src="https://i.pinimg.com/236x/fe/05/51/fe05516f06c43a5eae4ee74d4475c6b5.jpg" alt="Denim Jeans"></img>
                <h1>Style Curvy Girls</h1>
                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                <p><button className="tips">Tips</button></p>
            </div>
            <div className="card2"> 
                <img className="image" src="https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Denim Jeans"></img>
                <h1>Style Brown Girls</h1>
                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                <p><button className="tips">Tips</button></p>
            </div>
            <div className="card3"> 
                <img className="image" src="https://i.pinimg.com/236x/03/4f/d0/034fd06dd5257e495f40f48135d696fe.jpg" alt="Denim Jeans"></img>
                <h1>Style Skinny Girls</h1>
                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                <p><button className="tips">Tips</button></p>
            </div>
            <div className="card4"> 
                <img className="image" src="https://i.pinimg.com/236x/fe/05/51/fe05516f06c43a5eae4ee74d4475c6b5.jpg" alt="Denim Jeans"></img>
                <h1>Style Curvy Girls</h1>
                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                <p><button className="tips">Tips</button></p>
            </div>
            <div className="card5"> 
                <img className="image" src="https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Denim Jeans"></img>
                <h1>Style Brown Girls</h1>
                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                <p><button className="tips">Tips</button></p>
            </div>
          </div>
        </div>
        </>
    }
}
export default FashionTips;