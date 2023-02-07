import carrito from "./images/cart.svg";

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn position-relative">
                <img src={carrito} alt={"Carrito"} width={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
        </div>
    )
}

export default CartWidget;