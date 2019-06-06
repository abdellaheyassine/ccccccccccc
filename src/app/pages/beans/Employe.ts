import { Profil } from './Profil';
import { Etablissement } from './Etablissement';
import { Compte } from './Compte';

export class Employe{
  constructor(
    public id?: number,
    public nom?: string,
    public prenom?: string,
    public dateNaissance?: any,
    public lieuNaissance?: string,
    public dateEmbauche?: any,
    public profil?: any,
    public etablissement?: any,
    public compte?: any
  )
  {
    
  }
}
