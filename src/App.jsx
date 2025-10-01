import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className="accordion">
          <Accordion.item
            id="experience"
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can't go wrong with us.</p>
              <p>
                we are in the business of planning highly customized vaccation
                trips for more than 20 years.
              </p>
            </article>
          </Accordion.item>
          <Accordion.item
            id="local-guides"
            className="accordion-item"
            title="We are working with local guides."
          >
            <article>
              <p>we are not doing it alone from our office.</p>
              <p>
                Instead we are working with local guides who know the area like
                the back of their hand.
              </p>
            </article>
          </Accordion.item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
