<template>
  <div class="repDiv">
    <div class= "repHeader">
      <text class="item-homepage "> {{rep_name+'/'+rep_login}}</text>
      <image style="width: 100;height: 100;margin-top:20;margin-right:20;margin-left:220" v-bind:src="rep_avatar_url"></image>
    </div>  
    <div class= "repCenter">
      <text class="item-homepage "> {{rep_created_at}}</text>
      <text class="item-homepage " onclick="onclickcell">{{rep_homepage}}</text>
    </div>  
    <div class= "repFooter">
      <text class="item-homepage "> {{rep_description}}</text>
    </div>
  </div>
</template>

<style>
  .item-homepage {
    color: #437ABE;
    font-size: 24px;
    margin-top:10;
    text-overflow:ellipsis;
    margin-left:30;
    flex :1;
    margin-right:0;
  }

  .repDiv {
    width: 740;
    height: 400;
    flex-direction: column;
    background-color: #ffffff;
    margin: 5;
    padding: 10;
    border-width: 1;
    border-color: #cccccc;
    overflow: visible;
  }
  .repHeader {
    flex-direction: row;
    flex :2;
    margin-left:5;
    background-color: #ffff33;
  }
  .repCenter {
    flex-direction: row;
    flex :1;
    margin-left:5;
    background-color: #fff12f;
  }
  .repFooter {
    flex-direction: row;
    flex :2;
    margin-left:5;
    background-color: #34ffff;
  }
</style>

<script>
  var utils = require('./weex-kit/js-kit/utils');
  var monkeyApi = require('./common-js/api');

  module.exports = {
    data: {
      rep_created_at:'',
      rep_login: '',
      rep_avatar_url: '',
      rep_name: '',
      rep_description: '',
      rep_homepage: '',
      rep_stargazers_count: '',
      rep_forks_count: '',
      baseURL:'',
      dir:'examples'
    },
    created: function(){
      this.baseURL = utils.getAppBaseUrl(this)
    },
    ready: function(e) {
      var me = this;
      var bundleUrl = me.$getConfig().bundleUrl;
      me.rep_created_at=utils.getParameterByName('rep_created_at', bundleUrl).substring(0,10)
      me.rep_login = utils.getParameterByName('rep_login', bundleUrl)
      me.rep_avatar_url = utils.getParameterByName('rep_avatar_url', bundleUrl)
      me.rep_name = utils.getParameterByName('rep_name', bundleUrl)
      me.rep_description = utils.getParameterByName('rep_description', bundleUrl)
      me.rep_homepage = utils.getParameterByName('rep_homepage', bundleUrl)
    },
    methods: {
      onclickcell: function (e) {
        this.$openURL(this.baseURL+'m-webview.js?src='+this.rep_homepage);
      }
  }
}
</script>
