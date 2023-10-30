import { Form } from "react-router-dom";

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="*****"
            autoComplete="password"
          />

          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
    </div>
  );
};
export default Intro;
