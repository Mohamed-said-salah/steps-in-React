import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    let [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <StepsClosingButton setIsOpen={setIsOpen} />
            {isOpen && <StepsCard />}
        </>
    );
}

//  <-- Steps Closing Button --/>

function StepsClosingButton({ setIsOpen }) {
    return (
        <button
            className="close"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
            &times;
        </button>
    );
}

//  <-- Steps Card --/>

function StepsCard() {
    let [step, setStep] = useState(1);

    return (
        <div className="steps">
            <NumbersRow step={step} />

            <StepMessage step={step}>{messages[step - 1]}</StepMessage>

            <StepsButtons step={step} setStep={setStep} />
        </div>
    );
}

//  <-- Numbers Row --/>

function NumbersRow({ step }) {
    return (
        <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
    );
}

//  <-- Steps Message --/>

function StepMessage({ step, children }) {
    return (
        <div className="message">
            <h3>Step {step}</h3>
            {children}
        </div>
    );
}

//  <-- Steps Buttons --/>

function StepsButtons({ step, setStep }) {
    let buttonStyle = { backgroundColor: "#7950f2", color: "#fff" };

    return (
        <div className="buttons">
            <Button
                textColor={buttonStyle.color}
                bgColor={buttonStyle.backgroundColor}
                onClick={() => step > 1 && setStep((step) => step - 1)}
                text="Previous"
                emoji="👈"
            >
                👈 Previous
            </Button>

            <Button
                textColor={buttonStyle.color}
                bgColor={buttonStyle.backgroundColor}
                onClick={() => step < 3 && setStep((step) => step + 1)}
                text={""}
                emoji="👉"
            >
                Next 👉🤓
            </Button>
        </div>
    );
}

function Button({ textColor, bgColor, onClick, children }) {
    return (
        <button
            className="button"
            style={{ color: textColor, backgroundColor: bgColor }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
