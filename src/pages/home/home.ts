import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Playlist } from '../playlist/playlist';
import { Youtube } from '../../providers/youtube';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  channel = 'UCTYMypBGG2oKCSmr8zwzv5w';
  datas:any;
  nextPageToken:any;
  constructor(public navCtrl: NavController, private yt: Youtube) {
    yt.playlist(this.channel).then(data => {
      this.datas = data.items;
      if(data.nextPageToken){
        this.nextPageToken = data.nextPageToken;
      }
    });
  }

  openPlaylist(id){
    this.navCtrl.push(Playlist, {id:id});
  }

  infiniteScroll(ev){
    if(this.nextPageToken){
      this.yt.playlist_page(this.channel,this.nextPageToken).then(data=>{
        for(let i of data.items){
          this.datas.push(i);
        }
        ev.complete();
        if(!data.nextPageToken){
          this.nextPageToken = null;
        }else{
          this.nextPageToken = data.nextPageToken;
        }
      })
    }else{
      ev.complete();
    }
  }

}
