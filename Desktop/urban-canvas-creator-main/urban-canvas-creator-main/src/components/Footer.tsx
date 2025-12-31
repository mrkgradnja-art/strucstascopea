import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Our Approach", href: "/approach" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/#careers" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <>
      <footer className="pb-8 relative bg-muted/50">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1250px] h-full bg-cover bg-center bg-no-repeat opacity-[0.10] pointer-events-none rounded-[20px]"
          style={{ backgroundImage: 'url(/2.jpg)' }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="border-t border-border pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Logo */}
              <div className="space-y-4">
                <img 
                  src="/logo.png" 
                  alt="STRUCSTA SCOPE" 
                  className="h-8 lg:h-10 w-auto object-contain"
                />
              </div>

              {/* Navigation Menu */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Navigation</h3>
                <nav className="flex flex-col gap-3">
                  {navLinks.map((link) => {
                    const isHashLink = link.href.startsWith('/#');
                    return isHashLink ? (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setIsLegalOpen(true)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                  >
                    Legal Information
                  </button>
                  <button
                    onClick={() => setIsPrivacyOpen(true)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                  >
                    Privacy Policy
                  </button>
                  <button
                    onClick={() => setIsTermsOpen(true)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                  >
                    Terms of Service
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <a 
                      href="mailto:hello@strucstascope.com" 
                      className="hover:text-foreground transition-colors duration-200"
                    >
                      hello@strucstascope.com
                    </a>
                  </p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground mt-6">
                  <p className="font-semibold text-foreground">STRUCSTA SCOPE LIMITED</p>
                  <p>Company number: 16076869</p>
                  <p className="leading-relaxed">
                    Registered office address:<br />
                    Littleton Business Park<br />
                    Littleton Drive, Staffordshire<br />
                    Cannock, WS12 4TR
                  </p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground text-center">
                © {currentYear} STRUCSTA SCOPE LIMITED. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">Privacy Policy</DialogTitle>
            <DialogDescription>
              Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh]">
            <div className="space-y-6 text-sm text-muted-foreground pr-4">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">1. Introduction</h3>
                <p className="leading-relaxed">
                  STRUCSTA SCOPE ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">2. Information We Collect</h3>
                <p className="leading-relaxed mb-2">We may collect information about you in a variety of ways:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Personal information you provide when contacting us (name, email, phone number, company)</li>
                  <li>Project information and details you share with us</li>
                  <li>Technical information such as IP address, browser type, and device information</li>
                  <li>Usage data and analytics about how you interact with our website</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">3. How We Use Your Information</h3>
                <p className="leading-relaxed mb-2">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Respond to your inquiries and provide our services</li>
                  <li>Process and manage project requests</li>
                  <li>Improve our website and services</li>
                  <li>Send you updates about our services (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">4. Data Sharing and Disclosure</h3>
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>With service providers who assist us in operating our website and conducting our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">5. Data Security</h3>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">6. Your Rights</h3>
                <p className="leading-relaxed mb-2">You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">7. Cookies</h3>
                <p className="leading-relaxed">
                  Our website may use cookies to enhance your experience. You can set your browser to refuse cookies, but this may limit some functionality of our website.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">8. Contact Us</h3>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:hello@strucstascope.com" className="text-primary hover:underline">
                    hello@strucstascope.com
                  </a>
                </p>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Terms Modal */}
      <Dialog open={isTermsOpen} onOpenChange={setIsTermsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">Terms of Service</DialogTitle>
            <DialogDescription>
              Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh]">
            <div className="space-y-6 text-sm text-muted-foreground pr-4">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">1. Acceptance of Terms</h3>
                <p className="leading-relaxed">
                  By accessing and using the STRUCSTA SCOPE website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">2. Services</h3>
                <p className="leading-relaxed">
                  STRUCSTA SCOPE provides urban planning and landscape architecture services, including but not limited to master planning, design consultation, technical documentation, and project coordination.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">3. Use of Website</h3>
                <p className="leading-relaxed mb-2">You agree to use our website only for lawful purposes and in a way that does not:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Infringe the rights of others</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Transmit harmful or malicious code</li>
                  <li>Interfere with the operation of the website</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">4. Intellectual Property</h3>
                <p className="leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property of STRUCSTA SCOPE or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">5. Project Agreements</h3>
                <p className="leading-relaxed">
                  All professional services are subject to separate written agreements that will specify the scope of work, fees, timelines, and other terms specific to each project. These Terms of Service do not replace or supersede any project-specific agreements.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">6. Limitation of Liability</h3>
                <p className="leading-relaxed">
                  To the fullest extent permitted by law, STRUCSTA SCOPE shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">7. Indemnification</h3>
                <p className="leading-relaxed">
                  You agree to indemnify and hold harmless STRUCSTA SCOPE, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of your use of our services or violation of these terms.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">8. Modifications to Terms</h3>
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the updated terms on our website. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">9. Governing Law</h3>
                <p className="leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">10. Contact Information</h3>
                <p className="leading-relaxed">
                  For any questions regarding these Terms of Service, please contact us at{" "}
                  <a href="mailto:hello@strucstascope.com" className="text-primary hover:underline">
                    hello@strucstascope.com
                  </a>
                </p>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Legal Stuff Modal */}
      <Dialog open={isLegalOpen} onOpenChange={setIsLegalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">Legal Information</DialogTitle>
            <DialogDescription>
              Company registration and legal details
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh]">
            <div className="space-y-6 text-sm text-muted-foreground pr-4">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">Company Details</h3>
                <div className="space-y-2 leading-relaxed">
                  <p>
                    <span className="font-semibold text-foreground">Company Name:</span> STRUCSTA SCOPE LIMITED
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Company Number:</span> 16076869
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Registered Office Address:</span><br />
                    Littleton Business Park<br />
                    Littleton Drive, Staffordshire<br />
                    Cannock, WS12 4TR<br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">Company Registration</h3>
                <p className="leading-relaxed">
                  STRUCSTA SCOPE LIMITED is a private company limited by shares, incorporated in England and Wales. 
                  The company is registered with Companies House under company number 16076869.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">Regulatory Information</h3>
                <p className="leading-relaxed">
                  The company operates in accordance with the Companies Act 2006 and is subject to the jurisdiction 
                  of the courts of England and Wales. All business activities are conducted in compliance with 
                  applicable UK laws and regulations.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">VAT Information</h3>
                <p className="leading-relaxed">
                  If applicable, our VAT registration number will be provided upon request or on invoices. 
                  For VAT-related inquiries, please contact us using the details below.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">Professional Indemnity</h3>
                <p className="leading-relaxed">
                  STRUCSTA SCOPE LIMITED maintains appropriate professional indemnity insurance as required 
                  for our professional services. Details of our insurance coverage can be provided upon request 
                  for project-specific inquiries.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">Data Protection</h3>
                <p className="leading-relaxed">
                  STRUCSTA SCOPE LIMITED is committed to protecting personal data in accordance with the UK GDPR 
                  and the Data Protection Act 2018. For detailed information about how we handle personal data, 
                  please refer to our Privacy Policy.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">Complaints Procedure</h3>
                <p className="leading-relaxed mb-2">
                  If you have a complaint about our services, please contact us in writing at our registered 
                  office address or via email. We will acknowledge your complaint within 5 working days and 
                  aim to resolve it within 20 working days.
                </p>
                <p className="leading-relaxed">
                  If you are not satisfied with our response, you may be able to refer your complaint to a 
                  relevant professional body or ombudsman service, depending on the nature of your complaint.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">Contact for Legal Matters</h3>
                <p className="leading-relaxed">
                  For any legal inquiries or to request official company documentation, please contact us at{" "}
                  <a href="mailto:hello@strucstascope.com" className="text-primary hover:underline">
                    hello@strucstascope.com
                  </a>
                  {" "}or write to us at our registered office address.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">Additional Resources</h3>
                <p className="leading-relaxed mb-2">
                  For more information about UK company registration and regulations, you can visit:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <a 
                      href="https://www.gov.uk/government/organisations/companies-house" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Companies House
                    </a> - Official company information and filings
                  </li>
                  <li>
                    <a 
                      href="https://www.gov.uk/data-protection" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      UK Data Protection
                    </a> - Information about data protection regulations
                  </li>
                </ul>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
