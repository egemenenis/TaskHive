import Header from "../Header";
import { Link } from "react-router-dom";
import faker from "faker";
import { generateGuid } from "easy-guid-generator";

function Dashboard({ customers, customersState, tasks, tasksState}) {

    const onClickFakeCustomers = () => {

        console.log("onClickFakeCustomers");
        if(customers.length === 0) {
            const list = [];

            for (let i = 0; i < 5; i++) {
                list.push({
                    id: generateGuid(false),
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    phone: faker.phone.phoneNumber(),
                    email: faker.internet.email()
                }); 
            }

            customersState([...customers, ...list]);   
        }
    };

    const onClickFakeTasks = () => {
        if(tasks.length === 0) {
            const list = [];

            for (let i = 0; i < 30; i++) {
                list.push({
                    id: generateGuid(false),
                    summary: faker.lorem.sentence(3),
                    description: faker.lorem.sentence(8),
                    customerid: faker.random.arrayElement(customers).id,
                  });
            }

            tasksState([...tasks, ...list]);
        }
    }


    return (
        <>
            <Header title="Dashboard" />

            <div className="row">
                <div className="offset-1 col-4">
                    <div className="card">
                        <img src="https://picsum.photos/150/75" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Customers</h5>
                            <p className="card-text">
                            Number of customers currently in the system: <Link to="/customers">{customers.length}</Link>
                            </p>
                            <div className="text-center">
                                <button className="btn btn-primary btn-sm" onClick={onClickFakeCustomers}>Generate Fake Data</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="offset-1 col-4">
                <div className="card">
                        <img src="https://picsum.photos/id/1062/150/75" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tasks</h5>
                            <p className="card-text">
                            Number of tasks currently in the system: <Link to="/tasks">{tasks.length}</Link>
                            </p>
                            <div className="text-center">
                                <button className="btn btn-primary btn-sm" onClick={onClickFakeTasks}>Generate Fake Data</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;