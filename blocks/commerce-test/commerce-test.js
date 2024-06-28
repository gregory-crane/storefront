export default function decorate(block) {
  const div = document.createElement("div");
  block.append(div);
}
