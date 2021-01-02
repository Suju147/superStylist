import './women.css'
import React from 'react';
import MainPage from '../Main/mainpage';
class WomenCollection extends React.Component {
    render ()
    {
        return<><MainPage/>
        <div className="womensCollection"><b>Women's Collections</b></div>
        <div className="wears">
            <div className="outfit">
                <img className="outfitimage" src="https://images.unsplash.com/photo-1590770357970-ec6480b368c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
                <h2 className="outfitTag">Women's Casuals Collection</h2>
            </div>
            <div className="outfit">
                <img className="outfitimage" src="https://images.unsplash.com/photo-1601582067612-7a347874f27d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"></img>
                <h2 className="outfitTag">Women's Winter Collection</h2>
            </div>
            <div className="outfit">
                <img className="outfitimage" src="https://images.unsplash.com/photo-1523359291634-a4522fe19bad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
                <h2 className="outfitTag">Women's Office Collection</h2>
            </div>
            <div className="outfit">
                <img className="outfitimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJ1__XiVTFx1Zug1uauvz5jftGaGPpjwWNA&usqp=CAU"></img>
                <h2 className="outfitTag" style={{fontSize:"25px"}}>Women's Wedding Collection</h2>
            </div>
        </div>        
        </>
    }
}
export default WomenCollection;