import { makeStyles,createStyles } from "@material-ui/core";

const TicketStyle = makeStyles((theme)=>
  createStyles({
    sliderContainer : {
      position: 'relative',
    },
    width100: {
      width: '100%',
      [theme.breakpoints.only('xs')]: {
        width: '80%',
      },
      [theme.breakpoints.up('sm')]: {
        width: '91%',
      },
    },
    mt1: {
      marginTop: '1%',
    },
    slideImage : {
      width:'100%',
      height:'40vh',
      [theme.breakpoints.up('md')]:{
        height:'50vh'
      }
    },
    availableBtnBox : {
      height:'10px',
      width:'10px',
      borderRadius:'50%',
      background:'lightgreen',
      border:'1.7px solid'
    },
    usedBtnBox : {
      height:'10px',
      width:'10px',
      borderRadius:'50%',
      background:'orange',
      border:'1.7px solid'
    },
    p35 : {
      paddingTop:"35px"
    },
    availableWrapBox : {
      display:'flex',
      alignItems:'center',
      margin:'10px 0px 8px 0px'
    },
    usedWrapBox : {
      display:'flex',
      alignItems:'center',
      margin:'8px 0px'
     },
     gridContainer : {
      marginBottom:'30px',
      borderTop:'2px dashed',
      justifyContent : "center",
      opacity:'0.4'
     },
     headingBox : {
      fontWeight:500,
      fontSize:'20px',
      marginBottom:'15px'
     },
     sliderImage : {
      margin:'auto',
       [theme.breakpoints.up('sm')]:{
         width:"90%",
       },
       [theme.breakpoints.only('xs')]:{
         width:'90%'
       },
       [theme.breakpoints.up('md')]:{
         width:'80%'
       },
       marginTop:"10px"
     },
     countingBox : {
       textAlign:'center',
       marginTop:"20px",
       fontWeight:500,
       fontSize : '18px'
     }
  })
)

export default TicketStyle