<template>
  <div>
    <list class="list">
      <cell onappear="onappear" ondisappear="ondisappear" class="row" :repeat="rows" :index="$index" onclick="onclickcell">
        <div class="item">
          <text class="item-title">{{name}}</text>
        </div>
      </cell>
    </list>
  </div>
</template>

<style>
  .list {
    width: 750px;
    flex: 1;
  }
  .row {
    width: 750px;
  }
  .item {
    justify-content: center;
    border-bottom-width: 2px;
    border-bottom-color: #c0c0c0;
    height: 100px;
    padding:20px;
  }
  .item-title {
  }
</style>

<script>
  require('weex-components');
  var utils = require('./weex-kit/js-kit/utils');

  module.exports = {
    methods: {
      onappear: function (e) {
      },
      ondisappear:function (e) {
      },
      onclickcell: function (e) {
        var index = e.target.attr.index;
        var storage = require('@weex-module/storage');
        var bundleUrl = this.$getConfig().bundleUrl;
        var isRep=utils.getParameterByName('from', bundleUrl)
        if (isRep === 'rep') {
          if (index>0) {
            storage.setItem('rep-language',this.rows[index].name,function(e){});
          }
        }else {
          storage.setItem('language',this.rows[index].name,function(e){});
        }
      },
    },
    data: {
      rows:[
        {name: 'All language'},
        {name: 'JavaScript'},
        {name: 'Java'},
        {name: 'PHP'},
        {name: 'Ruby'},
        {name: 'Python'},
        {name: 'CSS'},
        {name: 'C'},
        {name: 'CPP'},
        {name: 'Objective-C'},
        {name: 'Swift'},
        {name: 'Shell'},
        {name: 'R'},
        {name: 'Perl'},
        {name: 'Lua'}, 
        {name: 'HTML'},
        {name: 'Scala'},
        {name: 'Go'}
      ]
    }
  }
</script>
