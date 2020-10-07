import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '80%',
  },
  image: {
    width: 400,
    height: 400,
  },
  img: {
    margin: 'auto',
    display: 'block',
    width: '385px',
    height: '300px'
  },
}));

const PostContent = (props) => {
  const classes = useStyles();
  


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
           <Typography variant="h2" component="h2" gutterBottom>
              Title
           </Typography>
        </Grid>
          <Grid item >
           <Typography variant="body2" style={{ cursor: 'pointer' }}>
            Add Category
           </Typography>
            
              <img className={classes.img} alt="complex" src="https://s2.glbimg.com/rDQwIrtAGFy8cK3HzR1i0PdKFa0=/0x0:1679x909/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/o/w/GHmFSTToqz9FBq1M7VWQ/omen-valorant.jpg" />
            
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                
                <Typography variant="body2" gutterBottom>
                Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável.

                “Conjunto de palavras e frases articuladas, escritas sobre qualquer suporte”.[1]
                
                “Obra escrita considerada na sua redação original e autêntica (por oposição a sumário, tradução, notas, comentários, etc.)”.[2]
                
                "Um texto é uma ocorrência linguística, escrita ou falada de qualquer extensão, dotada de unidade sociocomunicativa, semântica e formal. É uma unidade de linguagem em uso."[3]
                
                O interesse pelo texto como objeto de estudo gerou vários trabalhos importantes de teóricos da Linguística Textual, que percorreram fases diversas cujas características principais eram transpor os limites da frase descontextualizada da gramática tradicional e ainda incluir os relevantes papéis do autor e do leitor na construção de textos.
                
                Um texto pode ser escrito ou oral e, em sentido lato, pode ser também não verbal.
                
                Texto crítico é uma produção textual que parte de um processo reflexivo e analítico gerando um conteúdo com crítica construtiva e bem fundamentada.
                
                Em artes gráficas, o texto é a parte verbal, linguística, por oposição às ilustrações.
                
                Todo texto tem que ter alguns aspectos formais, ou seja, tem que ter estrutura, elementos que estabelecem relação entre si. Dentro dos aspectos formais temos a coesão e a coerência, que dão sentido e forma ao texto. "A coesão textual é a relação, a ligação, a conexão entre as palavras, expressões ou frases do texto”.[4] A coerência está relacionada com a compreensão, a interpretação do que se diz ou escreve. Um texto precisa ter sentido, isto é, precisa ter coerência. Embora a coesão não seja condição suficiente para que enunciados se constituam em textos, são os elementos coesivos que lhes dão maior legibilidade e evidenciam as relações entre seus diversos componentes, a coerência depende da coesão.
                
                
                
                </Typography>
               
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default PostContent