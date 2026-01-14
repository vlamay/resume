import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceProps {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  tags: string[];
  index: number;
}

export function ExperienceCard({ role, company, period, location, description, tags, index }: ExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 border-l border-white/10 pb-12 last:pb-0"
    >
      <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
      
      <div className="bg-card/30 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
          <div>
            <h3 className="text-xl font-bold font-display text-foreground">{role}</h3>
            <div className="text-primary font-medium">{company}</div>
          </div>
          <div className="flex flex-col items-start md:items-end text-sm text-muted-foreground gap-1">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{period}</span>
            </div>
            {location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{location}</span>
              </div>
            )}
          </div>
        </div>

        <ul className="space-y-2 mb-6">
          {description.map((item, i) => (
            <li key={i} className="text-muted-foreground text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-white/20 before:rounded-full">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20 font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
