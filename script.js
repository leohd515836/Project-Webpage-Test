// 为列表项添加点击事件监听器
document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        // 获取列表项中的链接地址
        const link = item.querySelector('a').getAttribute('href');
        // 跳转到链接地址
        window.location.href = link;
    });
});
