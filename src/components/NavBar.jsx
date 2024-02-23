export default function Nav({links}){
    return(
        <div className="row text-center" id="navBar">
            {links.map((link) => link)}
        </div>
    )
}