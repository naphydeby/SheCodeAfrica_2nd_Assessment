
// Mobile navbar toggle
document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('sideBar').classList.add('active');
  });
  // side bar toggled
  document.getElementById('sideBarMenu').addEventListener('click', () => {
    document.getElementById('sideBar').classList.remove('active');
  });
  
  // sidebar link toggle to avoid obstruction when each link is toggled and scroll to each section
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
          document.getElementById('sideBar').classList.remove('active');
      });
  });
   
  
  