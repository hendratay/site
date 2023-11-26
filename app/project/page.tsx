export default async function Project() {
  let res = await fetch("https://api.github.com/users/hendratay/repos");
  let repos = await res.json();

  return (
    <section>
      <h1 className="font-semibold text-2xl underline underline-offset-4 mb-8 tracking-tighter">
        private projects
      </h1>
      <ul className="list-outside list-disc">
        <li key="wishywashy">
          <a className="text-blue-600 hover:font-semibold">wishywashy</a>
          <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 ml-2">
            typescript
          </span>
          <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 ml-1">
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
              <span className="inline-flex items-center rounded-sm bg-black text-xs text-white lowercase px-1 ml-2">
                {repo.language}
              </span>
              <p className="text-sm">{repo.description}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}
