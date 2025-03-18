document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = document.querySelectorAll(".team-member");

    teamMembers.forEach(member => {
        member.addEventListener("click", () => {
            const memberDetails = {
                name: member.querySelector("h3").textContent,
                role: member.querySelector("p:nth-child(3)").textContent,
                address: member.querySelector("p:nth-child(4)").textContent,
                phone: member.querySelector("p:nth-child(5)").textContent,
                email: member.querySelector("p:nth-child(6)").textContent,
                image: member.querySelector("img").src,
                skills: "HTML, CSS, JavaScript",  // You can change this or fetch dynamically
                linkedin: "#",  // Sample LinkedIn URL
                github: "#"  // Sample GitHub URL
            };

            // Save details to localStorage
            localStorage.setItem("selectedMember", JSON.stringify(memberDetails));

            // Redirect to details page
            window.location.href = "teamDetails.html";
        });
    });
});

