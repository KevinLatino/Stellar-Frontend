import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import './CalendarStyles.css';

const ToolbarComponent = (props) => {
    const { label, onNavigate } = props;

    const buttonStyle = {
        background: 'none',
        border: 'none',
        padding: 0,
        margin: 0,
        cursor: 'pointer',
        outline: 'none',
        boxShadow: 'none'
    };

    return (
        <div className="rbc-toolbar flex items-center gap-2">
            <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={() => onNavigate('PREV')}
                style={buttonStyle}
                onFocus={(e) => e.target.style.outline = 'none'}
                onMouseDown={(e) => e.preventDefault()}
            >
                <ChevronLeft size={31} color='#4461F2' />
            </motion.button>
            <span className='text-stellar-blue text-2xl font-semibold'>{label}</span>
            <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={() => onNavigate('NEXT')}
                style={buttonStyle}
                onFocus={(e) => e.target.style.outline = 'none'}
                onMouseDown={(e) => e.preventDefault()}
            >
                <ChevronRight size={31} color='#4461F2' />
            </motion.button>
        </div>
    );
};

ToolbarComponent.propTypes = {
    label: PropTypes.string.isRequired,
    onNavigate: PropTypes.func.isRequired,
};

export default ToolbarComponent;
