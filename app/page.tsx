import {
  IconDefinition,
  faDiscord,
  faGithub,
  faGitlab,
  faGoogleDrive,
  faItchIo,
  faSpotify,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChartLine,
  faFrog,
  faInbox,
  faLink,
  faN,
  faSailboat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

export default async function Home() {
  let hackernews = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json",
  );
  let stories = await hackernews.json();
  const news = [];
  for (let i = 0; i < 6; i++) {
    let story = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${stories[i]}.json`,
    );
    news.push(await story.json());
  }

  let zenquotes = await fetch("https://zenquotes.io/api/random");
  let quotes = await zenquotes.json();

  let dadjokes = await fetch("https://icanhazdadjoke.com", {
    headers: { Accept: "application/json" },
  });
  let jokes = await dadjokes.json();

  return (
    <section>
      <h1 className="font-semibold text-2xl underline underline-offset-4 mb-8 tracking-tighter">
        dashboard
      </h1>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
        <div>
          <p className="font-semibold mb-1">chill</p>
          <ul className="list-outside list-none">
            <HomeItem
              href="https://web.whatsapp.com"
              icon={faWhatsapp}
              name="whatsapp"
            />
            <HomeItem
              href="https://twitter.com"
              icon={faTwitter}
              name="twitter"
            />
            <HomeItem
              href="https://discord.com/app"
              icon={faDiscord}
              name="discord"
            />
            <HomeItem
              href="https://open.spotify.com"
              icon={faSpotify}
              name="spotify"
            />
            <HomeItem
              href="https://youtube.com"
              icon={faYoutube}
              name="youtube"
            />
            <HomeItem href="https://netflix.com" icon={faN} name="netflix" />
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-1">dev</p>
          <ul className="list-outside list-none">
            <HomeItem href="https://github.com" icon={faGithub} name="github" />
            <HomeItem href="https://gitlab.com" icon={faGitlab} name="gitlab" />
            <HomeItem
              href="https://itch.io/game-assets"
              icon={faItchIo}
              name="itch io"
            />
            <HomeItem href="https://gmail.com" icon={faInbox} name="gmail" />
            <HomeItem
              href="https://drive.google.com"
              icon={faGoogleDrive}
              name="drive"
            />
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-1">crypto</p>
          <ul className="list-outside list-none">
            <HomeItem
              href="https://tradingview.com/chart/?symbol=binance:btcusdt"
              icon={faChartLine}
              name="trading view"
            />
            <HomeItem
              href="https://coingecko.com"
              icon={faFrog}
              name="coingecko"
            />
            <HomeItem
              href="https://opensea.io"
              icon={faSailboat}
              name="opensea"
            />
          </ul>
        </div>
      </div>

      <h1 className="font-semibold text-2xl underline underline-offset-4 my-8 tracking-tighter">
        hacker news
      </h1>
      <ul className="list-outside list-disc">
        {news.map((item) => (
          <HackerNewsItem
            key={item.id}
            id={item.id}
            title={item.title}
            by={item.by}
            time={item.time}
          />
        ))}
      </ul>

      <h1 className="font-semibold text-2xl underline underline-offset-4 my-8 tracking-tighter">
        random
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <p className="font-semibold mb-1">
            <a
              href="https://zenquotes.io"
              target="_blank"
              className="hover:text-blue-600"
            >
              zen quotes
              <span className="align-middle">
                <FontAwesomeIcon icon={faLink} className="h-4 w-4 ml-2" />
              </span>
            </a>
          </p>
          <p className="lowercase">{quotes[0].q}</p>
          <p className="italic lowercase">- {quotes[0].a}</p>
        </div>
        <div>
          <p className="font-semibold mb-1">
            <a
              href="https://icanhazdadjoke.com"
              target="_blank"
              className="hover:text-blue-600"
            >
              dad jokes
              <span className="align-middle">
                <FontAwesomeIcon icon={faLink} className="h-4 w-4 ml-2" />
              </span>
            </a>
          </p>
          <p className="lowercase">{jokes.joke}</p>
        </div>
      </div>
    </section>
  );
}

function HomeItem({
  href,
  icon,
  name,
}: {
  href: string;
  icon: IconDefinition;
  name: string;
}) {
  return (
    <li key={name}>
      <a
        href={href}
        target="_blank"
        className="hover:font-semibold whitespace-nowrap"
      >
        <span className="align-middle">
          <FontAwesomeIcon icon={icon} className="h-4 w-4 mr-2" />
        </span>
        <span className="inline-flex items-center my-1">{name}</span>
      </a>
    </li>
  );
}

function HackerNewsItem({
  id,
  title,
  by,
  time,
}: {
  id: number;
  title: string;
  by: string;
  time: number;
}) {
  const ycombinator = "https://news.ycombinator.com/item?id=" + id.toString();

  return (
    <li key={id} className="mb-1">
      <a
        href={ycombinator}
        target="_blank"
        className="lowercase hover:font-semibold"
      >
        {title}
        <p className="text-xs text-slate-600">
          - {by} ({moment.unix(time).fromNow()})
        </p>
      </a>
    </li>
  );
}
