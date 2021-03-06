import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccCard } from "../BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        backgroundColor: "#FAFAFA",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
        position: 'relative'
      },
      title: {
        marginBottom: 32,
      },
      cardsText: {
        "& > div": {},
      },
      cards: {
        marginBottom: 20,
        "& > div": {
          width: "calc(33% - 16px)",
        },
      },
      cardsSecond: {
        "& > div": {
          width: "calc(50% - 12px)",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      outerContainer: {
        backgroundColor: "#FAFAFA",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
        position: 'relative'
      },
      title: {
        marginBottom: 32,
      },
      cardsText: {
        "& > div": {
          width: "calc(50% - 8px)",
        },
      },
      cards: {
        marginBottom: 20,
        "& > div": {
          width: "calc(33% - 8px)",
        },
      },
      cardsSecond: {
        "& > div": {
          width: "calc(50% - 12px)",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        padding: "48px 48px 32px",
      },
      cards: {
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 0,
        "& > div:nth-child(2n + 1)": {
          marginRight: 16,
        },
        "& > div:last-child": {
          marginRight: 0,
          width: "80%",
          maxWidth: 400,
        },
        "& > div": {
          width: "calc(50% - 8px)",
          marginBottom: 16,
        },
      },
      cardsSecond: {
        flexWrap: "wrap",
        "& > div": {
          width: "100%",
          marginBottom: 16,
        },
        "& > div:last-child": {
          marginBottom: 0,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        paddingLeft: 20,
        paddingRight: 20,
      },
      cards: {
        "& > div": {
          width: "100%",
          marginRight: 0,
          maxWidth: "none",
        },
        "& > div:nth-child(2n + 1)": {
          marginRight: 0,
        },
        "& > div:last-child": {
          marginRight: 0,
          width: "100%",
          maxWidth: "none",
        },
      },
      title: {
        marginBottom: 20,
      },
    },
  })
);

const GoldPageCards = (props: {cardsRef1: any}) => {
  const classes = useStyles({});

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container} ref={props.cardsRef1}>
        <BccTypography type="h2" align="center" block className={classes.title}>
            ???????? ?????????????? ??????????????
        </BccTypography>
        <Grid
          container
          justify="space-between"
          className={classes.cards}
        >
            <Grid item>
                <BccCard
                    title="?????????????? ????????????"
                    btn={[]}
                    variant="vertical"
                    img={process.env.PUBLIC_URL + "/img/gold1.png"}
                    chips={[
                        {
                          chip: {
                            id: 3,
                            title: "5 ??????????????",
                            type: "outlined",
                            color: "#4d565f",
                          },
                        },
                        {
                          chip: {
                            id: 4,
                            title: "?????????? 999.9",
                            type: "contained",
                            color: "#00A755",
                          },
                        }
                      ]}
                    text="<b style='margin-right: 24px'>???????????? 14.1 ????</b><b>?????????? 24.2 ????</b>"
                />
            </Grid>
            <Grid item>
                <BccCard
                    title="?????????????? ????????????"
                    btn={[]}
                    variant="vertical"
                    img={process.env.PUBLIC_URL + "/img/gold2.png"}
                    chips={[
                        {
                          chip: {
                            id: 3,
                            title: "10 ??????????????",
                            type: "outlined",
                            color: "#4d565f",
                          },
                        },
                        {
                          chip: {
                            id: 4,
                            title: "?????????? 999.9",
                            type: "contained",
                            color: "#00A755",
                          },
                        }
                      ]}
                    text="<b style='margin-right: 24px'>???????????? 15 ????</b><b>?????????? 24.2 ????</b>"
                />
            </Grid>
            <Grid item>
                <BccCard
                    title="?????????????? ????????????"
                    btn={[]}
                    variant="vertical"
                    img={process.env.PUBLIC_URL + "/img/gold3.png"}
                    chips={[
                        {
                          chip: {
                            id: 3,
                            title: "20 ??????????????",
                            type: "outlined",
                            color: "#4d565f",
                          },
                        },
                        {
                          chip: {
                            id: 4,
                            title: "?????????? 999.9",
                            type: "contained",
                            color: "#00A755",
                          },
                        }
                      ]}
                    text="<b style='margin-right: 24px'>???????????? 17.4 ????</b><b>?????????? 30 ????</b>"
                />
            </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          className={classes.cards}
        >
            <Grid item style={{ marginRight: 24 }}>
                <BccCard
                    title="?????????????? ????????????"
                    btn={[]}
                    variant="vertical"
                    img={process.env.PUBLIC_URL + "/img/gold4.png"}
                    chips={[
                        {
                          chip: {
                            id: 3,
                            title: "50 ??????????????",
                            type: "outlined",
                            color: "#4d565f",
                          },
                        },
                        {
                          chip: {
                            id: 4,
                            title: "?????????? 999.9",
                            type: "contained",
                            color: "#00A755",
                          },
                        }
                      ]}
                    text="<b style='margin-right: 24px'>???????????? 22 ????</b><b>?????????? 37.9 ????</b>"
                />
            </Grid>
            <Grid item>
                <BccCard
                    title="?????????????? ????????????"
                    btn={[]}
                    variant="vertical"
                    img={process.env.PUBLIC_URL + "/img/gold5.png"}
                    chips={[
                        {
                          chip: {
                            id: 3,
                            title: "100 ??????????????",
                            type: "outlined",
                            color: "#4d565f",
                          },
                        },
                        {
                          chip: {
                            id: 4,
                            title: "?????????? 999.9",
                            type: "contained",
                            color: "#00A755",
                          },
                        }
                      ]}
                    text="<b style='margin-right: 24px'>???????????? 32 ????</b><b>?????????? 55 ????</b>"
                />
            </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default GoldPageCards;
