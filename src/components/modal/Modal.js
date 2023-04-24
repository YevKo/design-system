import ReactDOM from 'react-dom';
import Button from '../buttons/Button'

function Modal({ title, text, onClose, children }) {
    const Modal = <div>
        <div onClick={onClose} className="overlay fixed inset-0 bg-gray-400 opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 bg-white rounded-md">
            <h1 className="font-bold mb-10 text-xl">{title}</h1>
            <p className="mb-6">{text}</p>
            {children}
        </div>
    </div>;
    return (
        ReactDOM.createPortal(Modal, document.querySelector('.modal-container'))
    );
}

export default Modal;