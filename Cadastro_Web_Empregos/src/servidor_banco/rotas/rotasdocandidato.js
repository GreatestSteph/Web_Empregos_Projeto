import { Router } from 'express';
import ControleCand from '../controledeusuario/controlecandidato.js';

const rotasdocandidato = new Router();
const candidatocontrole = new ControleCand();


rotasdocandidato.get('/', candidatocontrole.GET).post('/', candidatocontrole.POST).put('/', candidatocontrole.PUTPATCH).patch('/', candidatocontrole.PUTPATCH).delete('/', candidatocontrole.DELETE);
export default rotasdocandidato

//tudo ok por enquanto