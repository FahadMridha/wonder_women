import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingHistory = () => {
    const navigate = useNavigate();
    return (
        navigate('/home')
    );
};

export default BookingHistory;