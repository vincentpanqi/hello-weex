<template>
  <div>
    <list class="list">
      <cell onappear="onappear" ondisappear="ondisappear" class="row" v-bind:repeat="rows" index="$index" onclick="onclickcell">
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
    created : function() {
      this.baseURL = utils.getAppBaseUrl(this)
    },
    ready : function () {
    },

    methods: {
      onappear: function (e) {
      },
      ondisappear:function (e) { 
      },      
      onclickcell: function (e) {
        var index = e.target.attr.index;
        var storage = require('@weex-module/storage');
        if (index === this.rows.length-1) {
        }else{
          storage.setItem('country',this.rows[index].name,function(e){
          });
        }
        this.$openURL(this.baseURL+'city.js?countryIndex='+index);
      },
    },
    data: {
      baseURL: '',
      rows:[
        {name: 'USA'},
        {name: 'UK'},
        {name: 'Germany'},
        {name: 'China'},
        {name: 'Canada'},
        {name: 'India'},
        {name: 'France'},
        {name: 'Australia'},
        {name: 'Other'}
      ]
    }
  }
</script>
