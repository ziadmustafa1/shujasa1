/* eslint-disable no-unused-vars */
import { Component } from "react";

class QuantityInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };
        this.handleMinusClick = () => {
            this.setState({
                quantity: this.state.quantity - 1,
            });
        };
    }

    render() {
        return (
            <div className="form-group bg-h p-5 rounded-xl">
                <div className="quantity flex justify-around">
                    <button
                        type="button"
                        className="btn-quantity minus items-center"
                        onClick={this.handleMinusClick}
                    >
                        <i className="fa-solid fa-window-minimize"></i>
                    </button>
                    <input
                        type="number"
                        id="product-quantity"
                        className="input-text qty text items-center"
                        step="1"
                        min="1"
                        max="5"
                        name="quantity"
                        value={this.state.quantity}
                        title="Qty"
                        size="4"
                        placeholder=""
                        inputmode="numeric"
                        onChange={(e) => this.setState({ quantity: e.target.value })}
                    />
                    <button
                        type="button"
                        className="btn-quantity plus items-center"
                        onClick={() => this.setState({ quantity: this.state.quantity + 1 })}
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default QuantityInput;
