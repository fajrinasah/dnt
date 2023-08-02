import "./styles.css";

export default function GuidesSelectMultiple() {
  return (
    <details className="guides-dropdown">
      <summary>Guides on how to select multiple categories</summary>

      <details>
        <summary>Guides for mouse users</summary>
        <p>
          Mouse users can hold the <span className="text-button">Ctrl</span>,{" "}
          <span className="text-button">Command</span>, or{" "}
          <span className="text-button">Shift</span> keys (depending on what
          makes sense for your operating system) and then click multiple options
          to select/deselect them.
        </p>
      </details>

      <details>
        <summary>Guides for keyboard users</summary>

        <details>
          <summary>Select multiple contiguous items by:</summary>
          <ul>
            <li>
              Focusing on the category option (e.g. using{" "}
              <span className="text-button">Tab</span> ).
            </li>
            <li>
              Selecting an item at the top or bottom of the range you want to
              select using the <span className="text-button">Up</span> and{" "}
              <span className="text-button">Down</span> cursor keys to go up and
              down the options.
            </li>
            <li>
              Holding down the <span className="text-button">Shift</span> key
              and then using the <span className="text-button">Up</span> and{" "}
              <span className="text-button">Down</span> cursor keys to increase
              or decrease the range of items selected.
            </li>
          </ul>
        </details>

        <details>
          <summary>Select multiple non-contiguous items by:</summary>
          <ul>
            <li>
              Focusing on the category option (e.g. using{" "}
              <span className="text-button">Tab</span> ).
            </li>
            <li>
              Holding down the <span className="text-button">Ctrl</span> key
              then using the <span className="text-button">Up</span> and
              <span className="text-button">Down</span> cursor keys to change
              the "focused" select option, i.e. the one that will be selected if
              you choose to do so. The "focused" select option is highlighted
              with a dotted outline, in the same way as a keyboard-focused link.
            </li>
            <li>
              Pressing <span className="text-button">Space</span> to
              select/deselect "focused" select options.
            </li>
          </ul>
        </details>
      </details>
    </details>
  );
}
