initEventListener();

function initEventListener() {
  const btn: HTMLElement | null = document.getElementById("exchange");

  if (btn !== null) {
    if (btn instanceof HTMLButtonElement) {
      btn.addEventListener<"click">("click", (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        getGold();
        getSilver();
        getCopper();
      });
    } else {
      throw new Error("HTML element for exchange is not a button.");
    }
  } else {
    throw new Error("Button for exchange not found.");
  }
}

function getCopper(): number {
  const copper: HTMLElement | null = document.getElementById("copper");
  
  if (copper != null && copper instanceof HTMLInputElement) {
    return copper.valueAsNumber;
  } else {
    throw new Error(`HTML element is null or wrong.`);
  }
}

function getSilver(): number {
  const silver: HTMLElement | null = document.getElementById("silver");

  if (silver != null && silver instanceof HTMLInputElement) {
    return silver.valueAsNumber;
  } else {
    throw new Error(`HTML element is null or wrong.`);
  }
}

function getGold(): number {
  const gold: HTMLElement | null = document.getElementById("gold");

  if (gold != null && gold instanceof HTMLInputElement) {
    return gold.valueAsNumber;
  } else {
    throw new Error(`HTML element is null or wrong.`);
  }
}

