import Ember from 'ember';
import VirtualListView from 'list-view/virtual_list_view';
import ListItemView from 'list-view/list_item_view';
import {images} from '../utils/make-model';

export default VirtualListView.extend({
  pullToRefreshViewClass: Ember.View.extend({
    classNames: ['pull-to-refresh'],
    templateName: 'pull-to-refresh',
    label: function(){
      if (this.get('refreshing')) {
        return "Updating...";
      } else if (this.get('active')) {
        return "Release to Refresh";
      } else {
        return "Pull to Refresh";
      }
    }.property('refreshing', 'active')
  }),
  pullToRefreshViewHeight: 75,
  startRefresh: function(finishRefresh){
    var view = this;
    Ember.run.later(function(){
      view.get('controller').insertAt(0, {
        name: 'Item -1',
        imageSrc: images[2]
      });
      finishRefresh();
    }, 1000);
  }
});
