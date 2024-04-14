import { Router } from 'express';
import ControleVaga from '../controledeusuario/controlevaga.js';

const rotasdavaga = new Router();
const vagacontrole = new ControleVaga();


rotasdavaga.get('/', vagacontrole.GET).post('/', vagacontrole.POST).put('/', vagacontrole.PUTPATCH).patch('/', vagacontrole.PUTPATCH).delete('/', vagacontrole.DELETE);
export default rotasdavaga

//tudo ok por enquanto