// Redmineのチケット説明/コメント欄を検出して拡張機能を初期化
document.addEventListener('DOMContentLoaded', function() {
  console.log('Redmine Ticket Enhancer: Content script loaded');
  
  // チケット説明欄とコメント欄のテキストエリアを検出
  const descriptionField = document.getElementById('issue_description');
  const commentField = document.getElementById('issue_notes');
  
  if (descriptionField) {
    console.log('Description field found, initializing enhancer...');
    initializeEnhancer(descriptionField);
  }
  
  if (commentField) {
    console.log('Comment field found, initializing enhancer...');
    initializeEnhancer(commentField);
  }
});

// テキストエリアに拡張機能を適用
function initializeEnhancer(textArea) {
  // Hello World: テキストエリアの下にメッセージを表示
  const messageDiv = document.createElement('div');
  messageDiv.style.color = '#3498db';
  messageDiv.style.margin = '5px 0';
  messageDiv.style.padding = '5px';
  messageDiv.style.backgroundColor = '#f0f8ff';
  messageDiv.style.border = '1px solid #d0e3f7';
  messageDiv.style.borderRadius = '3px';
  messageDiv.textContent = 'Redmine Ticket Enhancer が有効です';
  
  textArea.parentNode.insertBefore(messageDiv, textArea.nextSibling);
}