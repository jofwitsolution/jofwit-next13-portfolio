const AboutForm = () => {
  return (
    <form>
      <div className="mb-6">
        <label htmlFor="title" className="inline-block">Title</label>
        <input type="text" id="title" className="form_input" />
      </div>
      <div className="mb-6">
        <label htmlFor="desc" className="inline-block">Description</label>
        <input type="text" id="desc" className="form_input" />
      </div>
    </form>
  );
};

export default AboutForm;
