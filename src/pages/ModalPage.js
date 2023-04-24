import { useState } from 'react';
import Button from '../components/buttons/Button'
import Modal from '../components/modal/Modal'

function ModalPage() {

    const [opened, setOpened] = useState(false);
    const handleModelOpen = () => {
        setOpened(true);
    }
    const handleModelClose = () => {
        setOpened(false);
    }

    return (
        <div className="ModalsPage relative">
            <Button secondary onClick={handleModelOpen}>Open modal</Button>
            { opened &&
                <Modal title='Aware' text='This application is a showcase only' onClose={handleModelClose}>
                    <Button primary onClick={handleModelClose} className={'inline-flex ml-auto mt-8 mr-4'}>Agree</Button>
                    <Button secondary ghost onClick={handleModelClose} className={'inline-flex mt-8'}>Close</Button>
                </Modal>
            }
        </div>
    );
}

export default ModalPage;