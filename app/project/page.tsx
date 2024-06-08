export default async function Project() {
  let res = await fetch("https://api.github.com/users/hendratay/repos");
  let repos = await res.json();

  return (
    <section>
      <h1 className="font-semibold text-2xl underline underline-offset-4 mb-8 tracking-tighter">
        private projects
      </h1>
      <ul className="list-outside list-disc">
        <li key="roguelike game">
          <a className="text-slate-600">roguelike game</a>
          <span className="inline-flex items-center rounded-sm bg-black dark:bg-white text-xs text-white dark:text-black lowercase px-1 ml-2">
            rust
          </span>
          <p className="text-sm">
            [wip] 2d roguelike game that develop using bevy framework.
          </p>
        </li>
        <li key="freelance">
          <a className="text-slate-600">freelance</a>
          <span className="inline-flex items-center rounded-sm bg-black dark:bg-white text-xs text-white dark:text-black lowercase px-1 ml-2">
            typescript
          </span>
          <span className="inline-flex items-center rounded-sm bg-black dark:bg-white text-xs text-white dark:text-black lowercase px-1 ml-1">
            javascript
          </span>
          <p className="text-sm">
            several system that host on linode, heroku and vercel. develop
            chrome extension to crawl the data and export to excel. tech stack
            react as frontend, node/express as backend and postgresql as
            database.
          </p>
        </li>
        <li key="wishywashy">
          <a className="text-slate-600">wishywashy</a>
          <span className="inline-flex items-center rounded-sm bg-black dark:bg-white text-xs text-white dark:text-black lowercase px-1 ml-2">
            typescript
          </span>
          <span className="inline-flex items-center rounded-sm bg-black dark:bg-white text-xs text-white dark:text-black lowercase px-1 ml-1">
            javascript
          </span>
          <p className="text-sm">
            laundry system that host on linode (previously heroku) with fully
            responsive. tech stack react as frontend, node/express as backend
            and postgresql as database.
          </p>
        </li>
      </ul>

      <h1 className="font-semibold text-2xl underline underline-offset-4 my-8 tracking-tighter">
        github projects
      </h1>
      <ul className="list-outside list-disc">
        {repos
          .sort((a: any, b: any) => {
            let date1: any = new Date(a.pushed_at);
            let date2: any = new Date(b.pushed_at);
            return date2 - date1;
          })
          .map((repo: any) => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                className="text-blue-600 hover:font-semibold"
              >
                {repo.name}
              </a>
              <span className="inline-flex items-center rounded-sm bg-black dark:bg-white text-xs text-white dark:text-black lowercase px-1 ml-2">
                {repo.language}
              </span>
              <p className="text-sm">{repo.description}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}
