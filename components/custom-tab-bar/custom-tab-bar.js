// components/custom-tab-bar/custom-tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow_index: true,
    isShow_playing: false,
    isShow_me: false,
    selected: 0//首页
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab_index: function () {
      wx.switchTab({
        url: '/pages/index/index'
      })
      this.setData({
        isShow_index: true,
        isShow_me: false,
        isShow_playing: false
      })
    },

    switchTab_playing: function () {
      wx.switchTab({
        url: '/pages/love/love'
      })
      this.setData({
        isShow_playing: true,
        isShow_index: false,
        isShow_me: false
      })
    },

    switchTab_me: function () {
      wx.switchTab({
        url: '/pages/me/me'
      })
      this.setData({
        isShow_me: true,
        isShow_playing: false,
        isShow_index: false
      })
    }
  }
})
