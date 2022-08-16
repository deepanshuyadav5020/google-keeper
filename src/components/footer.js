import './footer.css'
const date = new Date();
var year = date.getFullYear();


export const Footer = ()=>{
    return (
        <>
        <p className="footer_text">copyright @ {year}</p>
        </>
    )
}