import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignOutComponent } from './auth/sign-out/sign-out.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './profiles/profiles/profiles.component';
import { GroupComponent } from './group/group/group.component';
import { GroupRouterComponent } from './group/group-router/group-router.component';
import { GroupPostComponent } from './group/group-post/group-post.component';
import { CreateGroupComponent } from './group/create-group/create-group.component';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'create',
    component: CreatePostComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'logout',
    component: SignOutComponent
  },
  {
    path: 'user/:username',
    component: ProfileComponent,
  },
  {
    path: 'group',
    component: GroupRouterComponent,
    children: [
      {
        path: 'submit-post',
        canActivate: [AuthGuard],
        component: GroupPostComponent
      },
      {
        path: 'create-new',
        canActivate: [AuthGuard],
        component: CreateGroupComponent
      },
      {
        path: ':id',
        component: GroupComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: ':uuid',
    component: PostDetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
