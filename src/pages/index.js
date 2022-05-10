import { Modules } from "../utils/module-list";
import { getPage } from "../hooks/getPages";
import { getOptions } from "../hooks/getOptions";

export default function Home({ page }) {
  return (
    <>
      <main id="home">
        {page[0].acf?.modules &&
          page[0].acf.modules.map((module, index) => (
            <Modules key={index} module={module} />
          ))}
      </main>
      {console.log(page[0].acf.modules)}
    </>
  );
}

export async function getStaticProps() {
  // Gets page data from API and returns it as props to the Home component
  const page = await getPage("home");
  const options = await getOptions();
  // console.log(page[0].acf.modules[0].warnings[0].icon.ID);
  // console.log(page[0].acf.modules[5].images);

  return {
    props: {
      page,
      options,
    },
    revalidate: 120, // In seconds
  };
}
