const discountPercent = 10; // Change this to your sale discount

document.querySelectorAll(".device-price").forEach((priceElement) => {
  const match = priceElement.textContent.match(/\$([\d,]+)/);

  // Skip entries without a dollar price, such as "Contact for price"
  if (!match) return;

  const originalPrice = Number(match[1].replaceAll(",", ""));
  const salePrice = Math.round(originalPrice * (1 - discountPercent / 100));
  const label = priceElement.querySelector("span")?.textContent ?? "";

  priceElement.replaceChildren();

  if (label) {
    const labelElement = document.createElement("span");
    labelElement.textContent = `${label} `;
    priceElement.append(labelElement);
  }

  const oldPrice = document.createElement("del");
  oldPrice.className = "original-price";
  oldPrice.textContent = `$${originalPrice.toLocaleString("en-CA")}`;

  const newPrice = document.createElement("span");
  newPrice.className = "sale-price";
  newPrice.textContent = `$${salePrice.toLocaleString("en-CA")}`;

  priceElement.append(oldPrice, " ", newPrice);
});
