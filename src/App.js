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

function StepsCard() {
    let [step, setStep] = useState(1);

    return (
        <div className="steps">
            <NumbersRow step={step} />

            <StepMessage step={step} />

            <StepsButtons step={step} setStep={setStep} />
        </div>
    );
}

function NumbersRow({ step }) {
    return (
        <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
    );
}

function StepMessage({ step }) {
    return (
        <p className="message">
            Step {step}: {messages[step - 1]}
        </p>
    );
}

function StepsButtons({ step, setStep }) {
    let buttonStyle = { backgroundColor: "#7950f2", color: "#fff" };

    return (
        <div className="buttons">
            <PreviousButton
                buttonStyle={buttonStyle}
                step={step}
                setStep={setStep}
            />

            <NextButton
                buttonStyle={buttonStyle}
                step={step}
                setStep={setStep}
            />
        </div>
    );
}

function PreviousButton({ buttonStyle, step, setStep }) {
    return (
        <button
            className="button"
            style={buttonStyle}
            onClick={() => step > 1 && setStep((step) => step - 1)}
        >
            Previous
        </button>
    );
}

function NextButton({ buttonStyle, step, setStep }) {
    return (
        <button
            className="button"
            style={buttonStyle}
            onClick={() => step < 3 && setStep((step) => step + 1)}
        >
            Next
        </button>
    );
}
