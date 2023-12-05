import express from 'express';
import AlunoRoute from './routes/AlunoRoute';
import ProfessorRoute from './routes/ProfessorRoute';
import EstandeRoute from './routes/EstandeRoute';
import GrupoRoute from './routes/GrupoRoute';
import AvaliacaoRoute from './routes/AvaliacaoRoute';

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(AlunoRoute);
app.use(GrupoRoute);
app.use(ProfessorRoute);
app.use(EstandeRoute);
app.use(AvaliacaoRoute);



app.listen(12000, function(){
    console.log("Server running on port 12000");
})