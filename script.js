document.addEventListener('DOMContentLoaded', function () {
    const romsSection = document.getElementById('roms-section');
    const roms = [
        'adventure-blue-chapter-b1.1.gba',
        // Add more ROM file names here
    ];

    function displayROMs(filter = '') {
        romsSection.innerHTML = ''; // Clear current ROMs
        roms.filter(rom => filter === 'ALL' || rom.charAt(0).toUpperCase() === filter)
            .forEach(rom => {
                const romElement = document.createElement('div');
                romElement.classList.add('rom');
                romElement.textContent = rom;
                // Adjust the path to the ROM files as necessary
                romElement.innerHTML = `<a href="ROMS/${rom}" download>${rom}</a>`;
                romsSection.appendChild(romElement);
            });
    }

    window.filterROMs = displayROMs;

    // Initially display all ROMs
    displayROMs('ALL');
});
