import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Playlist } from '../pages/playlist/playlist';
import { Youtube } from '../providers/youtube';
import { Safe } from '../pipes/safe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Playlist,
    Safe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Playlist
  ],
  providers: [Youtube]
})
export class AppModule {}
