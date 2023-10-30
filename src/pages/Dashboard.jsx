// rrd imports
import { useLoaderData } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// components
import Intro from "../components/Intro";
import AddPostForm from "../components/AddPostForm";

import PostItem from "../components/PostItem";

//  helper functions
import { createItem, fetchData, waait } from "../helpers";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const news = fetchData("news");

  return { userName, news };
}

// action
export async function dashboardAction({ request }) {
  await waait();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error("There was a problem creating your account.");
    }
  }

  if (_action === "createItem") {
    try {
      createItem({
        title: values.title,
        text: values.shortDescription,
        content: values.content,
        category: values.category,
        image: "https://placehold.co/400x300",
      });
      return toast.success("Post created!");
    } catch (e) {
      console.log(e);
      throw new Error("There was a problem creating your post.");
    }
  }
}

const Dashboard = () => {
  const { userName, news } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {news && news.length > 0 ? (
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddPostForm />
                </div>
                <h2>Conteúdos criados</h2>
                <div className="news">
                  {news.map((item) => (
                    <PostItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid-sm">
                <p>
                  Personal topics on a platform you can share with total
                  freedom.
                </p>
                <p>Create a post to get started!</p>
                <AddPostForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};
export default Dashboard;
