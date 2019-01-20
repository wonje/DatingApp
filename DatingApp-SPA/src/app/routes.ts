import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './resolvers/member-detail.resolver';
import { MemberListResolver } from './resolvers/member-list.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '', // path will be created by concat
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}}, // '' + 'members'
            { path: 'members/:id', component: MemberDetailComponent,
                resolve: {user: MemberDetailResolver} }, // '' + 'members/:id'
            { path: 'messages', component: MessagesComponent }, // '' + 'messages'
            { path: 'lists', component: ListsComponent }, // '' + 'lists'
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
