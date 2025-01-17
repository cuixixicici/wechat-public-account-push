/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx4d8d5ad62939e642',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'dba742b05f7d6944161cff1c4039cee6',

  PROVINCE: '山东',
  CITY: '青岛',

  USERS: [
    {
      // 想要发送的人的名字
      name: '保雷',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o5E8g5ndLkz8iib-9lLhiLtnpgw4	',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'BtF-ENNO4lDXVxVtuak_UGr-Ev2SLHoPSNhkr9ybjCk',
        {
          type: '*生日', name: '保雷', year: '*2000', date: '02-28',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '保雷', year: '2000', date: '04-03',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'o5E8g5ndLkz8iib-9lLhiLtnpgw4	',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o5E8g5ndLkz8iib-9lLhiLtnpgw4	',
    }
  ],

}

module.exports = USER_CONFIG

