import {
  SiFigma,
  SiPostgresql,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
} from 'react-icons/si';

const TOOLS = [
  { name: 'Figma', icon: SiFigma },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
];

function ToolItem({ name, icon: Icon }: (typeof TOOLS)[number]) {
  return (
    <div className="flex items-center gap-3 text-mist transition-colors hover:text-signal">
      <Icon size={26} />
      <span className="font-mono text-sm">{name}</span>
    </div>
  );
}

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-mist/10 py-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-16">
        <div
          className="flex shrink-0 gap-16"
          role="list"
          aria-label="Ferramentas e linguagens que utilizo"
        >
          {TOOLS.map((tool) => (
            <div role="listitem" key={tool.name}>
              <ToolItem {...tool} />
            </div>
          ))}
        </div>
        <div className="flex shrink-0 gap-16" aria-hidden="true">
          {TOOLS.map((tool) => (
            <ToolItem key={`${tool.name}-dup`} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
