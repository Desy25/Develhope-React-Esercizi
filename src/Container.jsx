import { useState } from 'react';
import './Container.css';

export function Container({ title, children }) {
    const [collapsed, setCollapsed] = useState(false);

    function handleToggle() {
        setCollapsed(collapsed => !collapsed);
    }

    return (
        <div>
            <div className='title'>
                <h3><button onClick={handleToggle}>{title}</button></h3>
            </div>
            {
                !collapsed && <div className="custom">
                    {children}
                </div>
            }
        </div>
    )
}