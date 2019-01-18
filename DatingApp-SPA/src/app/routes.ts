import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '', // path will be created by concat
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent }, // '' + 'members'
            { path: 'messages', component: MessagesComponent }, // '' + 'messages'
            { path: 'lists', component: ListsComponent }, // '' + 'lists'
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
