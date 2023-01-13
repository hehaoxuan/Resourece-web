# Resourece-web
React+Node.js实现素材网站
分为两个工程，res-server为服务器工程，res-web为web工程

## 服务器
### 文件结构
    res-server
        /controllers 后端具体实现逻辑
        /database    数据库操作相关内容
        /routes      服务器路由相关内容
        /tools       常用工具及方法


## web工程
 ### 文件结构   
    res-web
        /mock        模拟数据（暂时未用到）
        /src         
            /api         数据库操作相关内容
            /common      常用组件位置
            /hooks       项目封装的hooks
            /pages       项目用到的页面
            /public      公共资源，如图片
            /redux       redux相关
            /tools       前端常用工具及方法
            .umirc.ts    umi配置，包含前端路由
            .tsconfig.json

## 提交规范
* feat：新功能（feature）
* fix：修补bug
* docs：文档（documentation）
* style： 格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：增加测试
* chore：构建过程或辅助工具的变动

参考 http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html 