export default function decorate(block) {
  const div = document.createElement("div");
  block.textContent = "Test2";
  block.append(div);
}
