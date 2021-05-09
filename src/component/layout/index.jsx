import React from 'react';



const Layout = ({children}) => {
    return (
        <div className='container'>
            <div>
                header
            </div>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}

export default Layout;
