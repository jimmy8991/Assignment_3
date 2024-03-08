// Function to calculate the annual salary
function calculateAnnualSalary() {
    var hourlyWage = parseFloat(document.getElementById('hourlyWage').value);
    var hoursPerWeek = parseInt(document.getElementById('hoursPerWeek').value);

    if (!isNaN(hourlyWage) && !isNaN(hoursPerWeek)) {
        var annualSalary = hourlyWage * hoursPerWeek * 52;
        document.getElementById('annualSalary').innerHTML = "The salary is: $" + annualSalary.toFixed(2);
    } else {
        document.getElementById('annualSalary').innerHTML = "Please enter valid numbers.";
    }
}

// This function is called to change the displayed content
function changeContent(heading, selectedLinkId) {
    var contentArea = document.getElementById('content-area');
    var salaryCalculatorSection = document.getElementById('salary-calculator-section'); // Ensure this ID exists in your HTML

    // Reset display styles to show contentArea and hide salaryCalculatorSection for all sections except 'Salary Calculator'
    if (heading !== 'Salary Calculator') {
        contentArea.style.display = 'flex'; // Use 'flex' or whatever was the original display style for contentArea
        if (salaryCalculatorSection) salaryCalculatorSection.style.display = 'none';
    }

    document.getElementById('content-heading').innerText = heading;
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.style.color = 'blue'; // Reset all links to blue
    });
    document.getElementById(selectedLinkId).style.color = 'purple'; // Highlight the selected link

    contentArea.innerHTML = ''; // Clear the content area for other sections
    contentArea.style.flexDirection = 'row';
    contentArea.style.flexWrap = 'wrap';
    contentArea.style.justifyContent = 'flex-start';
    contentArea.style.alignItems = 'flex-start';
    contentArea.style.gap = '10px';

    // Dynamic content loading based on the heading
    if (heading === 'Work Experience') {
        const workExperiences = [
            {
                companyName: "McDonalds",
                companyUrl: "https://www.mcdonalds.com",
                jobTitle: "Department Manager",
                dates: "Nov 28, 2018 - Aug 5, 2020"
            },
            {
                companyName: "Motivate Bike Share Company (Citi Bike)",
                companyUrl: "https://www.citibikenyc.com",
                jobTitle: "Sales Associate",
                dates: "March 26, 2017 - August 22, 2017"
            },
            {
                companyName: "Duane Reade Pharmacy",
                companyUrl: "https://www.walgreens.com",
                jobTitle: "Cashier",
                dates: "November 12, 2016 - March 15, 2017"
            }
        ];
        workExperiences.forEach(function(exp) {
            var expDiv = document.createElement('div');
            expDiv.style.width = '30%'; // Set width for each experience block
            expDiv.innerHTML = `
                <strong>${exp.companyName}</strong> <br>
                <a href="${exp.companyUrl}" target="_blank" style="color: blue;">Company Site</a> <br>
                ${exp.jobTitle} <br>
                ${exp.dates}
            `;
            contentArea.appendChild(expDiv);
        });
    } 
    // For Education Experience - 'else if' is used here
    else if (heading === 'Education Experience') {
        const educationExperiences = [
            {
                schoolName: "State University of New York at Albany",
                schoolUrl: "https://www.albany.edu",
                period: "Fall 2017 - Present"
            },
            {
                schoolName: "Urban Dove Team Charter High School",
                schoolUrl: "https://urbandove.org",
                period: "2013 - 2017"
            },
            {
                schoolName: "Excellence Boys Charter School",
                schoolUrl: "https://excellenceboys.uncommonschools.org",
                period: "2005 - 2013"
            }
        ];
        educationExperiences.forEach(function(edu) {
            var eduDiv = document.createElement('div');
            eduDiv.style.width = '30%'; // Set width for each education block
            eduDiv.innerHTML = `
                <strong>${edu.schoolName}</strong> <br>
                <a href="${edu.schoolUrl}" target="_blank" style="color: blue;">School Site</a> <br>
                ${edu.period}
            `;
            contentArea.appendChild(eduDiv);
        });
    } 
    // For Related Awards and Skills - 'else if' is used here
    else if (heading === 'Related Awards and Skills') {
        const skillsAwards = {
            skills: [
                "Inventory Management",
                "Leadership and Management",
                "Customer Service Excellence"
            ],
            awards: [
                "Employee of the Year 2019 - McDonald's",
                "Top Sales Associate - Citi Bike, August 2017"
            ]
        };
        var skillsDiv = document.createElement('div');
        skillsDiv.style.width = '30%'; // Set width for the skills block
        skillsDiv.innerHTML = '<strong>Skills:</strong><br>' + skillsAwards.skills.join('<br>');

        var awardsDiv = document.createElement('div');
        awardsDiv.style.width = '30%'; // Set width for the awards block
        awardsDiv.innerHTML = '<strong>Awards:</strong><br>' + skillsAwards.awards.join('<br>');

        contentArea.appendChild(skillsDiv);
        contentArea.appendChild(awardsDiv);
    }

    // The following lines are added for the Salary Calculator heading
    else if (heading === 'Salary Calculator') {
        var contentArea = document.getElementById('content-area');
        var salaryCalculatorSection = document.getElementById('salary-calculator-section'); // Make sure to have this ID in your HTML
        contentArea.style.display = 'none';
        salaryCalculatorSection.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Event delegation for navigation links
    document.querySelector('.navigation').addEventListener('click', function(event) {
        var target = event.target;
        if (target.tagName.toLowerCase() === 'a') {
            var heading = target.textContent.trim();
            changeContent(heading);
        }
    });

    // Salary calculation
    document.getElementById('calculate-salary').addEventListener('click', function() {
        var hourlyRate = parseFloat(document.getElementById('hourly-rate').value);
        var hoursPerWeek = parseFloat(document.getElementById('hours-per-week').value);
        var weeksPerYear = 52;

        if (!isNaN(hourlyRate) && !isNaN(hoursPerWeek)) {
            var annualSalary = hourlyRate * hoursPerWeek * weeksPerYear;
            document.getElementById('calculated-salary').textContent = '$' + annualSalary.toFixed(2);
        } else {
            document.getElementById('calculated-salary').textContent = 'Please enter valid numbers.';
        }
    });
});