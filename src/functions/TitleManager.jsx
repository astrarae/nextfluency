import { useLocation } from "react-router-dom"
import { useEffect } from 'react'

const TitleManager = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname
        switch( path ) {
            case "/":
                document.title = "Home - OneFluency"
                break;
            case "/contacts":
                document.title = "Contacts - OneFluency"
                break
            default:
                document.title = "OneFluency"
        }
    })
}

export default TitleManager;