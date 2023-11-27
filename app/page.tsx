"use client";

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
import useSWR from "swr";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-2xl underline underline-offset-4 mb-8 tracking-tighter">
        dashboard
      </h1>
      <Dashboard />

      <h1 className="font-semibold text-2xl underline underline-offset-4 my-8 tracking-tighter">
        hacker news
      </h1>
      <HackerNews />

      <h1 className="font-semibold text-2xl underline underline-offset-4 my-8 tracking-tighter">
        random
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <p className="font-semibold mb-1">
            <a
              href="https://github.com/tlcheah2/stoic-quote-lambda-public-api"
              target="_blank"
              className="hover:text-blue-600"
            >
              stoicism quotes
              <span className="align-middle">
                <FontAwesomeIcon icon={faLink} className="h-4 w-4 ml-2" />
              </span>
            </a>
          </p>
          <RandomQuotes />
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
          <RandomJokes />
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
      <div>
        <p className="font-semibold mb-1">chill</p>
        <ul className="list-outside list-none">
          <DashboardItem
            href="https://web.whatsapp.com"
            icon={faWhatsapp}
            name="whatsapp"
          />
          <DashboardItem
            href="https://twitter.com"
            icon={faTwitter}
            name="twitter"
          />
          <DashboardItem
            href="https://discord.com/app"
            icon={faDiscord}
            name="discord"
          />
          <DashboardItem
            href="https://open.spotify.com"
            icon={faSpotify}
            name="spotify"
          />
          <DashboardItem
            href="https://youtube.com"
            icon={faYoutube}
            name="youtube"
          />
          <DashboardItem href="https://netflix.com" icon={faN} name="netflix" />
        </ul>
      </div>
      <div>
        <p className="font-semibold mb-1">dev</p>
        <ul className="list-outside list-none">
          <DashboardItem
            href="https://github.com"
            icon={faGithub}
            name="github"
          />
          <DashboardItem
            href="https://gitlab.com"
            icon={faGitlab}
            name="gitlab"
          />
          <DashboardItem
            href="https://itch.io/game-assets"
            icon={faItchIo}
            name="itch io"
          />
          <DashboardItem href="https://gmail.com" icon={faInbox} name="gmail" />
          <DashboardItem
            href="https://drive.google.com"
            icon={faGoogleDrive}
            name="drive"
          />
        </ul>
      </div>
      <div>
        <p className="font-semibold mb-1">crypto</p>
        <ul className="list-outside list-none">
          <DashboardItem
            href="https://tradingview.com/chart/?symbol=binance:btcusdt"
            icon={faChartLine}
            name="trading view"
          />
          <DashboardItem
            href="https://coingecko.com"
            icon={faFrog}
            name="coingecko"
          />
          <DashboardItem
            href="https://opensea.io"
            icon={faSailboat}
            name="opensea"
          />
        </ul>
      </div>
    </div>
  );
}

function DashboardItem({
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

function HackerNews() {
  const { data, error } = useSWR("getNews", {
    fetcher: async () => {
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json",
      );
      const data = await res.json();

      const news = [];
      for (let i = 0; i < 6; i++) {
        let story = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`,
        );
        news.push(await story.json());
      }

      return news;
    },
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
  });

  if (error) return <div>failed to load.</div>;
  if (!data) return <div>loading...</div>;

  return (
    <ul className="list-outside list-disc">
      {data.map((item: any) => (
        <HackerNewsItem
          key={item.id}
          id={item.id}
          title={item.title}
          by={item.by}
          time={item.time}
        />
      ))}
    </ul>
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
        <p className="text-sm text-slate-600">
          - {by} ({moment.unix(time).fromNow()})
        </p>
      </a>
    </li>
  );
}

function RandomQuotes() {
  const { data, error } = useSWR("getQuotes", {
    fetcher: async () => {
      const res = await fetch("https://api.themotivate365.com/stoic-quote");
      return res.json();
    },
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
  });

  if (error) return <div>failed to load.</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <p className="lowercase">{data.quote}</p>
      <p className="lowercase text-slate-600">- {data.author}</p>
    </div>
  );
}

function RandomJokes() {
  const { data, error } = useSWR("getJokes", {
    fetcher: async () => {
      const res = await fetch("https://icanhazdadjoke.com", {
        headers: { Accept: "application/json" },
      });
      return await res.json();
    },
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
  });

  if (error) return <div>failed to load.</div>;
  if (!data) return <div>loading...</div>;

  return <p className="lowercase">{data.joke}</p>;
}
