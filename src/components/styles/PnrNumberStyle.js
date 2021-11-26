import { makeStyles,createStyles } from "@material-ui/core";

const PnrNumberStyle = makeStyles((theme)=>
  createStyles({
    leftGrid : {
      background:'#a4c4b5',
      height:'100vh',
      display:'flex',
      justifyContent:"center",
      alignItems:'center',
      [theme.breakpoints.down('sm')]:{
        display:'none'
      }
    },
    imgBox : {
    },
    rightGrid : {
      height:'100vh',
      border:"10px solid",
      display:'grid',
      placeItems:'center'
    },
    paper : {
      padding:'8%'
    },
    btnBox : {
      justifyContent:'center',
      display:'flex'
    },
    btnText : {
      background:"#464949",
      color:'white', 
      text:'none',
      "&:hover":{
        background:"#464949",
        color:'white', 
      }    
    }
  })
)

export default PnrNumberStyle;