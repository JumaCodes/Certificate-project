import LoaderGif from "../assets/gif/loader.gif"
export default function Loader(){
    return (
        <div style={ style_container }>
            <img src={LoaderGif} style={{ width :"100px",height:"100px" }}/>
        </div>
    )
}


const style_container: React.CSSProperties = {
    width : "100vw",
    height : "100vh",
    position : "fixed",
    top : "0px",
    left : "0px",
    display : "flex",
    justifyContent  : "center",
    alignItems : "center",
    backgroundColor : "rgba(255, 255, 255, 0.53)",
  };