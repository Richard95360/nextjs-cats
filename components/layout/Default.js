import Nav from "../Nav/Nav";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Nav/>
            <main> {children}</main>
           
        </div>
     );
}

export default DefaultLayout;