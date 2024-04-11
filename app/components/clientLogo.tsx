import React from 'react';

export default function ClientLogo({ clientName, clientLogo }) {
    return (
        <div className="client-logo mr-4">
            <img src={clientLogo} alt={clientName + ' Logo'} />
            <p className="text-sm text-gray-700 mt-2">{clientName}</p>
        </div>
    );
}