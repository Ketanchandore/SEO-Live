import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { motion } from "framer-motion";
import { 
  MessageSquare, AlertCircle, Wrench, Briefcase, Info, ShieldCheck, Mail, ArrowRight, ExternalLink
} from "lucide-react";

const TITLE = "Contact SEOAcademys — Questions, Corrections & Feedback";
const DESC = "Contact Ketan Chandore at SEOAcademys for content corrections, tool feedback, partnership inquiries, or general questions.";
const EMAIL = "ketanchandore114@gmail.com"; // All emails mapped to the single one

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://seoacademys.com/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": TITLE,
          "description": DESC,
          "url": "https://seoacademys.com/contact",
          "publisher": { "@type": "Organization", "name": "SEOAcademys", "url": "https://seoacademys.com" },
          "mainEntity": {
            "@type": "Organization",
            "name": "SEOAcademys",
            "email": EMAIL,
            "url": "https://seoacademys.com",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto py-12 md:py-16 space-y-16">
        
        {/* HERO SECTION */}
        <section className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center size-16 rounded-2xl bg-primary/10 text-primary mb-4"
          >
            <MessageSquare className="size-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight"
          >
            Contact <span className="grad-text">SEOAcademys</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Questions, corrections, feedback, or partnership inquiries.
          </motion.p>
        </section>

        {/* HOW TO REACH US */}
        <section className="bg-surface-2 p-8 md:p-10 rounded-3xl border border-border text-center">
          <h2 className="font-display text-2xl font-bold mb-4">How to Reach Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            SEOAcademys is run by one person — <span className="font-semibold text-foreground">Ketan Chandore</span>. I read every message personally, though response time is typically 2–3 business days.
          </p>
        </section>

        {/* CONTACT BY CATEGORY */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-6">Contact by Category</h2>
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-surface-2 text-sm">
                  <th className="p-4 font-semibold text-foreground border-b border-border w-1/2">Inquiry Type</th>
                  <th className="p-4 font-semibold text-foreground border-b border-border w-1/2">Contact Email</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { icon: AlertCircle, label: "Content correction / factual error" },
                  { icon: Wrench, label: "Tool problem / bug report" },
                  { icon: Briefcase, label: "Partnership / business" },
                  { icon: Info, label: "Sponsorship inquiry" },
                  { icon: MessageSquare, label: "General question" },
                  { icon: ShieldCheck, label: "Security issue" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-2/30 transition group">
                    <td className="p-4 font-medium text-foreground border-b border-border flex items-center gap-3">
                      <row.icon className="size-4 text-muted-foreground" /> {row.label}
                    </td>
                    <td className="p-4 border-b border-border">
                      <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium">
                        <Mail className="size-3.5" /> {EMAIL}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* BEFORE YOU WRITE & WHAT TO EXPECT */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-surface border border-border p-8 rounded-3xl">
            <h2 className="font-display text-2xl font-bold mb-6">Before You Write</h2>
            <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                <span><strong className="text-foreground">Content question?</strong> Check the Troubleshooting Library — your specific problem likely has a dedicated article.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                <span><strong className="text-foreground">Tool not working?</strong> Include the URL you tested, your browser, and a description of what happened. Screenshots are helpful.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                <span><strong className="text-foreground">Found something factually wrong?</strong> Please include the article URL, what's incorrect, and a source if you have one. We genuinely appreciate corrections — they make the platform better.</span>
              </li>
            </ul>
          </section>

          <section className="bg-surface border border-border p-8 rounded-3xl">
            <h2 className="font-display text-2xl font-bold mb-6">What to Expect</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                I respond to most messages within <strong className="text-foreground">2–3 business days</strong>. For content corrections, I'll acknowledge receipt and update the article if the correction is valid — usually within 5 business days.
              </p>
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 text-foreground font-medium mt-4">
                I cannot provide personalised SEO audits or strategy consultations through the contact form. For these, the free SEO Audit Tool is a good starting point.
              </div>
            </div>
          </section>
        </div>

        {/* SOCIAL CHANNELS */}
        <section className="text-center">
          <h2 className="font-display text-2xl font-bold mb-6">Social / Other Channels</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/in/ketan-chandore-51a533254" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-2 border border-border hover:border-primary hover:text-primary transition font-medium text-sm">
              LinkedIn <ExternalLink className="size-4" />
            </a>
            <a href="https://x.com/pinepl_techai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-2 border border-border hover:border-primary hover:text-primary transition font-medium text-sm">
              X (Twitter) <ExternalLink className="size-4" />
            </a>
            <a href="https://youtube.com/@pinepl_techai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-2 border border-border hover:border-primary hover:text-primary transition font-medium text-sm">
              YouTube <ExternalLink className="size-4" />
            </a>
          </div>
        </section>

      </div>
    </PageContainer>
  );
}
