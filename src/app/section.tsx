export default function Section(props: unknown) {
  return (
    <section className="flex flex-col gap-8">
      <h4 className="text-2xl font-bold">{props?.sectionName}</h4>
      <p className="text-lg">
        {props?.sectionDescription}
      </p>
    </section>
  );
}
