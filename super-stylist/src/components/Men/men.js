import './men.css'
import React from 'react';
import MainPage from '../Main/mainpage';
class MenCollection extends React.Component {
    render ()
    {
        return<><MainPage/>
        <div className="mensCollection"><b>Men's Collections</b></div>
        <div className="wears">
            <div className="outfit">
                <img className="outfitimage" src="https://www.thefashionisto.com/wp-content/uploads/2019/07/Latin-Male-Model-Double-Denim-Style.jpg"></img>
                <h2 className="outfitTag">Men's Casuals Collection</h2>
            </div>
            <div className="outfit">
                <img className="outfitimage" src="https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"></img>
                <h2 className="outfitTag">Men's Winter Collection</h2>
            </div>
            <div className="outfit">
                <img className="outfitimage" src="https://images.unsplash.com/photo-1515664069236-68a74c369d97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
                <h2 className="outfitTag">Men's Office Collection</h2>
            </div>
            <div className="outfit">
                <img className="outfitimage" src="https://static01.manyavar.com/uploads/dealimages/11774/listimages/MLOSK305-328_MLOSK305-328.jpg"></img>
                <h2 className="outfitTag" style={{fontSize:"28px"}}>Men's Wedding Collection</h2>
            </div>
        </div>        
        </>
    }
}
export default MenCollection;