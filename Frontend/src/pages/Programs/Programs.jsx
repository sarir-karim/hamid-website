import { Helmet } from "react-helmet-async";
import Top from "../../components/Top";

export default function Programs() {
  return (
    <>
      <Helmet>
        <title>Programs - Mountain Soul Adventure</title>
        <meta
          name="description"
          content="Explore our specialized programs and itineraries across Pakistan."
        />
      </Helmet>

      <Top title="Our Programs" />
      
      <section className="py-16 bg-white" aria-label="Programs">
      
      </section>
    </>
  );
}
