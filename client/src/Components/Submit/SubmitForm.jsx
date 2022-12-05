import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./submitform.css";

function SubmitForm() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="main-part">
        <h1 className="header-title">What else ya got?</h1>
        <h3>What other Shoujos (or others) you think people would judge wrong by the cover?</h3>
        <div class="question-card final-score func-button">
          <form>
            <label name="Title">Title:</label>
            <br></br>
            <input type={"text"}></input>
            <br></br>
            <input type={"checkbox"}></input>
          </form>
          <button>Admin</button>
        </div>
      </main>
      <Footer />
    </div>
  )
};

export default SubmitForm;