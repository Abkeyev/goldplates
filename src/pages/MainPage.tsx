import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {
  Slider,
  Benefits,
  GoldPageCards,
  GoldPageTabs,
  CallUs,
  Footer
} from "../components";
import {
  BccTypography,
} from "../components/BccComponents";
import { SliderProps, BenefitsProps } from '../interfaces';
import { animateScroll } from "react-scroll";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      goldInfo: {
        flexWrap: 'nowrap',
        marginBottom: 40,
        '& > div': {
          width: 'calc(50% - 12px)',
          padding: '64px 100px',
          border: '1px solid #CCCFD1',
          backgroundColor: 'white',
          borderRadius: 8,
        }
      },
      benefits: {
        flexWrap: 'nowrap',
        marginBottom: 80,
        '& > div': {
          width: 'calc(33% - 16px)',
          border: '1px solid #CCCFD1',
          textAlign: 'center',
          padding: '30px 30px 10px',
          '& > h4': {
            marginTop: 24,
          }
        }
      },
      goldBanner: {
        background: `url(${process.env.PUBLIC_URL}/img/gold-card.png) no-repeat center`,
        backgroundSize: 'contain',
        borderRadius: 8,
        marginBottom: 80,
        height: 300
      },
      goldBlock: {
        backgroundColor: '#fafafa',
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "48px",
        boxSizing: "border-box",
      },
      gramm: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > span': {
          width: '33%',
          cursor: 'pointer',
          padding: '8px',
          color: '#00A755',
          '& > span': {
            color: '#4D565F'
          }
        }
      }
    },
    [theme.breakpoints.down("sm")]: {
      goldInfo: {
        flexWrap: 'wrap',
        '& > div': {
          width: '100%',
          padding: '24px 12px',
          border: '1px solid #CCCFD1',
          backgroundColor: 'white',
          borderRadius: 8,
          marginBottom: 40,
          textAlign: 'center'
        }
      },
      benefits: {
        flexWrap: 'wrap',
        '& > div': {
          width: '100%',
          border: '1px solid #CCCFD1',
          marginBottom: 24,
          textAlign: 'center',
          padding: '30px 30px 10px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          alignItems: 'center',
          '& > img': {
            width: '10%',
          },
          '& > h4': {
            width: '90%',
            textAlign: 'center',
          }
        }
      },
      goldBanner: {
        background: `url(${process.env.PUBLIC_URL}/img/gold-card.png) no-repeat center`,
        backgroundSize: 'cover',
        borderRadius: 8,
        marginBottom: 80,
        height: 150
      },
      goldBlock: {
        backgroundColor: '#fafafa',
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
      },
      gramm: {
        display: 'flex',
        flexDirection: 'column',
        '& > span': {
          width: '100%',
          cursor: 'pointer',
          padding: '8px',
          color: '#00A755',
          '& > span': {
            color: '#4D565F'
          }
        }
      }
    },
  })
);

const slider: SliderProps[] = [{
    button: {
        id: 0,
        buttonColor: 'primary',
        buttonLink: '#read-more',
        buttonText: 'Узнать больше',
        buttonType: "contained"
    },
    button2: {
        id: 0,
        buttonColor: 'primary',
        buttonLink: '#read-more',
        buttonText: 'Узнать больше',
        buttonType: "contained"
    },
    slider: {
        backgroundColor: "#F2F2F2",
        disabled: false,
        id: 1,
        image: "/img/gold.png",
        imgLocal: true,
        isFull: true,
        subtitle: "Покупать и продавать золото - легко!",
        title: "#золотые слитки",
        content: ""
    }
}]

const benefits: BenefitsProps[] = [{
  id: 0,
  color: 'white',
  title: 'Преимущества',
  align: 'center',
  benefitItems: [{
    id: 1,
    title: "Надежный способ защиты собственных сбережений",
    image: '/img/gold-benefits1.png',
    content: ''
  },{
    id: 2,
    title: "Высокая ликвидность и выгодные условия ",
    image: '/img/gold-benefits2.png',
    content: ''
  },{
    id: 3,
    title: "Долгосрочные инвестиции в собственное будущее и будущее своих детей.",
    image: '/img/gold-benefits3.png',
    content: ''
  },{
    id: 4,
    title: "Отличный подарок друзьям и близким",
    image: '/img/gold-benefits4.png',
    content: ''
  }]
}]

const MainPage = () => {
  const classes = useStyles({});
  const infoRef: any = React.useRef(null);
  const scrollToInfo = () => {
    animateScroll.scrollTo(infoRef.current.offsetTop);
  };
  const cardsRef1: any = React.useRef(null);
  const scrollToCardsRef1 = () => {
    animateScroll.scrollTo(cardsRef1.current.offsetTop);
  };
  return (
    <div className="main-page">
      <div className="container">
        <Slider scrollToInfo={scrollToInfo} slider={slider}/>
        <div className={classes.goldBlock}>
          <Grid container justify="space-between" className={classes.goldInfo}>
            <Grid item>
              <BccTypography type="h4" mb="16px" weight="bold" block>О золотых слитках</BccTypography>
              <BccTypography type="p2l" color="#4D565F">Золотые слитки с пробой с пробой 999,9 в рамках программы Национального Банка Республики Казахстан по выкупу и продаже мерных слитков аффинированного золота населению.</BccTypography>
            </Grid>
            <Grid item>
              <BccTypography type="h4" mb="16px" weight="bold" block>Детали</BccTypography>
              <BccTypography type="p2l" block mb="8px" color="#4D565F">Золотые слитки представлены в пяти разновидностях:</BccTypography>
              <BccTypography type="p2l" block mb="8px">
                <span className={classes.gramm}>
                  <span onClick={scrollToCardsRef1}><span>•</span> 5 грамм</span>
                  <span onClick={scrollToCardsRef1}><span>•</span> 10 грамм</span>
                  <span onClick={scrollToCardsRef1}><span>•</span> 20 грамм</span>
                  <span onClick={scrollToCardsRef1}><span>•</span> 50 грамм</span>
                  <span onClick={scrollToCardsRef1}><span>•</span> 100 грамм</span>
                </span>
              </BccTypography>
              <BccTypography type="p2l" block color="#4D565F">
                Упаковка, как и сами слитки, содержит защитные элементы и представляет собой сертификат качества актива.<br/>Целостность упаковки является залогом сохранения стоимости слитков.<br/>Рекомендуется бережное хранение.<br/>Упаковку не вскрывать!
              </BccTypography>
            </Grid>
          </Grid>
          <div className={classes.goldBanner}></div>
          <BccTypography align="center" weight="bold" block type="h3" mb="46px">Защитные элементы слитков</BccTypography>
          <Grid container justify="space-between" className={classes.benefits}>
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/gold-item1.png"} alt="gold-item1"/>
              <BccTypography align="center" block type="h5" weight="bold">Зеркальная поверхность слитков</BccTypography>
            </Grid>
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/gold-item2.png"} alt="gold-item1"/>
              <BccTypography align="center" block type="h5" weight="bold">Микротекст</BccTypography>
            </Grid>
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/gold-item3.png"} alt="gold-item1"/>
              <BccTypography align="center" block type="h5" weight="bold">Рельефный гурт</BccTypography>
            </Grid>
          </Grid>
        </div>
        <Benefits benefits={benefits} />
        <GoldPageCards cardsRef1={cardsRef1}/>
        <GoldPageTabs infoRef={infoRef} />
        <CallUs />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;