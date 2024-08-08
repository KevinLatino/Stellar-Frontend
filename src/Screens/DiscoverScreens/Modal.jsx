import { X } from 'lucide-react';

const Modal = ({ isOpen, onRequestClose, children }) => {

    if (!isOpen) return null;

    return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                <div className="animate__animated animate__fadeInDown bg-white p-6 rounded-3xl max-w-3xl w-full mx-4 md:mx-0 relative shadow-lg overflow-auto max-h-[90vh]">
                    <button
                        onClick={onRequestClose}
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                    >
                        <X size={30} />
                    </button>
                    {children}
                </div>
            </div>
    );
};

export default Modal