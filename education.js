document.addEventListener('DOMContentLoaded', () => {
    const educationList = document.getElementById('education-list');

    const educationData = [
        {
            degree: "Completion of L3 at SOS HG Tecnical school",
            institution: "SOS Technical Highschool",
            year: "2023 - 2024",
            description: "completed with honors, specializing in software development and design."
        },
        {
            degree: "L4 student At SOS",
            institution: "SOS Technical highschool",
            year: "2024 - 2025",
            description: "Focused on backend  and frontend, participated in coding clubs and certifications in internships."
        }
    ];

    educationData.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'education-card';
        card.innerHTML = `
            <h2>${entry.degree}</h2>
            <p><strong>Institution:</strong> ${entry.institution}</p>
            <p><strong>Year:</strong> ${entry.year}</p>
            <p>${entry.description}</p>
        `;
        educationList.appendChild(card);
    });
});