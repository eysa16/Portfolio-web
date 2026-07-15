export function initializeResumeTabs() {
    const resumeButtons =
        document.querySelectorAll(".resume-btn");

    const resumeDetails =
        document.querySelectorAll(".resume-detail");

    if (
        resumeButtons.length === 0 ||
        resumeDetails.length === 0
    ) {
        return;
    }

    resumeButtons.forEach((button, detailIndex) => {
        button.addEventListener("click", () => {
            resumeButtons.forEach((currentButton) => {
                currentButton.classList.remove("active");
            });

            resumeDetails.forEach((detail) => {
                detail.classList.remove("active");
            });

            button.classList.add("active");

            const selectedDetail =
                resumeDetails[detailIndex];

            if (selectedDetail) {
                selectedDetail.classList.add("active");
            }
        });
    });
}