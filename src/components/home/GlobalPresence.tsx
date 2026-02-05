import { useState, memo } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

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

// Export destination coordinates [longitude, latitude]
const exportMarkers = [
  // Middle East
  { coordinates: [54.3773, 24.4539], country: "UAE", region: "Middle East" },
  { coordinates: [45.0792, 23.8859], country: "Saudi Arabia", region: "Middle East" },
  { coordinates: [51.1839, 25.3548], country: "Qatar", region: "Middle East" },
  { coordinates: [47.4818, 29.3117], country: "Kuwait", region: "Middle East" },
  { coordinates: [55.9233, 21.4735], country: "Oman", region: "Middle East" },
  { coordinates: [50.5577, 26.0667], country: "Bahrain", region: "Middle East" },
  // Europe
  { coordinates: [-0.1276, 51.5074], country: "UK", region: "Europe" },
  { coordinates: [10.4515, 51.1657], country: "Germany", region: "Europe" },
  { coordinates: [2.3522, 46.6034], country: "France", region: "Europe" },
  { coordinates: [5.2913, 52.1326], country: "Netherlands", region: "Europe" },
  { coordinates: [4.4699, 50.5039], country: "Belgium", region: "Europe" },
  // Asia Pacific
  { coordinates: [103.8198, 1.3521], country: "Singapore", region: "Asia Pacific" },
  { coordinates: [101.9758, 4.2105], country: "Malaysia", region: "Asia Pacific" },
  { coordinates: [100.9925, 15.8700], country: "Thailand", region: "Asia Pacific" },
  { coordinates: [108.2772, 14.0583], country: "Vietnam", region: "Asia Pacific" },
  { coordinates: [138.2529, 36.2048], country: "Japan", region: "Asia Pacific" },
  // Americas
  { coordinates: [-95.7129, 37.0902], country: "USA", region: "Americas" },
  { coordinates: [-106.3468, 56.1304], country: "Canada", region: "Americas" },
  { coordinates: [-102.5528, 23.6345], country: "Mexico", region: "Americas" },
];

// India HQ coordinates
const indiaHQ: [number, number] = [78.9629, 20.5937];

const WorldMap = memo(() => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 120,
        center: [40, 25],
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="hsl(210, 45%, 30%)"
              stroke="hsl(210, 45%, 25%)"
              strokeWidth={0.5}
              style={{
                default: { outline: "none" },
                hover: { fill: "hsl(210, 45%, 35%)", outline: "none" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      {/* Trade route lines from India */}
      {exportMarkers.map((marker, index) => (
        <Line
          key={`line-${index}`}
          from={indiaHQ}
          to={marker.coordinates as [number, number]}
          stroke="rgba(34, 197, 94, 0.4)"
          strokeWidth={1}
          strokeLinecap="round"
          strokeDasharray="4 2"
        />
      ))}

      {/* Export destination markers */}
      {exportMarkers.map((marker, index) => (
        <Marker
          key={`marker-${index}`}
          coordinates={marker.coordinates as [number, number]}
          onMouseEnter={() => setHoveredCountry(marker.country)}
          onMouseLeave={() => setHoveredCountry(null)}
        >
          <circle
            r={4}
            fill="#22c55e"
            stroke="#fff"
            strokeWidth={1}
            className="cursor-pointer"
          />
          {hoveredCountry === marker.country && (
            <text
              textAnchor="middle"
              y={-10}
              style={{
                fontFamily: "system-ui",
                fill: "#fff",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              {marker.country}
            </text>
          )}
        </Marker>
      ))}

      {/* India HQ marker */}
      <Marker coordinates={indiaHQ}>
        <circle r={8} fill="#d4af37" stroke="#fff" strokeWidth={2} />
        <circle r={12} fill="none" stroke="#d4af37" strokeWidth={1} opacity={0.5} />
        <text
          textAnchor="middle"
          y={25}
          style={{
            fontFamily: "system-ui",
            fill: "#d4af37",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          INDIA (HQ)
        </text>
      </Marker>
    </ComposableMap>
  );
});

WorldMap.displayName = "WorldMap";

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
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="aspect-[2/1] rounded-3xl bg-gradient-to-br from-primary to-navy-dark relative overflow-hidden">
            <WorldMap />
            
            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3 text-primary-foreground text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-gold rounded-full border border-primary-foreground" />
                <span>Headquarters (India)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full border border-primary-foreground" />
                <span>Export Destinations</span>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute top-4 right-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 text-primary-foreground">
              <div className="text-3xl md:text-4xl font-bold text-accent">45+</div>
              <div className="text-sm opacity-80">Countries Served</div>
            </div>
          </div>
        </motion.div>

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
