import "./style.css"

export const Header = () => {
    return (
        <>
        <div className="header">
            <div className="logo">
                <img src="" alt="Logo" />
            </div>

            <nav className="nav">
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/dashboard">DashBoard</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>

            <div className="login-button">

            </div>
        </div>
        </>
    );
}