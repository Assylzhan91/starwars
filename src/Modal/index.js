import React, { Component } from 'react'
import {Button, Modal} from "react-bootstrap"

class ModalWindow extends Component {
    state = {
        isOpened: false
    }

     handleClose = () => {
         this.setState({isOpened: false})
     };
    handleShow = () => {
        this.setState({isOpened: true})
    };

  render() {
      const {isOpened} = this.state
    return (
        <>
            <Button variant="secondary mb-4" size="lg" onClick={this.handleShow}>
                Button show Modal
            </Button>

            <Modal show={isOpened} onHide={this.handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
  }
}
export  default ModalWindow



/*
const ModalWindow = props => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="secondary" size="lg">
            Large button
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalWindow
*/
