//Create a series of links taking the user to each page. These links appear near the header.
export default function Nav({links}){
    return(
        <div className="row text-center" id="navBar">
            {links.map((link) => link)}
        </div>
    )
}