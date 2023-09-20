
import "./Customer.css"


function Customer(): JSX.Element{

      
    return(<div className="customer">
            <div className="customer-header">
                <h1>Customer file manager</h1>
                <h2>Create folders with your customer data</h2>
            </div>
            <div className="customer-links">
            </div>
            <div className="customer-images">
                <a href="https://i.postimg.cc/BLN8Myx5/customer-main-big.png">
                    <img src="https://i.postimg.cc/BLN8Myx5/customer-main-big.png" alt="" className="customer-image"/>
                </a>
                <a href="https://i.postimg.cc/v1F6B5Yn/customer-add-big.png">
                    <img src="https://i.postimg.cc/v1F6B5Yn/customer-add-big.png" alt="" className="customer-image"/>
                </a>
                <a href="https://i.postimg.cc/FkRYqZZM/customer-folder-big.png">
                    <img src="https://i.postimg.cc/FkRYqZZM/customer-folder-big.png" alt="" className="customer-image"/>
                </a>
            </div>
        </div>);
}
export default Customer;