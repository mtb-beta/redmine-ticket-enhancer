// バックグラウンドスクリプト
console.log('Redmine Ticket Enhancer: Background script started');

// 拡張機能がインストールされたとき
chrome.runtime.onInstalled.addListener(function() {
  console.log('Redmine Ticket Enhancer installed/updated');
  
  // 初期設定を保存
  chrome.storage.sync.set({
    templates: [
      {
        name: 'サンプルテンプレート',
        content: '## 概要\n\n## 詳細\n\n## 対応方針\n'
      }
    ]
  }, function() {
    console.log('Default settings saved');
  });
});