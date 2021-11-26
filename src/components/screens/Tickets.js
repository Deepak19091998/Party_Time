import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React,{useState,useEffect} from 'react';
import { Box, Grid } from "@material-ui/core";
import image2 from '../images/image2.jpeg';
import TicketStyle from "../styles/TicketStyles";

export default function Tickets() {
  const classes = TicketStyle();
    const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

    const [state, setstate] = useState({})

    function SamplePrevArrow(props) {
      const { className, onClick } = props;
      return (
        <div
          className={className}
          style={{display: "block",background: "black",borderRadius:'10px'}}
          onClick={onClick}
        />
      );
    }

    function SampleNextArrow(props) {
      const { className, onClick } = props;
      return (
        <div
          className={className}
          style={{display: "block",background: "black",borderRadius:'10px'}}
          onClick={onClick}
        />
      );
    }

    useEffect(() => {
    // API for get requests
    let fetchRes = fetch("https://xmas-coupon.herokuapp.com/api/xms/users/uoiu97687");
      fetchRes.then(res =>
        res.json()).then(data => {
          console.log(data);
          setstate(data)
        })
    }, []);
    
    return (
      <Box p={2}>
        <Grid container justifyContent='center'>
          <Grid item xs={10} sm={6} md={5} lg={4}>
            <Box className={classes.headingBox}>
              Welcome, {state?.name}
            </Box>
            <Box className={classes.availableWrapBox}>
              <Box className={classes.availableBtnBox} />
              <Box ml={1}>Available Coupons - 6</Box>
            </Box>

            <Box className={classes.usedWrapBox}>
              <Box className={classes.usedBtnBox} />
              <Box ml={1}>Used Coupons - 6</Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item xs={10} sm={6} md={5} lg={4} className={classes.p35}>
            <Box className={classes.gridContainer} />
            <Slider {...settings} className={classes.sliderImage}>
              {state && state.coupons && state.coupons.map((data,index)=>(
                <>
                  <Box className={classes.sliderContainer}>
                    {!data.active?
                    <img src={`data:image/png;base64,${data.image}`} alt="Scanner" className={classes.slideImage}/>
                    :
                    <img src={image2} alt="?" className={classes.slideImage}/>
                    }
                  </Box>
                  <Box className={classes.countingBox}>{index+1} of {state.coupons.length}</Box>
                </>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Box>
    );
  }
