
import { Calendar, Mail, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          <div className="w-full md:w-2/5 lg:sticky lg:top-20">
            <div className="relative">
              <div className="aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-border shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-4 shadow-lg border border-border">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>alex.morgan@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span>5+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Hello! I'm Alex, a frontend developer and designer with a passion for creating beautiful, 
                functional digital experiences. With over 5 years in the industry, I've developed a 
                keen eye for detail and a commitment to crafting user-centric designs.
              </p>
              <p>
                I specialize in building responsive web applications using modern JavaScript frameworks 
                like React and Next.js. My approach combines technical expertise with creative problem-solving, 
                ensuring that the end product is not only visually appealing but also performs exceptionally.
              </p>
              <p>
                When I'm not coding or designing, you can find me hiking in the mountains, reading about new 
                technology trends, or experimenting with photography. I believe in continuous learning and 
                constantly push myself to stay updated with the latest industry developments.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { number: "5+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "25+", label: "Happy Clients" },
                { number: "10+", label: "Design Awards" },
              ].map((item, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white shadow-sm border border-border">
                  <h3 className="text-2xl md:text-3xl font-bold text-accent">{item.number}</h3>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
