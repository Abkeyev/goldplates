import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#ffffff",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "18px 48px 72px",
        margin: "0 auto",
      },
      stepsContainer: {
        backgroundColor: "#fafafa",
        padding: "64px 32px",
        borderRadius: 8,
        "& > span:first-child": {
          marginBottom: 56,
        },
      },
      cards: {
        "& > div:nth-child(2n)": { textAlign: "center", display: 'flex', alignItems: 'center', width: "10%" },
        "& > div:nth-child(2n+1)": {
          width: "25%",
        },
        "& > div:nth-child(3)": {
          width: "30%",
        },
        "& > div": {
          width: "auto",
          "& > div:first-child": {
            fontSize: 64,
            lineHeight: "75px",
            fontWeight: "bold",
            marginRight: 32,
          },
          "& > div:last-child": {
            "& > div": {
              display: "none",
            },
            "& > div+span": {
              display: "block",
            },
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundColor: "#fafafa",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "32px 20px",
        margin: "0 auto",
      },
      stepsContainer: {
        backgroundColor: "#fafafa",
        borderRadius: 8,
        "& > span:first-child": {
          marginBottom: 20,
        },
      },
      cards: {
        flexWrap: "wrap",
        "& > div:nth-child(2n)": { display: "none" },
        "& > div:last-child": { marginBottom: 0 },
        "& > div": {
          width: "100%",
          background: "#FFFFFF",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          padding: 16,
          marginBottom: 16,
          "& > div:first-child": {
            fontSize: 64,
            lineHeight: "75px",
            fontWeight: "bold",
            marginRight: 32,
          },
          "& > div:last-child": {
            "& a": {
              color: "#C35BC0",
            },
            "& > div": {
              display: "block",
            },
            "& > div+span": {
              display: "none",
            },
          },
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const HowToGet = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <BccTypography type="h2" block mb="56px">
          Как получить карту
        </BccTypography>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cards}
        >
          <Grid item container wrap="nowrap" justify="flex-start">
            <Grid item>1</Grid>
            <Grid item>
              <BccTypography type="h6" block mb="12px">
                Заполните заявку
              </BccTypography>
              <BccTypography type="p2l" block>
                В ближайшем отделении или на{" "}
                <a target="_blank" href="https://www.bcc.kz/socialcard/">
                  сайте
                </a>
                . Это займет всего несколько минут
              </BccTypography>
            </Grid>
          </Grid>
          <Grid item>
            <img src={process.env.PUBLIC_URL + "/img/arrow.svg"} />
          </Grid>
          <Grid item container wrap="nowrap" justify="flex-start">
            <Grid item>2</Grid>
            <Grid item>
              <BccTypography type="h6" block mb="12px">
                Получите карту
              </BccTypography>
              <BccTypography type="p2l" block>
                В{" "}
                <a target="_blank" href="https://www.bcc.kz/branches-and-atms/">
                  отделении
                </a>{" "}
                или представитель Банка доставит по указанному адресу
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HowToGet;
