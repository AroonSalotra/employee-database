import IconLink from "./IconLink";

const Home = () => {

    const employeeList = [
        { linkTo: "holidays" },
        { linkTo: "social" },
        { linkTo: "payslips" }
    ]

    return (
        <section>
            <h2>[COMPANY NAME] Home Page</h2>

            <h3 className="title">Manager Access</h3>

            <div className="flex py-2">
                <IconLink linkTo={"manager"} />
            </div>

            <h3 className="title">Employee Portal</h3>
            <div className="flex gap-24 py-2">
                {employeeList.map(({ linkTo }) => {
                    return <IconLink linkTo={linkTo} />
                })}
            </div>

        </section>
    );
}

export default Home;