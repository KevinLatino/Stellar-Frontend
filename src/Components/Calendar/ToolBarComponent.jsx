import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, ChevronLeft } from 'lucide-react';
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
            <button
                onClick={() => onNavigate('PREV')}
                style={buttonStyle}
                onFocus={(e) => e.target.style.outline = 'none'}
                onMouseDown={(e) => e.preventDefault()}
            >
                <ChevronLeft color='#4461F2' />
            </button>
            <span className='text-stellar-blue text-2xl font-semibold'>{label}</span>
            <button
                onClick={() => onNavigate('NEXT')}
                style={buttonStyle}
                onFocus={(e) => e.target.style.outline = 'none'}
                onMouseDown={(e) => e.preventDefault()}
            >
                <ChevronRight color='#4461F2' />
            </button>
        </div>
    );
};

ToolbarComponent.propTypes = {
    label: PropTypes.string.isRequired,
    onNavigate: PropTypes.func.isRequired,
};

export default ToolbarComponent;
