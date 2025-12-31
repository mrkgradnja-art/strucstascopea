import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "What services does STRUCSTA SCOPE offer?",
      answer: "STRUCSTA SCOPE specialises in urban planning and landscape architecture. We offer comprehensive services including concept development, technical documentation, interior design, project coordination, and full package solutions. Our team works on a wide range of projects from residential developments to commercial spaces and public realm improvements."
    },
    {
      id: 2,
      question: "How do you approach a new project?",
      answer: "We begin every project with a thorough understanding of your vision, site constraints, and community needs. Our process typically involves initial consultation, site analysis, concept development, design refinement, technical documentation, and project coordination. We work closely with clients throughout to ensure the final outcome reflects their goals while meeting practical requirements."
    },
    {
      id: 3,
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on scope and complexity. A typical residential project might take 3-6 months from concept to completion, while larger commercial or public projects can take 12-24 months. We'll provide a detailed timeline during the initial consultation based on your specific project requirements."
    },
    {
      id: 4,
      question: "Do you work on projects outside the UK?",
      answer: "While we're UK-based, we primarily focus on projects within the United Kingdom. However, we're open to discussing international projects on a case-by-case basis. Please contact us to discuss your specific requirements."
    },
    {
      id: 5,
      question: "What is included in your full package service?",
      answer: "Our full package service includes everything from initial concept development through to project completion. This encompasses design development, all technical documentation, planning applications, contractor coordination, site visits, and project management. It's designed to provide a complete, hassle-free solution for clients who want comprehensive support throughout their project."
    },
    {
      id: 6,
      question: "How do you handle planning applications?",
      answer: "We have extensive experience with UK planning regulations and can guide you through the entire planning application process. This includes preparing all necessary documentation, liaising with local authorities, and addressing any planning conditions. We'll keep you informed at every stage and work to achieve the best possible outcome for your project."
    },
    {
      id: 7,
      question: "Can you work with existing contractors or do you have preferred suppliers?",
      answer: "We're flexible and can work with your existing contractors if you have preferred suppliers. Alternatively, we have an established network of trusted contractors and suppliers we've worked with successfully on previous projects. We're happy to recommend professionals we know deliver quality work, but the final decision is always yours."
    },
    {
      id: 8,
      question: "What information do you need to get started?",
      answer: "To begin, we'll need details about your site (location, size, existing conditions), your vision and goals for the project, any constraints or requirements, your budget range, and preferred timelines. If you have existing drawings, site surveys, or photographs, these are always helpful. We'll discuss all of this during our initial consultation."
    },
    {
      id: 9,
      question: "How are your fees structured?",
      answer: "Our fees are typically structured based on project scope and complexity. We can work on a fixed fee basis for defined scopes of work, or on a time-charge basis for more flexible arrangements. We'll provide a clear fee proposal after understanding your project requirements, with no hidden costs. Initial consultations are usually free of charge."
    },
    {
      id: 10,
      question: "What makes STRUCSTA SCOPE different from other landscape architecture firms?",
      answer: "We combine creative design thinking with practical, sustainable solutions. Our team brings together expertise in urban planning, landscape architecture, and project coordination, allowing us to offer comprehensive services. We're committed to creating spaces that not only look beautiful but function well for communities and stand the test of time. Our remote working model also allows us to be flexible and responsive while maintaining high standards of service."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24">
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1250px]">
            {/* Page Header */}
            <div className="flex justify-center mb-12 lg:mb-16">
              <div className="bg-card text-card-foreground rounded-2xl p-8 space-y-6 border border-border max-w-4xl w-full">
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
                  Frequently Asked Questions
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Find answers to common questions about our services, working process, and what to expect when working with STRUCSTA SCOPE.
                </p>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={`item-${faq.id}`}
                    className="bg-card border border-border rounded-2xl px-6 py-2"
                  >
                    <AccordionTrigger className="text-left font-display text-xl font-medium text-foreground hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-secondary rounded-2xl p-8 lg:p-12 text-center">
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-white mb-4">
                  Still have questions?
                </h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  If you can't find the answer you're looking for, please don't hesitate to get in touch. We're here to help.
                </p>
                <Link to="/contact">
                  <button className="bg-white text-secondary hover:bg-white/90 rounded-full px-8 py-3 font-medium transition-colors">
                    Contact us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
