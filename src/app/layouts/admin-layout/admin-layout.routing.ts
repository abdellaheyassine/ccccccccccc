import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { RegionComponent } from '../../pages/region/region.component';

import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { EmployeComponent } from 'src/app/pages/employe/employe.component';
import { EtudiantComponent } from 'src/app/pages/etudiant/etudiant.component';
import { EtablissementComponent } from 'src/app/pages/etablissement/etablissement.component';
import { ProfilComponent } from 'src/app/pages/profil/profil.component';
import { AttestationComponent } from 'src/app/pages/attestation/attestation.component';
import { VilleComponent } from 'src/app/pages/ville/ville.component';
import { ChartComponent } from 'src/app/pages/chart/chart.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',    component: DashboardComponent },
    { path: 'chart',        component: ChartComponent },
    { path: 'region',       component: RegionComponent },
    { path: 'employe',      component: EmployeComponent },
    { path: 'profil',       component: ProfilComponent },
    { path: 'etudiant',     component: EtudiantComponent },
    { path: 'etablissement', component: EtablissementComponent },
    { path: 'attestation',  component: AttestationComponent },
    { path: 'ville',        component: VilleComponent },

    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables',       component: TablesComponent },
    { path: 'icons',        component: IconsComponent },
    { path: 'maps',         component: MapsComponent }
];
