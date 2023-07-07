import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ToastrModule } from 'ngx-toastr';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { connectFirestoreEmulator, enableIndexedDbPersistence, getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { getDatabase, provideDatabase } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from 'src/environments/environment.prod';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideFirestore(() => {
    //   const firestore = getFirestore();
    //   connectFirestoreEmulator(firestore, 'localhost', 4200);
    //   enableIndexedDbPersistence(firestore);
    //   return firestore;
    // }),
    // provideDatabase(() => getDatabase()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }


/*
import { NgModule } from '@angular/core';        
import { BrowserModule } from '@angular/platform-browser';        
import { AppRoutingModule } from './app-routing.module';        
import { AppComponent } from './app.component';        
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';        
import { getAuth, provideAuth } from '@angular/fire/auth';        
import { getFirestore, provideFirestore } from '@angular/fire/firestore';        
import { getStorage, provideStorage } from '@angular/fire/storage';        
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';        

import { environment } from '../environments/environment';               

@NgModule({
  declarations: [        
    AppComponent,        
    DashboardComponent,       
    ForgotPasswordComponent,        
    SignInComponent,      
    SignUpComponent,  
    VerifyEmailComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),     
    provideFirestore(() => getFirestore()),  
    provideAuth(() => getAuth()),  
    provideStorage(() => getStorage()),  
    provideAnalytics(() => getAnalytics()),  
    BrowserModule,  
    AppRoutingModule  
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
 })    
export class AppModule { }
*/
