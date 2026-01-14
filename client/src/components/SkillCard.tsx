import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay?: number;
}

export function SkillCard({ title, skills, icon, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative bg-card/50 hover:bg-card border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:scale-110">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold font-display mb-4 flex items-center gap-3">
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/5 text-muted-foreground border border-white/5 group-hover:border-primary/20 group-hover:text-foreground transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
