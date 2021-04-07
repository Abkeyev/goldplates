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
            Виды золотых слитков
        </BccTypography>
        <Grid
          container
          justify="space-between"
          className={classes.cards}
        >
            <Grid item>
                <BccCard
                    title="Золотые слитки"
                    btn={[]}
                    variant="vertical"
                    img={process.env.PUBLIC_URL + "/img/gold1.png"}
                    chips={[
                        {
                          chip: {
                            id: 3,
                            title: "5 граммов",
                            type: "outlined",
                            color: "#4d565f",
                          },
                        },
                        {
                          chip: {
                            id: 4,
                            title: "Проба 999.9",
                            type: "contained",
                            color: "#00A755",
                          },
                        }
                      ]}
                    text="<b style='margin-right: 24px'>Ширина 14.1 мм</b><b>Длина 24.2 мм</b>"
                />
            </Grid>
            <Grid item>
                <BccCard
                    title="Золотые слитки"
                    btn={[]}
                    variant="vertical"
                    img={process.env.PUBLIC_URL + "/img/gold2.png"}
                    chips={[
                        {
                          chip: {
                            id: 3,
                            title: "10 граммов",
                            type: "outlined",
                            color: "#4d565f",
                          },
                        },
                        {
                          chip: {
                            id: 4,
                            title: "Проба 999.9",
                            type: "contained",
                            color: "#00A755",
                          },
                        }
                      ]}
                    text="<b style='margin-right: 24px'>Ширина 15 мм</b><b>Длина 24.2 мм</b>"
                />
            </Grid>
            <Grid item>
                <BccCard
                    title="Золотые слитки"
                    btn={[]}
                    variant="vertical"
                    img={process.env.PUBLIC_URL + "/img/gold3.png"}
                    chips={[
                        {
                          chip: {
                            id: 3,
                            title: "20 граммов",
                            type: "outlined",
                            color: "#4d565f",
                          },
                        },
                        {
                          chip: {
                            id: 4,
                            title: "Проба 999.9",
                            type: "contained",
                            color: "#00A755",
                          },
                        }
                      ]}
                    text="<b style='margin-right: 24px'>Ширина 17.4 мм</b><b>Длина 30 мм</b>"
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
                    title="Золотые слитки"
                    btn={[]}
                    variant="vertical"
                    img={process.env.PUBLIC_URL + "/img/gold4.png"}
                    chips={[
                        {
                          chip: {
                            id: 3,
                            title: "50 граммов",
                            type: "outlined",
                            color: "#4d565f",
                          },
                        },
                        {
                          chip: {
                            id: 4,
                            title: "Проба 999.9",
                            type: "contained",
                            color: "#00A755",
                          },
                        }
                      ]}
                    text="<b style='margin-right: 24px'>Ширина 22 мм</b><b>Длина 37.9 мм</b>"
                />
            </Grid>
            <Grid item>
                <BccCard
                    title="Золотые слитки"
                    btn={[]}
                    variant="vertical"
                    img={process.env.PUBLIC_URL + "/img/gold5.png"}
                    chips={[
                        {
                          chip: {
                            id: 3,
                            title: "100 граммов",
                            type: "outlined",
                            color: "#4d565f",
                          },
                        },
                        {
                          chip: {
                            id: 4,
                            title: "Проба 999.9",
                            type: "contained",
                            color: "#00A755",
                          },
                        }
                      ]}
                    text="<b style='margin-right: 24px'>Ширина 32 мм</b><b>Длина 55 мм</b>"
                />
            </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default GoldPageCards;
