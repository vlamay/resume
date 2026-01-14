import { Navbar } from "@/components/Navbar";
import { SkillCard } from "@/components/SkillCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, Download, 
  Server, Cloud, Code2, Database, Shield, Cpu, Terminal
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Freelance & Projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
              Building Cloud <br/>
              <span className="text-gradient">AI Infrastructure</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              AI Platform / MLOps Engineer focused on scalable production systems. 
              Designing, deploying, and operating production AI systems at scale.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="mailto:vla.maidaniuk@gmail.com" className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-xl font-semibold text-white transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-card hover:bg-white/5 border border-white/10 rounded-xl font-semibold text-foreground transition-all hover:-translate-y-1 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>

            <div className="flex gap-6 text-muted-foreground">
              <a href="https://github.com/vlamay" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/maidaniuk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl opacity-20 blur-2xl animate-pulse" />
              <div className="absolute inset-0 bg-card rounded-3xl border border-white/10 overflow-hidden p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-auto font-mono text-xs text-muted-foreground">bash — 80x24</div>
                </div>
                <div className="font-mono text-sm space-y-2 text-muted-foreground">
                  <p><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> whoami</p>
                  <p className="text-foreground">Vladyslav Maidaniuk</p>
                  <p><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> k get skills</p>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="p-3 bg-white/5 rounded border border-white/5">
                      <div className="text-xs text-muted-foreground mb-1">CLUSTER STATUS</div>
                      <div className="text-green-400 font-bold">HEALTHY</div>
                    </div>
                    <div className="p-3 bg-white/5 rounded border border-white/5">
                      <div className="text-xs text-muted-foreground mb-1">UPTIME</div>
                      <div className="text-primary font-bold">99.99%</div>
                    </div>
                  </div>
                  <p className="mt-4"><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> ./deploy-ai-agent.sh --prod</p>
                  <div className="text-yellow-400">Initializing pipeline...</div>
                  <div className="text-foreground">
                    [####################] 100%<br/>
                    <span className="text-green-400">Deployment successful!</span> Cost reduced by 25%.
                  </div>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Engineering Robust AI Systems</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI Platform / MLOps Engineer with 4+ years of experience designing, deploying, and operating production AI systems at scale.
              Specialized in AI infrastructure, LLM-based systems, AI agent orchestration, and ML lifecycle automation on Kubernetes and cloud platforms.
              Based in Prague, I help companies build reliable, cost-efficient AI platforms with GPU orchestration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { label: "Uptime Maintained", value: "99.9%", desc: "For 10k+ concurrent users" },
              { label: "Deployment Speed", value: "80%", desc: "Faster release cycles" },
              { label: "Cloud Savings", value: "25%", desc: "Via AI cost optimization" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-white/5"
              >
                <div className="text-4xl font-bold text-primary mb-2 font-mono">{stat.value}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display">Technical Arsenal</h2>
            <p className="text-muted-foreground mt-2">The tools I use to build and break things.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              title="Cloud & Infra" 
              icon={<Cloud className="w-12 h-12" />}
              skills={["AWS (EC2/EKS/RDS/S3)", "Azure", "GCP", "Terraform", "Ansible"]}
              delay={0}
            />
            <SkillCard 
              title="Container Orchestration" 
              icon={<Server className="w-12 h-12" />}
              skills={["Kubernetes", "Helm", "Docker", "Istio", "ArgoCD"]}
              delay={0.1}
            />
            <SkillCard 
              title="MLOps & AI" 
              icon={<Cpu className="w-12 h-12" />}
              skills={["Model Serving", "ML Pipelines", "Drift Detection", "GPU Mgmt", "LLM Integration"]}
              delay={0.2}
            />
            <SkillCard 
              title="CI/CD & DevOps" 
              icon={<Terminal className="w-12 h-12" />}
              skills={["GitHub Actions", "GitLab CI", "Jenkins", "Bash Scripting", "Python Automation"]}
              delay={0.3}
            />
            <SkillCard 
              title="Observability" 
              icon={<Database className="w-12 h-12" />}
              skills={["Prometheus", "Grafana", "ELK Stack", "Datadog", "CloudWatch"]}
              delay={0.4}
            />
            <SkillCard 
              title="Security" 
              icon={<Shield className="w-12 h-12" />}
              skills={["Vault", "CIS Benchmarks", "DevSecOps", "CEH v12", "IAM Policies"]}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display">Professional Journey</h2>
          </div>

            <ExperienceCard 
              index={0}
              role="AI Platform / MLOps Engineer (Contract)"
              company="UP Group (Up Coop)"
              period="Jan 2025 – Dec 2025"
              location="Prague, Czech Republic"
              description={[
                "Designed and operated production AI platform supporting AI agents and LLM-based services.",
                "Deployed containerized AI workloads on Kubernetes with GPU allocation, autoscaling, and cost optimization.",
                "Built CI/CD pipelines for AI model and agent deployment with automated validation and rollback.",
                "Implemented AI-powered monitoring and anomaly detection, reducing false alerts by 45%.",
                "Established SLO/SLI framework achieving 99.9% uptime for AI services."
              ]}
              tags={["Kubernetes", "GPU", "MLOps", "AI Agents"]}
            />
            <ExperienceCard 
              index={1}
              role="Freelance AI Infrastructure / MLOps Engineer"
              company="Upwork"
              period="Jan 2022 – Dec 2024"
              location="Remote"
              description={[
                "Built AI chatbot and document-processing platforms serving 5,000+ daily users.",
                "Implemented end-to-end ML deployment pipelines and inference monitoring.",
                "Integrated LLM APIs into production systems with security, rate limiting, and observability.",
                "Automated AI infrastructure using Terraform, Ansible, and Python."
              ]}
              tags={["AWS", "MLOps", "LLM Integration", "Terraform"]}
            />
            <ExperienceCard 
              index={2}
              role="Mid-Level Penetration Tester (Contract)"
              company="Foodway"
              period="Jul 2018 - Mar 2019"
              location="Novokuznetsk, Russia"
              description={[
                "Led full lifecycle penetration tests (scoping, methodology design, exploitation, reporting) for internal and external engagements.",
                "Exploited critical vulnerabilities such as RCE, SQL injection, and XXE; performed privilege escalation on Linux and Windows hosts.",
                "Designed and executed social engineering assessments (phishing campaigns, vishing) and delivered security awareness training.",
                "Built and maintained custom Kali Linux images with offensive tools (Metasploit, Empire, Cobalt Strike)."
              ]}
              tags={["Penetration Testing", "Red Team", "Security", "Kali Linux"]}
            />
            <ExperienceCard 
              index={3}
              role="Junior Penetration Tester"
              company="Foodway"
              period="Jan 2018 - Jul 2018"
              location="Novokuznetsk, Russia"
              description={[
                "Conducted network vulnerability scans using Nmap and Nessus; identified and documented security issues.",
                "Performed web application testing against OWASP Top 10 risks with Burp Suite Pro.",
                "Automated routine security checks and data collection with Python and Bash scripts."
              ]}
              tags={["Nessus", "Nmap", "Burp Suite", "OWASP"]}
            />
            <ExperienceCard 
              index={4}
              role="Mid / Senior System Administrator"
              company="PESA Bydgoszcz S.A."
              period="Jan 2017 - Jan 2018"
              location="Bydgoszcz, Poland"
              description={[
                "Architected and oversaw migration to a VMware vSphere cluster (20 hosts, 400+ VMs), improving consolidation and resiliency.",
                "Deployed and managed container platform (Docker, Kubernetes) for internal tooling.",
                "Defined and enforced security hardening standards (Windows, Linux) in line with ISO 27001.",
                "Collaborated with network teams to integrate on-prem DCs with Azure AD and Azure Site Recovery."
              ]}
              tags={["VMware", "Kubernetes", "Azure AD", "ISO 27001"]}
            />
            <ExperienceCard 
              index={5}
              role="Mid-Level System Administrator"
              company="PESA Bydgoszcz S.A."
              period="Apr 2016 - Jan 2017"
              location="Bydgoszcz, Poland"
              description={[
                "Managed and optimized a hybrid environment of 60+ servers (Windows Server, CentOS).",
                "Automated routine tasks with PowerShell and Bash scripts, reducing manual workload by 40%.",
                "Hardened servers by applying CIS Benchmarks and rolling out configuration management via Ansible.",
                "Led DR-drills and backups, reducing RTO by 30%."
              ]}
              tags={["Ansible", "PowerShell", "CIS Benchmarks", "DR"]}
            />
        </div>
      </section>

      {/* Education Section - Styled as a clean list */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display mb-12">Education & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <div className="bg-card p-6 rounded-xl border border-white/5 text-left">
               <h3 className="text-xl font-bold mb-2">Education</h3>
               <p className="text-primary font-medium">Synergy University</p>
               <p className="text-muted-foreground text-sm">Master of Development, Maintenance and Security of Information Systems (Dec 2024)</p>
               <div className="mt-4">
                 <p className="text-primary font-medium">Jagiellonian University</p>
                 <p className="text-muted-foreground text-sm">BSc Computer Science</p>
               </div>
             </div>
             <div className="bg-card p-6 rounded-xl border border-white/5 text-left">
               <h3 className="text-xl font-bold mb-4">Certifications</h3>
               <ul className="space-y-2 text-sm text-muted-foreground">
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full"/> DevSecOps Certificate (TryHackMe)
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full"/> Certified Ethical Hacker (v12)
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full"/> CompTIA Security+ & Linux+
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full"/> Google IT Automation with Python
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full"/> EF SET English (B2 Upper Intermediate)
                 </li>
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 z-0 transform origin-top-left" />
        <div className="container mx-auto px-4 relative z-10">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-card">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
             <Terminal className="text-primary w-5 h-5" />
             <span className="font-mono text-sm">© 2025 Vladyslav Maidaniuk</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="https://github.com/vlamay" className="hover:text-white">GitHub</a>
            <a href="https://linkedin.com/in/maidaniuk" className="hover:text-white">LinkedIn</a>
            <a href="mailto:vla.maidaniuk@gmail.com" className="hover:text-white">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
