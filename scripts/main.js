function dropdownOpen(element) {
    // Toggle the 'open' class on the dropdown
    element.classList.toggle('open');

    // Find the <i> element within the clicked dropdown
    const icon = element.querySelector('i');

    // Toggle the 'fa-angle-down' and 'fa-angle-up' classes
    if (element.classList.contains('open')) {
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
    } else {
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
    }
}

