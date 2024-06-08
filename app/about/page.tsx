import {
  IconDefinition,
  faWhatsapp,
  faLinkedin,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <section>
      <h1 className="font-semibold text-2xl underline underline-offset-4 mb-8 tracking-tighter">
        who am i
      </h1>
      <p className="my-4">
        hi, i am <b>hendra gunawan</b>, a <b>fullstack developer</b> that more
        lean to backend. i also do android development and game development. i
        love programming and really enjoy solving hard problems that take a few
        days to solve.
      </p>
      <p className="my-4">
        a <b>vim</b> user that move to <b>doom emacs</b>. used to distro hopping
        and seeking "perfect setup" but now just use everything as long as it is
        working. but still more comfortable using linux based distro, want to
        keep everything lightweight or undercontrol.
      </p>
      <div className="flex flex-row flex-wrap my-4">
        <AboutItem
          href="https://api.whatsapp.com/send?phone=62895615120283"
          icon={faWhatsapp}
          name="whatsapp"
        />
        <AboutItem
          href="mailto:hendratay96@googlemail.com"
          icon={faInbox}
          name="email"
        />
        <AboutItem
          href="https://linkedin.com/in/hendratay"
          icon={faLinkedin}
          name="linkedin"
        />
        <AboutItem
          href="https://github.com/hendratay"
          icon={faGithub}
          name="github"
        />
        <AboutItem
          href="https://gitlab.com/hendratay"
          icon={faGitlab}
          name="gitlab"
        />
      </div>

      <h1 className="font-semibold text-2xl underline underline-offset-4 my-8 tracking-tighter">
        experience
      </h1>
      <ul className="list-outside list-disc">
        <li key="freelancer">
          <p className="font-semibold">freelancer</p>
          <p>
            currently live as a freelancer. mostly do some project as client
            requested. tech stack react as frontend, node/express as backend and
            postgresql as database. sometimes do website crawling and develop
            some chrome extension.
          </p>
        </li>
        <li key="web imp">
          <p className="font-semibold">web imp</p>
          <p>
            after have a good understanding of javascript/node, i start to work
            at web imp as a backend developer. i learn a lot of things at there
            one of the example is handling neo4j databases, i even never heard
            of this kind of databases. most of my work is plan and implementing
            new feature with the team, debug and fix issues and do some
            refactoring if most of the task finished.
          </p>
        </li>
        <li key="astra">
          <p className="font-semibold">astra satria investama</p>
          <p>
            i started my career as an android developer at astra satria
            investama. at there i start with developing an android app that can
            contain multiple unity games. at that time i also start to learn
            javascript/node to handle the game server.
          </p>
        </li>
      </ul>

      <h1 className="font-semibold text-2xl underline underline-offset-4 my-8 tracking-tighter">
        skills
      </h1>
      <ul className="list-outside list-disc">
        <li key="languages">
          <p className="font-semibold">languages</p>
          <p>
            <SkillItem name="javascript" />
            <SkillItem name="typescript" />
            <SkillItem name="kotlin" />
            <SkillItem name="rust" />
            <SkillItem name="csharp" />
          </p>
        </li>
        <li key="frameworks">
          <p className="font-semibold">frameworks</p>
          <p>
            <SkillItem name="node" />
            <SkillItem name="express" />
            <SkillItem name="react" />
            <SkillItem name="android" />
            <SkillItem name="bevy" />
            <SkillItem name="monogame" />
          </p>
        </li>
        <li key="databases">
          <p className="font-semibold">databases</p>
          <p>
            <SkillItem name="postgresql" />
            <SkillItem name="mysql" />
            <SkillItem name="neo4j" />
          </p>
        </li>
        <li key="tools">
          <p className="font-semibold">tools</p>
          <p>
            <SkillItem name="git" />
            <SkillItem name="vim" />
            <SkillItem name="doom emacs" />
          </p>
        </li>
        <li key="deployments">
          <p className="font-semibold">deployments</p>
          <p>
            <SkillItem name="linode" />
            <SkillItem name="heroku" />
            <SkillItem name="vercel" />
            <SkillItem name="google cloud platforms" />
            <SkillItem name="amazon web services" />
          </p>
        </li>
      </ul>
    </section>
  );
}

function AboutItem({
  href,
  icon,
  name,
}: {
  href: string;
  icon: IconDefinition;
  name: string;
}) {
  return (
    <a href={href} target="_blank" className="hover:font-semibold">
      <span className="inline-flex items-center rounded bg-black dark:bg-white mt-1 mr-1 px-2 py-1 text-xs text-white dark:text-black">
        <FontAwesomeIcon icon={icon} className="mr-1.5" />
        {name}
      </span>
    </a>
  );
}

function SkillItem({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-sm bg-black dark:bg-white text-xs text-white dark:text-black lowercase px-1 mr-1">
      {name}
    </span>
  );
}
