import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Youtube } from '../../providers/youtube';

/*
  Generated class for the Playlist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html'
})
export class Playlist {
  datas:any;
  nextPageToken:any;
  constructor(
    public navCtrl: NavController,
    private params: NavParams,
    private yt: Youtube
  ) {
    yt.playlistList(params.data.id).then(data => {
      this.datas = data.items;
      if(data.nextPageToken){
        this.nextPageToken = data.nextPageToken;
      }
    })
  }

  infiniteScrool(ev){
    if(this.nextPageToken){
      this.yt.playlistList_page(this.params.data.id, this.nextPageToken).then(data=>{
        for(let i of data.items){
          this.datas.push(i);
        }
        if(!data.nextPageToken){
          this.nextPageToken = null;
        }else{
          this.nextPageToken = data.nextPageToken;
        }
        ev.complete();
      });
    }else{
      ev.complete();
    }
  }

}
