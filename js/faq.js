const faqQuestions = document.querySelectorAll(".faq__question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const isActive = question.classList.contains("active");

    if (!isActive) {
      resetFaqs(faqQuestions);
    }

    question.classList.toggle("active", !isActive);
  });
});

function resetFaqs(faqs) {
  faqs.forEach((faq) => faq.classList.remove("active"));
}
