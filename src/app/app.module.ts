import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { AddAchievementComponent } from './components/add-achievement/add-achievement.component';
import { AchievementListComponent } from './components/achievement-list/achievement-list.component';
import { AchievementDetailComponent } from './components/achievement-detail/achievement-detail.component';
import { AddPublicationComponent } from './components/add-publication/add-publication.component';
import { PublicationDetailComponent } from './components/publication-detail/publication-detail.component';
import { PublicationsListComponent } from './components/publications-list/publications-list.component';
import { ResearchsListComponent } from './components/researchs-list/researchs-list.component';
import { ResearchDetailComponent } from './components/research-detail/research-detail.component';
import { AddResearchComponent } from './components/add-research/add-research.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { TimetableComponent } from './components/timetable/timetable.component';

const routes: Routes = [
  // {path:'',redirectTo:'add-book',pathMatch:'full'},
  {path:'',component:UserLoginComponent},
  {path:'books-list',component:BooksListComponent},
  {path:"add-book", component:AddBookComponent},
  {path:"edit-book/:id",component:BookDetailComponent},

  {path:'achievement-list',component:AchievementListComponent},
  {path:"add-achievement", component:AddAchievementComponent},
  {path:"edit-achievement/:id",component:AchievementDetailComponent},
  
  {path:'publications-list',component:PublicationsListComponent},
  {path:"add-publication", component:AddPublicationComponent},
  {path:"edit-publication/:id",component:PublicationDetailComponent},

  {path:'researchs-list',component:ResearchsListComponent},
  {path:"add-research", component:AddResearchComponent},
  {path:"edit-research/:id",component:ResearchDetailComponent},

  {path:'contacts-list',component:ContactsListComponent},
  {path:"add-contact", component:AddContactComponent},
  {path:"edit-contact/:id",component:ContactDetailComponent},

  {path:'timetable',component:TimetableComponent},
  {path:'view-all',component:ViewAllComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookDetailComponent,
    BooksListComponent,
    AddAchievementComponent,
    AchievementListComponent,
    AchievementDetailComponent,
    AddPublicationComponent,
    PublicationDetailComponent,
    PublicationsListComponent,
    ResearchsListComponent,
    ResearchDetailComponent,
    AddResearchComponent,
    AddContactComponent,
    ContactDetailComponent,
    ContactsListComponent,
    UserLoginComponent,
    ViewAllComponent,
    TimetableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
