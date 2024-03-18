import Navbar from "./Navbar";
import "../CSS/Message.css";


const Message = () => {

    return (
            
            <div className="AdminContainer">
                <Navbar />
                <div className="MessageContainer">
                    <div className="MessageBox"></div>
                    <div className="bottomMessage">
                        <button className="btn1"></button>
                        <input type="text" className="inputMessage"/>
                        <button  className="btn2"></button>
                        <button  className="btn3"></button>
                    </div>
                </div>
                <div className="ContactListContainer"></div>

            </div>
            
    );
}
export default Message;