import React, {useState} from "react";
import { createPortal } from "react-dom";

function Modal({onClose}) {
    throw new Error();
    return createPortal(
        <>
            <div 
              className="modal fade show"
              tabIndex="-1"
              role="dialog"
              style={{ display: "block" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                                <span aria-hidden="true" onClick={onClose}>
                                    &times;
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                              onClick={onClose}
                            >
                            Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>, document.body
    );
}

class ErrorBoundary extends React.Component {

    constructor (props) {
        super(props)
        this.state = {error: false}
    }

    static getDerivedStateFromError(error) {
        return {error: true}
    }

    // to catch the error
    componentDidCatch (error, errorInfo) {
        console.log(error, errorInfo)
    }

    render () {
        if (this.state.error) {
            return <div className="alert alert-danger">
                There is problem
            </div>
        }
        return this.props.children
    }
}

function App() {
    const [modal, setModal] = useState(false);

    const showModal = function () {
        setModal(true);
    }

    const hideModal = function () {
        setModal(false);
    }

    const style = {
        transform: "translateY(1px)",
    }

    const log = function () {
        console.log("click");
        throw new Error();
    }

    return (
        <div className="card" style={style} onClick={log}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <button onClick={showModal} className="btn btn-primary">
                    Go somewhere
                </button>
            </div>
            <ErrorBoundary>
            {modal && <Modal onClose={hideModal} />}
            </ErrorBoundary>
        </div>
    );
}

export default App;