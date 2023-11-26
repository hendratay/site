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
  faN,
  faSailboat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-2xl underline underline-offset-4 mb-8 tracking-tighter">
        daily use
      </h1>

      <ul className="list-outside list-disc">
        <li key="chill" className="my-2">
          <p className="font-semibold">chill</p>
          <div>
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
          </div>
        </li>

        <li key="dev" className="my-2">
          <p className="font-semibold">dev</p>
          <div>
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
          </div>
        </li>

        <li key="crypto" className="my-2">
          <p className="font-semibold">crypto</p>
          <div>
            <HomeItem
              href="https://tradingview.com/chart/?symbol=binance:btcusdt"
              icon={faChartLine}
              name="trading view"
            />
            <HomeItem
              href="https://coingecko.com/en/portfolios/portfolio_overview"
              icon={faFrog}
              name="coingecko"
            />
            <HomeItem
              href="https://opensea.io"
              icon={faSailboat}
              name="opensea"
            />
          </div>
        </li>
      </ul>
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
    <a href={href} target="_blank" className="hover:font-semibold">
      <span className="inline-flex items-center rounded bg-black mt-1 mr-1 px-2 py-1 text-xs text-white">
        <FontAwesomeIcon icon={icon} className="mr-1.5" />
        {name}
      </span>
    </a>
  );
}
