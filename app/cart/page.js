import './cart.css';
import Page_Heading from "../components/page_heading";
import Cart_item from "./cart_item";
import Button from "../components/button";


function Page() {
    return(
        <div className="abc">
            <Page_Heading/>
            <Cart_item/>
            <Cart_item/>
            <Button/>
        </div>
    );
}

export default Page;
