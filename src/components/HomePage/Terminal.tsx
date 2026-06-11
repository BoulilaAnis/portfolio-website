import { AnimatedSpan, Terminal, TypingAnimation } from '../ui/terminal'
import config from '@/payload.config'
import { getPayload } from 'payload'

const TerminalCard = async ({ className }: { className: string }) => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const hero = await payload.findGlobal({
    slug: 'hero',
  })
  const { docs: skills } = await payload.find({
    collection: 'skills',
    select: { name: true },
  })
  return (
    <div className={className}>
      <Terminal className="w-full overflow-x-hidden">
        <TypingAnimation delay={0}>~&gt; whoami</TypingAnimation>

        <AnimatedSpan delay={800} className="text-accent-foreground">
          <p className="text-primary whitespace-pre-wrap wrap-break-word">{hero.whoami}</p>
        </AnimatedSpan>

        <TypingAnimation delay={600}>~&gt; ls</TypingAnimation>

        <AnimatedSpan delay={3200} className="text-accent-foreground">
          <p className="text-primary whitespace-pre-wrap wrap-break-word">
            {skills.map((skill) => skill.name).join(' / ')}
          </p>
        </AnimatedSpan>

        <TypingAnimation delay={400}>~&gt; pwd</TypingAnimation>

        <AnimatedSpan delay={3200} className="text-primary">
          /anis/portfolio
        </AnimatedSpan>
      </Terminal>
    </div>
  )
}

export default TerminalCard
