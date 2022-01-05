import { useSelector } from "react-redux";

import Breadcrumb from "../components/Breadcrumb";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import { ReduxState, TodoItem as TodoInteface } from "../interfaces";

const Home = () => {
  const { todoList } = useSelector((store: ReduxState) => store.tasks);

  const todos = todoList.filter((item: TodoInteface) => item.status === "todo");
  const inprogress = todoList.filter(
    (item: TodoInteface) => item.status === "inprogress"
  );
  const completed = todoList.filter(
    (item: TodoInteface) => item.status === "completed"
  );

  return (
    <>
      <Header />
      <Breadcrumb />
      <div className="main-wrapper">
        <div className="site-wrapper-reveal">
          <div className="accordion-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="faq-wrapper section-space--pt_90">
                    <div className="section-elements-title mb-30">
                      <h4>TO DO</h4>
                    </div>
                    <div id="accordion">
                      {todos.map((item: TodoInteface) => (
                        <TodoItem
                          title={item.title}
                          description={item.description}
                          id={item.id}
                          status={item.status}
                          statusUpdate="inprogress"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="faq-wrapper section-space--pt_90">
                    <div className="section-elements-title mb-30">
                      <h4>IN PROGRESS</h4>
                    </div>
                    <div id="accordion">
                      {inprogress.map((item: TodoInteface) => (
                        <TodoItem
                          title={item.title}
                          description={item.description}
                          id={item.id}
                          status={item.status}
                          statusUpdate="completed"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="faq-wrapper section-space--pt_90">
                    <div className="section-elements-title mb-30">
                      <h4>DONE</h4>
                    </div>
                    <div id="accordion">
                      {completed.map((item: TodoInteface) => (
                        <TodoItem
                          title={item.title}
                          description={item.description}
                          id={item.id}
                          status={item.status}
                          statusUpdate="completed"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
