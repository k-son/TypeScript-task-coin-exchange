import {Exchanger} from "./Exchanger";

initEventListener();

function initEventListener() {
  const btn: HTMLElement | null = document.getElementById("exchange");
  const resultText: HTMLElement | null = document.getElementById("result");

  const getInputNumberValue = (id: string): number => {
    const element: HTMLElement | null = document.getElementById(id);
  
    if (element != null && element instanceof HTMLInputElement) {
      return element.valueAsNumber;
    } else {
      throw new Error(`HTML element is null or wrong.`);
    }
  }

  if (btn !== null) {
    if (btn instanceof HTMLButtonElement) {
      btn.addEventListener<"click">("click", (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const ex: Exchanger = new Exchanger(
          getInputNumberValue("gold"), 
          getInputNumberValue("silver"), 
          getInputNumberValue("copper"));
        if (resultText !== null) {
          resultText.innerText = `Total: ${ex.toCopper()} copper coins`;
        }
      });
    } else {
      throw new Error("HTML element for exchange is not a button.");
    }
  } else {
    throw new Error("Button for exchange not found.");
  }
}