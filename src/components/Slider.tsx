import React, { Children } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccButton, BccTypography } from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        backgroundSize: "cover",
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "0 48px",
        paddingBottom: "32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      slderTitle: {
        marginBottom: 24,
      },
      sliderSubTitle: {
        marginBottom: 48,
        color: "#4D565F",
      },
      sliderBtn: {
        height: 64,
        fontSize: 18,
        lineHeight: "64px",
        minWidth: 350,
      },
      slider: {
        width: "100%",
        overflowX: "hidden",
        "& > div": {
          width: "100%",
          transition: "all .7s ease-in-out",
          "& > div": {
            width: "100%",
          },
        },
      },
      slide: {
        "& > div:first-child": {
          width: "calc(50% - 16px)",
          padding: "80px 0 64px",
        },
        "& > div:last-child": {
          position: "relative",
          width: "calc(50% - 16px)",
          "& > img": {
            position: "absolute",
            right: "-40%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
          },
        },
      },
      sliderSteps: {
        position: "absolute",
        bottom: 0,
        width: 210,
        left: "calc(50% - 105px)",
        display: "flex",
        flexWrap: "nowrap",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center",
      },
      sliderStep: {
        cursor: "pointer",
        width: 10,
        marginRight: 16,
        height: 10,
        borderRadius: "50%",
        boxSizing: "border-box",
        border: "1px solid #27AE60",
        "&:hover": {
          backgroundColor: "#27AE60",
        },
      },
      active: {
        backgroundColor: "#27AE60",
      },
      slideLeft: {
        marginRight: 64,
        cursor: "pointer",
      },
      slideRight: {
        marginLeft: 48,
        cursor: "pointer",
      },
      cardsText: {
        "& > div": {
          width: "calc(50% - 12px)",
          marginBottom: 48,
        },
        "& > div:first-child": {
          marginBottom: 24,
        },
        "& > div:nth-child(2)": {
          marginBottom: 24,
        },
      },
      header: {
        paddingTop: 48,
      },
    },
    [theme.breakpoints.down("md")]: {
      outerContainer: {
        backgroundSize: "cover",
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "0 48px",
        paddingBottom: "32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      slderTitle: {
        marginBottom: 24,
      },
      sliderSubTitle: {
        marginBottom: 48,
        color: "#4D565F",
      },
      sliderBtn: {
        minWidth: 300,
        height: 64,
        fontSize: 18,
        lineHeight: "64px",
      },
      slider: {
        width: "100%",
        overflowX: "hidden",
        "& > div": {
          width: "100%",
          transition: "all .7s ease-in-out",
          "& > div": {
            width: "100%",
          },
        },
      },
      slide: {
        "& > div:first-child": {
          width: "calc(50% - 16px)",
          padding: "80px 0 92px",
        },
        "& > div:last-child": {
          position: "relative",
          width: "calc(50% - 16px)",
          "& > img": {
            position: "absolute",
            right: "-40%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
          },
        },
      },
      sliderSteps: {
        position: "absolute",
        bottom: 0,
        width: 210,
        left: "calc(50% - 105px)",
        display: "flex",
        flexWrap: "nowrap",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center",
      },
      sliderStep: {
        cursor: "pointer",
        width: 10,
        marginRight: 16,
        height: 10,
        borderRadius: "50%",
        boxSizing: "border-box",
        border: "1px solid #27AE60",
        "&:hover": {
          backgroundColor: "#27AE60",
        },
      },
      active: {
        backgroundColor: "#27AE60",
      },
      slideLeft: {
        marginRight: 64,
        cursor: "pointer",
      },
      slideRight: {
        marginLeft: 48,
        cursor: "pointer",
      },
      cardsText: {
        "& > div": {
          width: "calc(50% - 12px)",
          marginBottom: 48,
        },
        "& > div:first-child": {
          marginBottom: 24,
        },
        "& > div:nth-child(2)": {
          marginBottom: 24,
        },
      },
      header: {
        paddingTop: 48,
      },
    },
    [theme.breakpoints.down("sm")]: {
      sliderBtn: {
        minWidth: 250,
      },
      container: {
        padding: "0 20px",
      },
      cardsText: {
        "& > div": {
          width: "100%",
          marginBottom: 24,
        },
        "& > div:first-child": {
          marginBottom: 12,
        },
        "& > div:nth-child(2)": {
          marginBottom: 12,
        },
      },
      header: {
        paddingTop: 24,
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        height: "auto",
      },
      slderTitle: {
        marginBottom: 12,
      },
      sliderBtn: {
        height: 56,
        fontSize: 16,
        minWidth: "auto",
        width: "100%",
        boxSizing: "border-box",
        bottom: "initial",
        position: "relative",
      },
      sliderSteps: {
        width: 94,
        left: "calc(50% - 47px)",
      },
      sliderSubTitle: {
        marginBottom: 12,
      },
      cardsText: {
        "& > div": {
          width: "100%",
          marginBottom: 12,

          "& > span": { fontWeight: 400 },
        },
      },
      header: {
        paddingTop: 24,
      },
      slideRight: { display: "none" },
      slideLeft: { display: "none" },
      slide: {
        flexDirection: "column-reverse",
        flexWrap: "wrap",
        "& > div:first-child": {
          width: "100%",
          padding: "16px 0 0",
        },
        "& > div:last-child": {
          marginTop: 24,
          width: "100%",
          "& > img": {
            position: "relative",
            width: "75%",
            display: "block",
            margin: "12px auto",
            maxWidth: "none",
            top: "initial",
            right: "initial",
            transform: "none",
          },
        },
      },
    },
  })
);

interface SliderStepsProps {
  title: string;
  desc: any;
  img: string;
  btnText: string;
  bgColor?: string;
}

interface SliderProps {
  steps: Array<SliderStepsProps> | SliderStepsProps;
}

const Slider = (props: SliderProps) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.slider}>
          <div>
            <Grid container className={classes.header}>
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/img/logo.svg"} />
              </Grid>
            </Grid>
            {!Array.isArray(props.steps) && (
              <Grid
                container
                justify="space-between"
                wrap="nowrap"
                className={classes.slide}
              >
                <Grid item>
                  <BccTypography type="h2" block className={classes.slderTitle}>
                    {props.steps.title}
                  </BccTypography>
                  <BccTypography
                    type="h4"
                    weight="normal"
                    block
                    className={classes.sliderSubTitle}
                  >
                    {props.steps.desc}
                  </BccTypography>
                  <Grid
                    container
                    justify="space-between"
                    className={classes.cardsText}
                  >
                    <Grid item>
                      <BccTypography type="h5" block>
                        Кэшбэк 1%
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography type="h5" block>
                        Бесплатная доставка карты
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography type="h6" block>
                        до 1 000 000 KZT
                      </BccTypography>
                      <BccTypography
                        color="#80868C"
                        weight="normal"
                        type="h5"
                        block
                      >
                        Бесплатное снятие денег
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography type="h5" block>
                        Автоматическая передача реквизитов клиента в ЦОН
                      </BccTypography>
                    </Grid>
                  </Grid>
                  <BccButton
                    variant="contained"
                    color="primary"
                    target="_blank"
                    href="https://www.bcc.kz/socialcard/"
                    className={classes.sliderBtn}
                  >
                    {props.steps.btnText}
                  </BccButton>
                </Grid>
                <Grid item>
                  <img
                    src={process.env.PUBLIC_URL + props.steps.img}
                    alt="slide1"
                  />
                </Grid>
              </Grid>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
