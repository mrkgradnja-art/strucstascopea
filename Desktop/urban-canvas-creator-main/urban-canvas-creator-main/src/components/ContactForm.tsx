import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from "lucide-react";
import { useState, useId } from "react";

const ContactForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const idPrefix = useId();

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

  return (
    <form className="space-y-6">
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-fullName`}>
          Full name <span className="text-destructive">*</span>
        </Label>
        <Input
          id={`${idPrefix}-fullName`}
          name="fullName"
          placeholder="Your full name"
          required
        />
      </div>

      {/* Company */}
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-company`}>Company</Label>
        <Input
          id={`${idPrefix}-company`}
          name="company"
          placeholder="Company or organisation"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-email`}>
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-phone`}>Phone</Label>
        <Input
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          placeholder="Your phone number"
        />
      </div>

      {/* Project Location */}
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-location`}>
          Project location or Postcode <span className="text-destructive">*</span>
        </Label>
        <Input
          id={`${idPrefix}-location`}
          name="location"
          placeholder="e.g. London EC2A or full address"
          required
        />
      </div>

      {/* Services of interest */}
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-services`}>Services of interest</Label>
        <Select>
          <SelectTrigger id={`${idPrefix}-services`}>
            <SelectValue placeholder="Please select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="concept">Concept & Planning</SelectItem>
            <SelectItem value="technical">Technical & Documentation</SelectItem>
            <SelectItem value="interior">Interior Design</SelectItem>
            <SelectItem value="support">Support & Coordination</SelectItem>
            <SelectItem value="full">Full Package</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Budget range */}
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-budget`}>Budget range</Label>
        <Select>
          <SelectTrigger id={`${idPrefix}-budget`}>
            <SelectValue placeholder="Select a range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-50k">Under £50,000</SelectItem>
            <SelectItem value="50k-100k">£50,000 - £100,000</SelectItem>
            <SelectItem value="100k-250k">£100,000 - £250,000</SelectItem>
            <SelectItem value="250k-500k">£250,000 - £500,000</SelectItem>
            <SelectItem value="over-500k">Over £500,000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Preferred contact time */}
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-contactTime`}>Preferred contact time</Label>
        <Select>
          <SelectTrigger id={`${idPrefix}-contactTime`}>
            <SelectValue placeholder="Any time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any time</SelectItem>
            <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
            <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
            <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-message`}>
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id={`${idPrefix}-message`}
          name="message"
          placeholder="Tell us about your project - location, floor area, type of space, timescales, any existing drawings..."
          rows={6}
          required
          className="resize-y"
        />
      </div>

      {/* File Upload */}
      <div className="space-y-2">
        <Label>Documents</Label>
        <p className="text-sm text-muted-foreground mb-2">
          Attach PDF plans, agent brochures or photographs where available.
        </p>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
        >
          <input
            type="file"
            id={`${idPrefix}-fileUpload`}
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor={`${idPrefix}-fileUpload`} className="cursor-pointer">
            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm font-medium text-foreground mb-1">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">
              PDF, JPG, PNG up to 10MB
            </p>
          </label>
        </div>
        {files.length > 0 && (
          <div className="mt-2 space-y-1">
            {files.map((file, index) => (
              <p key={index} className="text-sm text-muted-foreground">
                {file.name}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Send enquiry
      </Button>
    </form>
  );
};

export default ContactForm;
