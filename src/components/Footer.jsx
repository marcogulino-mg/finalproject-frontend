import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer className="d-flex justify-content-between align-items-center px-4 pt-4 pb-2">
            <div>
                <h5><FontAwesomeIcon icon={faCopyright} style={{color: "#000000"}} /> By Marco Gulino 2025</h5>
            </div>
        </footer>
    )
}