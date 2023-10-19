import './Container.css';

export function Container({ title, children }) {
    return (
        <div>
            <div className='title'>
                <h3>{title}</h3>
            </div>
            <div className="custom">
                {children}
            </div>
        </div>
    )
}