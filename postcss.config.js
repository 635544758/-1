module.exports = {
    plugins: {
        autoprefixer: {},
        // 用于将px转换为vw或者rem的插件
        "postcss-px-to-viewport": {
            unitToConvert: "px",
            viewprotWidth: 375, //视口宽度 对应750px的设计稿 移动端一般是设计稿的一半
            viewprotHeight: 667, // 视口高度
            unitPrecision: 5, //保留5位小数
            viewporTunit: 'vw', // 转换为vw单位
            selectorBlankList: [], //需要指定哪些类名不需要被转换
            minPixeValue: 1,//最小1px不被转换
            mediaQuery: false, //是否允许在媒体查询中转换xp
            exclude: [/^node_modules$/], //匹配不需要转换的文件名 ，正则表达式匹配
        }
    }
}