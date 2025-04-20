document.addEventListener('DOMContentLoaded', function() {
  console.log('Popup script loaded');
  
  // バージョン情報を表示
  const manifestData = chrome.runtime.getManifest();
  document.getElementById('version').textContent = manifestData.version;
  
  // テンプレート一覧を取得して表示
  loadTemplates();
  
  // テンプレート挿入ボタンのイベントリスナー
  document.getElementById('insert-template').addEventListener('click', function() {
    const templateSelect = document.getElementById('template-select');
    const selectedIndex = templateSelect.selectedIndex;
    
    if (selectedIndex > 0) {
      // 選択されたテンプレートを取得
      chrome.storage.sync.get('templates', function(data) {
        const selectedTemplate = data.templates[selectedIndex - 1];
        
        // アクティブなタブにメッセージを送信
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {
            action: 'insertTemplate',
            template: selectedTemplate.content
          });
        });
      });
    }
  });
});

// テンプレート一覧をロード
function loadTemplates() {
  chrome.storage.sync.get('templates', function(data) {
    if (data.templates && data.templates.length > 0) {
      const templateSelect = document.getElementById('template-select');
      
      // 既存のオプションをクリア (最初の項目以外)
      while (templateSelect.options.length > 1) {
        templateSelect.remove(1);
      }
      
      // テンプレートをドロップダウンに追加
      data.templates.forEach(function(template) {
        const option = document.createElement('option');
        option.value = template.name;
        option.textContent = template.name;
        templateSelect.appendChild(option);
      });
    }
  });
}