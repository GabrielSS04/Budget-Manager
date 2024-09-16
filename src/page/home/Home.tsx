import "./style.css";
import budget from "../../budget.png";
import person from "../../person.png";
import organize from "../../organize.png";

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1>Welcome to a Web Budget Manager</h1>
        <p>
          Take control of your finances with Personal Budget Manager{" "}
          <strong>Simple</strong>, <strong>Smart</strong>, and{" "}
          <strong>Efficient</strong>!
        </p>
      </div>

      <div className="flex-aling-justify">
        <h1 className="about-project">About the project</h1>
        <p className="text-products">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime
          placeat voluptates ea earum quam odit qui ad? Beatae, possimus impedit
          dignissimos illo consectetur alias animi officia ab at cum.
        </p>
        <div className="cards">
          <div className="content1 card">
            <img src={budget} alt="" className="icon" />
            <p>
              This is a simple and practical tool for organizing your personal
              finances. With this platform, you can easily track your income and
              expenses, helping you stay in control of your monthly budget. By
              adding your earnings, such as salary or freelance work, and
              logging your expenses, like rent, bills, or shopping, you can
              monitor your financial situation in a straightforward way. You
              will have the ability to add, edit, or remove any entry as needed.
            </p>
          </div>
          <div className="content2 card">
            <img src={person} alt="" className="icon" />
            <p>
              On the <strong>Dashboard</strong>, you will find a complete
              overview of your financial life. It not only displays the total of
              your income and expenses but also provides detailed charts to help
              you visualize where your money is going and understand the overall
              health of your balance. The goal is to offer a clear and
              easy-to-understand snapshot of your finances, making it easier for
              you to manage your money.
            </p>
          </div>
          <div className="content3 card">
            <img src={organize} alt="" className="icon" />
            <p>
              To access your personal budget manager, simply log in using your
              Google account or by creating an account with your email and
              password. This process is fast and secure, ensuring that only you
              can view your financial information. We hope this platform helps
              you gain better control over your finances and achieve your
              financial goals with ease.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
