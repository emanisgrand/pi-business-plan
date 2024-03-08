document.getElementById('sidebarToggle').addEventListener('click', function())
{
	var (sidebar = document.getElementById('sidebar');
	if (sidebar.style.left === '0px') {
		sidebar.style.left = '-250px'; // Hide sidebar
		document.querySelector('.content').style.marginLeft = '0'; // Content uses full width
	} else {
		sidebar.style.left = '0'; // Show sidebar
		document.querySelector('.content').style.marginLeft = '250px'; // Adjust content margin
	}
});