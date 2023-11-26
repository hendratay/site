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
        working. but still more comfortable using linux based distro. want to
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
          <p>i work as a backend developer at web imp.</p>
        </li>
        <li key="astra">
          <p className="font-semibold">astra satria investama</p>
          <p>
            i started my career as an android developer at astra satria
            investama.
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
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              javascript
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              typescript
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              kotlin
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              rust
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              csharp
            </span>
          </p>
        </li>
        <li key="frameworks">
          <p className="font-semibold">frameworks</p>
          <p>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              node
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              express
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              react
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              android
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              bevy
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              monogame
            </span>
          </p>
        </li>
        <li key="databases">
          <p className="font-semibold">databases</p>
          <p>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              postgresql
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              mysql
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              neo4j
            </span>
          </p>
        </li>
        <li key="tools">
          <p className="font-semibold">tools</p>
          <p>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              git
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              vim
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              doom emacs
            </span>
          </p>
        </li>
        <li key="deployments">
          <p className="font-semibold">deployments</p>
          <p>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              linode
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              heroku
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              vercel
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              google cloud platforms
            </span>
            <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 mr-1">
              amazon web services
            </span>
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
      <span className="inline-flex items-center rounded bg-black mt-1 mr-1 px-2 py-1 text-xs text-white">
        <FontAwesomeIcon icon={icon} className="mr-1.5" />
        {name}
      </span>
    </a>
  );
}
