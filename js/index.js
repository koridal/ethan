// Sidebar
const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');

// ==================== SideBar ====================

// Remove Active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  }) 
}

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
    if(item.id != 'notifications') {
      document.querySelector('.notifications-popup').style.display = 'none'; 
    } else {
      document.querySelector('.notifications-popup').style.display = 'block';
      document.querySelector('#notifications .notification-count').style.display = 'none';
    }
  })
}) 

// ==================== Messages ====================

// Searches Chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase();
    if(name.indexOf(val) != -1) {
      chat.style.display = 'flex';
    } else {
      chat.style.display ='none';
    }
  })
}

// Search chat
messageSearch.addEventListener('keyup', searchMessage);

// Highlight Messages Card When Messages Menu Item is Clicked
messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messagesNotification.querySelector('.notification-count').style.display = 'none';
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000);
 })

// Theme/Dispaly Customization

// opens modal
const openThemeModal = () => {
  themeModal.style.display = 'grid';
}

// closes modal
const closeThemeModal = (e) => {
  if(e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
}

// close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

// ==================== Fonts ====================
fontSizes.forEach(size => {
  let fontSize;

  if(size.classList.contains('font-size-1')) {
    fontSize = '10px';
  } else if(size.classList.contains('font-size-2')) {
    fontSize = '12px';
  } else if(size.classList.contains('font-size-3')) {
    fontSize = '14px';
  } else if(size.classList.contains('font-size-4')) {
    fontSize = '16px';
  } else if(size.classList.contains('font-size-5')) {
    fontSize = '20px';
  }

  // change font size of the root html element
  document.querySelector('html').style.fontSize = fontSize;
})
