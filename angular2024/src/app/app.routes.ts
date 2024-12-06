import { Routes } from '@angular/router';

import { IntroComponent } from './intro/intro.component';

import { DesignTeamComponent } from './pages/team/design-team/design-team.component';
import { WhatWeDoComponent } from './pages/team/what-we-do/what-we-do.component';
import { DesignTeamParentComponent } from './pages/team/design-team-parent.component';

export const routes: Routes = [
    {path: '', component: IntroComponent, pathMatch: 'full'},
    {path: 'team', component: DesignTeamParentComponent, children: [
        {path: 'who-we-are', component: DesignTeamComponent},
        {path: 'what-we-do', component: WhatWeDoComponent},
    ]}
];
