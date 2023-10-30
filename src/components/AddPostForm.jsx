// reacts
import { useEffect, useRef } from "react";

// rrd imports
import { useFetcher } from "react-router-dom";

const colors = [
  { value: "engineering", text: "Engineering" },
  { value: "marketing", text: "Marketing" },
  { value: "design", text: "Design" },
];

const AddPostForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  console.log(formRef);

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create post</h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="image">Image</label>
          <img name="image" id="image" src="https://placehold.co/500x300" />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="title"
            required
            ref={focusRef}
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="shortDescription">Short description</label>
          <textarea
            name="shortDescription"
            id="shortDescription"
            placeholder="your message"
            required
            rows="4"
            cols="50"
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            placeholder="your message"
            required
            rows="4"
            cols="100"
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" required>
            {colors.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>
        <input type="hidden" name="_action" value="createItem" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting…</span>
          ) : (
            <>
              <span>Submit</span>
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};
export default AddPostForm;
