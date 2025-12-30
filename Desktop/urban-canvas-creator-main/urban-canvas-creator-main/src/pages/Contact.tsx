import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24">
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1250px]">
            {/* Page Header */}
            <div className="flex justify-center mb-12 lg:mb-16">
              <div className="bg-card text-card-foreground rounded-2xl p-8 space-y-6 border border-border max-w-3xl w-full transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
                  Contact
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  To discuss a project, send a brief outline of the site, the type of space and any key dates. 
                  We will respond with suitable support options and next steps.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex justify-center">
              <div className="bg-card text-card-foreground rounded-2xl p-8 space-y-6 border border-border max-w-3xl w-full transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
