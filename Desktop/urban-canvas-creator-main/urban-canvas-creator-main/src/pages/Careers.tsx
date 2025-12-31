import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin, Clock, ArrowUpRight, Upload, X } from "lucide-react";

type Job = {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  applyEmail: string;
};

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleOpenModal = (job: Job) => {
    setSelectedJob(job);
    setFiles([]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setFiles([]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Create mailto link with form data
    const subject = `Application for ${selectedJob?.title}`;
    const body = `
Application Details:
- Full Name: ${formData.get("fullName")}
- Email: ${formData.get("email")}
- Phone: ${formData.get("phone") || "Not provided"}
- Cover Letter:
${formData.get("coverLetter")}
    `.trim();

    const mailtoLink = `mailto:${selectedJob?.applyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const jobs: Job[] = [
    {
      id: 1,
      title: "Senior Landscape Architect",
      location: "UK (Remote)",
      type: "Full-time",
      description: "We're seeking an experienced Landscape Architect to lead design projects and work closely with clients to deliver innovative landscape solutions. You'll be responsible for concept development, technical documentation, and project coordination.",
      requirements: [
        "5+ years of experience in landscape architecture",
        "Proficiency in CAD software and design tools",
        "Strong portfolio of completed projects",
        "Excellent communication and project management skills"
      ],
      applyEmail: "careers@strucstascope.com"
    },
    {
      id: 2,
      title: "Technical Designer",
      location: "UK (Remote)",
      type: "Full-time",
      description: "Join our technical team to produce detailed drawings, specifications, and documentation for landscape projects. You'll work alongside architects and coordinators to ensure projects are delivered to the highest standards.",
      requirements: [
        "3+ years of technical design experience",
        "Expert knowledge of CAD and BIM software",
        "Understanding of UK building regulations",
        "Attention to detail and technical accuracy"
      ],
      applyEmail: "careers@strucstascope.com"
    },
    {
      id: 3,
      title: "Project Coordinator",
      location: "UK (Remote)",
      type: "Full-time",
      description: "We need a proactive Project Coordinator to manage project timelines, coordinate with contractors and suppliers, and ensure smooth project delivery. This role involves regular site visits and client communication.",
      requirements: [
        "2+ years of project coordination experience",
        "Strong organizational and multitasking skills",
        "Experience in construction or landscape projects",
        "Valid UK driving license for site visits"
      ],
      applyEmail: "careers@strucstascope.com"
    },
    {
      id: 4,
      title: "Junior Landscape Designer",
      location: "UK (Remote)",
      type: "Full-time",
      description: "An exciting opportunity for a Junior Landscape Designer to grow their career with us. You'll support senior designers, develop design concepts, and contribute to a variety of urban planning and landscape projects.",
      requirements: [
        "Degree in Landscape Architecture or related field",
        "Proficiency in design software (AutoCAD, SketchUp, Adobe Creative Suite)",
        "Strong creative and conceptual thinking",
        "Willingness to learn and develop"
      ],
      applyEmail: "careers@strucstascope.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24">
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1250px]">
            {/* Page Header */}
            <div className="mb-12 lg:mb-16">
              <div className="bg-card text-card-foreground rounded-2xl p-8 space-y-6 border border-border">
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
                  Careers
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Join our team of talented professionals working on innovative urban planning and landscape architecture projects across the UK.
                </p>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-card text-card-foreground rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div>
                        <h2 className="font-display text-2xl lg:text-3xl font-medium text-foreground mb-3">
                          {job.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>

                      <div className="space-y-2">
                        <h3 className="font-medium text-foreground">Key Requirements:</h3>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <Button
                        size="lg"
                        className="w-full lg:w-auto bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                        onClick={() => handleOpenModal(job)}
                      >
                        Apply now
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* General Application Info */}
            <div className="mt-12 bg-muted/50 rounded-2xl p-8 border border-border">
              <h3 className="font-display text-2xl font-medium text-foreground mb-4">
                General Information
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  All positions are UK-based with remote working options. Occasional site visits may be required.
                </p>
                <p>
                  To apply, please send your CV and portfolio to{" "}
                  <a href="mailto:careers@strucstascope.com" className="text-primary hover:underline">
                    careers@strucstascope.com
                  </a>
                  {" "}with the job title in the subject line.
                </p>
                <p>
                  We're an equal opportunities employer and welcome applications from all qualified candidates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">
              Apply for {selectedJob?.title}
            </DialogTitle>
            <DialogDescription>
              {selectedJob?.location} • {selectedJob?.type}
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="max-h-[70vh]">
            <div className="pr-4 space-y-6">
              {/* Job Details */}
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Job Description</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedJob?.description}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Key Requirements</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {selectedJob?.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Application Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">
                    Cover Letter <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    rows={6}
                    required
                    className="resize-y"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label>CV / Portfolio</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    Attach your CV and portfolio (PDF, DOC, DOCX, JPG, PNG up to 10MB each)
                  </p>
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <input
                      type="file"
                      id="fileUpload"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="fileUpload" className="cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm font-medium text-foreground mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, DOC, DOCX, JPG, PNG up to 10MB
                      </p>
                    </label>
                  </div>
                  {files.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-muted/50 rounded-md p-2 text-sm"
                        >
                          <span className="text-muted-foreground truncate flex-1">
                            {file.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(index)}
                            className="ml-2 text-muted-foreground hover:text-destructive"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCloseModal}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Careers;
