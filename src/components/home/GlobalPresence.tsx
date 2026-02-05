import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const regions = [
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain"],
    color: "bg-accent",
  },
  {
    name: "Europe",
    countries: ["UK", "Germany", "France", "Netherlands", "Belgium"],
    color: "bg-primary",
  },
  {
    name: "Asia Pacific",
    countries: ["Singapore", "Malaysia", "Thailand", "Vietnam", "Japan"],
    color: "bg-gold",
  },
  {
    name: "Americas",
    countries: ["USA", "Canada", "Mexico"],
    color: "bg-navy-light",
  },
];

// Export destination markers with approximate positions on world map
const exportMarkers = [
  // Middle East
  { x: 58, y: 42, region: "Middle East", country: "UAE" },
  { x: 54, y: 38, region: "Middle East", country: "Saudi Arabia" },
  { x: 56, y: 40, region: "Middle East", country: "Qatar" },
  // Europe
  { x: 48, y: 28, region: "Europe", country: "UK" },
  { x: 50, y: 30, region: "Europe", country: "Germany" },
  { x: 47, y: 32, region: "Europe", country: "France" },
  { x: 49, y: 29, region: "Europe", country: "Netherlands" },
  // Asia Pacific
  { x: 75, y: 50, region: "Asia Pacific", country: "Singapore" },
  { x: 74, y: 45, region: "Asia Pacific", country: "Malaysia" },
  { x: 73, y: 42, region: "Asia Pacific", country: "Thailand" },
  { x: 78, y: 35, region: "Asia Pacific", country: "Japan" },
  // Americas
  { x: 22, y: 35, region: "Americas", country: "USA" },
  { x: 20, y: 28, region: "Americas", country: "Canada" },
  { x: 25, y: 45, region: "Americas", country: "Mexico" },
  // Additional countries
  { x: 52, y: 26, region: "Europe", country: "Belgium" },
  { x: 72, y: 40, region: "Asia Pacific", country: "Vietnam" },
  { x: 55, y: 36, region: "Middle East", country: "Kuwait" },
  { x: 57, y: 44, region: "Middle East", country: "Oman" },
  { x: 55, y: 41, region: "Middle East", country: "Bahrain" },
];

// India position (origin)
const indiaPosition = { x: 65, y: 42 };

const GlobalPresence = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Global Footprint
          </span>
          <h2 className="heading-2 text-primary mb-4">
            Exporting to <span className="text-accent">45+ Countries</span> Worldwide
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our products reach every corner of the globe, building lasting partnerships with businesses worldwide
          </p>
        </motion.div>

        {/* Interactive World Map */}
        <div className="relative mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[2/1] rounded-3xl bg-gradient-to-br from-primary to-navy-dark relative overflow-hidden"
          >
            {/* World Map SVG */}
            <svg
              viewBox="0 0 100 50"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Ocean gradient background */}
              <defs>
                <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(210, 52%, 20%)" />
                  <stop offset="100%" stopColor="hsl(210, 55%, 15%)" />
                </linearGradient>
                <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(210, 45%, 35%)" />
                  <stop offset="100%" stopColor="hsl(210, 45%, 30%)" />
                </linearGradient>
              </defs>
              
              <rect width="100" height="50" fill="url(#oceanGradient)" />
              
              {/* Simplified continent shapes */}
              {/* North America */}
              <path
                d="M5,8 Q15,5 25,10 L30,20 Q28,30 22,35 L18,40 Q15,42 12,38 L8,30 Q3,20 5,8 Z"
                fill="url(#landGradient)"
                opacity="0.6"
              />
              
              {/* South America */}
              <path
                d="M22,42 Q25,38 28,42 L30,55 Q28,60 25,62 L20,58 Q18,50 22,42 Z"
                fill="url(#landGradient)"
                opacity="0.6"
              />
              
              {/* Europe */}
              <path
                d="M42,12 Q50,8 55,15 L54,25 Q50,30 45,28 L40,22 Q38,15 42,12 Z"
                fill="url(#landGradient)"
                opacity="0.6"
              />
              
              {/* Africa */}
              <path
                d="M42,30 Q50,28 55,35 L58,50 Q55,58 48,55 L42,48 Q38,40 42,30 Z"
                fill="url(#landGradient)"
                opacity="0.6"
              />
              
              {/* Asia */}
              <path
                d="M55,10 Q70,5 85,12 L88,28 Q85,40 75,45 L65,48 Q55,45 52,35 L50,25 Q52,15 55,10 Z"
                fill="url(#landGradient)"
                opacity="0.6"
              />
              
              {/* Australia */}
              <path
                d="M78,52 Q85,50 90,55 L88,62 Q82,65 78,60 L78,52 Z"
                fill="url(#landGradient)"
                opacity="0.6"
              />
              
              {/* Grid lines */}
              {[...Array(9)].map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={(i + 1) * 5}
                  x2="100"
                  y2={(i + 1) * 5}
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="0.1"
                />
              ))}
              {[...Array(19)].map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={(i + 1) * 5}
                  y1="0"
                  x2={(i + 1) * 5}
                  y2="50"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="0.1"
                />
              ))}
              
              {/* Trade routes from India */}
              {exportMarkers.map((marker, index) => (
                <motion.path
                  key={`route-${index}`}
                  d={`M${indiaPosition.x},${indiaPosition.y} Q${(indiaPosition.x + marker.x) / 2},${Math.min(indiaPosition.y, marker.y) - 5} ${marker.x},${marker.y}`}
                  fill="none"
                  stroke="rgba(34, 197, 94, 0.3)"
                  strokeWidth="0.15"
                  strokeDasharray="0.5,0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 1 }}
                />
              ))}
            </svg>

            {/* Export destination markers */}
            {exportMarkers.map((marker, index) => (
              <motion.div
                key={`marker-${index}`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="absolute w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full cursor-pointer group"
                style={{ left: `${marker.x}%`, top: `${marker.y}%`, transform: 'translate(-50%, -50%)' }}
                title={marker.country}
              >
                <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-50" />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-white text-primary text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {marker.country}
                </div>
              </motion.div>
            ))}

            {/* India origin marker */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute w-6 h-6 md:w-8 md:h-8 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${indiaPosition.x}%`, top: `${indiaPosition.y}%` }}
            >
              <div className="w-full h-full bg-gold rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              </div>
              <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-30" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs md:text-sm font-semibold text-gold bg-primary/80 px-2 py-0.5 rounded">
                  INDIA (HQ)
                </span>
              </div>
            </motion.div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span>Headquarters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Export Destinations</span>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="text-3xl md:text-4xl font-bold text-accent">45+</div>
              <div className="text-sm opacity-80">Countries</div>
            </div>
          </motion.div>
        </div>

        {/* Region Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${region.color}`} />
                <h3 className="font-semibold text-primary">{region.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {region.countries.map((country) => (
                  <span
                    key={country}
                    className="px-2 py-1 bg-secondary rounded-md text-xs text-muted-foreground"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
