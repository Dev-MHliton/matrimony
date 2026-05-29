// Section title 
import SectionTitle from "../SectionTitle/SectionTitle";

const FAQ = () => {
    return (
        <section>

            <SectionTitle
                heading={"Frequently Asked Questions"}
            ></SectionTitle>

            <div id="FAQ" className="relative py-12 px-4 bg-linear-to-br from-pink-400 via-purple-400 to-blue-200">

                {/* Background Blur Circle */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

                <div className="relative max-w-4xl mx-auto">

                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-5">

                        {[
                            {
                                question: "Why should I choose World Wide Matrimony?",
                                answer:
                                    "We provide a secure and trusted global platform with verified profiles and privacy protection to help you find a meaningful life partner.",
                            },
                            {
                                question: "Is World Wide Matrimony safe to use?",
                                answer:
                                    "Yes. We ensure profile verification, secure authentication, and strict privacy policies to protect your personal information.",
                            },
                            {
                                question: "How does the matching process work?",
                                answer:
                                    "You can filter profiles by age, profession, education, location, and preferences to find the most compatible matches.",
                            },
                            {
                                question: "Can I use the platform for free?",
                                answer:
                                    "Basic features are free. Premium membership unlocks advanced filters, messaging, and priority visibility.",
                            },
                            {
                                question: "How do I create a profile?",
                                answer:
                                    "Sign up with your email, complete your details, upload your photo, and submit for verification.",
                            },
                            {
                                question: "What makes World Wide Matrimony different?",
                                answer:
                                    "We focus on authenticity, global reach, and meaningful long-term relationships built on trust and compatibility.",
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="collapse collapse-plus bg-white/60 backdrop-blur-md shadow-xl rounded-2xl border border-white/40 transition-all duration-300 hover:scale-[1.02]"
                            >
                                <input type="radio" name="premium-faq" defaultChecked={index === 0} />
                                <div className="collapse-title text-lg font-semibold text-gray-800">
                                    {faq.question}
                                </div>
                                <div className="collapse-content text-gray-600">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>

    );
};

export default FAQ;