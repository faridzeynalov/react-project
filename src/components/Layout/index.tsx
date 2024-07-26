import Footer from "./Footer";
import Header  from "./Header";

interface LayoutI {
    children: React.ReactNode
}



const Layout  = ({children}: LayoutI) => {
    return (
        <>
            <Header/>
            <main className="container">
                {children}
            </main>
            <Footer/>
        </>
    )
}


export default Layout;